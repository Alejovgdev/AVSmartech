import { CheckCircle2, SearchX, Settings2, TimerReset, XCircle } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

const problems = [
  {
    label: "No consigues clientes online",
    icon: SearchX
  },
  {
    label: "Tu negocio no aparece en Google",
    icon: SearchX
  },
  {
    label: "Pierdes tiempo en tareas manuales",
    icon: TimerReset
  },
  {
    label: "No tienes un sistema claro",
    icon: Settings2
  }
];

const solutions = [
  "Más visibilidad",
  "Más contactos",
  "Automatización",
  "Procesos optimizados"
];

export function ProblemSolutionVisual() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="circuit-lines absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase text-electric">Problema → Solución</p>
          <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
            Donde otros ven problemas, nosotros creamos sistemas que generan resultados.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal y={18}>
            <div className="glass-card-dark h-full p-6 text-white">
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-white/56">Antes</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Oportunidades que se pierden
                </h3>
                <div className="mt-7 grid gap-3">
                  {problems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={`${item.label}-${index}`}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                      >
                        <span className="icon-float flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 text-white/70">
                          <Icon className="h-5 w-5" />
                        </span>
                        <p className="font-semibold text-white/86">{item.label}</p>
                        <XCircle className="ml-auto h-5 w-5 flex-none text-white/38" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal y={18} delay={0.06}>
            <div className="glass-card h-full p-6 text-navy">
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-cyan">Después</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  Un camino claro hacia el contacto
                </h3>
                <div className="mt-7 grid gap-3">
                  {solutions.map((solution, index) => (
                    <div
                      key={solution}
                      className="group flex items-center gap-4 rounded-2xl border border-cyan/25 bg-white/68 p-4 shadow-soft"
                    >
                      <span className="icon-float flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-cyan/16 text-cyan">
                        <CheckCircle2 className="h-5 w-5" />
                      </span>
                      <p className="font-semibold">{solution}</p>
                      <span className="ml-auto text-sm font-semibold text-cyan/80">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
