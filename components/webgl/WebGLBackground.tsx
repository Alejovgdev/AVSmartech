"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const WebGLScene = dynamic(() => import("@/components/webgl/WebGLScene"), {
  ssr: false,
  loading: () => null
});

type WebGLBackgroundProps = {
  className?: string;
  intensity?: "hero" | "subtle";
};

export function WebGLBackground({ className, intensity = "hero" }: WebGLBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <WebGLScene intensity={intensity} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(0,174,239,0.22),transparent_36%),linear-gradient(90deg,rgba(0,27,63,0.94),rgba(0,27,63,0.74)_48%,rgba(0,91,255,0.28))]" />
      <div className="premium-grid absolute inset-0 opacity-40" />
    </div>
  );
}
