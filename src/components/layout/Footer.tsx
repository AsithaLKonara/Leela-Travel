"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Sparkles, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-obsidian text-leela-white overflow-hidden rounded-none font-sans">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          src="/images/destinations/ella.png"
          alt="Ceylon Landscape Background"
          fill
          className="object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-obsidian/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* 4-Column Detailed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Journal Newsletter */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-20 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="Leela Travel"
                  width={280}
                  height={80}
                  style={{ width: "auto" }}
                  className="h-full w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                />
              </div>
            </Link>
            <p className="text-xs text-leela-muted font-sans leading-relaxed">
              An interactive cinematic travel journal for curated Sri Lankan experiences. Discover misty cloud forests, ancient citadel ruins, and bespoke coastal expeditions.
            </p>

            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sea-mist">
                Subscribe to Ceylon Journal
              </span>
              {subscribed ? (
                <p className="text-xs text-sea-mist flex items-center gap-1.5 font-sans">
                  <Sparkles className="w-3.5 h-3.5" /> Welcome to our private circle.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-0">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/15 border-r-0 px-3.5 py-2.5 text-xs text-leela-white placeholder:text-white/20 focus:outline-none focus:border-sea-mist rounded-none font-sans"
                  />
                  <Button type="submit" variant="primary" size="sm" className="px-3 shrink-0 rounded-none">
                    Join
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Core Destinations */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-semibold">
              Destinations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-leela-muted font-sans">
              <li>
                <Link href="/destinations#ella" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Ella Cloud Forest</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">01</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations#sigiriya" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Sigiriya Citadel</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">02</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations#galle" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Galle Fort Ramparts</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">03</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations#yala" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Yala Leopard Safari</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">04</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations#kandy" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Kandy Sacred Temple</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">05</span>
                </Link>
              </li>
              <li>
                <Link href="/destinations#mirissa" className="hover:text-leela-white transition-colors flex items-center justify-between group">
                  <span>Mirissa Coastline</span>
                  <span className="text-[10px] font-mono text-sea-mist/60 group-hover:text-sea-mist">06</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Curated Experiences */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-semibold">
              Journeys & Curations
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs text-leela-muted font-sans">
              <li>
                <Link href="/journey#train" className="hover:text-leela-white transition-colors">
                  Bespoke Private Train Journeys
                </Link>
              </li>
              <li>
                <Link href="/journey#architecture" className="hover:text-leela-white transition-colors">
                  Geoffrey Bawa Architecture Tour
                </Link>
              </li>
              <li>
                <Link href="/journey#glamping" className="hover:text-leela-white transition-colors">
                  Oceanfront Wildlife Glamping
                </Link>
              </li>
              <li>
                <Link href="/journey#tea" className="hover:text-leela-white transition-colors">
                  High-Altitude Ceylon Tea Estates
                </Link>
              </li>
              <li>
                <Link href="/journey#concierge" className="hover:text-leela-white transition-colors">
                  Private Concierge & Helicopters
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Private Concierge & Headquarters */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-sea-mist font-semibold">
              Global Concierge
            </h4>
            <div className="flex flex-col gap-3 text-xs text-leela-muted font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sea-mist shrink-0 mt-0.5" />
                <span>42 Galle Road, Cinnamon Gardens, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sea-mist shrink-0" />
                <span>+94 (11) 789-2020</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sea-mist shrink-0" />
                <span>concierge@leelatravel.com</span>
              </div>
              <div className="flex items-center gap-2.5 pt-1 text-[11px] text-white/50 font-mono">
                <Globe className="w-3.5 h-3.5 text-sea-mist shrink-0" />
                <span>24/7 Private Travel Concierge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-leela-muted font-mono">
          <div>
            © {new Date().getFullYear()} LEELA TRAVEL (PVT) LTD. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-sea-mist transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="/terms" className="hover:text-sea-mist transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="/license" className="hover:text-sea-mist transition-colors">
              CEYLON TOURISM LICENSE
            </Link>
          </div>

          <div className="flex items-center gap-4 text-leela-white">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sea-mist transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-sea-mist transition-colors" aria-label="YouTube">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-sea-mist transition-colors" aria-label="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
