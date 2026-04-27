"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const before = ["Procesos manuales", "Leads perdidos", "Costes altos", "Poco control"];
const after = ["Flujos automáticos", "Clientes organizados", "Datos claros", "Empresa escalable"];

export function BeforeAfterSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"]
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-soft py-20 sm:py-24">
      <div className="circuit-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase text-electric">Antes / después</p>
          <h2 className="font-display text-3xl font-semibold leading-[1.08] text-navy sm:text-5xl">
            Pasamos tu negocio de operar en manual a funcionar con sistemas inteligentes.
          </h2>
        </div>

        <div className="relative mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <motion.div
            initial={reduced ? false : { opacity: 0, x: -24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft"
          >
            <p className="text-sm font-semibold uppercase text-muted">Antes</p>
            <ul className="mt-7 grid gap-4">
              {before.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-semibold text-navy">
                  <XCircle className="h-5 w-5 flex-none text-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="hidden w-28 items-center justify-center lg:flex">
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-white">
              <motion.div
                style={{ scaleX }}
                className="absolute inset-0 origin-left rounded-full bg-gradient-to-r from-electric to-cyan"
              />
            </div>
            <span className="absolute flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-glow">
              <ArrowRight className="h-5 w-5" />
            </span>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-lg border border-cyan/30 bg-navy p-7 text-white shadow-glow"
          >
            <p className="text-sm font-semibold uppercase text-cyan">Después</p>
            <ul className="mt-7 grid gap-4">
              {after.map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg font-semibold">
                  <CheckCircle2 className="h-5 w-5 flex-none text-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
