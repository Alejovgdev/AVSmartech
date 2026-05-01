import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { IconName } from "@/lib/data";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { Icon } from "@/components/shared/Icon";
import { cn } from "@/lib/utils";

export type ServiceCardItem = {
  title: string;
  description: string;
  outcome?: string;
  icon: IconName;
  points?: string[];
  href?: string;
};

type ServiceCardsProps = {
  items: ServiceCardItem[];
  compact?: boolean;
  liquid?: boolean;
};

export function ServiceCards({ items, compact = false, liquid = false }: ServiceCardsProps) {
  return (
    <div className={cn("grid gap-5", compact ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3")}>
      {items.map((item, index) => (
        <ScrollReveal key={item.title} delay={index * 0.035}>
          <article
            className={cn(
              "group flex h-full flex-col p-6",
              liquid
                ? "glass-card"
                : "premium-card rounded-lg border border-slate-200/80 bg-white shadow-soft hover:border-cyan/40 hover:shadow-premium"
            )}
          >
            <div className="icon-float mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-soft text-electric transition group-hover:bg-electric group-hover:text-white">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-semibold text-navy">{item.title}</h2>
            {item.outcome && (
              <p className="mt-3 text-sm font-semibold text-electric">{item.outcome}</p>
            )}
            <p className="mt-4 leading-7 text-muted">{item.description}</p>
            {item.points && (
              <ul className="mt-6 grid gap-3">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.href && (
              <Link
                href={item.href}
                className="focus-ring mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:text-navy"
              >
                Ver solución
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
