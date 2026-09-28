"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface TravelMood {
  id: string;
  name: string;
  tagline: string;
  quote: string;
  image: string;
  destinations: string;
}

export const MOODS: TravelMood[] = [
  {
    id: "mountains",
    name: "MOUNTAINS",
    tagline: "High-Altitude Cloud Forests",
    quote: "Misty mornings. Endless green. Roads above the clouds.",
    image: "/images/hero/ella.jpg",
    destinations: "Ella • Nuwara Eliya • Horton Plains",
  },
  {
    id: "wildlife",
    name: "WILDLIFE",
    tagline: "Untamed Safaris & Jungle Dunes",
    quote: "Wild tracks. Ancient forests. An island untamed.",
    image: "/images/hero/yala%20elephants.jpg",
    destinations: "Yala • Wilpattu • Minneriya",
  },
  {
    id: "ocean",
    name: "OCEAN",
    tagline: "Turquoise Horizon & Ramparts",
    quote: "Salt air. Golden horizons. The southern coastal road.",
    image: "/images/hero/traditional-stilt-fishermen-sri-lanka.jpg",
    destinations: "Galle Fort • Mirissa • Tangalle",
  },
  {
    id: "culture",
    name: "CULTURE",
    tagline: "Sacred Relics & Citadels",
    quote: "Sacred stupas. Royal rock fortresses. 2,500 years of living heritage.",
    image: "/images/hero/sigiriya.jpg",
    destinations: "Sigiriya • Kandy • Anuradhapura",
  },
  {
    id: "adventure",
    name: "ADVENTURE",
    tagline: "Point Breaks & Peak Treks",
    quote: "Secret ravines. World-class point breaks. Unexplored mountain peaks.",
    image: "/images/hero/wilpattuwa.jpg",
    destinations: "Arugam Bay • Knuckles • Kitulgala",
  },
];

export const TravelMoodsSection: React.FC = () => {
  const [activeMoodId, setActiveMoodId] = useState("mountains");
  const activeMood = MOODS.find((m) => m.id === activeMoodId) || MOODS[0];

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
      <SectionHeader
        
        title="What Are You"
        titleHighlight="Chasing?"
        description="Select an experience mood to reveal the landscape, rhythm, and travel style crafted for your journey."
      />

      <div className="relative border border-white/15 bg-obsidian/95 overflow-hidden min-h-[550px] flex flex-col justify-between p-8 sm:p-14 rounded-none shadow-2xl mt-8">
        {/* Dynamic Background Image Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMood.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={activeMood.image}
              alt={activeMood.name}
              fill
              className="object-cover filter brightness-[0.5] contrast-[1.05]"
              sizes="(max-width: 1200px) 100vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Top Mood Tabs */}
        <div className="relative z-10 flex flex-wrap items-center gap-3">
          {MOODS.map((mood) => {
            const isActive = mood.id === activeMoodId;
            return (
              <button
                key={mood.id}
                onClick={() => setActiveMoodId(mood.id)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 border rounded-none ${
                  isActive
                    ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_20px_rgba(125,217,208,0.4)]"
                    : "bg-obsidian/70 backdrop-blur-md text-leela-white border-white/20 hover:border-white/40 hover:bg-white/10"
                }`}
              >
                {mood.name}
              </button>
            );
          })}
        </div>

        {/* Bottom Mood Description Overlay */}
        <div className="relative z-10 flex flex-col gap-4 max-w-2xl mt-16 sm:mt-24">
          <Badge variant="sea" dot={false}>
            {`[ MOOD EXPERIENCE — ${activeMood.tagline.toUpperCase()} ]`}
          </Badge>

          <h3 className="text-3xl sm:text-5xl font-bold text-leela-white font-sans leading-tight">
            “{activeMood.quote}”
          </h3>

          <p className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-semibold">
            {activeMood.destinations}
          </p>
        </div>
      </div>
    </section>
  );
};
