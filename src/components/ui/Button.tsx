"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium tracking-wider uppercase text-xs transition-all duration-300 rounded-none focus:outline-none focus:ring-1 focus:ring-sea-mist/50 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.99] border";

    const variants = {
      primary:
        "bg-sea-mist text-obsidian font-semibold border-sea-mist hover:bg-aqua hover:border-aqua hover:shadow-[0_0_24px_rgba(125,217,208,0.4)]",
      secondary:
        "bg-sand text-obsidian font-semibold border-sand hover:bg-[#e4d6b7] hover:border-[#e4d6b7] hover:shadow-[0_0_20px_rgba(217,199,163,0.3)]",
      glass:
        "bg-white/5 backdrop-blur-md border-white/15 text-leela-white hover:bg-white/10 hover:border-sea-mist/50 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]",
      outline:
        "border-sea-mist/40 text-sea-mist hover:bg-sea-mist/10 hover:border-sea-mist hover:shadow-[0_0_15px_rgba(125,217,208,0.2)]",
      ghost:
        "border-transparent text-leela-muted hover:text-leela-white hover:bg-white/5",
      link:
        "border-transparent text-sea-mist hover:text-aqua underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal text-sm",
    };

    const sizes = {
      sm: "text-[11px] px-3.5 py-2 gap-1.5",
      md: "text-xs px-5 py-3 gap-2",
      lg: "text-xs px-7 py-4 gap-2.5",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          size !== "sm" && variant === "link" ? "" : sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
