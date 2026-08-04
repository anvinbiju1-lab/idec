"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Cpu, Zap, Lightbulb, Rocket, CheckCircle2 } from "lucide-react";

export const MissionSection: React.FC = () => {
  const PILLARS = [
    {
      id: "01",
      title: "What is IEDC?",
      description: "A high-velocity incubator established under Kerala Startup Mission (KSUM) at Holy Grace Academy of Engineering to empower young hardware and software builders.",
      icon: Cpu,
      telemetry: "EST. CAMPUS INCUBATOR",
    },
    {
      id: "02",
      title: "Why Innovation?",
      description: "Theoretical engineering is incomplete without physical execution. We provide micro-grant funding, prototyping equipment, and high-frequency testing environments.",
      icon: Zap,
      telemetry: "HARDWARE & SOFTWARE",
    },
    {
      id: "03",
      title: "Why Entrepreneurship?",
      description: "We transform technical projects into commercially viable ventures with full patent support, market validation, and seed pitch days.",
      icon: Rocket,
      telemetry: "VENTURE CREATION",
    },
    {
      id: "04",
      title: "How Students Benefit",
      description: "Direct mentorship from industry architects, access to advanced FabLabs, pre-incubation grants up to ₹500K, and global hackathon representation.",
      icon: Lightbulb,
      telemetry: "STUDENT INCUBATION",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="mission" className="relative z-10 py-24 sm:py-32 bg-canvas overflow-hidden">
      {/* Background Micro Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Editorial Section Header with Scroll Stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="space-y-4 max-w-3xl"
        >
          <motion.div variants={headerVariants} className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
            <span>// SECTION 02</span>
            <span className="text-border-strong">•</span>
            <span>THE MISSION STATEMENT</span>
          </motion.div>

          <motion.h2 variants={headerVariants} className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-text-heading tracking-tight leading-tight">
            We are not a college club. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-heading via-text-heading to-amber">
              We are an innovation engine.
            </span>
          </motion.h2>

          <motion.p variants={headerVariants} className="text-text-body text-base sm:text-lg leading-relaxed pt-1">
            The Innovation & Entrepreneurship Development Cell (IEDC) at Holy Grace Academy of Engineering, Mala, exists to bridge the gap between engineering theory and market deployment.
          </motion.p>
        </motion.div>

        {/* 4 Pillars Grid with Premium Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full flex flex-col justify-between space-y-6 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-amber tracking-widest font-medium">
                        [{pillar.id}] {pillar.telemetry}
                      </span>
                      <div className="p-2 rounded-md bg-surface-l1 border border-border-subtle group-hover:border-amber/30 transition-colors">
                        <Icon className="w-4 h-4 text-text-body group-hover:text-amber transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-sans font-semibold text-text-heading group-hover:text-amber transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-text-body text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle flex items-center gap-2 font-mono text-xs text-text-muted">
                    <CheckCircle2 className="w-4 h-4 text-phosphor-green flex-shrink-0" />
                    <span>VERIFIED INCUBATION PROTOCOL</span>
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
