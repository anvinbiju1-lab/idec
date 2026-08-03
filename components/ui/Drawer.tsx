"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-canvas/80 backdrop-blur-md"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-screen max-w-md bg-surface-l2 border-l border-border-strong p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative"
            >
              {/* Top Hairline Gradient */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-amber/40 to-transparent" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle mb-6">
                  {title && (
                    <span className="font-mono text-xs text-amber tracking-widest uppercase">
                      {title}
                    </span>
                  )}
                  <button
                    onClick={onClose}
                    className="p-1.5 text-text-body hover:text-text-heading rounded-md hover:bg-surface-l3 transition-colors ml-auto"
                    aria-label="Close drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(100vh-140px)] pr-1">
                  {children}
                </div>
              </div>

              <div className="pt-4 border-t border-border-subtle text-xs font-mono text-text-muted">
                IEDC HOLY GRACE ACADEMY • FOUNDER ROSTER
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
