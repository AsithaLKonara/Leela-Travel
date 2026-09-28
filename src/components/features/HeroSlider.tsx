"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  region: string;
  image: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "ella",
    number: "01",
    title: "Ella Cloud Forest",
    subtitle: "Misty mountain peaks & Nine Arch Viaduct train journeys",
    region: "Central Highlands",
    image: "/images/hero/chathura-anuradha-subasinghe-40uQmE9Zq8g-unsplash Large.jpeg",
  },
  {
    id: "yala",
    number: "02",
    title: "Yala Wildlife Sanctuary",
    subtitle: "Home to wild leopards, elephant herds, and oceanfront glamping",
    region: "Southern Wilderness",
    image: "/images/hero/elephant Large.jpeg",
  },
  {
    id: "sigiriya",
    number: "03",
    title: "Sigiriya Rock Citadel",
    subtitle: "5th-century palace fortress in the sky rising above lush jungle",
    region: "Cultural Triangle",
    image: "/images/hero/hector-john-periquin-pRxm8cc953U-unsplash Large.jpeg",
  },
  {
    id: "highlands",
    number: "04",
    title: "Highland Tea Estates",
    subtitle: "Rolling green hills & colonial Ceylon tea bungalows",
    region: "Nuwara Eliya",
    image: "/images/hero/kevin-olson-ib1INtxbXc8-unsplash Large.jpeg",
  },
  {
    id: "galle",
    number: "05",
    title: "Galle Fort Ramparts",
    subtitle: "Dutch colonial cobblestone streets & sunset ocean lighthouse walks",
    region: "Southern Coast",
    image: "/images/hero/sander-traa-bfdshIHD5Y4-unsplash Large.jpeg",
  },
  {
    id: "coast",
    number: "06",
    title: "Mirissa Palm Groves",
    subtitle: "Pristine golden sands, turquoise ocean, and blue whale watching",
    region: "Indian Ocean",
    image: "/images/hero/sasha-samusevych-5K2EpEzMUyk-unsplash Large.jpeg",
  },
  {
    id: "kandy",
    number: "07",
    title: "Kandy Sacred Valleys",
    subtitle: "Sacred Tooth Relic temple, mountain lakes, and traditional drumming",
    region: "Central Province",
    image: "/images/hero/yasasi-rajapakse-poadBPsShxg-unsplash Large.jpeg",
  },
  {
    id: "peaks",
    number: "08",
    title: "Knuckles Mountain Range",
    subtitle: "Unexplored hiking trails, secret waterfalls, and bio-diverse peaks",
    region: "UNESCO Forest",
    image: "/images/hero/yves-alarie-3R50kTNBKiE-unsplash Large.jpeg",
  },
];

export interface HeroSliderProps {
  onPlanClick: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onPlanClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance slides after 6-second delay
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const currentSlide = HERO_SLIDES[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] overflow-hidden bg-obsidian flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Slider with Crossfade Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.title}
            fill
            priority
            className="object-cover object-center filter brightness-[0.65] contrast-[1.05]"
            sizes="100vw"
          />
          {/* Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-transparent to-obsidian/60" />
        </motion.div>
      </AnimatePresence>

      {/* Main Hero Overlay Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto pt-28 pb-12 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Badge variant="sea" dot>
            {`[ ${currentSlide.number} / SRI LANKA REIMAGINED ]`}
          </Badge>
          <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-[0.2em] text-leela-white/70">
            {currentSlide.region}
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-leela-white font-sans leading-[1.05] max-w-4xl">
          Where every road <br />
          <span className="font-serif italic font-normal text-gradient-sea">
            becomes a story.
          </span>
        </h1>

        <motion.p
          key={`sub-${currentSlide.id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base sm:text-xl text-leela-white/90 max-w-2xl font-sans font-light leading-relaxed"
        >
          {currentSlide.subtitle}
        </motion.p>

        {/* Action Buttons with Sharp 0px Edges */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onPlanClick}
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="shadow-[0_0_30px_rgba(125,217,208,0.3)] rounded-none"
          >
            Plan Your Journey
          </Button>
          <Button
            variant="glass"
            size="lg"
            rightIcon={<Compass className="w-5 h-5 text-sea-mist" />}
            className="rounded-none"
          >
            <Link href="/destinations">Explore 10 Destinations</Link>
          </Button>
        </div>
      </div>

      {/* Slider Controls Bar */}
      <div className="relative z-10 border-t border-white/10 bg-obsidian/60 backdrop-blur-xl py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Active Slide Info */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono font-bold text-sea-mist">
              {currentSlide.number} / {HERO_SLIDES.length < 10 ? `0${HERO_SLIDES.length}` : HERO_SLIDES.length}
            </span>
            <span className="h-4 w-[1px] bg-white/20" />
            <span className="text-xs uppercase tracking-widest text-leela-white font-medium">
              {currentSlide.title}
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-sea-mist shadow-[0_0_8px_#7DD9D0]"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/15 text-leela-white hover:bg-white/10 hover:border-sea-mist/50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-white/15 text-leela-white hover:bg-white/10 hover:border-sea-mist/50 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
