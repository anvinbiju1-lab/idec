"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";

export const IdeaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    domain: "Hardware & Robotics",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.title || !formData.description) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="ideas" className="relative z-10 py-24 sm:py-32 bg-surface-l1 border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
            <span>// SECTION 07</span>
            <span className="text-border-strong">•</span>
            <span>INCUBATION PIPELINE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-sans font-semibold text-text-heading tracking-tight">
            Have an Idea Worth Building?
          </h2>

          <p className="text-text-body text-base max-w-xl mx-auto leading-relaxed">
            Submit your concept to the Holy Grace IEDC review board. Verified projects receive workspace allocation, prototyping grants up to ₹500K, and hardware lab access.
          </p>
        </div>

        {/* Input Form Card */}
        <Card className="p-8 sm:p-10 relative overflow-hidden">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-phosphor-green/10 border border-phosphor-green/30 text-phosphor-green mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-sans font-semibold text-text-heading">
                  PROPOSAL DISPATCHED TO REVIEW BOARD
                </h3>
                <p className="text-sm font-mono text-text-body max-w-md mx-auto">
                  Your idea <span className="text-amber font-semibold">"{formData.title}"</span> has been logged in our incubation database. Our Technical Director will reach out to <span className="text-text-heading">{formData.email}</span> within 48 hours.
                </p>
              </div>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", title: "", domain: "Hardware & Robotics", description: "" });
                }}
              >
                Submit Another Concept
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-text-muted uppercase">
                    FULL NAME <span className="text-amber">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul V. Menon"
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-4 py-3 text-sm font-mono text-text-heading placeholder-text-muted focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-text-muted uppercase">
                    EMAIL ADDRESS <span className="text-amber">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@holygrace.ac.in"
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-4 py-3 text-sm font-mono text-text-heading placeholder-text-muted focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-text-muted uppercase">
                    IDEA TITLE <span className="text-amber">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. Submersible Optical Telemetry Probe"
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-4 py-3 text-sm font-mono text-text-heading placeholder-text-muted focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-text-muted uppercase">
                    TECHNICAL DOMAIN
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-4 py-3 text-sm font-mono text-text-heading focus:outline-none transition-colors"
                  >
                    <option value="Hardware & Robotics">Hardware & Robotics</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="IoT & Embedded Systems">IoT & Embedded Systems</option>
                    <option value="CleanTech & Energy">CleanTech & Energy</option>
                    <option value="Software Systems">Software Systems</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-text-muted uppercase">
                  PROJECT DESCRIPTION & PROBLEM STATEMENT <span className="text-amber">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe the core engineering innovation, intended target users, and what prototype support you require..."
                  className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-4 py-3 text-sm font-mono text-text-heading placeholder-text-muted focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="font-mono text-[11px] text-text-muted flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber" />
                  CONFIDENTIAL TECHNICAL EVALUATION
                </span>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? "DISPATCHING..." : "DISPATCH CONCEPT →"}
                </Button>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
};
