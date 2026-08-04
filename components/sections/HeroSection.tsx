"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelemetryTicker } from "@/components/ui/TelemetryTicker";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onExploreClick: () => void;
  onJoinClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onJoinClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // =========================================================================
  // LAYER 1: FOREGROUND (Main Headline - "BUILD WHAT MATTERS.")
  // - Anchored in front, subtle forward Z-depth scale push (1.00 -> 1.04), slow upward translation
  // =========================================================================
  const headlineScale = useTransform(scrollYProgress, [0, 0.35, 0.75], [1.0, 1.04, 1.02]);
  const headlineY = useTransform(scrollYProgress, [0, 0.25, 0.75], [0, -10, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [1.0, 0.9, 0.0]);

  // =========================================================================
  // LAYER 2: MIDGROUND (Top Badge, Subheading Description, CTA Buttons)
  // - Fades out earlier and translates upward naturally
  // =========================================================================
  const midgroundY = useTransform(scrollYProgress, [0, 0.6], [0, -85]);
  const midgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.0, 0.35, 0.0]);

  // =========================================================================
  // LAYER 3: BACKGROUND (Container, Engineering CAD Grid, Ambient Glow, Ticker)
  // - Recedes away: scales down to 0.92, blurs slightly (2px max), rounds corners (24px)
  // =========================================================================
  const bgScale = useTransform(scrollYProgress, [0, 0.6], [1.0, 0.92]);
  const bgY = useTransform(scrollYProgress, [0, 0.6], [0, -30]);
  const bgRadius = useTransform(scrollYProgress, [0, 0.45], ["0px", "24px"]);
  const bgBorderOpacity = useTransform(scrollYProgress, [0.08, 0.45], [0, 0.25]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(2px)"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.55, 0.85], [1.0, 0.75, 0.0]);

  return (
    <div ref={containerRef} id="hero" className="relative h-[200vh] w-full bg-canvas">
      {/* Sticky 100vh Viewport Track */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
        
        {/* LAYER 3 (BACKGROUND): Receding Floating Container */}
        <motion.div
          style={{
            scale: bgScale,
            y: bgY,
            borderRadius: bgRadius,
            filter: bgBlur,
            opacity: bgOpacity,
          }}
          className="relative w-full h-full max-w-[1500px] bg-canvas overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 transition-shadow duration-300 z-0"
        >
          {/* Hairline Border Overlay on Receding */}
          <motion.div
            style={{ opacity: bgBorderOpacity }}
            className="absolute inset-0 border border-white/20 rounded-[24px] pointer-events-none z-30 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
          />

          {/* 32px CAD Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.35] pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          {/* CAD Crosshairs */}
          <div className="absolute top-6 left-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute top-6 right-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute bottom-16 left-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute bottom-16 right-6 font-mono text-xs text-white/20 select-none z-10">+</div>

          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber/5 blur-[140px] rounded-full pointer-events-none z-0" />

          {/* Telemetry Ticker at Bottom of Background Layer */}
          <div className="mt-auto pt-6 border-t border-white/[0.06] relative z-10">
            <TelemetryTicker />
          </div>
        </motion.div>

        {/* ABSOLUTE OVERLAY CONTENT CONTAINER (Houses Layer 1 & Layer 2) */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pointer-events-none pt-16">
          <div className="space-y-8 max-w-4xl">
            
            {/* LAYER 2 (MIDGROUND): Top Telemetry Badge */}
            <motion.div
              style={{ y: midgroundY, opacity: midgroundOpacity }}
              className="pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-surface-l2 border border-border-subtle text-xs font-mono tracking-wider text-text-body shadow-sm">
                <span className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
                <span className="text-text-heading font-semibold">IEDC HOLY GRACE ACADEMY</span>
                <span className="text-text-muted">• MALA, KERALA</span>
              </div>
            </motion.div>

            {/* LAYER 1 (FOREGROUND): Main Headline "BUILD WHAT MATTERS." */}
            <motion.div
              style={{
                scale: headlineScale,
                y: headlineY,
                opacity: headlineOpacity,
              }}
              className="pointer-events-auto origin-left relative z-30"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-sans font-semibold text-text-heading tracking-[-0.04em] leading-[0.98] drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
                BUILD WHAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-heading via-text-heading to-amber">
                  MATTERS.
                </span>
              </h1>
            </motion.div>

            {/* LAYER 2 (MIDGROUND): Subheading Description & CTA Buttons */}
            <motion.div
              style={{ y: midgroundY, opacity: midgroundOpacity }}
              className="space-y-8 pointer-events-auto"
            >
              <p className="text-base sm:text-xl font-sans text-text-body max-w-2xl leading-relaxed">
                The official Innovation & Entrepreneurship Development Cell of Holy Grace Academy of Engineering. Turning technical brilliance into high-velocity ventures.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onExploreClick}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Innovation →
                </Button>

                <Button variant="secondary" size="lg" onClick={onJoinClick}>
                  Join the Community
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};
