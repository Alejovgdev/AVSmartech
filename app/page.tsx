import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { BenefitBlocks } from "@/components/home/BenefitBlocks";
import { CaptureSystemFlow } from "@/components/home/CaptureSystemFlow";
import { Hero } from "@/components/home/Hero";
import { ProblemSolutionVisual } from "@/components/home/ProblemSolutionVisual";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CTASection } from "@/components/shared/CTASection";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ServiceCards, type ServiceCardItem } from "@/components/shared/ServiceCards";

export const metadata: Metadata = {
  title: {
    absolute: "Marketing Digital y Tecnología para Empresas | AV Smartech"
  },
  description:
    "Impulsa tu negocio con marketing digital, diseño web, SEO local, automatización e IA aplicada a ventas y procesos.",
  alternates: {
    canonical: "/"
  }
};

const serviceHighlights: ServiceCardItem[] = [
  {
    title: "Marketing digital",
    outcome: "Más visibilidad. Más contactos. Más ventas.",
    description:
      "Diseñamos una estrategia clara para que tu negocio aparezca donde tus clientes buscan, comunique mejor y convierta visitas en oportunidades.",
    icon: "target",
    href: "/marketing-digital-valencia",
    points: ["SEO local", "Google Business", "Captación online"]
  },
  {
    title: "Diseño web",
    outcome: "Una web preparada para captar clientes.",
    description:
      "Creamos webs rápidas, claras y orientadas a conversión para empresas, pymes y autónomos que quieren vender mejor desde internet.",
    icon: "globe",
    href: "/diseno-web-valencia",
    points: ["Mensaje comercial", "Estructura SEO", "CTAs claros"]
  },
  {
    title: "Digitalización de negocios",
    outcome: "Presencia digital con foco comercial.",
    description:
      "Unimos web profesional, SEO local, mapas, contenido y funnels para que tu negocio gane confianza y genere más contactos.",
    icon: "map",
    href: "/digitalizacion-negocios",
    points: ["Web y marca online", "SEO local", "Captación"]
  },
  {
    title: "Automatización con IA",
    outcome: "Menos tareas manuales. Más control.",
    description:
      "Automatizamos procesos de ventas, administración, atención al cliente y reportes para ahorrar tiempo y reducir costes.",
    icon: "workflow",
    href: "/automatizacion-ia",
    points: ["Flujos automáticos", "IA útil", "Datos conectados"]
  }
];

const trustPoints = [
  {
    title: "Enfoque en resultados",
    description:
      "No trabajamos para que la web solo se vea bien: la orientamos a conseguir clientes, solicitudes y oportunidades medibles."
  },
  {
    title: "Tecnología aplicada al negocio",
    description:
      "Usamos automatización e inteligencia artificial cuando ayuda a vender más, ahorrar tiempo o mejorar el control operativo."
  },
  {
    title: "Soluciones personalizadas",
    description:
      "Cada negocio tiene un punto de partida distinto. Priorizamos lo que puede generar impacto antes de añadir herramientas."
  },
  {
    title: "Cercanía y claridad",
    description:
      "Explicamos cada paso con lenguaje sencillo, foco comercial y decisiones que puedas entender antes de invertir."
  }
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AV Smartech",
  url: "https://www.avsmartech.com",
  description:
    "Marketing digital, diseño web, SEO local, automatización e inteligencia artificial para empresas que quieren conseguir más clientes, ahorrar tiempo y reducir costes.",
  areaServed: ["Valencia", "España"],
  serviceType: [
    "Marketing digital",
    "Diseño web",
    "SEO local",
    "Automatización de procesos",
    "Inteligencia artificial para empresas"
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
      <ProblemSolutionVisual />
      <BenefitBlocks />
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Servicios principales"
            title="Marketing digital, diseño web y automatización para crecer con más control."
            description="Te ayudamos a atraer más clientes y a optimizar tu negocio con sistemas digitales sencillos, medibles y orientados a resultados."
          />
          <div className="mt-12">
            <ServiceCards items={serviceHighlights} compact liquid />
          </div>
        </div>
      </section>

      <CaptureSystemFlow />

      <section className="bg-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="glass-card flex flex-col gap-6 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-2xl">
              <p className="text-sm font-semibold uppercase text-electric">Primer paso</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
                Hablemos de tu negocio y detectemos dónde puedes ganar clientes o ahorrar horas.
              </h2>
            </div>
            <Link
              href="/contacto"
              className="focus-ring subtle-sheen relative inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
            >
              Hablemos de tu negocio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <BeforeAfterSection />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Por qué elegir AV Smartech"
            title="Un socio digital para conseguir clientes y optimizar tu negocio."
            description="Nuestro trabajo no termina en publicar una web. Buscamos que cada acción digital tenga una función clara: atraer, convertir, ahorrar tiempo o mejorar decisiones."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {trustPoints.map((point, index) => (
              <article
                key={point.title}
                className="glass-card group h-full p-6"
              >
                <div className="relative">
                  <div className="icon-float mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-soft text-electric">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-electric">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-navy">{point.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">Sobre nosotros</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Ingeniería, negocio y claridad para que la tecnología genere resultados.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-muted">
              AV Smartech nace de la visión de tres ingenieros de software que quieren ayudar a empresas a crecer mediante soluciones digitales prácticas, inteligentes y orientadas a resultados.
            </p>
            <Link
              href="/nosotros"
              className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-navy"
            >
              Conocer AV Smartech
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Convierte tu web y tus procesos en una fuente real de crecimiento."
        description="Revisamos tu presencia digital, tus oportunidades de SEO local y tus tareas repetitivas para definir los próximos pasos con impacto."
        buttonLabel="Solicitar diagnóstico gratuito"
      />
    </>
  );
}
