"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { EVENTS_DATA } from "@/data/events";
import { EventItem } from "@/types";
import { Calendar, MapPin, Clock, ArrowUpRight } from "lucide-react";

export const EventsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [filter, setFilter] = useState<"All" | "Upcoming" | "Past">("All");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0.1, 0.95], ["0%", "100%"]);

  const filteredEvents = EVENTS_DATA.filter(
    (e) => filter === "All" || (filter === "Upcoming" ? e.status === "Upcoming" : e.status === "Past")
  );

  return (
    <section id="events" ref={containerRef} className="relative z-10 pt-32 sm:pt-40 pb-24 sm:pb-32 bg-surface-l1 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-subtle pb-8"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber tracking-widest uppercase">
              <span>// SECTION 05</span>
              <span className="text-border-strong">•</span>
              <span>INNOVATION CALENDAR</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-sans font-semibold text-text-heading tracking-tight">
              Hackathons, Workshops & Pitch Days.
            </h2>

            <p className="text-text-body text-base leading-relaxed">
              Stay synchronized with high-velocity technical sessions, multi-day hardware buildathons, and investment pitch events at Holy Grace.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {(["All", "Upcoming", "Past"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider rounded-sm border transition-all ${
                  filter === tab
                    ? "bg-amber text-canvas font-semibold border-amber shadow-[0_0_12px_rgba(255,107,0,0.25)]"
                    : "bg-surface-l2 text-text-body border-border-subtle hover:text-text-heading hover:border-border-strong"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animated Timeline Layout */}
        <div className="relative border-l border-border-strong pl-6 sm:pl-10 space-y-12">
          {/* Scroll-Driven Glowing Timeline Progress Line */}
          <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] overflow-hidden pointer-events-none">
            <motion.div
              style={{ height: timelineHeight }}
              className="w-full bg-amber shadow-[0_0_12px_#FF6B00]"
            />
          </div>

          {filteredEvents.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full border-2 bg-canvas transition-colors ${
                  event.status === "Upcoming"
                    ? "border-amber shadow-[0_0_12px_#FF6B00]"
                    : "border-border-strong"
                }`}
              />

              <Card innerClassName="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Poster Preview */}
                <div className="md:col-span-4 relative aspect-[16/10] md:aspect-square w-full overflow-hidden rounded-md bg-surface-l3 border border-border-subtle flex-shrink-0">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant={event.status === "Upcoming" ? "amber" : "neutral"} showDot>
                      {event.category}
                    </Badge>
                  </div>
                </div>

                {/* Event Information */}
                <div className="md:col-span-8 space-y-4 w-full min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-amber font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{event.displayDate}</span>
                    </div>

                    {event.status === "Upcoming" && (
                      <CountdownTimer targetDate={event.date} />
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-sans font-semibold text-text-heading group-hover:text-amber transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-text-body text-xs sm:text-sm leading-relaxed">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-text-muted">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-amber flex-shrink-0" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {event.speaker && (
                    <div className="pt-2 text-xs font-mono text-text-body border-t border-border-subtle flex flex-wrap items-center gap-2">
                      <span className="text-text-muted">KEY SPEAKER:</span>
                      <span className="text-text-heading font-semibold">{event.speaker.name}</span>
                      <span className="text-text-muted">({event.speaker.role}, {event.speaker.company})</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Button
                      variant={event.status === "Upcoming" ? "primary" : "secondary"}
                      size="sm"
                      onClick={() => setSelectedEvent(event)}
                      icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    >
                      {event.status === "Upcoming" ? "Register For Event" : "View Agenda Recap"}
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Registration / Agenda Modal */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
      >
        {selectedEvent && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant={selectedEvent.status === "Upcoming" ? "amber" : "neutral"} showDot>
                {selectedEvent.status}
              </Badge>
              <span className="font-mono text-xs text-amber font-semibold">
                {selectedEvent.displayDate} • {selectedEvent.time}
              </span>
            </div>

            <p className="text-text-body text-sm leading-relaxed">
              {selectedEvent.longDescription || selectedEvent.description}
            </p>

            <div className="p-4 bg-surface-l1 rounded-md border border-border-subtle space-y-2 text-xs font-mono">
              <div className="flex justify-between text-text-muted">
                <span>LOCATION:</span>
                <span className="text-text-heading">{selectedEvent.venue}</span>
              </div>
              {selectedEvent.seatsTotal && (
                <div className="flex justify-between text-text-muted">
                  <span>SEATS REMAINING:</span>
                  <span className="text-phosphor-green font-semibold">
                    {selectedEvent.seatsAvailable} / {selectedEvent.seatsTotal} SEATS
                  </span>
                </div>
              )}
            </div>

            {selectedEvent.status === "Upcoming" ? (
              <div className="space-y-4 pt-2">
                <h4 className="font-mono text-xs text-amber uppercase">// QUICK REGISTRATION</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Student Email (@holygrace.ac.in)"
                    className="w-full bg-surface-l1 border border-border-subtle focus:border-amber rounded-md px-3 py-2 text-xs font-mono text-text-heading focus:outline-none"
                  />
                </div>
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    alert("Registration confirmed! A ticket has been dispatched to your email.");
                    setSelectedEvent(null);
                  }}
                >
                  Confirm Registration Ticket
                </Button>
              </div>
            ) : (
              <div className="text-xs font-mono text-text-muted text-center py-4 border-t border-border-subtle">
                THIS EVENT HAS COMPLETED. CHECK BACK FOR RECORDINGS.
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
