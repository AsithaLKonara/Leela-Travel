"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package } from "@prisma/client";
import { X, Plus, Trash2, Save, Loader2 } from "lucide-react";

interface PackageFormSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: Package | null;
  onSave: (pkg: Package) => void;
}

export const PackageFormSidebar: React.FC<PackageFormSidebarProps> = ({ isOpen, onClose, initialData, onSave }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    price: 0,
    duration: 0,
    mood: "",
    image: "",
    highlights: [""],
    included: [""],
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        slug: initialData.slug,
        description: initialData.description,
        price: initialData.price,
        duration: initialData.duration,
        mood: initialData.mood,
        image: initialData.image,
        highlights: initialData.highlights.length ? initialData.highlights : [""],
        included: initialData.included.length ? initialData.included : [""],
      });
    } else {
      setFormData({
        title: "",
        slug: "",
        description: "",
        price: 0,
        duration: 0,
        mood: "",
        image: "",
        highlights: [""],
        included: [""],
      });
    }
    setError("");
  }, [initialData, isOpen]);

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setFormData((prev) => ({
      ...prev,
      title,
      slug: prev.slug === generateSlug(prev.title) || prev.slug === "" ? generateSlug(title) : prev.slug,
    }));
  };

  const handleArrayChange = (field: "highlights" | "included", index: number, value: string) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field: "highlights" | "included") => {
    setFormData({ ...formData, [field]: [...formData[field], ""] });
  };

  const removeArrayItem = (field: "highlights" | "included", index: number) => {
    const newArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newArray.length ? newArray : [""] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Clean arrays (remove empty strings)
    const cleanedData = {
      ...formData,
      highlights: formData.highlights.filter((h) => h.trim() !== ""),
      included: formData.included.filter((i) => i.trim() !== ""),
    };

    try {
      const url = initialData ? `/api/packages/${initialData.id}` : `/api/packages`;
      const method = initialData ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to save package");
      }

      const savedPackage = await res.json();
      onSave(savedPackage);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[600px] bg-[#111] border-l border-white/10 z-50 flex flex-col shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-xl font-bold font-sans">
                {initialData ? "Edit Package" : "Create New Package"}
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              <form id="package-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Title</label>
                  <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                    placeholder="e.g. Classic Ceylon Explorer"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Slug</label>
                  <input
                    required
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                    placeholder="e.g. classic-ceylon-explorer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Price (USD)</label>
                    <input
                      required
                      type="number"
                      min="0"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Duration (Days)</label>
                    <input
                      required
                      type="number"
                      min="1"
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
                      className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Mood (Badge)</label>
                    <input
                      required
                      type="text"
                      value={formData.mood}
                      onChange={(e) => setFormData({ ...formData, mood: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                      placeholder="e.g. Leisure & Culture"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Image URL</label>
                    <input
                      required
                      type="text"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                      placeholder="/images/hero/ella.jpg"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Description</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors custom-scrollbar resize-none"
                    placeholder="Describe the package..."
                  />
                </div>

                {/* Highlights Array */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Highlights</label>
                    <button type="button" onClick={() => addArrayItem("highlights")} className="text-sea-mist hover:text-white transition-colors text-xs flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                  {formData.highlights.map((highlight, idx) => (
                    <div key={`hl-${idx}`} className="flex gap-2">
                      <input
                        type="text"
                        value={highlight}
                        onChange={(e) => handleArrayChange("highlights", idx, e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                        placeholder="e.g. Visit Sigiriya Rock"
                      />
                      <button type="button" onClick={() => removeArrayItem("highlights", idx)} className="px-3 border border-white/10 hover:bg-red-500/20 hover:border-red-500 transition-colors text-white/50 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Included Array */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-widest text-leela-white/50 font-semibold">Inclusions</label>
                    <button type="button" onClick={() => addArrayItem("included")} className="text-sea-mist hover:text-white transition-colors text-xs flex items-center gap-1">
                      <Plus className="w-3 h-3" /> Add
                    </button>
                  </div>
                  {formData.included.map((inc, idx) => (
                    <div key={`inc-${idx}`} className="flex gap-2">
                      <input
                        type="text"
                        value={inc}
                        onChange={(e) => handleArrayChange("included", idx, e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist outline-none transition-colors"
                        placeholder="e.g. 5 Nights Accommodation"
                      />
                      <button type="button" onClick={() => removeArrayItem("included", idx)} className="px-3 border border-white/10 hover:bg-red-500/20 hover:border-red-500 transition-colors text-white/50 hover:text-red-500">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-white/10 bg-[#161616] flex justify-end gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border border-white/20 hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                form="package-form"
                disabled={isSubmitting}
                className="px-6 py-3 bg-sea-mist text-obsidian hover:bg-white transition-colors text-sm font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {isSubmitting ? "Saving..." : "Save Package"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
