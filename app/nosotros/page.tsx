import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { getBrandAssets } from "@/lib/public-assets";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "AV SmartTech diseña sistemas digitales que mejoran ventas, eficiencia y tranquilidad operativa con tecnología útil para empresas.",
  openGraph: {
    title: "Nosotros | AV SmartTech",
    description:
      "Tecnología con propósito empresarial: claridad, resultados, confianza, innovación útil, escalabilidad y cercanía profesional.",
    url: "/nosotros"
  }
};

const values = [
  "Claridad",
  "Resultados",
  "Confianza",
  "Innovación útil",
  "Escalabilidad",
  "Cercanía profesional"
];

export default function NosotrosPage() {
  const assets = getBrandAssets();

  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Tecnología práctica para empresas que quieren crecer."
        description="AV Smartech nace de la visión de tres ingenieros de software que quieren ayudar a empresas a crecer mediante soluciones digitales prácticas, inteligentes y orientadas a resultados."
        imageSrc={assets.hook}
        imageAlt="AV SmartTech presentando soluciones digitales inteligentes"
        imageAspect="wide"
        points={["Diagnóstico claro", "Implementación cuidada", "Impacto medible", "Acompañamiento profesional"]}
        ctaLabel="Solicitar diagnóstico gratuito"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <ScrollReveal>
            <div className="relative aspect-[1.15] overflow-hidden rounded-lg border border-slate-200 bg-soft shadow-premium">
              <Image
                src={assets.meet}
                alt="Consultoría y metodología AV SmartTech"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/18 via-transparent to-cyan/14" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">Nuestra forma de trabajar</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Primero entendemos el negocio. Después elegimos la tecnología.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              AV Smartech existe para acercar marketing digital, diseño web, automatización e inteligencia artificial a empresas que quieren vender más, operar mejor y tomar decisiones con datos. Buscamos soluciones prácticas, sostenibles y alineadas con clientes, productividad y crecimiento.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <ScrollReveal key={value} delay={index * 0.035}>
                <article className="h-full rounded-lg border border-slate-200 bg-white p-7 shadow-soft">
                  <p className="text-sm font-semibold text-electric">0{index + 1}</p>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-navy">{value}</h2>
                  <p className="mt-4 leading-7 text-muted">
                    {value === "Claridad" && "Explicamos lo complejo con lenguaje empresarial y decisiones priorizadas."}
                    {value === "Resultados" && "Medimos impacto en ventas, tiempo, costes, márgenes y control operativo."}
                    {value === "Confianza" && "Construimos sistemas mantenibles, seguros y alineados con la realidad del equipo."}
                    {value === "Innovación útil" && "Aplicamos IA donde resuelve problemas concretos, no donde solo suena moderno."}
                    {value === "Escalabilidad" && "Preparamos procesos para crecer sin multiplicar tareas manuales."}
                    {value === "Cercanía profesional" && "Acompañamos con criterio, comunicación clara y foco en negocio."}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Hablemos de tu negocio, no de herramientas sueltas."
        description="Te mostraremos dónde la tecnología puede generar impacto real en tu operación y en tus ventas."
        buttonLabel="Hablemos de tu negocio"
      />
    </>
  );
}
