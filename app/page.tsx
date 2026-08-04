"use client";

import React, { useState } from "react";
import { EngineeringGrid } from "@/components/layout/EngineeringGrid";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { IdeaSection } from "@/components/sections/IdeaSection";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinStepSubmitted, setJoinStepSubmitted] = useState(false);

  const scrollToExplore = () => {
    const el = document.getElementById("mission");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinStepSubmitted(true);
    setTimeout(() => {
      setJoinStepSubmitted(false);
      setIsJoinModalOpen(false);
    }, 2000);
  };

  return (
    <main
      className="relative min-h-screen bg-canvas text-text-body overflow-x-hidden"
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* CAD Engineering Background Grid */}
      <EngineeringGrid />

      {/* Floating Island Navigation Dock */}
      <FloatingNav onJoinClick={() => setIsJoinModalOpen(true)} />

      {/* 01 Hero Matrix */}
      <HeroSection
        onExploreClick={scrollToExplore}
        onJoinClick={() => setIsJoinModalOpen(true)}
      />

      {/* 02 The Mission */}
      <MissionSection />

      {/* 03 Innovation Journey (Incubation Engine) */}
      <JourneySection />

      {/* 04 Projects / Startup Vault */}
      <ProjectsSection />

      {/* 05 Events / Innovation Calendar */}
      <EventsSection />

      {/* 06 Panel Members / Leadership Grid */}
      <TeamSection />

      {/* 07 Suggest An Idea */}
      <IdeaSection />

      {/* 08 Dark Editorial Footer */}
      <Footer />

      {/* Join Community Modal */}
      <Modal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        title="JOIN IEDC HOLY GRACE ECOSYSTEM"
      >
        {joinStepSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-phosphor-green/10 text-phosphor-green border border-phosphor-green/30 mx-auto flex items-center justify-center font-mono font-semibold">
              ✓
            </div>
            <h4 className="text-xl font-sans font-semibold text-text-heading">
              APPLICATION RECEIVED
            </h4>
            <p className="text-xs font-mono text-text-body">
              Your onboarding telemetry has been queued. An IEDC Executive Lead will issue your workspace badge via email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleJoinSubmit} className="space-y-4">
            <p className="text-xs font-mono text-text-body leading-relaxed">
              Open to all students of Holy Grace Academy of Engineering across Mechanical, CSE, ECE, Robotics, and Civil departments.
            </p>

            <div className="space-y-1">
              <label className="block font-mono text-xs text-text-muted">FULL NAME</label>
              <input
                type="text"
                required
                placeholder="Devika Nair"
                className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-xs text-text-muted">CAMPUS EMAIL (@holygrace.ac.in)</label>
              <input
                type="email"
                required
                placeholder="devika@holygrace.ac.in"
                className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-xs text-text-muted">PRIMARY ENGINEERING DEPARTMENT</label>
              <select className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none">
                <option value="CSE">Computer Science & Engineering</option>
                <option value="ME">Mechanical Engineering</option>
                <option value="ECE">Electronics & Communication Engg.</option>
                <option value="RA">Robotics & Automation</option>
                <option value="CE">Civil Engineering</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-xs text-text-muted">WHAT DO YOU WANT TO BUILD?</label>
              <textarea
                rows={3}
                placeholder="e.g. Hardware drones, IoT micro-nodes, AI micro-kernels..."
                className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none resize-none"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Submit Join Application
            </Button>
          </form>
        )}
      </Modal>
    </main>
  );
}
