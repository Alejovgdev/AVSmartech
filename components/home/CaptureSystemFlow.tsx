import { ClipboardCheck, Globe2, MailCheck, MousePointerClick, UserRound } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

const steps = [
  {
    title: "Usuario",
    description: "Busca una solución",
    icon: UserRound
  },
  {
    title: "Web",
    description: "Entiende tu valor",
    icon: Globe2
  },
  {
    title: "Contacto",
    description: "Da el siguiente paso",
    icon: MousePointerClick
  },
  {
    title: "Seguimiento",
    description: "Proceso ordenado",
    icon: MailCheck
  },
  {
    title: "Cliente",
    description: "Oportunidad convertida",
    icon: ClipboardCheck
  }
];

export function CaptureSystemFlow() {
  return (
    <section className="relative overflow-hidden bg-soft py-20 sm:py-24">
      <div className="premium-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase text-electric">Sistema de captación</p>
          <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
            Del primer clic al cliente, con un recorrido claro.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            Creamos sistemas digitales que no solo mejoran tu imagen, sino que trabajan para conseguir clientes y automatizar tu negocio.
          </p>
        </ScrollReveal>

        <div className="mt-12">
          <div className="grid gap-4 lg:grid-cols-5 lg:items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <ScrollReveal key={step.title} delay={index * 0.04} y={16}>
                  <div className="relative h-full">
                    <article className="glass-card group h-full p-5">
                      <div className="relative">
                        <div className="icon-float mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white shadow-soft">
                          <Icon className="h-6 w-6" />
                        </div>
                        <p className="text-xs font-semibold uppercase text-electric">0{index + 1}</p>
                        <h3 className="mt-3 font-display text-xl font-semibold text-navy">{step.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                      </div>
                    </article>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block">
                        <div className="flow-connector absolute left-[calc(100%+0.25rem)] top-1/2 h-0.5 w-3 -translate-y-1/2 rounded-full" />
                        <div className="absolute left-[calc(100%+0.92rem)] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-cyan" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
