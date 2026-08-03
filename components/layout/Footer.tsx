"use client";

import React from "react";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-canvas border-t border-border-subtle pt-16 pb-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Massive Editorial Statement */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between border-b border-border-subtle pb-12 gap-8">
          <div>
            <span className="font-mono text-xs text-amber tracking-widest uppercase block mb-3">
              // THE INCUBATOR OS
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-sans font-semibold text-text-heading tracking-tight leading-none">
              KEEP BUILDING<span className="text-amber">.</span>
            </h2>
          </div>

          <button
            onClick={scrollToTop}
            className="group font-mono text-xs text-text-body hover:text-text-heading flex items-center gap-2 border border-border-subtle hover:border-border-strong px-4 py-2 rounded-md bg-surface-l1 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Footer Meta Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-mono text-text-body">
          {/* Col 1: Institution Info */}
          <div className="space-y-3">
            <div className="text-text-heading font-semibold">IEDC HOLY GRACE</div>
            <p className="text-text-muted leading-relaxed">
              Innovation & Entrepreneurship Development Cell
              <br />
              Holy Grace Academy of Engineering
              <br />
              Mala, Thrissur, Kerala — 680732
            </p>
          </div>

          {/* Col 2: Direct Links */}
          <div className="space-y-3">
            <div className="text-text-heading font-semibold">ECOSYSTEM</div>
            <ul className="space-y-2 text-text-muted">
              <li>
                <a href="#mission" className="hover:text-amber transition-colors">
                  01. The Mission
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-amber transition-colors">
                  02. Incubation Engine
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber transition-colors">
                  03. Startup Vault
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-amber transition-colors">
                  04. Innovation Calendar
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Telemetry */}
          <div className="space-y-3">
            <div className="text-text-heading font-semibold">CONNECT</div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-surface-l2 border border-border-subtle rounded-md hover:border-amber text-text-body hover:text-amber transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-surface-l2 border border-border-subtle rounded-md hover:border-amber text-text-body hover:text-amber transition-all"
                aria-label="LinkedIn Page"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-surface-l2 border border-border-subtle rounded-md hover:border-amber text-text-body hover:text-amber transition-all"
                aria-label="X Twitter Account"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-surface-l2 border border-border-subtle rounded-md hover:border-amber text-text-body hover:text-amber transition-all"
                aria-label="Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 4: System Status */}
          <div className="space-y-3">
            <div className="text-text-heading font-semibold">SYSTEM TELEMETRY</div>
            <div className="flex items-center gap-2 text-phosphor-green">
              <span className="w-2 h-2 rounded-full bg-phosphor-green animate-pulse" />
              <span>INCUBATION NODE: ONLINE</span>
            </div>
            <p className="text-text-muted text-[10px]">
              VERSION 1.0.0 • PROD-REF-2026
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-text-muted gap-4">
          <div>
            © {new Date().getFullYear()} IEDC Holy Grace Academy of Engineering. All rights reserved.
          </div>
          <div>
            DESIGNED WITH TACTILE PRECISION • NO CODE CLICHÉS
          </div>
        </div>
      </div>
    </footer>
  );
};
