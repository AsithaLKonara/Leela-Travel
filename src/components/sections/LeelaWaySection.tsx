"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ShieldCheck, Compass, HeartHandshake } from "lucide-react";

export const LeelaWaySection: React.FC = () => {
  const principles = [
    {
      number: "01",
      title: "CURATED",
      subtitle: "Selected with intention",
      description: "Not every road needs to be travelled. We choose only the routes, stays, and experiences worth remembering.",
      icon: <Compass className="w-6 h-6 text-sea-mist" />,
    },
    {
      number: "02",
      title: "PERSONAL",
      subtitle: "Tailored to your rhythm",
      description: "Your Ceylon journey should never feel like someone else's template. Every itinerary is crafted around your passions.",
      icon: <HeartHandshake className="w-6 h-6 text-sea-mist" />,
    },
    {
      number: "03",
      title: "LOCAL",
      subtitle: "Beyond the obvious",
      description: "Guided by born-and-bred Sri Lankan curators who unlock private access to tea masters, local chefs, and hidden sanctuaries.",
      icon: <ShieldCheck className="w-6 h-6 text-sea-mist" />,
    },
  ];

  return (
    <section className="relative py-24 w-full border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero/traditional-stilt-fishermen-sri-lanka.jpg" alt="Leela Way" fill className="object-cover object-center filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/80" />
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10 w-full">
      <SectionHeader
        
        title="We Believe the"
        titleHighlight="Journey Matters."
        description="Our founding philosophy: elevated travel is defined by curation, personal freedom, and authentic local access."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {principles.map((item) => (
          <div
            key={item.number}
            className="p-8 border border-white/15 bg-obsidian/90 flex flex-col justify-between gap-8 transition-all duration-400 hover:border-sea-mist/60 hover:bg-white/5 rounded-none shadow-xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sea-mist font-bold">
                  PRINCIPLE {item.number}
                </span>
                <div className="p-2 bg-white/5 border border-white/10">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-3xl font-bold text-leela-white font-sans mt-2">
                {item.title}
              </h3>

              <span className="text-xs font-mono uppercase tracking-widest text-sea-mist">
                {item.subtitle}
              </span>

              <p className="text-sm text-leela-muted leading-relaxed font-sans mt-1">
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
