import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionIntro } from "@/components/shared/SectionIntro";

export const metadata: Metadata = {
  title: "Marketing digital en Valencia para empresas | AV Smartech",
  description:
    "Marketing digital en Valencia para empresas, pymes y autónomos que quieren conseguir más clientes con SEO local, diseño web, Google Business y automatización.",
  openGraph: {
    title: "Marketing digital en Valencia para empresas | AV Smartech",
    description:
      "Consigue más clientes en Valencia con marketing digital, SEO local, diseño web y automatización orientada a resultados.",
    url: "/marketing-digital-valencia"
  }
};

const problems = [
  "Tu negocio no aparece cuando un cliente busca una solución en Valencia.",
  "La web recibe visitas, pero no explica bien por qué deberían contactarte.",
  "Google Business, redes, contenidos y campañas funcionan por separado.",
  "Llegan contactos poco cualificados o difíciles de convertir en ventas."
];

const benefits = [
  {
    title: "Más visibilidad local",
    description:
      "Trabajamos SEO local, Google Business y contenidos para que tu empresa gane presencia en búsquedas relevantes de Valencia."
  },
  {
    title: "Más contactos cualificados",
    description:
      "Revisamos el mensaje, la oferta y los CTAs para convertir visitas en llamadas, formularios y conversaciones comerciales."
  },
  {
    title: "Menos improvisación",
    description:
      "Ordenamos canales, prioridades y medición para que cada acción tenga una función concreta dentro del proceso de captación."
  }
];

const steps = [
  "Analizamos tu presencia actual: web, SEO local, Google Business, competencia y puntos de fuga.",
  "Definimos una propuesta clara para que el cliente entienda rápido qué haces, para quién y por qué elegirte.",
  "Priorizamos acciones de captación: contenido, páginas de servicio, llamadas a la acción, campañas o automatizaciones.",
  "Medimos lo importante: contactos, llamadas, formularios, oportunidades y mejoras de visibilidad."
];

export default function MarketingDigitalValenciaPage() {
  return (
    <>
      <PageHero
        eyebrow="Marketing digital en Valencia"
        title="Consigue más clientes con una estrategia digital clara y medible."
        description="Ayudamos a empresas, pymes y autónomos de Valencia a mejorar su visibilidad, captar contactos cualificados y convertir su presencia online en una herramienta real de crecimiento."
        points={["SEO local", "Google Business", "Diseño web", "Automatización"]}
        ctaLabel="Quiero más clientes"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">El problema</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Estar en internet no significa estar captando clientes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Muchas empresas tienen web, redes sociales o ficha de Google, pero no consiguen que esos activos trabajen juntos. El resultado suele ser una presencia digital dispersa: el cliente no entiende la propuesta, no encuentra motivos para confiar o no tiene claro cuál es el siguiente paso.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              En mercados locales como Valencia, esto se nota rápido. Cuando alguien busca un servicio, compara varias opciones en pocos minutos. Si tu negocio no aparece, si aparece con poca información o si la web no transmite valor, esa oportunidad acaba en manos de otra empresa.
            </p>
          </div>

          <div className="grid gap-4">
            {problems.map((problem) => (
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
            title="Marketing digital conectado a ventas, no a publicar por publicar."
            description="Nuestro enfoque combina posicionamiento, claridad comercial y sistemas de captación. Primero entendemos qué vendes, a quién quieres atraer y qué fricciones impiden que más personas contacten contigo."
          />
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-lg leading-8 text-muted">
            <p>
              A partir de ahí, construimos una estrategia práctica: mejorar la estructura de la web, crear páginas de servicio enfocadas a intención de búsqueda, optimizar Google Business, reforzar SEO local, ordenar mensajes y preparar llamadas a la acción visibles. La meta no es hacer ruido digital, sino conseguir oportunidades comerciales mejores.
            </p>
            <p>
              También revisamos qué ocurre después del contacto. Si un lead llega por formulario, WhatsApp, email o llamada, debe existir un proceso claro para responder, hacer seguimiento y no perder oportunidades. Por eso conectamos marketing digital con automatización cuando tiene sentido: avisos, CRM, emails, recordatorios y reportes sencillos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="Beneficios"
            title="Qué mejora cuando tu marketing digital tiene foco."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
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
            <p className="mb-4 text-sm font-semibold uppercase text-electric">Cómo trabajamos</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Un plan claro antes de invertir en acciones sueltas.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Antes de proponer campañas o contenidos, revisamos si la base comercial está preparada. Una web confusa, una ficha de Google incompleta o un mensaje genérico pueden frenar cualquier inversión.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-electric">0{index + 1}</p>
                <p className="mt-3 leading-7 text-muted">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-electric">También te puede interesar</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy">
              Una estrategia local funciona mejor con una web preparada para convertir.
            </h2>
          </div>
          <Link
            href="/diseno-web-valencia"
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
          >
            Ver diseño web en Valencia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection
        title="¿Quieres conseguir más clientes en Valencia?"
        description="Solicita un diagnóstico gratuito y veremos qué está frenando tu captación online y qué acciones pueden tener más impacto."
        buttonLabel="Solicitar diagnóstico gratuito"
      />
    </>
  );
}
