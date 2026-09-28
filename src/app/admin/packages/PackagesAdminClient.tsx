"use client";

import React, { useState } from "react";
import { Package } from "@prisma/client";
import { Plus, Edit2, Trash2 } from "lucide-react";
import Image from "next/image";
import { PackageFormSidebar } from "@/components/admin/PackageFormSidebar";

export const PackagesAdminClient = ({ packages: initialPackages }: { packages: Package[] }) => {
  const [packages, setPackages] = useState<Package[]>(initialPackages);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePackage, setActivePackage] = useState<Package | null>(null);

  const handleOpenCreate = () => {
    setActivePackage(null);
    setIsSidebarOpen(true);
  };

  const handleOpenEdit = (pkg: Package) => {
    setActivePackage(pkg);
    setIsSidebarOpen(true);
  };

  const handleSavePackage = (savedPkg: Package) => {
    if (activePackage) {
      // Update existing
      setPackages(packages.map((p) => (p.id === savedPkg.id ? savedPkg : p)));
    } else {
      // Add new
      setPackages([savedPkg, ...packages]);
    }
    setIsSidebarOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this package?")) return;

    try {
      const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete package");
      
      setPackages(packages.filter((p) => p.id !== id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete package");
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold font-sans">Packages Management</h1>
          <p className="text-leela-white/60 mt-1 text-sm">Manage all travel packages offered on the platform.</p>
        </div>
        <button 
          onClick={handleOpenCreate}
          className="bg-sea-mist text-obsidian px-4 py-2 font-semibold flex items-center gap-2 hover:bg-white transition-colors text-sm"
        >
          <Plus className="w-4 h-4" /> Add Package
        </button>
      </div>

      {packages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center border border-white/10 bg-[#161616]">
          <p className="text-leela-white/50">No packages found. Create one to get started.</p>
        </div>
      ) : (
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
                <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={() => handleOpenEdit(pkg)}
                    className="w-8 h-8 bg-obsidian/80 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-sea-mist hover:text-obsidian hover:border-sea-mist transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(pkg.id)}
                    className="w-8 h-8 bg-obsidian/80 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-colors"
                  >
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
      )}

      {/* Slide-out Sidebar Form */}
      <PackageFormSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        initialData={activePackage}
        onSave={handleSavePackage}
      />
    </div>
  );
};
