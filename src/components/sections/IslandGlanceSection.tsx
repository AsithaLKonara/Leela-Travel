"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin } from "lucide-react";

export interface RegionInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  destinations: string[];
  image: string;
  badge: string;
}

export const REGIONS: RegionInfo[] = [
  {
    id: "central",
    name: "Central Highlands",
    tagline: "Mountains, Cloud Forests & Tea Estates",
    description: "Home to misty valleys, 19th-century Ceylon tea estates, dramatic ravines, and the iconic blue highland train journey.",
    destinations: ["Ella", "Nuwara Eliya", "Kandy", "Horton Plains"],
    image: "/images/hero/ella.jpeg",
    badge: "Cloud Forests & Tea",
  },
  {
    id: "cultural",
    name: "Cultural Triangle",
    tagline: "Ancient Kingdoms & Rock Citadels",
    description: "Immerse yourself in 2,500 years of royal heritage. Ancient monolith fortresses, sacred stupas, and jungle ruins.",
    destinations: ["Sigiriya", "Polonnaruwa", "Anuradhapura", "Dambulla"],
    image: "/images/hero/sigiriya.jpeg",
    badge: "2,500 Years History",
  },
  {
    id: "south",
    name: "Southern Coast & Wild",
    tagline: "Colonial Ramparts, Safaris & Ocean",
    description: "Where Dutch colonial fortresses meet leopard safaris and turquoise palm-lined beaches of the Indian Ocean.",
    destinations: ["Galle Fort", "Yala National Park", "Mirissa", "Tangalle"],
    image: "/images/hero/galle.jpeg",
    badge: "Ocean & Wildlife",
  },
  {
    id: "east",
    name: "Wild East & Bays",
    tagline: "Untamed Surf & Secret Coral Bays",
    description: "Secluded beaches, world-renowned surf breaks at Arugam Bay, and tranquil turquoise lagoons of Trincomalee.",
    destinations: ["Arugam Bay", "Trincomalee", "Pasikuda", "Batticaloa"],
    image: "/images/hero/mirissa.jpeg",
    badge: "Surf & Secret Bays",
  },
];

export const IslandGlanceSection: React.FC = () => {
  const [activeRegionId, setActiveRegionId] = useState("central");
  const activeRegion = REGIONS.find((r) => r.id === activeRegionId) || REGIONS[0];

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
      <SectionHeader
        label="[ 02 / THE ISLAND IN A GLANCE ]"
        title="One Island."
        titleHighlight="Many Worlds."
        description="Sri Lanka condenses centuries of ancient kingdoms, high-altitude cloud forests, and tropical oceanfronts into a single island journey."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
        {/* Region Selector Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {REGIONS.map((region) => {
            const isActive = region.id === activeRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegionId(region.id)}
                className={`p-6 text-left transition-all duration-400 border rounded-none flex flex-col gap-2 ${
                  isActive
                    ? "bg-white/10 border-sea-mist shadow-[0_0_20px_rgba(125,217,208,0.15)]"
                    : "bg-obsidian/60 border-white/10 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-sea-mist font-semibold">
                    {region.badge}
                  </span>
                  {isActive && <span className="w-2 h-2 bg-sea-mist rounded-none shadow-[0_0_8px_#7DD9D0]" />}
                </div>
                <h3 className="text-xl font-bold text-leela-white font-sans mt-1">
                  {region.name}
                </h3>
                <p className="text-xs text-leela-muted font-sans line-clamp-1">
                  {region.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Region Spotlight Display Container */}
        <div className="lg:col-span-8 border border-white/15 bg-obsidian/90 relative overflow-hidden flex flex-col justify-end p-8 sm:p-12 min-h-[450px] sm:min-h-[550px] rounded-none shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRegion.id}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={activeRegion.image}
                alt={activeRegion.name}
                fill
                className="object-cover filter brightness-[0.6] contrast-[1.05]"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent z-[1]" />
            </motion.div>
          </AnimatePresence>

          {/* Region Details Overlay */}
          <div className="relative z-10 flex flex-col gap-4 max-w-xl">
            <Badge variant="sea" dot={false}>
              {`[ REGION SPOTLIGHT — ${activeRegion.name.toUpperCase()} ]`}
            </Badge>

            <h3 className="text-3xl sm:text-4xl font-bold text-leela-white font-sans">
              {activeRegion.tagline}
            </h3>

            <p className="text-sm text-leela-white/90 leading-relaxed font-sans">
              {activeRegion.description}
            </p>

            {/* Included Key Destinations */}
            <div className="pt-3 flex flex-wrap gap-2 border-t border-white/15">
              {activeRegion.destinations.map((dest) => (
                <span
                  key={dest}
                  className="text-xs font-mono uppercase tracking-wider px-3 py-1 bg-white/10 text-sea-mist border border-white/15 rounded-none flex items-center gap-1.5"
                >
                  <MapPin className="w-3 h-3 text-sea-mist" />
                  {dest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
