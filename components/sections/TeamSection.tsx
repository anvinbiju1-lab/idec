"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Drawer } from "@/components/ui/Drawer";
import { TEAM_MEMBERS } from "@/data/team";
import { TeamMember } from "@/types";
import { Github, Linkedin, Mail, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react";

// Alternating rotation angles for the Motion.dev scroll entrance effect
const ROTATIONS = [-7, 6, -5, 8, -6, 7];

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team" className="relative z-10 py-28 sm:py-36 bg-canvas border-b border-border-subtle overflow-hidden">
      {/* Background Subtle Ambient Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
            <span>// SECTION 06</span>
            <span className="text-border-strong">•</span>
            <span>PANEL MEMBERS & FOUNDERS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-semibold text-text-heading tracking-tight leading-tight">
            Architects of the ecosystem.
          </h2>

          <p className="text-text-body text-base sm:text-lg leading-relaxed">
            Faculty directors, student executives, and lead research engineers guiding pre-incubation, hardware prototyping, and capital deployment at Holy Grace.
          </p>
        </div>

        {/* Motion.dev Scroll-Triggered Card Stack Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-4">
          {TEAM_MEMBERS.map((member, idx) => {
            const initialRotation = ROTATIONS[idx % ROTATIONS.length];

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 70, rotate: initialRotation }}
                whileInView={{ opacity: 1, y: 0, rotate: initialRotation }}
                whileHover={{
                  rotate: 0,
                  scale: 1.04,
                  y: -10,
                  transition: { type: "spring", stiffness: 350, damping: 25 },
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 22,
                  mass: 0.8,
                  delay: idx * 0.08,
                }}
                onClick={() => setSelectedMember(member)}
                className="group relative cursor-pointer rounded-xl bg-surface-l2 border border-border-subtle p-7 shadow-2xl transition-colors duration-300 hover:border-amber hover:bg-[#1a1a20] hover:shadow-[0_20px_50px_rgba(255,107,0,0.15)] flex flex-col justify-between space-y-6"
              >
                {/* Top Hairline Amber Gradient on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber/0 to-transparent group-hover:via-amber transition-all duration-300 pointer-events-none" />

                {/* Card Top: Portrait + Status Tag */}
                <div className="space-y-5">
                  <div className="flex items-start justify-between">
                    {/* Portrait Image Frame */}
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden border border-border-strong group-hover:border-amber transition-all duration-300 shadow-md">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity" />
                    </div>

                    <span className="font-mono text-[10px] text-text-muted group-hover:text-amber transition-colors border border-border-subtle px-2 py-1 rounded-sm bg-surface-l1">
                      [0{idx + 1}] ROSTER
                    </span>
                  </div>

                  {/* Name & Role */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-sans font-semibold text-text-heading group-hover:text-white transition-colors tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-amber font-semibold tracking-wider uppercase">
                      {member.role}
                    </p>
                    <p className="text-xs font-mono text-text-muted">
                      {member.department}
                    </p>
                  </div>

                  {/* Short Bio */}
                  <p className="text-xs font-sans text-text-body line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Telemetry Micro Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.metrics.slice(0, 2).map((m, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono text-text-muted group-hover:text-text-heading bg-surface-l1 rounded-sm border border-border-subtle group-hover:border-amber/30 transition-colors"
                      >
                        {m.label}: <span className="text-amber font-semibold">{m.value}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Social Channels & Drawer Trigger */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1.5 text-text-muted hover:text-amber transition-colors"
                        title="Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-text-muted hover:text-amber transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-text-muted hover:text-amber transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-amber font-semibold text-[11px] group-hover:translate-x-1 transition-transform">
                    <span>TELEMETRY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Member Profile Drawer */}
      <Drawer
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        title={selectedMember?.name}
      >
        {selectedMember && (
          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-amber shadow-[0_0_20px_rgba(255,107,0,0.3)] flex-shrink-0">
                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-sans font-semibold text-text-heading">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-mono text-amber font-semibold uppercase">
                  {selectedMember.role}
                </p>
                <p className="text-xs text-text-muted">
                  {selectedMember.department}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// EXECUTIVE SUMMARY</h4>
              <p className="text-text-body text-xs leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            {/* Key Contributions */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// KEY ACHIEVEMENTS</h4>
              <div className="space-y-2">
                {selectedMember.contributions.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-text-body bg-surface-l1 p-2.5 rounded-sm border border-border-subtle">
                    <CheckCircle className="w-4 h-4 text-phosphor-green flex-shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Telemetry Metrics Grid */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// CONTRIBUTION TELEMETRY</h4>
              <div className="grid grid-cols-3 gap-2">
                {selectedMember.metrics.map((m, i) => (
                  <div key={i} className="bg-surface-l1 p-3 rounded-sm border border-border-subtle text-center">
                    <div className="text-lg font-mono font-semibold text-amber">{m.value}</div>
                    <div className="text-[9px] font-mono text-text-muted uppercase tracking-tighter mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Links */}
            <div className="pt-4 border-t border-border-subtle space-y-3">
              <h4 className="font-mono text-xs text-text-muted tracking-wider uppercase">DIRECT CHANNELS</h4>
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                {selectedMember.email && (
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-l1 hover:bg-surface-l3 border border-border-subtle rounded-md text-text-body hover:text-amber transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{selectedMember.email}</span>
                  </a>
                )}

                {selectedMember.linkedIn && (
                  <a
                    href={selectedMember.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-surface-l1 hover:bg-surface-l3 border border-border-subtle rounded-md text-text-body hover:text-amber transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}

                {selectedMember.github && (
                  <a
                    href={selectedMember.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 bg-surface-l1 hover:bg-surface-l3 border border-border-subtle rounded-md text-text-body hover:text-amber transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Drawer>
    </section>
  );
};
