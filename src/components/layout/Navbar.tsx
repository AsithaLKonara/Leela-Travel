"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { JourneyPlannerModal } from "@/components/features/JourneyPlannerModal";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Explore", href: "/destinations" },
  { label: "Journeys", href: "/journey" },
  { label: "Island Map", href: "/#map", badge: "Interactive" },
  { label: "Our Story", href: "/story" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "py-3 bg-obsidian/80 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-5 sm:py-7 bg-gradient-to-b from-obsidian/90 via-obsidian/40 to-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/15 p-1.5 flex items-center justify-center transition-all duration-300 group-hover:border-sea-mist/50 group-hover:shadow-[0_0_15px_rgba(125,217,208,0.3)]">
                <Image
                  src="/logo.png"
                  alt="Leela Travel"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xl sm:text-2xl font-bold tracking-[0.2em] text-leela-white group-hover:text-sea-mist transition-colors duration-300">
                  LEELA
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-leela-muted font-mono -mt-1">
                  CEYLON JOURNEYS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5",
                      isActive
                        ? "text-obsidian font-semibold"
                        : "text-leela-muted hover:text-leela-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavTab"
                        className="absolute inset-0 bg-sea-mist rounded-full shadow-[0_0_15px_rgba(125,217,208,0.4)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                    {item.badge && !isActive && (
                      <span className="relative z-10 px-1.5 py-0.5 rounded-full text-[9px] bg-sea-mist/20 text-sea-mist border border-sea-mist/30 font-semibold tracking-normal lowercase">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsPlannerOpen(true)}
                rightIcon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                className="group shadow-[0_0_20px_rgba(125,217,208,0.25)]"
              >
                Plan a Journey
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="glass"
                size="sm"
                onClick={() => setIsPlannerOpen(true)}
                className="text-xs px-3 py-1.5"
              >
                Plan
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-full bg-white/5 border border-white/15 text-leela-white hover:bg-white/10 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-sea-mist" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Glass Slide-Over Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-2xl flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 my-auto">
              <span className="text-[11px] uppercase tracking-[0.2em] text-sea-mist font-semibold">
                01 — Navigation
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, idx) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-2xl font-medium tracking-tight text-leela-white hover:text-sea-mist py-2 border-b border-white/10 transition-colors"
                  >
                    <span className="font-sans flex items-center gap-3">
                      <span className="text-xs font-mono text-leela-muted">
                        0{idx + 1}
                      </span>
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-leela-muted" />
                  </Link>
                ))}
              </div>

              <div className="pt-6 flex flex-col gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsPlannerOpen(true);
                  }}
                  rightIcon={<Sparkles className="w-5 h-5" />}
                  className="w-full justify-between"
                >
                  Plan a Bespoke Journey
                </Button>
                <div className="flex items-center justify-between text-xs text-leela-muted pt-4 border-t border-white/10">
                  <span>Sri Lanka Travel Journal</span>
                  <span className="text-sea-mist">Ceylon Edition</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Journey Planner Modal */}
      <JourneyPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
      />
    </>
  );
};

export default Navbar;
