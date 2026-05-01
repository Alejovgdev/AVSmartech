"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

const services = [
  "Marketing digital",
  "Diseño web",
  "SEO local y mapas",
  "Automatización con IA",
  "Dashboards e integraciones",
  "Diagnóstico gratuito"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          message: formData.get("message"),
          website: formData.get("website")
        })
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "No se pudo enviar el formulario.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Solicitud enviada. Revisaremos tu caso y te contactaremos pronto.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el formulario. Inténtalo de nuevo."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-lg border border-slate-200 bg-white p-5 shadow-premium sm:p-7"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Nombre
          <input
            required
            name="name"
            autoComplete="name"
            className="focus-ring rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Empresa
          <input
            required
            name="company"
            autoComplete="organization"
            className="focus-ring rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
            placeholder="Nombre de la empresa"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="focus-ring rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
            placeholder="correo@empresa.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Teléfono
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="focus-ring rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
            placeholder="+34 600 000 000"
          />
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Servicio de interés
        <select
          required
          name="service"
          className="focus-ring rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-navy">
        Mensaje
        <textarea
          required
          name="message"
          rows={5}
          className="focus-ring resize-none rounded-lg border border-slate-200 bg-soft px-4 py-3 text-base font-normal text-ink transition focus:bg-white"
          placeholder="Cuéntanos qué quieres mejorar: ventas, tiempo, costes, procesos o datos."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Enviando solicitud..." : "Solicitar diagnóstico gratuito"}
        <Send className="h-4 w-4" />
      </button>

      {feedback && (
        <p
          aria-live="polite"
          className={`rounded-lg px-4 py-3 text-sm font-semibold ${
            status === "error" ? "bg-red-50 text-red-700" : "bg-soft text-electric"
          }`}
        >
          {feedback}
        </p>
      )}
    </form>
  );
}
