"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

export default function Home() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  const featuredDestinations = [
    {
      id: "ella",
      number: "01",
      name: "Ella",
      region: "Hill Country",
      tagline: "The mist-covered peaks & Nine Arch Viaduct",
      image: "https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=800",
      highlights: ["Train journey through cloud forests", "Nine Arch Bridge", "Little Adam's Peak"],
      badge: "Hill Country",
    },
    {
      id: "sigiriya",
      number: "02",
      name: "Sigiriya",
      region: "Cultural Triangle",
      tagline: "The ancient fortress in the sky",
      image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&q=80&w=800",
      highlights: ["5th Century Citadel", "Pidurangala Rock Sunrise", "Ancient Water Gardens"],
      badge: "UNESCO Heritage",
    },
    {
      id: "galle",
      number: "03",
      name: "Galle Fort",
      region: "Southern Coast",
      tagline: "Dutch colonial cobblestones & ocean breeze",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800",
      highlights: ["Historic Ramparts", "Artisan Cafes & Boutiques", "Sunset Lighthouse Walk"],
      badge: "Colonial Luxury",
    },
    {
      id: "yala",
      number: "04",
      name: "Yala",
      region: "Southern Wilderness",
      tagline: "Kingdom of leopards & untamed coastlines",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=800",
      highlights: ["Leopard Safaris", "Wild Elephant Herds", "Oceanfront Glamping"],
      badge: "Wildlife Safari",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20">
      {/* Background Ambient Lighting Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sea-mist/10 blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-[40%] right-0 w-[500px] h-[500px] bg-sky/10 blur-[180px] rounded-full -z-10" />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
          <Badge variant="sea" dot className="animate-pulse">
            01 — Sri Lanka Reimained
          </Badge>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-leela-white font-sans leading-[1.05]">
            Where every road <br />
            <span className="font-serif italic font-normal text-gradient-sea">
              becomes a story.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-leela-muted max-w-2xl font-sans font-light leading-relaxed">
            An interactive cinematic journal through Sri Lanka’s misty hill country, secret waterfalls, ancient fortresses, and pristine coastal retreats.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsPlannerOpen(true)}
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(125,217,208,0.3)]"
            >
              Plan Your Journey
            </Button>
            <Button
              variant="glass"
              size="lg"
              rightIcon={<Compass className="w-5 h-5 text-sea-mist" />}
              className="w-full sm:w-auto"
            >
              <Link href="/destinations">Explore 10 Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid Section */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          label="02 — CURATED REGIONS"
          title="Destinations of"
          titleHighlight="Unrivaled Beauty"
          description="Immerse yourself in Ceylon’s four core landscapes: from mountain cloud forests to colonial seaside forts."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredDestinations.map((dest) => (
            <GlassCard key={dest.id} hoverEffect glowColor="sea" className="group">
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge variant="glass">{dest.badge}</Badge>
                </div>

                <div className="absolute top-4 right-4 text-xs font-mono text-white/60">
                  {dest.number}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs uppercase tracking-widest text-sea-mist font-semibold">
                    {dest.region}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-leela-white font-sans mt-0.5">
                    {dest.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 bg-obsidian/60">
                <p className="text-sm text-leela-muted">{dest.tagline}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {dest.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-leela-white border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-sea-mist group-hover:text-aqua transition-colors">
                  <span className="font-semibold uppercase tracking-wider">Discover Itinerary</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Bespoke Journey Banner */}
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <GlassCard intensity="heavy" glowColor="sand" className="p-8 sm:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl text-left">
              <Badge variant="sand" dot>
                BESPOKE CEYLON CONCIERGE
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-medium text-leela-white font-sans">
                Craft your tailored <br />
                <span className="font-serif italic text-gradient-sand">
                  luxury travel itinerary.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-leela-muted leading-relaxed">
                Whether you dream of private train carriages through tea gardens or luxury beachfront villas, our local travel curators curate every detail.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setIsPlannerOpen(true)}
              rightIcon={<Sparkles className="w-5 h-5" />}
              className="shrink-0"
            >
              Start Planning Now
            </Button>
          </div>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-12 px-4 sm:px-8 border-t border-white/10 bg-obsidian/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-sans text-lg font-bold tracking-[0.2em] text-leela-white">
              LEELA
            </span>
            <span className="text-xs text-leela-muted">
              © {new Date().getFullYear()} Leela Travel. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-xs text-leela-muted">
            <Link href="/destinations" className="hover:text-sea-mist transition-colors">
              Destinations
            </Link>
            <Link href="/journey" className="hover:text-sea-mist transition-colors">
              Journeys
            </Link>
            <Link href="/story" className="hover:text-sea-mist transition-colors">
              Our Story
            </Link>
          </div>
        </div>
      </footer>

      {/* Journey Planner Trigger Modal */}
      <JourneyPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />
    </div>
  );
}
