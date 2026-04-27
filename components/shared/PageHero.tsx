import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  imageAspect?: "standard" | "wide";
  ctaLabel?: string;
  ctaHref?: string;
  points?: string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = "",
  imageAspect = "standard",
  ctaLabel,
  ctaHref = "/contacto",
  points = []
}: PageHeroProps) {
  const hasImage = Boolean(imageSrc);

  return (
    <section className="relative overflow-hidden bg-soft">
      <div className="circuit-lines absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className={cn(
          "relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20",
          hasImage ? "lg:grid-cols-[1fr_0.86fr] lg:items-center" : "text-center"
        )}
      >
        <ScrollReveal className={cn(hasImage ? "max-w-2xl" : "mx-auto max-w-4xl text-center")}>
          <p className="mb-5 text-sm font-semibold uppercase text-electric">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className={cn("mt-6 text-lg leading-8 text-muted", hasImage ? "max-w-2xl" : "mx-auto max-w-3xl")}>
            {description}
          </p>
          {points.length > 0 && (
            <div
              className={cn(
                "mt-8 grid gap-3",
                hasImage
                  ? "sm:grid-cols-2"
                  : "mx-auto w-fit max-w-full grid-cols-1 gap-x-14 text-left sm:grid-cols-[max-content_max-content]"
              )}
            >
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm font-semibold text-navy">
                  <CheckCircle2 className="h-5 w-5 flex-none text-cyan" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
          {ctaLabel && (
            <Link
              href={ctaHref}
              className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-4 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </ScrollReveal>

        {imageSrc && (
          <ScrollReveal delay={0.08} className="relative">
            <div
              className={cn(
                "relative overflow-hidden rounded-lg border border-white bg-white shadow-premium",
                imageAspect === "wide" ? "aspect-[1.9]" : "aspect-[1.18]"
              )}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/18 via-transparent to-cyan/16" />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
