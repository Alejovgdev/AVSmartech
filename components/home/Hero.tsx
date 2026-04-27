import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { WebGLBackground } from "@/components/webgl/WebGLBackground";

const proofPoints = [
  "Más clientes",
  "Menos tareas manuales",
  "Más margen operativo"
];

export function Hero() {
  return (
    <section className="relative flex min-h-[82vh] overflow-hidden bg-navy text-white">
      <WebGLBackground />
      <div className="relative mx-auto flex w-full max-w-7xl items-center px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal className="max-w-4xl pt-2 sm:pt-6">
          <p className="mb-5 inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan backdrop-blur">
            Tecnología que impacta en tu cuenta de resultados
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
            Digitalizamos tu negocio y automatizamos tus procesos con IA
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
            Ayudamos a empresas a conseguir más clientes, ahorrar tiempo y reducir costes mediante sistemas digitales inteligentes.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan hover:text-white"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/servicios"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/24 bg-white/8 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/16"
            >
              <PlayCircle className="h-4 w-4" />
              Ver servicios
            </Link>
          </div>
          <div className="mt-8 grid max-w-3xl grid-cols-3 gap-3 border-t border-white/14 pt-5 sm:mt-12 sm:gap-4 sm:pt-7">
            {proofPoints.map((point) => (
              <div key={point}>
                <p className="text-xs font-semibold leading-5 text-white sm:text-sm">{point}</p>
                <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-white/20 sm:w-16" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
