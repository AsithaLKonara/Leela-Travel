"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Footer from "@/components/layout/Footer";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";

export default function DestinationsPage() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* Header Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-obsidian flex flex-col justify-end p-8 sm:p-16">
        <Image
          src="/images/hero/3100.jpg"
          alt="Explore Sri Lanka"
          fill
          priority
          className="object-cover filter brightness-[0.5] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans leading-tight">
            Ten Places. <br />
            <span className="text-gradient-sea font-bold">
              One Unforgettable Island.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-leela-white/90 max-w-2xl font-sans font-light leading-relaxed">
            Discover a teardrop island where ancient citadels, leopard sanctuaries, and pristine shores meet.
          </p>
        </div>
      </section>

      {/* About Sri Lanka Section */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="About"
          titleHighlight="Sri Lanka."
          description="A land of contrast, where every journey is a cinematic experience."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-leela-white/70 text-lg leading-relaxed">
          <div>
            <p className="mb-6">
              Marco Polo famously declared Sri Lanka to be the finest island of its size in the world. Today, this teardrop-shaped gem in the Indian Ocean remains as captivating as ever.
            </p>
            <p>
              Within just a few hours' drive, you can transition from exploring 2,500-year-old Buddhist ruins in the sweltering plains of the Cultural Triangle to sipping world-class Ceylon tea in the misty, high-altitude cloud forests of Nuwara Eliya.
            </p>
          </div>
          <div>
            <p className="mb-6">
              The island's coastline is fringed with gold and white sand beaches, hidden bays, and colonial fortresses that speak to centuries of maritime trade. Inland, national parks like Yala and Minneriya offer some of the best leopard and elephant safaris outside of Africa.
            </p>
            <p>
              More than its landscapes, it is the warmth of the Sri Lankan people, the vibrant spices of its cuisine, and the unhurried pace of island life that make a journey here truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Journey Planner Modal */}
      <JourneyPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />
    </div>
  );
}
