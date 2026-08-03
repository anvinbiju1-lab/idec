"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Lightbulb, Users, Cpu, Hammer, Rocket, ArrowRight } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Think",
    subtitle: "Raw Discovery & Problem Validation",
    description: "Identify real industrial challenges or societal pain points. Evaluate feasibility with technical mentors.",
    icon: Lightbulb,
    badge: "STAGE 01",
  },
  {
    step: "02",
    title: "Collaborate",
    subtitle: "Cross-Disciplinary Team Assembly",
    description: "Assemble multi-department talent across Mechanical, Computer Science, Electronics, and Robotics.",
    icon: Users,
    badge: "STAGE 02",
  },
  {
    step: "03",
    title: "Prototype",
    subtitle: "Hardware & Software Iteration",
    description: "Build rapid proof-of-concepts using Holy Grace FabLab, SMD assembly lines, and cloud clusters.",
    icon: Cpu,
    badge: "STAGE 03",
  },
  {
    step: "04",
    title: "Build",
    subtitle: "IEDC Seed Funding & Pre-Incubation",
    description: "Receive non-dilutive seed grants up to ₹500,000, patent assistance, and dedicated workstation access.",
    icon: Hammer,
    badge: "STAGE 04",
  },
  {
    step: "05",
    title: "Launch",
    subtitle: "Market Launch & Corporate Formation",
    description: "Incorporate registered startups, acquire pilot customers, and pitch to national venture capital partners.",
    icon: Rocket,
    badge: "STAGE 05",
  },
];

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="relative z-10 py-24 sm:py-32 bg-surface-l1 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
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
        </div>

        {/* 5-Stage Interactive Workflow Cards with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Card enableTilt className="h-full flex flex-col justify-between p-5 space-y-4 group">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-amber font-semibold">
                        {stage.badge}
                      </span>
                      <Icon className="w-5 h-5 text-text-body group-hover:text-amber transition-colors" />
                    </div>

                    <h3 className="text-2xl font-sans font-semibold text-text-heading group-hover:text-white transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-xs font-mono text-amber/80 uppercase">
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
