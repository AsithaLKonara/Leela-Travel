"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, Clock } from "lucide-react";

export interface SignatureRoute {
  id: string;
  number: string;
  name: string;
  duration: string;
  stops: string[];
  description: string;
  highlights: string[];
  image: string;
}

export const SIGNATURE_ROUTES: SignatureRoute[] = [
  {
    id: "classic",
    number: "01",
    name: "Classic Ceylon Expedition",
    duration: "8 Days / 7 Nights",
    stops: ["Colombo", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle"],
    description: "The definitive Sri Lankan journey: from highland tea estates and mountain railways down to leopard wilderness safaris and colonial coastal fortresses.",
    highlights: ["First-Class Observation Train", "Private Yala Safari", "Galle Rampart Sunset Dinner"],
    image: "/images/hero/ella.jpeg",
  },
  {
    id: "hill-country",
    number: "02",
    name: "Highland Cloud Train Route",
    duration: "6 Days / 5 Nights",
    stops: ["Kandy", "Hatton", "Nuwara Eliya", "Ella", "Badulla"],
    description: "Dedicated to lovers of high-altitude mountain air, 19th-century Ceylon tea bungalows, secret waterfalls, and historic railway bridges.",
    highlights: ["Tea Planter's Villa Stay", "Nine Arch Viaduct Photography", "Horton Plains Hike"],
    image: "/images/hero/nuwara-eliya.jpeg",
  },
  {
    id: "heritage",
    number: "03",
    name: "Ancient Kingdoms Trail",
    duration: "7 Days / 6 Nights",
    stops: ["Colombo", "Anuradhapura", "Sigiriya", "Polonnaruwa", "Kandy"],
    description: "Traverse 2,500 years of royal heritage across sacred stupas, ancient rock citadel ruins, water gardens, and UNESCO archaeological marvels.",
    highlights: ["Sigiriya Sunrise Climb", "Polonnaruwa Cycling Tour", "Sacred Temple VIP Tour"],
    image: "/images/hero/sigiriya.jpeg",
  },
  {
    id: "southern",
    number: "04",
    name: "Southern Ocean & Wildlife",
    duration: "5 Days / 4 Nights",
    stops: ["Galle Fort", "Mirissa", "Tangalle", "Yala Sanctuary"],
    description: "Combines 17th-century cobble fortress living with oceanfront luxury glamping, blue whale catamaran voyages, and leopard tracking.",
    highlights: ["Private Catamaran Charter", "Oceanfront Glamping", "Bawa Villa Dinner"],
    image: "/images/hero/galle.jpeg",
  },
  {
    id: "wild-east",
    number: "05",
    name: "Wild East & Secret Bays",
    duration: "7 Days / 6 Nights",
    stops: ["Trincomalee", "Pigeon Island", "Pasikuda", "Arugam Bay"],
    description: "Escape to untouched eastern coastlines: coral reef snorkeling, world-renowned point break surfing, and tranquil secluded beach coves.",
    highlights: ["Pigeon Island Marine Snorkeling", "Arugam Bay Private Surf Masterclass", "Kovil Cliff Sunset"],
    image: "/images/hero/mirissa.jpeg",
  },
];

export interface SignatureRoutesSectionProps {
  onPlanClick: () => void;
}

export const SignatureRoutesSection: React.FC<SignatureRoutesSectionProps> = ({ onPlanClick }) => {
  const [selectedRouteId, setSelectedRouteId] = useState("classic");
  const selectedRoute = SIGNATURE_ROUTES.find((r) => r.id === selectedRouteId) || SIGNATURE_ROUTES[0];

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full border-t border-white/10">
      <SectionHeader
        label="[ 05 / THE ROUTES ]"
        title="Don't Just Visit."
        titleHighlight="Follow a Curated Route."
        description="Choose from 5 signature itineraries mapped across Ceylon’s cloud forests, archaeological citadels, and wild coastlines."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
        {/* Route Selector List (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {SIGNATURE_ROUTES.map((route) => {
            const isActive = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`p-5 text-left transition-all duration-400 border rounded-none flex items-center justify-between ${
                  isActive
                    ? "bg-sea-mist text-obsidian font-bold border-sea-mist shadow-[0_0_20px_rgba(125,217,208,0.3)]"
                    : "bg-obsidian/60 border-white/10 text-leela-white hover:border-white/30 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xs ${isActive ? "text-obsidian" : "text-sea-mist"}`}>
                    {route.number}
                  </span>
                  <span className="font-sans text-sm font-semibold tracking-wide">
                    {route.name}
                  </span>
                </div>
                <span className={`text-xs font-mono ${isActive ? "text-obsidian" : "text-leela-muted"}`}>
                  {route.duration.split("/")[0]}
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
              <div className="flex items-center justify-between">
                <Badge variant="sea" dot={false}>
                  {`[ ROUTE ${selectedRoute.number} — ${selectedRoute.duration} ]`}
                </Badge>
                <span className="text-xs font-mono text-sea-mist font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {selectedRoute.duration}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-leela-white font-sans">
                {selectedRoute.name}
              </h3>

              <p className="text-sm text-leela-muted leading-relaxed font-sans">
                {selectedRoute.description}
              </p>

              {/* Route Waypoints Line */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                  Route Waypoints
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-leela-white pt-1">
                  {selectedRoute.stops.map((stop, index) => (
                    <React.Fragment key={stop}>
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-sea-mist font-semibold">
                        {stop}
                      </span>
                      {index < selectedRoute.stops.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2 flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                  Signature Inclusions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedRoute.highlights.map((item) => (
                    <span key={item} className="text-[11px] font-sans p-2 bg-white/5 border border-white/10 text-leela-white">
                      • {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onPlanClick}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Book This Route
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
