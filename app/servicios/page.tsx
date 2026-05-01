import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCards } from "@/components/shared/ServiceCards";
import { serviceGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios de marketing digital, diseño web y automatización",
  description:
    "Servicios de marketing digital, diseño web, SEO local, automatización e inteligencia artificial para empresas que quieren captar clientes y ahorrar tiempo.",
  openGraph: {
    title: "Servicios de marketing digital, diseño web y automatización | AV Smartech",
    description:
      "Marketing digital, diseño web, SEO local y automatización para captar clientes, ahorrar tiempo y mejorar el control del negocio.",
    url: "/servicios"
  }
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Servicios para conseguir más clientes y optimizar tu negocio."
        description="Combinamos marketing digital, diseño web, SEO local, automatización e inteligencia artificial para que tu presencia online genere demanda y tus procesos internos funcionen con menos trabajo manual."
        points={["Marketing digital", "Diseño web", "SEO local", "Automatización operativa"]}
        ctaLabel="Solicitar diagnóstico gratuito"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ServiceCards items={serviceGroups} />
        </div>
      </section>

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-electric">Servicios locales</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
              Empieza por captar mejor o por una web que convierta.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/marketing-digital-valencia"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
            >
              Quiero más clientes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/diseno-web-valencia"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 text-sm font-semibold text-navy transition hover:-translate-y-0.5 hover:border-cyan/50"
            >
              Ver diseño web
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Tecnología útil, prioridades claras y foco en resultados."
        description="Analizamos tu situación actual y te mostramos dónde puedes ganar clientes, ahorrar horas y reducir costes operativos."
        buttonLabel="Hablemos de tu negocio"
      />
    </>
  );
}
