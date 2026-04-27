import type { Metadata } from "next";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectorCards } from "@/components/shared/SectorCards";

export const metadata: Metadata = {
  title: "Sectores",
  description:
    "Soluciones de digitalización y automatización para clínicas, restaurantes, inmobiliarias, gestorías, talleres, academias, comercios y empresas de servicios.",
  openGraph: {
    title: "Sectores | AV SmartTech",
    description:
      "Qué digitalizar, qué automatizar y qué mejora lograr según el tipo de negocio.",
    url: "/sectores"
  }
};

export default function SectoresPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectores"
        title="Cada negocio tiene fricciones distintas. El sistema debe adaptarse a ellas."
        description="Aplicamos digitalización y automatización con criterio sectorial: captación donde hay demanda, procesos donde hay repetición y datos donde falta control."
        points={["Captación local", "Procesos repetitivos", "Atención al cliente", "Datos operativos"]}
        ctaLabel="Ver oportunidades"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectorCards />
        </div>
      </section>

      <CTASection
        title="Tu sector ya tiene oportunidades digitales esperando."
        description="Te ayudamos a priorizar las que más impacto tienen en ventas, tiempo, costes y control."
      />
    </>
  );
}
