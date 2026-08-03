"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { PROJECTS_DATA } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import { Github, ExternalLink, ArrowUpRight, Cpu, Layers, DollarSign } from "lucide-react";

const CATEGORIES: ProjectCategory[] = ["All", "Hardware", "AI & Software", "DeepTech", "IoT"];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <section id="projects" className="relative z-10 py-24 sm:py-32 bg-canvas border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header & Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-border-subtle pb-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
              <span>// SECTION 04</span>
              <span className="text-border-strong">•</span>
              <span>STARTUP & PROJECT VAULT</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-text-heading tracking-tight">
              Featured Inventions & Ships.
            </h2>

            <p className="text-text-body text-base leading-relaxed">
              Explore real physical hardware, autonomous drone systems, distributed software engines, and patented technologies built at Holy Grace Academy of Engineering.
            </p>
          </div>

          {/* Monospaced Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono tracking-wider rounded-sm transition-all duration-150 border ${
                  selectedCategory === cat
                    ? "bg-amber text-canvas font-semibold border-amber shadow-[0_0_12px_rgba(255,107,0,0.25)]"
                    : "bg-surface-l2 text-text-body border-border-subtle hover:border-border-strong hover:text-text-heading"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <Card
                  enableTilt
                  onClick={() => setSelectedProject(project)}
                  className="h-full flex flex-col justify-between space-y-6 group"
                >
                  {/* Top Bar: Category + Status Dot */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={project.status === "Live" ? "green" : project.status === "Patented" ? "amber" : "neutral"}
                        showDot
                      >
                        {project.status}
                      </Badge>
                      <span className="font-mono text-xs text-text-muted">{project.year}</span>
                    </div>

                    {/* Image Container with moody desaturated grading */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-surface-l3 border border-border-subtle">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-l2 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2 left-2 font-mono text-[10px] text-text-heading bg-canvas/80 px-2 py-0.5 rounded-sm border border-border-subtle">
                        {project.category}
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-sans font-medium text-text-heading group-hover:text-amber transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-body line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-mono text-text-muted bg-surface-l1 rounded-sm border border-border-subtle"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Bar: Action Indicator */}
                  <div className="pt-4 border-t border-border-subtle flex items-center justify-between font-mono text-xs text-amber font-semibold group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE_ARCHITECTURAL_VAULT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Deep Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={selectedProject.status === "Live" ? "green" : "amber"} showDot>
                {selectedProject.status}
              </Badge>
              <Badge variant="outline">{selectedProject.category}</Badge>
              {selectedProject.fundingRaised && (
                <span className="font-mono text-xs text-amber bg-amber/10 px-2.5 py-1 rounded-sm border border-amber/30">
                  FUNDED: {selectedProject.fundingRaised}
                </span>
              )}
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-surface-l3 border border-border-subtle">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-2">
              <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// SYSTEM SUMMARY</h4>
              <p className="text-text-body text-sm leading-relaxed">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
            </div>

            {selectedProject.highlights && (
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-amber tracking-wider uppercase">// TECHNICAL HIGHLIGHTS</h4>
                <ul className="space-y-1.5 text-xs font-mono text-text-body">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-mono text-xs text-text-muted tracking-wider uppercase">TEAM LEADS</h4>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-heading">
                {selectedProject.teamLeads.map((lead) => (
                  <span key={lead} className="bg-surface-l1 px-2.5 py-1 rounded-sm border border-border-subtle">
                    {lead}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-3">
              {selectedProject.githubUrl && (
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="secondary" size="sm" icon={<Github className="w-3.5 h-3.5" />}>
                    GitHub Repository
                  </Button>
                </a>
              )}

              {selectedProject.demoUrl && (
                <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
                  <Button variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
                    Launch Live Telemetry
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
