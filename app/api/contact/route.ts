import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const defaultContactTo = "contact@avsmartech.com";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  website?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    if (clean(body.website)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name);
    const company = clean(body.company);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const service = clean(body.service);
    const message = clean(body.message);

    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "Faltan las credenciales SMTP del servidor." },
        { status: 500 }
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT ?? 465);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: smtpPort,
      secure: process.env.SMTP_SECURE
        ? process.env.SMTP_SECURE === "true"
        : smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const rows = [
      ["Nombre", name],
      ["Empresa", company],
      ["Email", email],
      ["Teléfono", phone || "No indicado"],
      ["Servicio de interés", service || "No indicado"],
      ["Mensaje", message]
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;color:#07152D;line-height:1.6">
        <h1 style="margin:0 0 16px;color:#001B3F">Nueva solicitud de diagnóstico</h1>
        <p style="margin:0 0 24px;color:#5B6472">Formulario recibido desde la web de AV SmartTech.</p>
        <table style="border-collapse:collapse;width:100%;max-width:680px">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="border:1px solid #E5EAF3;padding:12px;font-weight:700;background:#F4F8FF">${escapeHtml(label)}</td>
                  <td style="border:1px solid #E5EAF3;padding:12px">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
                </tr>
              `
            )
            .join("")}
        </table>
      </div>
    `;

    const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? `"AV SmartTech" <${smtpUser}>`,
      to: process.env.CONTACT_TO ?? defaultContactTo,
      replyTo: email,
      subject: `Nueva solicitud de diagnóstico - ${name}`,
      text,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { error: "No se pudo enviar el formulario. Inténtalo de nuevo." },
      { status: 500 }
    );
  }
}
