"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Clock, MapPin, ArrowUpRight } from "lucide-react";

interface PackageCardProps {
  pkg: {
    slug: string;
    title: string;
    description: string;
    price: number;
    duration: number;
    mood: string;
    image: string;
    highlights: string[];
  };
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <Link href={`/packages/${pkg.slug}`} className="block group">
      <GlassCard hoverEffect glowColor="sea" className="flex flex-col h-full">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-obsidian/80 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-sea-mist uppercase">
              {pkg.mood}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-leela-white font-sans leading-tight group-hover:text-sea-mist transition-colors">
              {pkg.title}
            </h3>
            <p className="text-sm text-leela-muted line-clamp-2">
              {pkg.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs font-mono text-leela-white/70">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sea-mist" /> {pkg.duration} Days
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sea-mist" /> {pkg.highlights.length} Stops
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-leela-muted uppercase tracking-widest">From</span>
                <span className="text-lg font-bold text-leela-white">${pkg.price}</span>
              </div>
              
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-sea-mist group-hover:border-sea-mist transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-leela-white group-hover:text-obsidian" />
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
};
