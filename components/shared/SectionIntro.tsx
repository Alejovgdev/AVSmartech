import { ScrollReveal } from "@/components/core/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
  className
}: SectionIntroProps) {
  return (
    <ScrollReveal
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase text-electric">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
