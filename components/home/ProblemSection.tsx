import { AlertCircle, DatabaseZap, SearchX, UsersRound } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

const problems = [
  {
    title: "No te encuentran online",
    description: "Tus clientes buscan soluciones, pero tu negocio no aparece con la claridad ni la autoridad que debería.",
    icon: SearchX
  },
  {
    title: "Procesos manuales lentos",
    description: "Demasiadas horas se van en tareas repetitivas que podrían ejecutarse con sistemas automáticos.",
    icon: AlertCircle
  },
  {
    title: "Datos desordenados",
    description: "La información existe, pero está repartida entre herramientas, hojas y conversaciones difíciles de seguir.",
    icon: DatabaseZap
  },
  {
    title: "Equipo saturado",
    description: "Personas valiosas terminan resolviendo urgencias operativas en vez de enfocarse en crecimiento.",
    icon: UsersRound
  }
];

export function ProblemSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal>
            <p className="mb-4 text-sm font-semibold uppercase text-electric">El problema real</p>
            <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
              Tu negocio no necesita más herramientas. Necesita sistemas que trabajen por ti.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Muchos negocios pierden ventas por una mala presencia digital y pierden margen dedicando demasiadas horas a tareas manuales. En AV SmartTech convertimos procesos lentos en sistemas que generan crecimiento.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <ScrollReveal key={problem.title} delay={index * 0.04}>
                  <article className="h-full rounded-lg border border-slate-200 bg-soft p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:bg-white hover:shadow-premium">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-electric shadow-soft">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-navy">{problem.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{problem.description}</p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
