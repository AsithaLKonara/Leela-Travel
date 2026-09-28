"use client";

import React, { useState, useMemo } from "react";
import { PackageCard } from "@/components/features/PackageCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SlidersHorizontal, Search } from "lucide-react";

interface Package {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  mood: string;
  image: string;
  highlights: string[];
}

export const PackagesClient = ({ packages }: { packages: Package[] }) => {
  const [search, setSearch] = useState("");
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);

  const moods = Array.from(new Set(packages.map((p) => p.mood)));

  const toggleMood = (mood: string) => {
    setSelectedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
  };

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesSearch = pkg.title.toLowerCase().includes(search.toLowerCase()) || pkg.description.toLowerCase().includes(search.toLowerCase());
      const matchesMood = selectedMoods.length === 0 || selectedMoods.includes(pkg.mood);
      const matchesPrice = pkg.price <= maxPrice;
      const matchesDuration = !selectedDuration || pkg.duration <= selectedDuration;

      return matchesSearch && matchesMood && matchesPrice && matchesDuration;
    });
  }, [packages, search, selectedMoods, maxPrice, selectedDuration]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <SectionHeader
        title="Curated"
        titleHighlight="Journeys."
        description="Discover our hand-picked collection of cinematic Sri Lankan experiences."
        className="mb-12"
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filter */}
        <aside className="lg:col-span-1 space-y-8">
          <div className="border border-white/10 bg-obsidian/60 p-6 flex flex-col gap-8">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <SlidersHorizontal className="w-5 h-5 text-sea-mist" />
              <h3 className="font-mono text-sm uppercase tracking-widest text-leela-white font-bold">Filters</h3>
            </div>

            {/* Search */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-widest text-sea-mist">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-leela-white/50" />
                <input
                  type="text"
                  placeholder="Find a journey..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none py-2.5 pl-10 pr-4 text-sm text-leela-white placeholder:text-leela-white/30 focus:outline-none focus:border-sea-mist/50 transition-colors"
                />
              </div>
            </div>

            {/* Moods */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-widest text-sea-mist">Mood / Type</label>
              <div className="flex flex-col gap-2">
                {moods.map((mood) => (
                  <label key={mood} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedMoods.includes(mood) ? 'bg-sea-mist border-sea-mist' : 'border-white/20 group-hover:border-sea-mist/50'}`}>
                      {selectedMoods.includes(mood) && <div className="w-2 h-2 bg-obsidian" />}
                    </div>
                    <span className={`text-sm ${selectedMoods.includes(mood) ? 'text-leela-white' : 'text-leela-white/70 group-hover:text-leela-white'}`}>
                      {mood}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-widest text-sea-mist">Max Duration</label>
              <select
                value={selectedDuration || ""}
                onChange={(e) => setSelectedDuration(e.target.value ? Number(e.target.value) : null)}
                className="w-full bg-white/5 border border-white/10 rounded-none py-2.5 px-4 text-sm text-leela-white focus:outline-none focus:border-sea-mist/50 transition-colors appearance-none"
              >
                <option value="" className="bg-obsidian">Any Duration</option>
                <option value="5" className="bg-obsidian">Up to 5 Days</option>
                <option value="7" className="bg-obsidian">Up to 7 Days</option>
                <option value="10" className="bg-obsidian">Up to 10 Days</option>
                <option value="14" className="bg-obsidian">Up to 14 Days</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-3">
              <label className="text-xs font-mono uppercase tracking-widest text-sea-mist flex justify-between">
                <span>Max Price</span>
                <span className="text-leela-white/70">${maxPrice}</span>
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-sea-mist"
              />
            </div>
          </div>
        </aside>

        {/* Package Grid */}
        <div className="lg:col-span-3">
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 border border-white/10 bg-obsidian/40 text-center px-6">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-leela-white/50" />
              </div>
              <h3 className="text-xl font-bold text-leela-white mb-2">No journeys found</h3>
              <p className="text-leela-muted text-sm max-w-md">
                Try adjusting your filters or search terms to discover more cinematic Sri Lankan experiences.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedMoods([]);
                  setMaxPrice(3000);
                  setSelectedDuration(null);
                }}
                className="mt-6 text-sm font-mono text-sea-mist hover:text-white transition-colors"
              >
                [ RESET ALL FILTERS ]
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
