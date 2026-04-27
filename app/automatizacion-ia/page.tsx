import type { Metadata } from "next";
import { CheckCircle2, XCircle } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ServiceCards, type ServiceCardItem } from "@/components/shared/ServiceCards";
import { getBrandAssets } from "@/lib/public-assets";

export const metadata: Metadata = {
  title: "Automatización con IA",
  description:
    "Automatización administrativa, CRM automático, seguimiento comercial, facturación, bots IA, dashboards, integraciones, reportes y predicciones.",
  openGraph: {
    title: "Automatización con IA | AV SmartTech",
    description:
      "Convierte tareas repetitivas en sistemas inteligentes para ahorrar costes, ganar velocidad y mejorar márgenes.",
    url: "/automatizacion-ia"
  }
};

const automationServices: ServiceCardItem[] = [
  {
    title: "Administración automatizada",
    description:
      "Reducimos tareas manuales en documentación, aprobaciones, avisos y control operativo diario.",
    outcome: "Menos fricción interna.",
    icon: "workflow",
    points: ["Tareas repetitivas", "Procesos administrativos", "Alertas"]
  },
  {
    title: "CRM y ventas",
    description:
      "Organizamos leads, respuestas, seguimientos y oportunidades para que ninguna venta dependa de la memoria.",
    outcome: "Menos leads perdidos.",
    icon: "target",
    points: ["CRM automático", "Seguimiento comercial", "Gestión de leads"]
  },
  {
    title: "Facturación y reportes",
    description:
      "Automatizamos facturación, reportes periódicos y dashboards para tener visibilidad real del negocio.",
    outcome: "Más control financiero.",
    icon: "chart",
    points: ["Facturación", "Dashboards", "Reportes automáticos"]
  },
  {
    title: "Bots IA e integraciones",
    description:
      "Conectamos herramientas y creamos asistentes de IA para atención, contenido, datos y soporte interno.",
    outcome: "IA operativa, no decorativa.",
    icon: "bot",
    points: ["Atención al cliente con IA", "Integraciones", "Predicciones"]
  }
];

export default function AutomatizacionPage() {
  const assets = getBrandAssets();

  return (
    <>
      <PageHero
        eyebrow="Automatización con IA"
        title="Convierte tareas repetitivas en sistemas inteligentes."
        description="Diseñamos automatizaciones para ventas, RRHH, logística, finanzas e informática. Menos trabajo manual, mejores datos y procesos preparados para escalar."
        imageSrc={assets.office}
        imageAlt="Empresa moderna trabajando con sistemas digitales"
        points={["CRM automático", "Bots IA", "Dashboards", "Integraciones"]}
        ctaLabel="Quiero ahorrar costes"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Qué automatizamos"
            title="Procesos internos con menos tareas manuales y más margen."
            description="La automatización buena no añade complejidad: elimina esperas, reduce errores y permite que el equipo trabaje con más foco."
          />
          <div className="mt-12">
            <ServiceCards items={automationServices} compact />
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-lg border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase text-muted">Antes</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-navy">
                10 personas para tareas lentas
              </h2>
              <ul className="mt-7 grid gap-4">
                {["Copiar datos entre herramientas", "Responder lo mismo cada día", "Preparar reportes a mano", "Buscar información dispersa"].map((item) => (
                  <li key={item} className="flex gap-3 text-muted">
                    <XCircle className="mt-0.5 h-5 w-5 flex-none text-muted" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border border-cyan/30 bg-navy p-8 text-white shadow-glow">
              <p className="text-sm font-semibold uppercase text-cyan">Después</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">
                3 personas con sistemas escalables
              </h2>
              <ul className="mt-7 grid gap-4">
                {["Flujos automáticos de trabajo", "Datos conectados y visibles", "Atención y seguimiento con IA", "Reportes listos para decidir"].map((item) => (
                  <li key={item} className="flex gap-3 text-white/82">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <CTASection
        title="Reduce costes sin frenar el crecimiento."
        description="Detectamos tareas automatizables, priorizamos por impacto y construimos sistemas que liberan horas desde el primer tramo."
        buttonLabel="Quiero ahorrar costes"
      />
    </>
  );
}
