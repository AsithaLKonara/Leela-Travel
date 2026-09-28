import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Footer from "@/components/layout/Footer";

export default function JourneyPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-obsidian flex flex-col justify-end p-8 sm:p-16">
        <Image
          src="/images/hero/aerial-shot-long-road-surrounded-by-trees-fields.jpg"
          alt="Journeys"
          fill
          priority
          className="object-cover filter brightness-[0.5] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans leading-tight">
            Journeys
          </h1>
          <p className="text-base sm:text-xl text-leela-white/90 max-w-2xl font-sans font-light">
            A curated collection of routes across the tear-drop island.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="The Routes."
          description="Discover our signature itineraries spanning the length and breadth of Sri Lanka."
        />
        <div className="mt-16 text-leela-white/70 text-lg max-w-3xl leading-relaxed">
          <p className="mb-6">
            Every journey with Leela Travel is designed as a cinematic sequence—moving from misty cloud forests to arid savannas, from ancient monolithic rock citadels to the Indian Ocean's edge. 
          </p>
          <p>
            Whether you choose the Classic Ceylon Explorer, the Highland Tea Trails, or the Southern Coastal Escape, our travel designers ensure a seamless, luxurious narrative from arrival to departure. Explore our curated packages to find your perfect narrative.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
