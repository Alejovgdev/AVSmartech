import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { sectors } from "@/lib/data";

export function SectorCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {sectors.map((sector, index) => (
        <ScrollReveal key={sector.name} delay={index * 0.03}>
          <article className="group h-full rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-premium">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold text-navy">{sector.name}</h2>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft text-electric transition group-hover:bg-electric group-hover:text-white">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
            <div className="grid gap-4 text-sm leading-6">
              <p>
                <span className="font-semibold text-navy">Digitalizar: </span>
                <span className="text-muted">{sector.digitalize}</span>
              </p>
              <p>
                <span className="font-semibold text-navy">Automatizar: </span>
                <span className="text-muted">{sector.automate}</span>
              </p>
              <p className="flex gap-2 rounded-lg bg-soft p-4 font-semibold text-navy">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan" />
                <span>{sector.improve}</span>
              </p>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  );
}
