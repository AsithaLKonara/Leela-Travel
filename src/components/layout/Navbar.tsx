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
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Explore", href: "/destinations" },
  { label: "Journeys", href: "/journey" },
  { label: "Island Map", href: "/#map" },
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

    // Check scroll position on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-in-out",
          isScrolled
            ? "py-3 bg-obsidian/70 backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            : "py-6 sm:py-8 bg-transparent border-b border-transparent shadow-none"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative h-16 sm:h-20 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="Leela Travel"
                  width={280}
                  height={80}
                  style={{ width: "auto" }}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links — Clean inline state without generic pills */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "relative py-1 text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none",
                      isActive
                        ? "text-sea-mist"
                        : "text-leela-white/75 hover:text-leela-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-sea-mist rounded-full shadow-[0_0_8px_#7DD9D0]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Desktop Action */}
            <div className="hidden md:flex items-center gap-4">
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

            {/* Mobile Menu Trigger */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                variant="primary"
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

      {/* Full Glass Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-30 bg-obsidian/95 backdrop-blur-3xl flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6 my-auto">
              <span className="text-[11px] uppercase tracking-[0.25em] text-sea-mist font-semibold">
                Navigation
              </span>
              <div className="flex flex-col gap-4">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between text-2xl font-medium tracking-tight py-3 border-b border-white/10 transition-colors",
                        isActive ? "text-sea-mist" : "text-leela-white hover:text-sea-mist"
                      )}
                    >
                      <span className="font-sans flex items-center gap-3">
                        <span className="text-xs font-mono text-leela-muted">
                          0{idx + 1}
                        </span>
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-leela-muted" />
                    </Link>
                  );
                })}
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
