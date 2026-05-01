import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ServiceCards, type ServiceCardItem } from "@/components/shared/ServiceCards";

export const metadata: Metadata = {
  title: "Digitalización de negocios",
  description:
    "Web corporativa, SEO local, Google Business, Apple Maps, redes sociales, vídeo, email marketing y funnels para conseguir más clientes.",
  openGraph: {
    title: "Digitalización de negocios | AV SmartTech",
    description:
      "Haz que te encuentren, confíen en ti y te compren con presencia digital orientada a conversión.",
    url: "/digitalizacion-negocios"
  }
};

const digitalServices: ServiceCardItem[] = [
  {
    title: "Web corporativa",
    description:
      "Una web profesional con narrativa comercial, estructura SEO y experiencia pensada para convertir visitas en solicitudes.",
    outcome: "Tu mejor vendedor digital.",
    icon: "globe",
    points: ["Diseño premium", "Mensajes claros", "Conversión"]
  },
  {
    title: "SEO y mapas",
    description:
      "Optimizamos tu presencia local en buscadores, Google Business Profile y Apple Maps para aparecer cuando hay intención real de compra.",
    outcome: "Más clientes cerca de ti.",
    icon: "map",
    points: ["SEO local", "Google Business", "Apple Business Connect"]
  },
  {
    title: "Redes y vídeo",
    description:
      "Creamos contenido que sostiene confianza, autoridad y consistencia sin convertir tus redes en una carga operativa.",
    outcome: "Más credibilidad antes de vender.",
    icon: "play",
    points: ["Grabación", "Edición", "Calendario de contenido"]
  },
  {
    title: "Email y funnels",
    description:
      "Diseñamos recorridos para captar, nutrir y convertir oportunidades con menos dependencia de acciones improvisadas.",
    outcome: "Más oportunidades organizadas.",
    icon: "mail",
    points: ["Email marketing", "Funnels de captación", "Campañas digitales"]
  }
];

export default function DigitalizacionPage() {
  return (
    <>
      <PageHero
        eyebrow="Digitalización de negocios"
        title="Haz que te encuentren, confíen en ti y te contacten."
        description="Modernizamos tu presencia digital para que deje de ser un escaparate pasivo y se convierta en un sistema de captación: web clara, SEO local, mapas, contenido y llamadas a la acción."
        points={["Diseño web", "SEO local", "Google Business", "Marketing digital"]}
        ctaLabel="Quiero más clientes"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Qué implementamos"
            title="Presencia digital completa, pensada para generar demanda real."
            description="Cada activo digital debe resolver una parte del recorrido comercial: visibilidad, confianza, comparación, decisión y contacto."
          />
          <div className="mt-12">
            <ServiceCards items={digitalServices} compact />
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-3 lg:px-8">
          {["Visibilidad", "Confianza", "Conversión"].map((item, index) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft">
              <p className="text-sm font-semibold text-electric">0{index + 1}</p>
              <h2 className="mt-4 font-display text-2xl font-semibold text-navy">{item}</h2>
              <p className="mt-4 leading-7 text-muted">
                {item === "Visibilidad" &&
                  "Aparecer donde tus clientes buscan, con una propuesta clara y fácil de entender."}
                {item === "Confianza" &&
                  "Mostrar solidez, criterio y resultados para reducir dudas antes del primer contacto."}
                {item === "Conversión" &&
                  "Guiar a la persona correcta hacia una acción concreta: llamar, escribir o solicitar diagnóstico."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Link
            href="/marketing-digital-valencia"
            className="focus-ring group rounded-lg border border-slate-200 bg-soft p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white hover:shadow-premium"
          >
            <p className="text-sm font-semibold uppercase text-electric">SEO local</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy">
              Marketing digital
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Atrae clientes cercanos con una estrategia local de visibilidad, Google Business, contenido y conversión.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric group-hover:text-navy">
              Ver servicio
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="/diseno-web-valencia"
            className="focus-ring group rounded-lg border border-slate-200 bg-soft p-7 transition hover:-translate-y-1 hover:border-cyan/40 hover:bg-white hover:shadow-premium"
          >
            <p className="text-sm font-semibold uppercase text-electric">Web comercial</p>
            <h2 className="mt-4 font-display text-2xl font-semibold text-navy">
              Diseño web
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Convierte tu web en una herramienta de captación con estructura SEO, mensajes claros y CTAs visibles.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric group-hover:text-navy">
              Ver servicio
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      <CTASection
        title="Más clientes empiezan con una presencia digital que trabaja."
        description="Convertimos tu marca online en un sistema preparado para atraer, convencer y vender."
        buttonLabel="Quiero más clientes"
      />
    </>
  );
}
