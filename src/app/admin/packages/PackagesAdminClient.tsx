"use client";

import React from "react";
import { Package } from "@prisma/client";
import { Plus, Edit2, Trash2 } from "lucide-react";
import Image from "next/image";

export const PackagesAdminClient = ({ packages }: { packages: Package[] }) => {
  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold font-sans">Packages Management</h1>
          <p className="text-leela-white/60 mt-1 text-sm">Manage all travel packages offered on the platform.</p>
        </div>
        <button className="bg-sea-mist text-obsidian px-4 py-2 font-semibold flex items-center gap-2 hover:bg-white transition-colors text-sm">
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border border-white/10 bg-[#161616] flex flex-col group relative overflow-hidden">
            <div className="h-48 w-full relative">
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent opacity-90" />
              
              {/* Actions Overlay */}
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-obsidian/80 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-sea-mist hover:text-obsidian hover:border-sea-mist transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-obsidian/80 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-sea-mist uppercase mb-2 block">
                  {pkg.mood}
                </span>
                <h3 className="text-lg font-bold line-clamp-1">{pkg.title}</h3>
                <p className="text-sm text-leela-white/60 mt-1 line-clamp-2">{pkg.description}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                <span className="font-mono text-leela-white/70">{pkg.duration} Days</span>
                <span className="font-bold text-sea-mist">${pkg.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
