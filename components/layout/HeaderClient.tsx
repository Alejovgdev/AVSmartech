"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function HeaderClient({ logoSrc }: { logoSrc: string }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/82 shadow-[0_14px_40px_rgba(7,21,45,0.07)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="relative block h-12 w-20 overflow-hidden sm:w-24">
            <Image
              src={logoSrc}
              alt="AV SmartTech"
              fill
              priority
              sizes="96px"
              className="object-contain"
            />
          </span>
          <span className="hidden font-display text-base font-semibold text-navy sm:block">
            AV SmartTech
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-soft hover:text-navy",
                  active && "bg-soft text-navy"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contacto"
            className="focus-ring rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric"
          >
            Solicitar diagnóstico
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-soft lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? false : { opacity: 0, height: 0 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-2 px-5 py-5 sm:px-6" aria-label="Navegación móvil">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring rounded-lg px-4 py-3 text-base font-semibold text-navy transition hover:bg-soft",
                    pathname === item.href && "bg-soft text-electric"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="focus-ring mt-2 rounded-lg bg-navy px-4 py-3 text-center text-base font-semibold text-white shadow-glow"
              >
                Solicitar diagnóstico
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
