"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import { DESTINATIONS_DATA, DestinationPackage } from "@/data/destinations";

export type { DestinationPackage };

export const DestinationsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10" id="destinations">
      <SectionHeader
        label="[ 04 / DESTINATIONS & TRAVEL PACKAGES ]"
        title="Ten Places."
        titleHighlight="Bespoke Ceylon Packages."
        description="Select any of Sri Lanka’s 10 iconic destinations to explore signature travel packages, daily itineraries, and luxury stay inclusions."
      />

      {/* 10 Destination Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {DESTINATIONS_DATA.map((dest) => (
          <Link
            key={dest.slug}
            href={`/destinations/${dest.slug}`}
            className="group flex flex-col border border-white/15 bg-obsidian/90 transition-all duration-500 hover:border-sea-mist/60 shadow-xl rounded-none overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.85]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              <div className="absolute top-4 left-4">
                <Badge variant="sea" dot={false}>
                  {dest.category}
                </Badge>
              </div>

              <div className="absolute top-4 right-4 font-mono text-xs text-white/80 font-bold bg-obsidian/80 px-2 py-1 border border-white/15">
                {dest.number}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                    {dest.region}
                  </span>
                  <h3 className="text-2xl font-bold text-leela-white font-sans mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col justify-between gap-4 flex-1 bg-obsidian/95 border-t border-white/10">
              <p className="text-xs text-leela-muted leading-relaxed font-sans line-clamp-2">
                {dest.tagline}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="text-leela-white font-bold">{dest.duration}</span>
                  <span className="text-white/20">|</span>
                  <span className="text-sea-mist font-bold">From {dest.price}</span>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-sea-mist group-hover:text-aqua transition-colors flex items-center gap-1">
                  Package <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
