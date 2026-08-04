"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Lightbulb, Users, Cpu, Hammer, Rocket, ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Think",
    subtitle: "Raw Discovery & Validation",
    description: "Identify real industrial challenges or societal pain points. Evaluate technical feasibility with mentors.",
    icon: Lightbulb,
    badge: "STAGE 01",
  },
  {
    step: "02",
    title: "Collaborate",
    subtitle: "Cross-Disciplinary Team",
    description: "Assemble multi-department talent across Mechanical, Computer Science, Electronics, and Robotics.",
    icon: Users,
    badge: "STAGE 02",
  },
  {
    step: "03",
    title: "Prototype",
    subtitle: "Hardware & Software",
    description: "Build rapid proof-of-concepts using Holy Grace FabLab, SMD assembly lines, and cloud clusters.",
    icon: Cpu,
    badge: "STAGE 03",
  },
  {
    step: "04",
    title: "Build",
    subtitle: "Seed Funding & Incubation",
    description: "Receive non-dilutive seed grants up to ₹500,000, patent assistance, and dedicated workstation access.",
    icon: Hammer,
    badge: "STAGE 04",
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Market & Corporate Launch",
    description: "Incorporate registered startups, acquire pilot customers, and pitch to national venture capital partners.",
    icon: Rocket,
    badge: "STAGE 05",
  },
];

export const JourneySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const progressLineWidth = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="journey" ref={containerRef} className="relative z-10 py-24 sm:py-32 bg-surface-l1 border-b border-border-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
            <span>// SECTION 03</span>
            <span className="text-border-strong">•</span>
            <span>THE INCUBATION ENGINE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-text-heading tracking-tight">
            From raw idea to registered startup.
          </h2>

          <p className="text-text-body text-base sm:text-lg leading-relaxed">
            Our 5-stage structured pipeline ensures every student innovation receives technical guidance, prototyping capital, and enterprise launch support.
          </p>
        </motion.div>

        {/* Scroll-Driven Connecting Progress Line (Desktop) */}
        <div className="hidden lg:block relative w-full h-[2px] bg-border-subtle my-4">
          <motion.div
            style={{ width: progressLineWidth }}
            className="absolute top-0 left-0 bottom-0 bg-amber shadow-[0_0_10px_#FF6B00]"
          />
        </div>

        {/* 5-Stage Interactive Workflow Cards with Spring 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Card enableTilt className="h-full flex flex-col justify-between p-5 space-y-4 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-amber font-semibold">
                        {stage.badge}
                      </span>
                      <div className="p-1.5 rounded-sm bg-surface-l1 border border-border-subtle group-hover:border-amber/30 transition-colors">
                        <Icon className="w-4 h-4 text-text-body group-hover:text-amber transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-sans font-semibold text-text-heading group-hover:text-white transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-[11px] font-mono text-amber/90 uppercase font-medium tracking-tight">
                      {stage.subtitle}
                    </p>

                    <p className="text-xs text-text-body leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-text-muted">
                    <span>PROGRESSION</span>
                    {idx < STAGES.length - 1 ? (
                      <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <span className="text-phosphor-green font-semibold">✓ SHIPPED</span>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
