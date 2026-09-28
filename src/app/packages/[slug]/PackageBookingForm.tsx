"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface PackageBookingFormProps {
  packageId: string;
  packageTitle: string;
  price: number;
}

export const PackageBookingForm: React.FC<PackageBookingFormProps> = ({ packageId, packageTitle, price }) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    guests: 2,
    notes: ""
  });

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
          phone: formData.phone,
          country: formData.country,
          notes: formData.notes,
          packageId,
          guests: Number(formData.guests),
          checkInDate: formData.date ? new Date(formData.date).toISOString() : new Date().toISOString()
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

  if (step === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 gap-4 border border-sea-mist/30 bg-sea-mist/5 p-6">
        <div className="w-12 h-12 rounded-full bg-sea-mist/20 text-sea-mist flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-semibold text-leela-white">Booking Requested</h4>
        <p className="text-sm text-leela-muted">
          Your request for the {packageTitle} has been received. Our team will contact you shortly to confirm dates and arrange payment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Full Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors"
          placeholder="e.g. Elena Rostova"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors"
            placeholder="email@example.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors"
            placeholder="+1 234 567 890"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Country of Residence</label>
        <input
          type="text"
          value={formData.country}
          onChange={e => setFormData({ ...formData, country: e.target.value })}
          className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors"
          placeholder="e.g. United Kingdom"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Preferred Date</label>
          <input
            type="date"
            required
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors text-leela-white"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Guests</label>
          <select
            value={formData.guests}
            onChange={e => setFormData({ ...formData, guests: Number(e.target.value) })}
            className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors text-leela-white"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <option key={n} value={n} className="bg-obsidian">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-mono uppercase tracking-widest text-leela-muted">Special Requests</label>
        <textarea
          rows={3}
          value={formData.notes}
          onChange={e => setFormData({ ...formData, notes: e.target.value })}
          className="w-full bg-white/5 border border-white/10 p-3 text-sm focus:border-sea-mist focus:outline-none transition-colors resize-none"
          placeholder="Any dietary requirements, celebrations, or specific interests?"
        />
      </div>

      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-leela-muted">Estimated Total:</span>
          <span className="text-xl font-bold text-sea-mist">${price * formData.guests}</span>
        </div>
        
        <Button type="submit" variant="primary" className="w-full" isLoading={isSubmitting} rightIcon={<ArrowRight className="w-4 h-4" />}>
          Request Booking
        </Button>
      </div>
    </form>
  );
};
