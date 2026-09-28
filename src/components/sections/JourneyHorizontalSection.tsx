"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export interface JourneyStep {
  step: string;
  code: string;
  name: string;
  tagline: string;
  story: string;
  image: string;
  experience: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: "01",
    code: "CMB",
    name: "Colombo",
    tagline: "The Oceanfront Gateway",
    story: "Begin where historic colonial architecture meets modern oceanfront luxury, setting the tone for Ceylon exploration.",
    image: "/images/hero/galle.jpeg",
    experience: "Colonial High Tea & Coastal Luxury Stay",
  },
  {
    step: "02",
    code: "KDY",
    name: "Kandy",
    tagline: "Sacred Lake & Mountain Kingdom",
    story: "Ascend into the misty hills surrounding the Temple of the Tooth Relic, enveloped in traditional drumming and royal botanical gardens.",
    image: "/images/hero/kandy.jpeg",
    experience: "Sacred Relic Private VIP Access",
  },
  {
    step: "03",
    code: "NWE",
    name: "Nuwara Eliya",
    tagline: "High-Altitude Tea Estates",
    story: "Immerse yourself in lush tea gardens above the clouds, staying in restored 19th-century Ceylon planters' bungalows.",
    image: "/images/hero/nuwara-eliya.jpeg",
    experience: "Private Tea Plucking & Master Tasting",
  },
  {
    step: "04",
    code: "ELL",
    name: "Ella",
    tagline: "Where the Mountains Slow Down",
    story: "Board the legendary blue train across the Nine Arch Viaduct into Ella Gap, where mountain trails call quietly.",
    image: "/images/hero/ella.jpeg",
    experience: "First-Class Observation Train Carriage",
  },
  {
    step: "05",
    code: "YAL",
    name: "Yala",
    tagline: "The Untamed Wilderness",
    story: "Descend into southern wildlife sanctuaries where leopards roam untamed coastal dunes and ancient jungle waterholes.",
    image: "/images/hero/yala.jpeg",
    experience: "Private Leopard Tracking Safari",
  },
  {
    step: "06",
    code: "MIR",
    name: "Mirissa",
    tagline: "Indian Ocean Horizon",
    story: "Surrender to golden palm-lined beaches, secret coconut groves, and blue whale ocean voyages into deep water.",
    image: "/images/hero/mirissa.jpeg",
    experience: "Private Catamaran Whale Expedition",
  },
  {
    step: "07",
    code: "GAL",
    name: "Galle Fort",
    tagline: "Sunset Ramparts & Heritage",
    story: "Conclude your journey strolling 17th-century Dutch ramparts as ocean waves crash against historic lighthouse walls.",
    image: "/images/destinations/galle.png",
    experience: "Rampart Sunset Concierge Dinner",
  },
];

export interface JourneyHorizontalSectionProps {
  onPlanClick: () => void;
}

export const JourneyHorizontalSection: React.FC<JourneyHorizontalSectionProps> = ({ onPlanClick }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = JOURNEY_STEPS[activeStepIndex];

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev + 1) % JOURNEY_STEPS.length);
  };

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev - 1 + JOURNEY_STEPS.length) % JOURNEY_STEPS.length);
  };

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
      <SectionHeader
        label="[ 03 / A JOURNEY THROUGH SRI LANKA ]"
        title="Follow the Iconic"
        titleHighlight="Highland & Ocean Route"
        description="Experience Sri Lanka’s ultimate 7-stop journey: from capital oceanfronts through highland railways down to southern ramparts."
      />

      {/* Step Stepper Navigation Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {JOURNEY_STEPS.map((stepItem, index) => {
          const isActive = index === activeStepIndex;
          return (
            <button
              key={stepItem.code}
              onClick={() => setActiveStepIndex(index)}
              className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all border rounded-none whitespace-nowrap flex items-center gap-2 ${
                isActive
                  ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_15px_rgba(125,217,208,0.3)]"
                  : "bg-white/5 text-leela-muted border-white/10 hover:border-white/30 hover:text-leela-white"
              }`}
            >
              <span>{stepItem.step}</span>
              <span>{stepItem.name}</span>
            </button>
          );
        })}
      </div>

      {/* Heroic Journey Step Card */}
      <div className="border border-white/15 bg-obsidian/95 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[500px] rounded-none shadow-2xl">
        {/* Left Content (5 cols) */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between gap-6 relative z-10 bg-obsidian/95">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Badge variant="sea" dot={false}>
                {`[ STOP ${currentStep.step} / 07 — ${currentStep.code} ]`}
              </Badge>
              <span className="text-xs font-mono text-sea-mist font-semibold">
                {currentStep.experience}
              </span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-leela-white font-sans mt-2">
              {currentStep.name}
            </h3>

            <p className="text-sm font-semibold uppercase tracking-widest text-sea-mist font-sans">
              {currentStep.tagline}
            </p>

            <p className="text-sm text-leela-muted leading-relaxed font-sans mt-2">
              {currentStep.story}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <Button
              variant="primary"
              size="md"
              onClick={onPlanClick}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Include in My Itinerary
            </Button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 border border-white/15 text-leela-white hover:bg-white/10 hover:border-sea-mist/50 transition-colors rounded-none"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 border border-white/15 text-leela-white hover:bg-white/10 hover:border-sea-mist/50 transition-colors rounded-none"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Photography (7 cols) */}
        <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.code}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image
                src={currentStep.image}
                alt={currentStep.name}
                fill
                className="object-cover filter brightness-[0.85] contrast-[1.05]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent hidden lg:block" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
