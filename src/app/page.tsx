"use client";

import React, { useState } from "react";
import { HeroSlider } from "@/components/features/HeroSlider";
import { IslandGlanceSection } from "@/components/sections/IslandGlanceSection";
import { JourneyHorizontalSection } from "@/components/sections/JourneyHorizontalSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { SignatureRoutesSection } from "@/components/sections/SignatureRoutesSection";
import { TravelMoodsSection } from "@/components/sections/TravelMoodsSection";
import { IslandNumbersSection } from "@/components/sections/IslandNumbersSection";
import { CinematicMomentsSection } from "@/components/sections/CinematicMomentsSection";
import { LeelaWaySection } from "@/components/sections/LeelaWaySection";
import { InteractivePlannerSection } from "@/components/sections/InteractivePlannerSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import Footer from "@/components/layout/Footer";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";

export default function Home() {
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* 01. CINEMATIC HERO */}
      <HeroSlider onPlanClick={() => setIsPlannerOpen(true)} />

      {/* 02. THE ISLAND IN A GLANCE */}
      <IslandGlanceSection />

      {/* 03. A JOURNEY THROUGH SRI LANKA */}
      <JourneyHorizontalSection onPlanClick={() => setIsPlannerOpen(true)} />

      {/* 04. DESTINATIONS WITH TRAVEL PACKAGES (10 PLACES + PACKAGE SLUGS) */}
      <DestinationsSection />

      {/* 05. THE ROUTES */}
      <SignatureRoutesSection onPlanClick={() => setIsPlannerOpen(true)} />

      {/* 06. CHOOSE YOUR WAY TO TRAVEL (WHAT ARE YOU CHASING?) */}
      <TravelMoodsSection />

      {/* 07. SRI LANKA BY THE NUMBERS */}
      <IslandNumbersSection />

      {/* 08. MOMENTS WORTH TRAVELLING FOR */}
      <CinematicMomentsSection />

      {/* 09. THE LEELA WAY */}
      <LeelaWaySection />

      {/* 10. YOUR JOURNEY, YOUR STORY (CONVERSION ENGINE) */}
      <InteractivePlannerSection />

      {/* 11. CINEMATIC FINAL CTA */}
      <FinalCtaSection onPlanClick={() => setIsPlannerOpen(true)} />

      {/* 12. MINIMAL HIGH-PROFIT FOOTER */}
      <Footer />

      {/* Journey Planner Modal */}
      <JourneyPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />
    </div>
  );
}
