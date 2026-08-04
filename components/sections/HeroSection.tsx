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

  // Layer 1: Foreground Headline ("BUILD WHAT MATTERS.")
  const headlineScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.04, 1.01]);
  const headlineY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, -40]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1.0, 0.85, 0.0]);

  // Layer 2: Midground Controls (Badge, Description, CTAs, Ticker)
  const midgroundY = useTransform(scrollYProgress, [0, 0.8], [0, -50]);
  const midgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1.0, 0.4, 0.0]);

  // Layer 3: Background Panel (CAD Grid, Ambient Glow, Container)
  const bgScale = useTransform(scrollYProgress, [0, 0.8], [1.0, 0.92]);
  const bgY = useTransform(scrollYProgress, [0, 0.8], [0, -20]);
  const bgRadius = useTransform(scrollYProgress, [0, 0.6], ["0px", "24px"]);
  const bgBorderOpacity = useTransform(scrollYProgress, [0.08, 0.6], [0, 0.25]);
  const bgBlur = useTransform(scrollYProgress, [0, 0.6], ["blur(0px)", "blur(2px)"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1.0, 0.8, 0.0]);

  return (
    <section ref={containerRef} id="hero" className="relative h-screen min-h-[620px] w-full flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-canvas">
      {/* Layer 3: Receding Background Panel */}
      <motion.div
        style={{
          scale: bgScale,
          y: bgY,
          borderRadius: bgRadius,
          filter: bgBlur,
          opacity: bgOpacity,
        }}
        className="relative w-full h-full max-w-[1500px] bg-canvas overflow-hidden flex flex-col justify-between p-4 sm:p-10 lg:p-12 transition-shadow duration-300 z-0"
      >
        {/* Hairline Border Overlay */}
        <motion.div
          style={{ opacity: bgBorderOpacity }}
          className="absolute inset-0 border border-white/20 rounded-[24px] pointer-events-none z-30 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
        />

        {/* 32px CAD Grid */}
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
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 font-mono text-[10px] sm:text-xs text-white/20 select-none z-10">+</div>
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-[10px] sm:text-xs text-white/20 select-none z-10">+</div>
        <div className="absolute bottom-14 left-4 sm:bottom-16 sm:left-6 font-mono text-[10px] sm:text-xs text-white/20 select-none z-10">+</div>
        <div className="absolute bottom-14 right-4 sm:bottom-16 sm:right-6 font-mono text-[10px] sm:text-xs text-white/20 select-none z-10">+</div>

        {/* Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-amber/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none z-0" />

        {/* Integrated Flex Container */}
        <div className="relative z-20 flex flex-col justify-between h-full pt-12 sm:pt-16 pb-2">
          
          {/* Main Content Area */}
          <div className="space-y-4 sm:space-y-6 max-w-4xl my-auto">
            
            {/* Layer 2: Badge */}
            <motion.div
              style={{ y: midgroundY, opacity: midgroundOpacity }}
              className="pointer-events-auto"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-sm bg-surface-l2 border border-border-subtle text-[10px] sm:text-xs font-mono tracking-wider text-text-body shadow-sm">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-phosphor-green animate-pulse" />
                <span className="text-text-heading font-semibold">IEDC HOLY GRACE ACADEMY</span>
                <span className="text-text-muted hidden xs:inline">• MALA, KERALA</span>
              </div>
            </motion.div>

            {/* Layer 1: Foreground Headline "BUILD WHAT MATTERS." */}
            <motion.div
              style={{
                scale: headlineScale,
                y: headlineY,
                opacity: headlineOpacity,
              }}
              className="pointer-events-auto origin-left relative z-30"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-semibold text-text-heading tracking-[-0.04em] leading-[1.05]">
                BUILD WHAT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-heading via-text-heading to-amber">
                  MATTERS.
                </span>
              </h1>
            </motion.div>

            {/* Layer 2: Subheading & CTAs */}
            <motion.div
              style={{ y: midgroundY, opacity: midgroundOpacity }}
              className="space-y-4 sm:space-y-6 pointer-events-auto"
            >
              <p className="text-xs sm:text-lg font-sans text-text-body max-w-2xl leading-relaxed">
                The official Innovation & Entrepreneurship Development Cell of Holy Grace Academy of Engineering. Turning technical brilliance into high-velocity ventures.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button
                  variant="primary"
                  size="md"
                  onClick={onExploreClick}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center"
                >
                  Explore Innovation →
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  onClick={onJoinClick}
                  className="w-full sm:w-auto justify-center"
                >
                  Join the Community
                </Button>
              </div>
            </motion.div>

          </div>

          {/* Telemetry Ticker cleanly anchored at bottom */}
          <motion.div
            style={{ y: midgroundY, opacity: midgroundOpacity }}
            className="pt-3 sm:pt-4 border-t border-white/[0.06] relative z-10 w-full"
          >
            <TelemetryTicker />
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
