"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroSlider } from "@/components/features/HeroSlider";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const curatedDestinations = [
    {
      id: "ella",
      number: "01",
      name: "Ella Cloud Forest",
      region: "Central Highlands",
      elevation: "1,041m Elevation",
      tagline: "The mist-covered tea estate peaks & Nine Arch Viaduct train journeys",
      image: "/images/destinations/ella.png",
      highlights: ["Demodara Nine Arch Viaduct", "Little Adam's Peak Ridge Walk", "Ravana Secret Waterfalls"],
      category: "Mountain & Railways",
    },
    {
      id: "sigiriya",
      number: "02",
      name: "Sigiriya Citadel",
      region: "Cultural Triangle",
      elevation: "370m Rock Citadel",
      tagline: "Ancient 5th-century royal palace fortress rising above emerald jungle canopy",
      image: "/images/destinations/sigiriya.png",
      highlights: ["King Kashyapa Palace Ruins", "Pidurangala Sunrise Overlook", "Frescoes & Mirror Wall"],
      category: "UNESCO Heritage",
    },
    {
      id: "galle",
      number: "03",
      name: "Galle Fort Ramparts",
      region: "Southern Coastline",
      elevation: "Coastal Bastion",
      tagline: "Dutch colonial cobblestones, artisan boutiques, and ocean breeze",
      image: "/images/destinations/galle.png",
      highlights: ["17th-Century Rampart Sunset Walk", "Galle Lighthouse", "Boutique Tea Parlors"],
      category: "Colonial Luxury",
    },
    {
      id: "yala",
      number: "04",
      name: "Yala National Park",
      region: "Southern Wilderness",
      elevation: "Wilderness Reserve",
      tagline: "Highest leopard density in the world & oceanfront safari glamping",
      image: "/images/destinations/yala.jpg",
      highlights: ["Leopard Tracking Safaris", "Wild Asian Elephant Herds", "Indian Ocean Coastal Dunes"],
      category: "Wildlife & Safaris",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* Hero Slider Section */}
      <HeroSlider onPlanClick={() => setIsPlannerOpen(true)} />

      {/* Architectural Destination Showcase Section */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          label="[ 02 / CURATED REGIONS ]"
          badgeDot={false}
          title="Destinations of"
          titleHighlight="Unrivaled Beauty"
          description="Immerse yourself in Ceylon’s four core landscapes: from cloud forest train routes to ancient citadel ruins."
          align="left"
        />

        {/* Asymmetric Sharp Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          {/* Main Featured Highlight Card (Spans 7 cols) */}
          <div className="lg:col-span-7 flex flex-col border border-white/15 bg-obsidian/90 p-0 group transition-all duration-500 hover:border-sea-mist/60 shadow-2xl rounded-none">
            <div className="relative h-96 sm:h-[450px] w-full overflow-hidden">
              <Image
                src={curatedDestinations[0].image}
                alt={curatedDestinations[0].name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.9]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <Badge variant="sea" dot={false}>
                  {curatedDestinations[0].category}
                </Badge>
                <Badge variant="glass" dot={false}>
                  {curatedDestinations[0].elevation}
                </Badge>
              </div>

              <div className="absolute top-4 right-4 font-mono text-xs text-sea-mist font-bold">
                {curatedDestinations[0].number} / 04
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.25em] text-sea-mist font-mono font-semibold">
                  {curatedDestinations[0].region}
                </span>
                <h3 className="text-3xl sm:text-4xl font-semibold text-leela-white font-sans">
                  {curatedDestinations[0].name}
                </h3>
              </div>
            </div>

            <div className="p-8 flex flex-col gap-6 bg-obsidian/95 border-t border-white/10">
              <p className="text-sm text-leela-muted leading-relaxed font-sans">
                {curatedDestinations[0].tagline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
                {curatedDestinations[0].highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-leela-white font-mono border border-white/10 p-2.5 bg-white/5">
                    <span className="w-1.5 h-1.5 bg-sea-mist shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-sea-mist">
                  Bespoke Itinerary Ready
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPlannerOpen(true)}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Ella Itinerary
                </Button>
              </div>
            </div>
          </div>

          {/* Secondary Stack (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {curatedDestinations.slice(1).map((dest) => (
              <div
                key={dest.id}
                className="flex flex-col sm:flex-row border border-white/15 bg-obsidian/90 group transition-all duration-500 hover:border-sea-mist/50 rounded-none overflow-hidden"
              >
                <div className="relative h-56 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent sm:hidden" />
                </div>

                <div className="p-6 flex flex-col justify-between gap-4 w-full bg-obsidian/95">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs font-mono text-sea-mist">
                      <span>{dest.number} — {dest.region}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-leela-white font-sans">
                      {dest.name}
                    </h4>
                    <p className="text-xs text-leela-muted leading-relaxed line-clamp-2 font-sans">
                      {dest.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-sea-mist group-hover:text-aqua transition-colors font-mono">
                    <span className="uppercase tracking-wider">{dest.category}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Concierge Banner */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="border border-white/15 bg-obsidian/95 p-8 sm:p-14 relative overflow-hidden rounded-none shadow-2xl">
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-1/3 bg-sea-mist/5 blur-3xl" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col gap-4 max-w-2xl">
              <Badge variant="sand" dot={false}>
                [ PRIVATE TRAVEL CURATION ]
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-semibold text-leela-white font-sans">
                Craft your bespoke <br />
                <span className="text-gradient-sand font-bold">
                  Ceylon travel journal.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-leela-muted leading-relaxed font-sans">
                Whether you dream of private train carriages through high tea estates or luxury oceanfront villas in Galle, our local travel curators oversee every detail.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsPlannerOpen(true)}
              rightIcon={<Sparkles className="w-5 h-5" />}
              className="shrink-0 rounded-none shadow-[0_0_25px_rgba(217,199,163,0.25)]"
            >
              Start Planning Now
            </Button>
          </div>
        </div>
      </section>

      {/* 4-Column Detailed Footer */}
      <Footer />

      {/* Journey Planner Modal */}
      <JourneyPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />
    </div>
  );
}
