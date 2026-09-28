"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

export interface StatItem {
  stat: string;
  label: string;
  description: string;
}

export const STATS: StatItem[] = [
  {
    stat: "1,340 km",
    label: "Pristine Coastline",
    description: "From palm groves to surf points",
  },
  {
    stat: "2,000+",
    label: "Years of Heritage",
    description: "Ancient royal rock citadels",
  },
  {
    stat: "8",
    label: "UNESCO World Sites",
    description: "Sacred temples & cloud forests",
  },
  {
    stat: "26+",
    label: "National Parks",
    description: "Untamed leopard & elephant reserves",
  },
  {
    stat: "1",
    label: "Unforgettable Island",
    description: "Curated Ceylon journeys",
  },
];

export const IslandNumbersSection: React.FC = () => {
  return (
    <section className="relative py-24 w-full border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero/chathura-anuradha-subasinghe-isdvqf04MDk-unsplash.jpg" alt="Island Numbers" fill className="object-cover object-center filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/80" />
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10 w-full">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-16">
        
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans">
          One Island. <span className="text-gradient-sea">Infinite Depth.</span>
        </h2>
      </div>

      {/* Architectural Typography Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {STATS.map((item) => (
          <div
            key={item.label}
            className="p-8 border border-white/15 bg-obsidian/90 flex flex-col justify-between gap-6 transition-all duration-400 hover:border-sea-mist/50 hover:bg-white/5 rounded-none shadow-xl"
          >
            <div className="text-4xl sm:text-5xl font-bold font-sans text-sea-mist tracking-tight">
              {item.stat}
            </div>

            <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-leela-white font-bold">
                {item.label}
              </h3>
              <p className="text-[11px] text-leela-muted font-sans">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
