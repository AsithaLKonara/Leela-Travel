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
    light: "bg-obsidian/60 backdrop-blur-sm border-white/10",
    medium: "bg-obsidian/80 backdrop-blur-md border-white/15",
    heavy: "bg-obsidian/95 backdrop-blur-xl border-white/20",
  };

  const glowMap = {
    sea: "hover:border-sea-mist/50 hover:shadow-[0_12px_40px_rgba(125,217,208,0.15)]",
    sand: "hover:border-sand/50 hover:shadow-[0_12px_40px_rgba(217,199,163,0.15)]",
    sky: "hover:border-sky/50 hover:shadow-[0_12px_40px_rgba(93,169,214,0.15)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-none border overflow-hidden transition-all duration-500",
        intensityMap[intensity],
        hoverEffect && "hover:-translate-y-1",
        hoverEffect && glowMap[glowColor],
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
