import { BarChart3, CircleDollarSign, SlidersHorizontal } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

const benefits = [
  {
    title: "Más clientes",
    description:
      "Mejor presencia digital, mensajes claros y canales preparados para convertir búsquedas en oportunidades comerciales.",
    icon: BarChart3
  },
  {
    title: "Menos costes",
    description:
      "Automatizaciones que reducen horas repetitivas, errores, esperas internas y tareas que no aportan margen.",
    icon: CircleDollarSign
  },
  {
    title: "Más control",
    description:
      "Datos conectados, reportes visibles y procesos medibles para tomar decisiones con menos ruido operativo.",
    icon: SlidersHorizontal
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
                <article className="glass-panel h-full rounded-lg p-7 transition duration-300 hover:-translate-y-1">
                  <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-electric">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">{benefit.title}</h2>
                  <p className="mt-4 leading-7 text-white/72">{benefit.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
