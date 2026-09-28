"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className,
}) => {
  // Prevent scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-obsidian/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-obsidian/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl glass-panel",
              className
            )}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10 mb-6">
              <div>
                {title && (
                  <h3 className="text-2xl font-semibold tracking-tight text-leela-white font-sans">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-sm text-leela-muted mt-1">{subtitle}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-leela-muted transition-colors hover:bg-white/10 hover:text-leela-white focus:outline-none focus:ring-2 focus:ring-sea-mist/50"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="relative">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
