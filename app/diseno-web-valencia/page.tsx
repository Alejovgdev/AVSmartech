import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";

export const metadata: Metadata = {
  title: "Diseño web en Valencia para empresas | AV Smartech",
  description:
    "Diseño web en Valencia para empresas, pymes y autónomos que quieren una web clara, rápida y orientada a captar clientes con SEO local y conversión.",
  openGraph: {
    title: "Diseño web en Valencia para empresas | AV Smartech",
    description:
      "Creamos webs orientadas a captar clientes: mensaje claro, SEO local, llamadas a la acción y estructura comercial.",
    url: "/diseno-web-valencia"
  }
};

const webProblems = [
  "La web existe, pero no explica rápido qué vendes y por qué elegirte.",
  "El diseño es correcto, pero no guía al visitante hacia una llamada o formulario.",
  "No hay páginas pensadas para búsquedas locales o servicios concretos.",
  "La empresa depende de recomendaciones porque la web no genera oportunidades."
];

const webBenefits = [
  {
    title: "Mensaje más claro",
    description:
      "Ordenamos tu propuesta para que cualquier visitante entienda en segundos qué haces, a quién ayudas y qué resultado puede esperar."
  },
  {
    title: "Más contactos",
    description:
      "Diseñamos la estructura con CTAs visibles, secciones de confianza y contenido orientado a convertir visitas en solicitudes."
  },
  {
    title: "Mejor base SEO",
    description:
      "Preparamos una arquitectura pensada para posicionar servicios, trabajar SEO local en Valencia y crecer con nuevas páginas."
  }
];

const sections = [
  "Hero con promesa clara, subtítulo orientado a beneficios y llamadas a la acción visibles.",
  "Bloques de servicios que explican problemas, soluciones y resultados sin lenguaje técnico innecesario.",
  "Secciones de confianza para mostrar criterio, cercanía, proceso y enfoque en negocio.",
  "Páginas internas preparadas para enlazado, SEO local y futuras campañas de marketing digital."
];

export default function DisenoWebValenciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Diseño web en Valencia"
        title="Una web profesional que explica, convence y convierte."
        description="Creamos páginas web para empresas, pymes y autónomos de Valencia que necesitan captar clientes, transmitir confianza y convertir su presencia online en una herramienta comercial."
        points={["Web corporativa", "SEO local", "Conversión", "CTAs claros"]}
        ctaLabel="Hablemos de tu negocio"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">El problema</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Una web bonita no basta si no genera confianza ni contactos.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Muchas empresas invierten en una página web y, aun así, siguen sin recibir solicitudes. El problema no suele ser solo visual. A menudo falta una propuesta clara, una estructura pensada para el cliente, contenido que responda dudas reales y llamadas a la acción que faciliten el contacto.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              En Valencia, donde muchos clientes comparan negocios locales antes de llamar, la web debe funcionar como un primer comercial. Tiene que explicar bien el servicio, demostrar profesionalidad, reducir dudas y llevar al visitante hacia una acción concreta: llamar, escribir, pedir presupuesto o solicitar diagnóstico.
            </p>
          </div>

          <div className="grid gap-4">
            {webProblems.map((problem) => (
              <div key={problem} className="flex gap-4 rounded-lg border border-slate-200 bg-soft p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan" />
                <p className="leading-7 text-muted">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="La solución"
            title="Diseño web con estrategia comercial, SEO local y automatización cuando aporta valor."
            description="En AV Smartech no planteamos la web como un folleto digital. La planteamos como una pieza central de captación: debe atraer tráfico cualificado, explicar la oferta con claridad y facilitar que el cliente dé el siguiente paso."
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-lg leading-8 text-muted">
            <p>
              Para conseguirlo, trabajamos el contenido antes que la decoración. Definimos qué problema resuelve tu empresa, qué beneficios percibe el cliente, qué servicios necesitan página propia y qué argumentos generan confianza. Después construimos una experiencia visual limpia, coherente con tu marca y preparada para leer rápido desde móvil.
            </p>
            <p>
              También cuidamos la base técnica: estructura de encabezados, metadatos, enlazado interno, velocidad, responsive y jerarquía de contenidos. Esto ayuda a Google a entender mejor tu negocio y facilita que futuras acciones de marketing digital tengan una base sólida sobre la que crecer.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Beneficios"
            title="Qué debe conseguir una buena web para tu negocio."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {webBenefits.map((benefit) => (
              <article key={benefit.title} className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-navy">{benefit.title}</h3>
                <p className="mt-4 leading-7 text-muted">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">Estructura recomendada</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Una web pensada para vender debe ordenar la decisión del cliente.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              El visitante no debería tener que interpretar tu negocio. La web debe guiarlo desde el problema que tiene hasta una acción sencilla. Por eso damos importancia al contenido, al orden de las secciones y a la forma en que se conectan servicios, confianza y contacto.
            </p>
          </div>
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <div key={section} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-electric">0{index + 1}</p>
                <p className="mt-3 leading-7 text-muted">{section}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-electric">Siguiente paso</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
              Una web convierte mejor cuando forma parte de una estrategia de captación.
            </h2>
          </div>
          <Link
            href="/marketing-digital-valencia"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
          >
            Ver marketing digital en Valencia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="¿Tu web actual está ayudando a vender?"
        description="Solicita un diagnóstico gratuito y revisaremos claridad del mensaje, estructura, SEO local, CTAs y oportunidades de mejora."
        buttonLabel="Solicitar diagnóstico gratuito"
      />
    </>
  );
}
