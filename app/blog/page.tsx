import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ScrollReveal } from "@/components/core/ScrollReveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas prácticas sobre automatización, IA empresarial, SEO local, digitalización y crecimiento para negocios reales.",
  openGraph: {
    title: "Blog | AV SmartTech",
    description:
      "Contenido SEO sobre automatización, IA útil, captación online y errores digitales que frenan ventas.",
    url: "/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Ideas para vender más, ahorrar tiempo y operar con mejores sistemas."
        description="Una base editorial preparada para SEO, pensada para educar al mercado y atraer empresas que ya sienten fricción en ventas, procesos o datos."
        points={["Automatización", "SEO local", "IA empresarial", "Crecimiento B2B"]}
        ctaLabel="Solicitar diagnóstico"
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.title} delay={index * 0.04}>
                <article className="group h-full rounded-lg border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-premium">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-soft px-4 py-2 text-sm font-semibold text-electric">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted">
                      <BookOpen className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-semibold leading-[1.16] text-navy">
                    {post.title}
                  </h2>
                  <p className="mt-5 leading-7 text-muted">{post.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric transition group-hover:text-navy">
                    Leer enfoque
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
