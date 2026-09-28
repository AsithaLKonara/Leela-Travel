"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { X, Calendar, User, FileText, Mail, Phone, Package as PackageIcon, Trash2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BookingsClient = ({ bookings: initialBookings }: { bookings: any[] }) => {
  const [bookings, setBookings] = useState(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      const res = await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        const updated = await res.json();
        setBookings(bookings.map((b) => (b.id === id ? updated : b)));
        setSelectedBooking(updated);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    try {
      const res = await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      if (res.ok) {
        setBookings(bookings.filter((b) => b.id !== id));
        setSelectedBooking(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto h-full flex flex-col relative">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold font-sans">Bookings Management</h1>
          <p className="text-leela-white/60 mt-1 text-sm">View and manage all customer journey requests.</p>
        </div>
      </div>

      <div className="border border-white/10 bg-[#161616] flex-1 overflow-hidden flex flex-col">
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-sm text-left whitespace-nowrap">
            <thead className="text-xs font-mono uppercase text-leela-white/50 border-b border-white/10 sticky top-0 bg-[#161616] z-10">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Date Requested</th>
                <th className="px-6 py-4">Journey</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr 
                  key={b.id} 
                  onClick={() => setSelectedBooking(b)}
                  className="border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <td className="px-6 py-4 font-medium flex flex-col">
                    <span>{b.customerName}</span>
                    <span className="text-xs text-leela-white/50 font-mono">{b.country || 'Unknown'}</span>
                  </td>
                  <td className="px-6 py-4 text-leela-white/70">{b.customerPhone}</td>
                  <td className="px-6 py-4 font-mono text-xs text-leela-white/70">
                    {format(new Date(b.createdAt), "MMM dd, yyyy")}
                  </td>
                  <td className="px-6 py-4 text-leela-white/70">
                    {b.package ? b.package.title : (b.travelMood || "Custom Bespoke Journey")}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ${
                      b.status === "CONFIRMED" ? "bg-sea-mist/20 text-sea-mist border border-sea-mist/30" : 
                      b.status === "PENDING" ? "bg-amber-500/20 text-amber-500 border border-amber-500/30" :
                      "bg-white/10 text-white/70"
                    }`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Side Panel */}
      <AnimatePresence>
        {selectedBooking && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm lg:hidden"
              onClick={() => setSelectedBooking(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#111111] border-l border-white/10 shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#161616]">
                <h2 className="text-xl font-bold">Booking Details</h2>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleDelete(selectedBooking.id)}
                    className="p-2 hover:bg-red-500/20 text-red-400 rounded-none transition-colors"
                    title="Delete Booking"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setSelectedBooking(null)}
                    className="p-2 hover:bg-white/10 rounded-none transition-colors"
                  >
                    <X className="w-5 h-5 text-leela-white/70" />
                  </button>
                </div>
              </div>

              <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-8 custom-scrollbar">
                {/* Status */}
                <div>
                  <span className={`px-3 py-1.5 text-xs font-mono uppercase tracking-widest ${
                    selectedBooking.status === "CONFIRMED" ? "bg-sea-mist/20 text-sea-mist border border-sea-mist/30" : 
                    "bg-amber-500/20 text-amber-500 border border-amber-500/30"
                  }`}>
                    {selectedBooking.status}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-mono text-leela-white/50 uppercase tracking-widest flex items-center gap-2">
                    <User className="w-4 h-4" /> Customer Information
                  </h3>
                  <div className="bg-[#161616] p-4 border border-white/5 flex flex-col gap-3">
                    <div>
                      <p className="text-sm text-leela-white/50">Full Name</p>
                      <p className="font-medium text-lg">{selectedBooking.customerName}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-leela-white/50" />
                      <a href={`mailto:${selectedBooking.customerEmail}`} className="text-sea-mist hover:underline">
                        {selectedBooking.customerEmail}
                      </a>
                    </div>
                    {selectedBooking.customerPhone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-leela-white/50" />
                        <span className="text-leela-white/80">{selectedBooking.customerPhone}</span>
                      </div>
                    )}
                    {selectedBooking.country && (
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <Globe className="w-4 h-4 text-leela-white/50" />
                        <span className="text-leela-white/80">{selectedBooking.country}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Journey Details */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-mono text-leela-white/50 uppercase tracking-widest flex items-center gap-2">
                    <PackageIcon className="w-4 h-4" /> Journey Details
                  </h3>
                  <div className="bg-[#161616] p-4 border border-white/5 flex flex-col gap-4">
                    <div>
                      <p className="text-sm text-leela-white/50">Selected Package / Style</p>
                      <p className="font-medium">{selectedBooking.package?.title || selectedBooking.travelMood || "Custom Interactive Plan"}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-leela-white/50">Check-in Date</p>
                        <p className="font-mono text-sm mt-1">{format(new Date(selectedBooking.checkInDate), "MMM dd, yyyy")}</p>
                      </div>
                      <div>
                        <p className="text-sm text-leela-white/50">Guests</p>
                        <p className="font-mono text-sm mt-1">{selectedBooking.guests}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                {selectedBooking.specialNotes && (
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xs font-mono text-leela-white/50 uppercase tracking-widest flex items-center gap-2">
                      <FileText className="w-4 h-4" /> Special Requests / Notes
                    </h3>
                    <div className="bg-[#161616] p-4 border border-white/5">
                      <p className="text-sm leading-relaxed text-leela-white/80 whitespace-pre-wrap">
                        {selectedBooking.specialNotes}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="p-6 border-t border-white/10 bg-[#161616] flex gap-3">
                {selectedBooking.status === "PENDING" ? (
                  <button 
                    onClick={() => handleUpdateStatus(selectedBooking.id, "CONFIRMED")}
                    className="flex-1 bg-sea-mist text-obsidian font-semibold py-3 hover:bg-white transition-colors"
                  >
                    Mark Confirmed
                  </button>
                ) : (
                  <button 
                    onClick={() => handleUpdateStatus(selectedBooking.id, "PENDING")}
                    className="flex-1 bg-amber-500 text-obsidian font-semibold py-3 hover:bg-white transition-colors"
                  >
                    Mark Pending
                  </button>
                )}
                <button className="flex-1 border border-white/20 text-leela-white font-semibold py-3 hover:bg-white/10 transition-colors">
                  Send Email
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
