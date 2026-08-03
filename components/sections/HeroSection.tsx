"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelemetryTicker } from "@/components/ui/TelemetryTicker";
import { ArrowRight, Sparkles } from "lucide-react";

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

  // Apple-inspired sticky scroll transformation metrics
  const scale = useTransform(scrollYProgress, [0, 0.65], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.65], [0, -35]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["0px", "28px"]);
  const borderOpacity = useTransform(scrollYProgress, [0.05, 0.5], [0, 0.3]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.75], [1, 0.3]);
  const shadowOpacity = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <div ref={containerRef} id="hero" className="relative h-[180vh] w-full bg-canvas">
      {/* Sticky 100vh Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
        {/* Apple-Style Floating Panel */}
        <motion.div
          style={{
            scale,
            y,
            borderRadius,
          }}
          className="relative w-full h-full max-w-[1500px] bg-canvas overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 transition-shadow duration-300 z-20"
        >
          {/* Illuminated Hairline Border Overlay on Scroll */}
          <motion.div
            style={{ opacity: borderOpacity }}
            className="absolute inset-0 border border-white/20 rounded-[28px] pointer-events-none z-30 shadow-[0_30px_90px_rgba(0,0,0,0.95)]"
          />

          {/* Deep Ambient Shadow Overlay */}
          <motion.div
            style={{ opacity: shadowOpacity }}
            className="absolute inset-0 shadow-[0_25px_80px_rgba(255,107,0,0.08)] pointer-events-none z-10"
          />

          {/* 32px CAD Grid inside Hero Panel */}
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

          {/* CAD Crosshair Intersection Markers */}
          <div className="absolute top-6 left-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute top-6 right-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute bottom-16 left-6 font-mono text-xs text-white/20 select-none z-10">+</div>
          <div className="absolute bottom-16 right-6 font-mono text-xs text-white/20 select-none z-10">+</div>

          {/* Radial Warm Slate & Amber Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber/5 blur-[140px] rounded-full pointer-events-none z-0" />

          {/* Main Editorial Content Container */}
          <motion.div
            style={{ opacity: contentOpacity }}
            className="relative z-20 my-auto max-w-5xl space-y-8 pt-12 sm:pt-16"
          >
            {/* Top Micro Telemetry Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-surface-l2 border border-border-subtle text-xs font-mono tracking-wider text-text-body shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
              <span className="text-text-heading font-semibold">IEDC HOLY GRACE ACADEMY</span>
              <span className="text-text-muted">• MALA, KERALA</span>
            </motion.div>

            {/* Oversized Editorial Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-sans font-semibold text-text-heading tracking-[-0.04em] leading-[0.98]"
            >
              BUILD WHAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-heading via-text-heading to-amber">
                MATTERS.
              </span>
            </motion.h1>

            {/* Subheading / Identity Statement */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl font-sans text-text-body max-w-2xl leading-relaxed"
            >
              The official Innovation & Entrepreneurship Development Cell of Holy Grace Academy of Engineering. Turning technical brilliance into high-velocity ventures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
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
            </motion.div>
          </motion.div>

          {/* Telemetry Bar Ticker attached to bottom of Hero Panel */}
          <div className="relative z-20 w-full pt-6 border-t border-white/[0.06]">
            <TelemetryTicker />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
