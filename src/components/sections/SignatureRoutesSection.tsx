"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Clock } from "lucide-react";

export interface SignatureRoutesSectionProps {
  onPlanClick: () => void;
}

export const SignatureRoutesSection: React.FC<SignatureRoutesSectionProps> = ({ onPlanClick }) => {
  const [packages, setPackages] = useState<any[]>([]);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/packages")
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        if (data.length > 0) {
          setSelectedPackageId(data[0].id);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const selectedRoute = packages.find((r) => r.id === selectedPackageId) || packages[0];

  return (
    <section className="relative py-24 w-full border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero/3100.jpg" alt="Signature Routes" fill className="object-cover object-center filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/80" />
      </div>
      <div className="px-4 sm:px-8 max-w-7xl mx-auto relative z-10 w-full">
        <SectionHeader
          title="Don't Just Visit."
          titleHighlight="Follow a Curated Route."
          description="Choose from our signature itineraries mapped across Ceylon’s cloud forests, archaeological citadels, and wild coastlines."
        />

        {packages.length > 0 && selectedRoute && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
            {/* Route Selector List (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {packages.map((pkg, index) => {
                const isActive = pkg.id === selectedPackageId;
                const numberFormatted = String(index + 1).padStart(2, "0");

                return (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-5 text-left transition-all duration-400 border rounded-none flex items-center justify-between ${
                      isActive
                        ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_20px_rgba(125,217,208,0.3)]"
                        : "bg-obsidian/60 border-white/10 text-leela-white hover:border-white/30 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs ${isActive ? "text-obsidian" : "text-sea-mist"}`}>
                        {numberFormatted}
                      </span>
                      <span className="font-sans text-sm font-semibold tracking-wide line-clamp-1">
                        {pkg.title}
                      </span>
                    </div>
                    <span className={`text-xs font-mono whitespace-nowrap ml-2 ${isActive ? "text-obsidian" : "text-leela-muted"}`}>
                      {pkg.duration} Days
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Route Detail & Animated Route Line (7 cols) */}
            <div className="lg:col-span-7 border border-white/15 bg-obsidian/95 relative overflow-hidden p-8 sm:p-12 flex flex-col justify-between rounded-none shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRoute.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col gap-6 relative z-10"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-leela-white/70 uppercase">
                      {`[ ROUTE — ${selectedRoute.mood} ]`}
                    </span>
                    <span className="text-sm font-mono text-sea-mist font-semibold flex items-center gap-1.5">
                      <Clock className="w-4 h-4" /> {selectedRoute.duration} Days
                    </span>
                  </div>

                  <h3 className="text-3xl font-bold text-leela-white font-sans">
                    {selectedRoute.title}
                  </h3>

                  <p className="text-sm text-leela-muted leading-relaxed font-sans">
                    {selectedRoute.description}
                  </p>

                  {selectedRoute.highlights && selectedRoute.highlights.length > 0 && (
                    <div className="pt-2 flex flex-col gap-2 mt-4 border-t border-white/10 pt-4">
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                        Signature Inclusions
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {selectedRoute.highlights.map((item: string, idx: number) => (
                          <span key={idx} className="text-[11px] font-sans p-2 bg-white/5 border border-white/10 text-leela-white">
                            • {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-6 mt-2 flex items-center justify-between border-t border-white/10">
                    <Button
                      variant="primary"
                      size="md"
                      onClick={onPlanClick}
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Book This Route
                    </Button>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-mono text-leela-muted uppercase tracking-widest">
                        From
                      </span>
                      <span className="text-sea-mist font-bold text-lg font-mono">
                        ${selectedRoute.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
