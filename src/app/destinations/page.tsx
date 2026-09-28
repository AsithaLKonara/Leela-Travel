"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import Footer from "@/components/layout/Footer";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";

export default function DestinationsPage() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans pt-28">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
          <Badge variant="sea" dot={false}>
            [ ALL 10 CEYLON DESTINATIONS ]
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans leading-tight">
            Ten Places. <br />
            <span className="text-gradient-sea font-bold">
              One Unforgettable Island.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-leela-muted max-w-2xl font-sans font-light leading-relaxed">
            Explore our 10 curated destination packages spanning mountain cloud forests, 2,500-year-old citadels, leopard sanctuaries, and southern rampart fortresses.
          </p>
        </div>
      </section>

      {/* Destinations Section */}
      <DestinationsSection />

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
