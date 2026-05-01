import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CTASection({
  title = "Tu negocio puede conseguir más clientes y operar con menos fricción.",
  description = "Empezamos con un diagnóstico gratuito para detectar oportunidades reales en captación, SEO local, automatización y control del negocio.",
  buttonLabel = "Solicitar diagnóstico gratuito",
  href = "/contacto"
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div className="premium-grid absolute inset-0 opacity-45" aria-hidden="true" />
      <div className="absolute inset-0 bg-blue-radial" aria-hidden="true" />
      <ScrollReveal className="relative mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold leading-[1.08] sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">
          {description}
        </p>
        <Link
          href={href}
          className="focus-ring subtle-sheen mt-9 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan hover:text-white"
        >
          {buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
