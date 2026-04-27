import type { Metadata } from "next";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BenefitBlocks } from "@/components/home/BenefitBlocks";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CTASection } from "@/components/shared/CTASection";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ServiceCards, type ServiceCardItem } from "@/components/shared/ServiceCards";

export const metadata: Metadata = {
  title: {
    absolute: "AV SmartTech | Soluciones digitales inteligentes"
  },
  description:
    "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
  openGraph: {
    title: "AV SmartTech | Soluciones digitales inteligentes",
    description:
      "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
    url: "/"
  }
};

const serviceHighlights: ServiceCardItem[] = [
  {
    title: "Digitalización de negocios",
    outcome: "Más visibilidad. Más confianza. Más ventas.",
    description:
      "Creamos una presencia digital orientada a conversión: web profesional, SEO local, mapas, redes, vídeo, email marketing y funnels de captación.",
    icon: "globe",
    href: "/digitalizacion-negocios",
    points: ["Web y marca online", "SEO local y perfiles en mapas", "Captación y contenido"]
  },
  {
    title: "Automatización con IA",
    outcome: "Menos costes. Más velocidad. Más margen.",
    description:
      "Diseñamos flujos inteligentes para ventas, administración, atención al cliente, reportes, dashboards e integraciones entre herramientas.",
    icon: "workflow",
    href: "/automatizacion-ia",
    points: ["Flujos automáticos", "IA operativa", "Datos conectados"]
  }
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AV SmartTech",
  url: "https://avsmartech.com",
  description:
    "Digitalización, automatización e inteligencia artificial para empresas que quieren vender más y reducir costes.",
  areaServed: "España",
  serviceType: [
    "Digitalización de negocios",
    "Automatización de procesos con IA",
    "SEO local",
    "Desarrollo web corporativo",
    "Integraciones y dashboards"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <ProblemSection />
      <BenefitBlocks />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Servicios principales"
            title="Digitalización para vender más. Automatización para operar mejor."
            description="Unimos presencia digital, captación, procesos e inteligencia artificial para que tu negocio funcione con menos fricción y más control."
          />
          <div className="mt-12">
            <ServiceCards items={serviceHighlights} compact />
          </div>
        </div>
      </section>
      <BeforeAfterSection />
      <CTASection />
    </>
  );
}
