"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glowColor?: "sea" | "sand" | "sky" | "none";
  intensity?: "light" | "medium" | "heavy";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = "sea",
  intensity = "medium",
  ...props
}) => {
  const intensityMap = {
    light: "bg-white/[0.03] backdrop-blur-sm border-white/10",
    medium: "bg-white/[0.06] backdrop-blur-md border-white/12",
    heavy: "bg-white/[0.09] backdrop-blur-xl border-white/20",
  };

  const glowMap = {
    sea: "hover:border-sea-mist/40 hover:shadow-[0_8px_32px_rgba(125,217,208,0.15)]",
    sand: "hover:border-sand/40 hover:shadow-[0_8px_32px_rgba(217,199,163,0.15)]",
    sky: "hover:border-sky/40 hover:shadow-[0_8px_32px_rgba(93,169,214,0.15)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl border overflow-hidden transition-all duration-500",
        intensityMap[intensity],
        hoverEffect && "hover:-translate-y-1",
        hoverEffect && glowMap[glowColor],
        className
      )}
      {...props}
    >
      {/* Ambient background glow effect */}
      <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
