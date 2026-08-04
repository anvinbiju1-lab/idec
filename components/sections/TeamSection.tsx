"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel";
import { TEAM_MEMBERS } from "@/data/team";
import { TeamMember } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Linkedin, Instagram, Github, Mail, Award, Sparkles } from "lucide-react";

export const TeamSection: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Transform TEAM_MEMBERS into CoverflowSlide format
  const slides: CoverflowSlide[] = TEAM_MEMBERS.map((member) => ({
    src: member.avatar,
    alt: member.name,
    title: member.name,
    subtitle: member.role,
    meta: member.metrics,
  }));

  return (
    <section id="team" className="relative z-10 py-20 sm:py-32 bg-canvas overflow-hidden">
      {/* Background Micro Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-3xl text-center mx-auto"
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// SECTION 06</span>
            <span className="text-border-strong">•</span>
            <span>LEADERSHIP & PANEL MEMBERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-semibold text-text-heading tracking-tight">
            The Architects Behind the Cell.
          </h2>

          <p className="text-text-body text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Faculty leads, student directors, and engineering mentors guiding hardware ventures and student startups at Holy Grace.
          </p>
        </motion.div>

        {/* 3D Perspective Coverflow Carousel with AutoPlay & Pause on Hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2"
        >
          <CoverflowCarousel
            slides={slides}
            rotate={36}
            depth={0.55}
            perspective={2.8}
            cardWidth="clamp(190px, 45vw, 300px)"
            gap={0.06}
            showCaption
            showPagination
            showNavigation
            autoPlay
            autoPlayInterval={3200}
            pauseOnHover
            onCardClick={(index) => setSelectedMember(TEAM_MEMBERS[index])}
          />
        </motion.div>

        {/* Quick Member Selection Cards Below Carousel */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {TEAM_MEMBERS.map((member) => (
            <button
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="p-2.5 sm:p-3 bg-surface-l1 hover:bg-surface-l2 border border-border-subtle hover:border-amber/40 rounded-lg text-left transition-all duration-200 group active:scale-95"
            >
              <div className="flex items-center gap-2">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all border border-border-subtle flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-xs font-semibold text-text-heading truncate group-hover:text-amber transition-colors">
                    {member.name}
                  </p>
                  <p className="font-mono text-[9px] sm:text-[10px] text-text-muted truncate">
                    {member.role.split(" ")[0]}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Member Bio & Telemetry Modal with LinkedIn & Instagram links */}
      <Modal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
        title={selectedMember?.name}
      >
        {selectedMember && (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={selectedMember.avatar}
                alt={selectedMember.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover border border-amber/30 shadow-lg flex-shrink-0"
              />
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-sans font-semibold text-text-heading truncate">
                  {selectedMember.name}
                </h3>
                <p className="text-xs font-mono text-amber font-medium truncate">
                  {selectedMember.role}
                </p>
                <p className="text-[11px] sm:text-xs font-mono text-text-muted truncate">
                  {selectedMember.department}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// EXECUTIVE PROFILE</h4>
              <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                {selectedMember.bio}
              </p>
            </div>

            {selectedMember.contributions && (
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// CORE CONTRIBUTIONS</h4>
                <ul className="space-y-1.5 text-xs font-mono text-text-body">
                  {selectedMember.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Award className="w-3.5 h-3.5 text-amber flex-shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 bg-surface-l1 rounded-lg border border-border-subtle">
              {selectedMember.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <p className="font-mono text-sm sm:text-base font-semibold text-text-heading">{m.value}</p>
                  <p className="font-mono text-[8px] sm:text-[9px] text-text-muted uppercase tracking-tight">{m.label}</p>
                </div>
              ))}
            </div>

            {/* Social Links (LinkedIn, Instagram, GitHub, Email) */}
            <div className="pt-3 border-t border-border-subtle flex flex-wrap items-center gap-2 sm:gap-3">
              <a href={selectedMember.linkedIn || "https://linkedin.com"} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" icon={<Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />}>
                  LinkedIn
                </Button>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm" icon={<Instagram className="w-3.5 h-3.5 text-[#E4405F]" />}>
                  Instagram
                </Button>
              </a>

              {selectedMember.github && (
                <a href={selectedMember.github} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm" icon={<Github className="w-3.5 h-3.5" />}>
                    GitHub
                  </Button>
                </a>
              )}

              {selectedMember.email && (
                <a href={`mailto:${selectedMember.email}`}>
                  <Button variant="secondary" size="sm" icon={<Mail className="w-3.5 h-3.5" />}>
                    Email
                  </Button>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
