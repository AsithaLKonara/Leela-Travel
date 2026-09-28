"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface CinematicMoment {
  number: string;
  title: string;
  quote: string;
  location: string;
  image: string;
}

export const MOMENTS: CinematicMoment[] = [
  {
    number: "01",
    title: "THE TRAIN",
    quote: "Watching cloud forests and tea ravines unfold through an observation train window.",
    location: "Ella Viaduct, Central Highlands",
    image: "/images/hero/ella.jpg",
  },
  {
    number: "02",
    title: "THE SUNSET",
    quote: "When 17th-century Dutch fort ramparts turn gold above crashing ocean waves.",
    location: "Galle Fort Lighthouse",
    image: "/images/hero/traditional-stilt-fishermen-sri-lanka.jpg",
  },
  {
    number: "03",
    title: "THE WILD",
    quote: "A silent encounter with wild leopards on a misty Yala sanctuary track.",
    location: "Yala National Park",
    image: "/images/hero/yala%20elephants.jpg",
  },
  {
    number: "04",
    title: "THE MORNING",
    quote: "Highland tea estates waking beneath soft mountain mist at sunrise.",
    location: "Nuwara Eliya Estate",
    image: "/images/hero/beautiful-ramboda-waterfall-sri-lanka-island.jpg",
  },
];

export const CinematicMomentsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
      <SectionHeader
        
        title="Some Moments"
        titleHighlight="Can't Be Planned."
        description="Immersive moments that become your lifetime Ceylon memories."
      />

      {/* Cinematic Visual Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {MOMENTS.map((moment) => (
          <div
            key={moment.number}
            className="border border-white/15 bg-obsidian/95 overflow-hidden flex flex-col group transition-all duration-500 hover:border-sea-mist/50 rounded-none shadow-2xl"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={moment.image}
                alt={moment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              <div className="absolute top-4 left-4 font-mono text-xs text-sea-mist font-bold bg-obsidian/80 px-2.5 py-1 border border-white/15">
                MOMENT {moment.number}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                  {moment.location}
                </span>
                <h3 className="text-2xl font-bold text-leela-white font-sans mt-0.5">
                  {moment.title}
                </h3>
              </div>
            </div>

            <div className="p-6 bg-obsidian/95 border-t border-white/10">
              <p className="text-sm text-leela-muted leading-relaxed font-sans">
                “{moment.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
