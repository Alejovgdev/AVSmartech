"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animateTo = reduced
      ? (value: number) => {
          bar.style.transform = `scaleX(${value})`;
        }
      : gsap.quickTo(bar, "scaleX", {
          duration: 0.2,
          ease: "power3.out"
        });

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      animateTo(max > 0 ? window.scrollY / max : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-[3px] bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-electric via-cyan to-white"
      />
    </div>
  );
}
