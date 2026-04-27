import type { Metadata } from "next";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCards } from "@/components/shared/ServiceCards";
import { serviceGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servicios digitales inteligentes",
  description:
    "Servicios de digitalización, SEO local, captación online, automatización operativa, IA empresarial, integraciones y consultoría estratégica.",
  openGraph: {
    title: "Servicios digitales inteligentes | AV SmartTech",
    description:
      "Digitalización para vender más y automatización para operar mejor con tecnología útil para negocio real.",
    url: "/servicios"
  }
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Sistemas digitales para captar, operar y escalar con más control."
        description="No vendemos piezas sueltas. Diseñamos soluciones conectadas para que tu presencia digital genere demanda y tus procesos internos absorban el crecimiento sin disparar costes."
        points={["Web y branding digital", "SEO local", "Captación online", "Automatización operativa"]}
        ctaLabel="Solicitar diagnóstico"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <ServiceCards items={serviceGroups} />
        </div>
      </section>

      <CTASection
        title="Tecnología útil, prioridades claras y foco en resultados."
        description="Analizamos tu situación actual y te mostramos dónde puedes ganar clientes, ahorrar horas y reducir costes operativos."
      />
    </>
  );
}
