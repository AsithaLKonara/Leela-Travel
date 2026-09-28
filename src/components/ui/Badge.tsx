"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "sea" | "sand" | "sky" | "glass" | "muted";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "sea",
  dot = false,
  ...props
}) => {
  const variantMap = {
    sea: "bg-sea-mist/10 text-sea-mist border-sea-mist/30",
    sand: "bg-sand/10 text-sand border-sand/30",
    sky: "bg-sky/10 text-sky border-sky/30",
    glass: "bg-white/5 text-leela-white border-white/15 backdrop-blur-sm",
    muted: "bg-white/5 text-leela-muted border-white/10",
  };

  const dotMap = {
    sea: "bg-sea-mist",
    sand: "bg-sand",
    sky: "bg-sky",
    glass: "bg-leela-white",
    muted: "bg-leela-muted",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.2em] uppercase border transition-all duration-300 select-none rounded-none",
        variantMap[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-none animate-pulse", dotMap[variant])}
        />
      )}
      {children}
    </span>
  );
};
