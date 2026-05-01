import type { Metadata } from "next";
import { Clock3, Mail, Phone, ShieldCheck, TrendingUp } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita un diagnóstico gratuito para detectar oportunidades reales de digitalización, automatización, ahorro de costes y captación de clientes.",
  openGraph: {
    title: "Contacto | AV SmartTech",
    description:
      "Te mostraremos oportunidades reales para vender más y reducir costes.",
    url: "/contacto"
  }
};

const sidePoints = [
  {
    title: "Ventas",
    description: "Detectamos fricciones que impiden captar o convertir más clientes.",
    icon: TrendingUp
  },
  {
    title: "Tiempo",
    description: "Localizamos tareas repetitivas que pueden automatizarse con criterio.",
    icon: Clock3
  },
  {
    title: "Control",
    description: "Revisamos datos, herramientas y procesos para mejorar visibilidad.",
    icon: ShieldCheck
  }
];

const contactMethods = [
  {
    label: "Teléfono",
    value: contactInfo.phoneLabel,
    href: `tel:${contactInfo.phone}`,
    icon: Phone
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    icon: Mail
  }
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Solicita un diagnóstico gratuito para tu negocio."
        description="Cuéntanos qué quieres mejorar y te mostraremos oportunidades reales para conseguir más clientes, ahorrar tiempo y reducir costes. Sin humo, sin presión y con prioridades claras."
        points={["Más clientes", "Menos tareas manuales", "Más margen", "Más control"]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">Qué revisamos</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Tecnología que debe notarse en ventas, tiempo y costes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Analizamos tu presencia digital, tus procesos internos y tus herramientas actuales para detectar mejoras concretas. El objetivo es simple: tu negocio funcionando con menos fricción y más control.
            </p>

            <div className="mt-8 grid gap-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;

                return (
                  <a
                    key={method.href}
                    href={method.href}
                    className="focus-ring group flex gap-4 rounded-lg border border-cyan/25 bg-soft p-5 transition hover:-translate-y-0.5 hover:border-cyan/50 hover:bg-white hover:shadow-soft"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white text-electric shadow-soft transition group-hover:bg-electric group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">{method.label}</h3>
                      <p className="mt-1 break-all text-sm font-semibold leading-6 text-electric">
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 grid gap-4">
              {sidePoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="flex gap-4 rounded-lg border border-slate-200 bg-soft p-5">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white text-electric shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">{point.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
