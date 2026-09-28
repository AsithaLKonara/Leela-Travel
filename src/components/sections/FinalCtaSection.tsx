"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

export interface FinalCtaSectionProps {
  onPlanClick: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onPlanClick }) => {
  return (
    <section className="relative w-full py-32 px-4 sm:px-8 border-t border-white/10 bg-obsidian text-leela-white overflow-hidden rounded-none">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/ella.jpeg"
          alt="Sri Lanka Horizon"
          fill
          className="object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/80" />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <Badge variant="sea" dot={false}>
          [ 11 / CINEMATIC FINAL CTA ]
        </Badge>

        <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-leela-white font-sans leading-[1.05]">
          Your Next <br />
          <span className="text-gradient-sea font-bold">
            Story Starts Here.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-leela-white/90 max-w-xl font-sans font-light leading-relaxed">
          Sri Lanka is waiting. Step beyond standard itineraries into bespoke Ceylon travel.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onPlanClick}
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-[0_0_35px_rgba(125,217,208,0.4)] rounded-none"
          >
            Plan Your Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};
