import { ArrowUpRight, BarChart3, CircleDollarSign, SlidersHorizontal } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

const benefits = [
  {
    title: "Más clientes potenciales",
    label: "Captación",
    description:
      "Mejoramos tu visibilidad y captación online con marketing digital, diseño web y SEO local orientado a contactos reales.",
    icon: BarChart3,
    bar: "w-4/5"
  },
  {
    title: "Menos trabajo manual",
    label: "Automatización",
    description:
      "Automatizamos procesos repetitivos para que tu equipo ahorre tiempo, reduzca errores y pueda centrarse en vender y atender mejor.",
    icon: CircleDollarSign,
    bar: "w-3/5"
  },
  {
    title: "Mejor control",
    label: "Datos claros",
    description:
      "Organizamos tu negocio con herramientas digitales, datos conectados y reportes claros para decidir con menos ruido.",
    icon: SlidersHorizontal,
    bar: "w-2/3"
  }
];

export function BenefitBlocks() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={benefit.title} delay={index * 0.05}>
                <article className="glass-card-dark group h-full p-7">
                  <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="icon-float flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-electric">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold text-cyan">
                      {benefit.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-white">{benefit.title}</h2>
                  <p className="mt-4 leading-7 text-white/72">{benefit.description}</p>
                  <div className="mt-7">
                    <div className="mb-2 flex justify-between text-xs font-semibold uppercase text-white/48">
                      <span>Impacto</span>
                      <span>Prioridad alta</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className={`h-full rounded-full bg-gradient-to-r from-cyan to-white/72 ${benefit.bar}`} />
                    </div>
                  </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
