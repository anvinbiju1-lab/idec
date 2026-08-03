"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { ShieldAlert, ArrowRight, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "mission", label: "Mission" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team" },
  { id: "ideas", label: "Ideas" },
];

export const FloatingNav: React.FC<{ onJoinClick: () => void }> = ({ onJoinClick }) => {
  const { activeSection } = useScrollProgress();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop & Tablet Floating Dock */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <nav className="h-[48px] px-3 bg-[#0F0F12]/85 backdrop-blur-[16px] border border-white/[0.08] rounded-[20px] flex items-center gap-1 shadow-2xl relative">
          {/* Logo / Brand Mark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 px-3 text-text-heading hover:text-amber transition-colors font-mono text-xs tracking-wider border-r border-white/[0.08] pr-4 mr-1"
          >
            <div className="w-2 h-2 rounded-full bg-amber shadow-[0_0_8px_#FF6B00]" />
            <span className="font-semibold">IEDC</span>
            <span className="text-text-muted text-[10px]">HGAE</span>
          </button>

          {/* Navigation Links with Gliding Spring Pill */}
          <div className="flex items-center gap-1 relative" onMouseLeave={() => setHoveredId(null)}>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  className={cn(
                    "relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-150 rounded-[12px] select-none",
                    isActive ? "text-text-heading font-medium" : "text-text-body hover:text-text-heading"
                  )}
                >
                  {/* Gliding Spring Background Pill */}
                  {isHovered && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.8 }}
                      className="absolute inset-0 bg-white/[0.06] rounded-[12px] -z-10"
                    />
                  )}

                  {/* Active Indicator Dot */}
                  {isActive && !isHovered && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber rounded-full" />
                  )}

                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Primary Action Button: Join Cell */}
          <div className="border-l border-white/[0.08] pl-2 ml-1">
            <button
              onClick={onJoinClick}
              className="h-8 px-3.5 bg-amber text-canvas font-mono text-xs font-semibold rounded-[12px] hover:bg-[#ff7a1a] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,107,0,0.3)] active:scale-95"
            >
              <span>Join Cell</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Bottom Dock & Menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[calc(100%-2rem)] max-w-sm">
        <div className="h-[48px] px-4 bg-[#0F0F12]/90 backdrop-blur-[16px] border border-white/[0.1] rounded-[20px] flex items-center justify-between shadow-2xl">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-text-heading font-mono text-xs font-semibold"
          >
            <div className="w-2 h-2 rounded-full bg-amber shadow-[0_0_8px_#FF6B00]" />
            <span>IEDC HOLY GRACE</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onJoinClick}
              className="h-7 px-3 bg-amber text-canvas font-mono text-xs font-semibold rounded-[10px] flex items-center gap-1"
            >
              Join
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-text-body hover:text-text-heading bg-surface-l2 rounded-[10px]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Expanded Menu overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-14 left-0 right-0 p-4 bg-surface-l2 border border-border-strong rounded-[20px] space-y-2 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-left px-4 py-2 text-sm font-mono text-text-body hover:text-text-heading hover:bg-surface-l3 rounded-md transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="w-1.5 h-1.5 rounded-full bg-amber" />}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </>
  );
};
