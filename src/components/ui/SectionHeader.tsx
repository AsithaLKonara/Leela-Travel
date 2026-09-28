"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

export interface SectionHeaderProps {
  label?: string;
  badgeDot?: boolean;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  action?: React.ReactNode;
  fontStyle?: "poppins" | "cormorant";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  badgeDot = true,
  title,
  titleHighlight,
  description,
  align = "left",
  action,
  fontStyle = "poppins",
  className,
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col gap-3 max-w-3xl mb-12", alignment[align], className)}>
      {label && (
        <Badge variant="sea" dot={badgeDot} className="mb-1">
          {label}
        </Badge>
      )}

      <h2
        className={cn(
          "text-3xl md:text-5xl font-medium tracking-tight text-leela-white leading-[1.15]",
          fontStyle === "cormorant" ? "font-serif italic text-4xl md:text-6xl font-normal" : "font-sans"
        )}
      >
        {title}{" "}
        {titleHighlight && (
          <span className="text-gradient-sea font-semibold">{titleHighlight}</span>
        )}
      </h2>

      {description && (
        <p className="text-base md:text-lg text-leela-muted leading-relaxed max-w-2xl mt-1">
          {description}
        </p>
      )}

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
};
