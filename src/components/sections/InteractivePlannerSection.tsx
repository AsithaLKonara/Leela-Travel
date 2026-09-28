"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const InteractivePlannerSection: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState("Mountains");
  const [selectedDuration, setSelectedDuration] = useState("7 Days");
  const [selectedParty, setSelectedParty] = useState("Couple");
  const [step, setStep] = useState<"builder" | "success">("builder");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userContact, setUserContact] = useState({ name: "", email: "", notes: "" });

  const moods = ["Mountains", "Ocean", "Wildlife", "Culture", "Adventure"];
  const durations = ["3 Days", "5 Days", "7 Days", "10+ Days"];
  const parties = ["Solo", "Couple", "Family", "Friends"];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
    }, 1000);
  };

  return (
    <section className="relative py-24 w-full border-t border-white/10 overflow-hidden" id="planner">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero/yasasi-rajapakse-poadBPsShxg-unsplash.jpg" alt="Interactive Planner" fill className="object-cover object-center filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/80" />
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10 w-full">
      <SectionHeader
        
        title="Tell Us Where You"
        titleHighlight="Want to Go."
        description="Configure your preferences below and our travel curators will craft your custom Ceylon itinerary."
      />

      <div className="border border-white/15 bg-obsidian/95 p-8 sm:p-12 rounded-none shadow-2xl mt-8">
        {step === "builder" ? (
          <form onSubmit={handleQuickSubmit} className="flex flex-col gap-10">
            {/* Step 01: What Calls You */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-bold">
                01. What Calls You?
              </label>
              <div className="flex flex-wrap gap-3">
                {moods.map((mood) => {
                  const active = selectedMood === mood;
                  return (
                    <button
                      type="button"
                      key={mood}
                      onClick={() => setSelectedMood(mood)}
                      className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all duration-300 border rounded-none ${
                        active
                          ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_15px_rgba(125,217,208,0.3)]"
                          : "bg-white/5 text-leela-muted border-white/10 hover:border-white/30 hover:text-leela-white"
                      }`}
                    >
                      [ {mood} ]
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 02: How Long */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-bold">
                02. Estimated Duration?
              </label>
              <div className="flex flex-wrap gap-3">
                {durations.map((dur) => {
                  const active = selectedDuration === dur;
                  return (
                    <button
                      type="button"
                      key={dur}
                      onClick={() => setSelectedDuration(dur)}
                      className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all duration-300 border rounded-none ${
                        active
                          ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_15px_rgba(125,217,208,0.3)]"
                          : "bg-white/5 text-leela-muted border-white/10 hover:border-white/30 hover:text-leela-white"
                      }`}
                    >
                      [ {dur} ]
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 03: Who's Traveling */}
            <div className="flex flex-col gap-4">
              <label className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-bold">
                03. Who&apos;s Traveling?
              </label>
              <div className="flex flex-wrap gap-3">
                {parties.map((party) => {
                  const active = selectedParty === party;
                  return (
                    <button
                      type="button"
                      key={party}
                      onClick={() => setSelectedParty(party)}
                      className={`px-5 py-3 text-xs font-mono uppercase tracking-wider transition-all duration-300 border rounded-none ${
                        active
                          ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_15px_rgba(125,217,208,0.3)]"
                          : "bg-white/5 text-leela-muted border-white/10 hover:border-white/30 hover:text-leela-white"
                      }`}
                    >
                      [ {party} ]
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 04: Traveler Details */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-leela-muted mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Rostova"
                  value={userContact.name}
                  onChange={(e) => setUserContact({ ...userContact, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-3 text-xs text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-leela-muted mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@example.com"
                  value={userContact.email}
                  onChange={(e) => setUserContact({ ...userContact, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-3 text-xs text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist font-sans"
                />
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-sea-mist">
                Selected: {selectedMood} • {selectedDuration} • {selectedParty}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto rounded-none shadow-[0_0_20px_rgba(125,217,208,0.3)]"
                >
                  Start My Journey →
                </Button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
            <div className="w-16 h-16 rounded-none bg-sea-mist/20 text-sea-mist flex items-center justify-center border border-sea-mist/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-leela-white font-sans">
              Thank You, {userContact.name || "Explorer"}!
            </h3>
            <p className="text-sm text-leela-muted max-w-md font-sans leading-relaxed">
              Our Ceylon travel curator has received your preferences ({selectedMood}, {selectedDuration}, {selectedParty}) and will email your tailored itinerary within 24 hours.
            </p>
            <Button
              variant="outline"
              size="md"
              onClick={() => setStep("builder")}
              className="mt-4 rounded-none"
            >
              Modify Preferences
            </Button>
          </div>
        )}
      </div>
      </div>
    </section>
  );
};
