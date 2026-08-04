"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TelemetryTicker } from "@/components/ui/TelemetryTicker";
import { InteractiveRobot } from "@/components/ui/InteractiveRobot";
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

  // Layer 1: Foreground Headline
  const headlineScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.04, 1.01]);
  const headlineY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -10, -40]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1.0, 0.85, 0.0]);

  // Layer 2: Midground Controls
  const midgroundY = useTransform(scrollYProgress, [0, 0.8], [0, -50]);
  const midgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1.0, 0.4, 0.0]);

  // Layer 3: Background Panel
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
          className="absolute inset-0 border border-black/5 rounded-[24px] pointer-events-none z-30 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
        />

        {/* 32px CAD Grid */}
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Radial Ambient Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber/10 blur-[100px] rounded-full pointer-events-none z-0" />

        {/* Integrated Flex Container */}
        <div className="relative z-20 flex flex-col justify-between h-full pt-12 sm:pt-16 pb-2">
          
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-auto w-full">
            
            {/* Left Column: Typography */}
            <div className="space-y-4 sm:space-y-6 max-w-3xl w-full">
              {/* Layer 2: Badge */}
              <motion.div
                style={{ y: midgroundY, opacity: midgroundOpacity }}
                className="pointer-events-auto"
              >
                <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white border border-gray-200 text-[10px] sm:text-xs font-mono tracking-wider text-gray-800 shadow-sm">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-phosphor-green animate-pulse" />
                  <span className="text-gray-900 font-bold">IEDC HOLY GRACE ACADEMY</span>
                  <span className="text-gray-500 hidden xs:inline">• MALA, KERALA</span>
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
                <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-black text-gray-950 tracking-[-0.04em] leading-[1.05]">
                  BUILD WHAT <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-amber">
                    MATTERS.
                  </span>
                </h1>
              </motion.div>

              {/* Layer 2: Subheading & CTAs */}
              <motion.div
                style={{ y: midgroundY, opacity: midgroundOpacity }}
                className="space-y-4 sm:space-y-6 pointer-events-auto"
              >
                <p className="text-sm sm:text-lg font-sans text-gray-700 max-w-xl leading-relaxed">
                  The official Innovation & Entrepreneurship Development Cell of Holy Grace Academy of Engineering. Turning technical brilliance into high-velocity ventures.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={onExploreClick}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto justify-center bg-gray-950 text-white hover:bg-gray-900"
                  >
                    Explore Innovation →
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    onClick={onJoinClick}
                    className="w-full sm:w-auto justify-center bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"
                  >
                    Join the Community
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Robot */}
            <motion.div 
              className="w-full max-w-lg hidden lg:block pointer-events-auto z-30"
              style={{ y: midgroundY, opacity: midgroundOpacity }}
            >
              <InteractiveRobot />
            </motion.div>

          </div>

          {/* Telemetry Ticker cleanly anchored at bottom */}
          <motion.div
            style={{ y: midgroundY, opacity: midgroundOpacity }}
            className="pt-3 sm:pt-4 border-t border-black/5 relative z-10 w-full"
          >
            <TelemetryTicker />
          </motion.div>

        </div>

      </motion.div>
    </section>
  );
};
