"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export interface JourneyPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JourneyPlannerModal: React.FC<JourneyPlannerModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(["Ella"]);
  const [travelStyle, setTravelStyle] = useState<string>("Cinematic & Luxury");
  const [duration, setDuration] = useState<string>("7-10 Days");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", notes: "" });

  const destinationsList = [
    "Ella",
    "Sigiriya",
    "Kandy",
    "Nuwara Eliya",
    "Galle",
    "Mirissa",
    "Yala",
    "Trincomalee",
  ];

  const travelStyles = [
    "Cinematic & Luxury",
    "Wildlife & Safari",
    "Heritage & Culture",
    "Beach & Wellness",
  ];

  const toggleDestination = (dest: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          notes: `Destinations: ${selectedDestinations.join(", ")}. Style: ${travelStyle}. Duration: ${duration}. Notes: ${formData.notes}`,
          checkInDate: new Date().toISOString()
        })
      });

      if (response.ok) {
        setStep("success");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep("form");
    setFormData({ name: "", email: "", notes: "" });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={step === "success" ? resetForm : onClose}
      title={step === "form" ? "Plan Your Bespoke Sri Lankan Journey" : "Journey Request Received"}
      subtitle={
        step === "form"
          ? "Tell us your preferences and our travel curators will craft a tailored cinematic itinerary."
          : "We have received your travel preferences and will reach out within 24 hours."
      }
    >
      {step === "form" ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Destination Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2.5">
              1. Select Destinations of Interest
            </label>
            <div className="flex flex-wrap gap-2">
              {destinationsList.map((dest) => {
                const active = selectedDestinations.includes(dest);
                return (
                  <button
                    type="button"
                    key={dest}
                    onClick={() => toggleDestination(dest)}
                    className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 border rounded-none ${
                      active
                        ? "bg-sea-mist/20 border-sea-mist text-sea-mist shadow-[0_0_12px_rgba(125,217,208,0.2)]"
                        : "bg-white/5 border-white/10 text-leela-muted hover:border-white/30 hover:text-leela-white"
                    }`}
                  >
                    {dest}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Travel Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2">
                2. Experience Style
              </label>
              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-2.5 text-sm text-leela-white focus:outline-none focus:border-sea-mist"
              >
                {travelStyles.map((style) => (
                  <option key={style} value={style} className="bg-obsidian text-leela-white">
                    {style}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2">
                3. Estimated Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-2.5 text-sm text-leela-white focus:outline-none focus:border-sea-mist"
              >
                <option value="3-5 Days" className="bg-obsidian">3 - 5 Days</option>
                <option value="7-10 Days" className="bg-obsidian">7 - 10 Days</option>
                <option value="12-14 Days" className="bg-obsidian">12 - 14 Days</option>
                <option value="14+ Days" className="bg-obsidian">14+ Days (Full Grand Tour)</option>
              </select>
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Elena Rostova"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-2.5 text-sm text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="elena@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-2.5 text-sm text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest text-leela-muted mb-2">
              Special Requests or Notes
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your interests, preferred dates, or accommodation style..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-white/5 border border-white/15 rounded-none px-4 py-2.5 text-sm text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist resize-none"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-between border-t border-white/10">
            <span className="text-xs text-leela-muted flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sea-mist" /> Private Concierge Consultation
            </span>
            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Submit Journey Request
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-8 gap-4">
          <div className="w-16 h-16 rounded-none bg-sea-mist/20 text-sea-mist flex items-center justify-center border border-sea-mist/30">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-semibold text-leela-white font-sans">
            Thank you, {formData.name || "Explorer"}!
          </h4>
          <p className="text-sm text-leela-muted max-w-md">
            Our luxury travel curator will review your selected destinations (
            <span className="text-sea-mist">{selectedDestinations.join(", ")}</span>) and email your custom itinerary plan shortly.
          </p>
          <Button variant="glass" className="mt-4" onClick={resetForm}>
            Close Window
          </Button>
        </div>
      )}
    </Modal>
  );
};
