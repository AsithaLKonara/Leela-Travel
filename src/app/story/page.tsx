import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import Footer from "@/components/layout/Footer";

export default function StoryPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-obsidian text-leela-white selection:bg-sea-mist/20 rounded-none font-sans">
      {/* Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-obsidian flex flex-col justify-end p-8 sm:p-16">
        <Image
          src="/images/hero/3100.jpg"
          alt="Our Story"
          fill
          priority
          className="object-cover filter brightness-[0.5] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col gap-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-leela-white font-sans leading-tight">
            Our Story
          </h1>
          <p className="text-base sm:text-xl text-leela-white/90 max-w-2xl font-sans font-light">
            We believe the journey matters as much as the destination.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        <SectionHeader
          title="The Leela"
          titleHighlight="Vision."
          description="Crafting unforgettable Sri Lankan narratives since our inception."
        />
        <div className="mt-16 text-leela-white/70 text-lg max-w-3xl leading-relaxed">
          <p className="mb-6">
            Leela Travel was born out of a profound love for Sri Lanka—its diverse landscapes, rich heritage, and warm hospitality. Our founders realized that most travelers only scratch the surface of what the island has to offer.
          </p>
          <p className="mb-6">
            We set out to create a travel company that goes beyond the ordinary. We curate experiences that immerse you in the local culture, connect you with the breathtaking environment, and offer unparalleled luxury.
          </p>
          <p>
            Our dedicated team of travel curators and local experts work tirelessly to ensure every detail of your journey is perfect. From hand-picked boutique sanctuaries to exclusive private experiences, we are committed to making your Sri Lankan story unforgettable.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
