"use client";

import React from "react";
import { TELEMETRY_METRICS } from "@/data/stats";

export const TelemetryTicker: React.FC = () => {
  return (
    <div className="w-full bg-surface-l1 border-y border-border-subtle py-2.5 overflow-hidden select-none">
      <div className="flex items-center space-x-8 animate-[marquee_25s_linear_infinite] whitespace-nowrap">
        {TELEMETRY_METRICS.concat(TELEMETRY_METRICS).map((stat, idx) => (
          <div key={idx} className="inline-flex items-center space-x-3 text-xs font-mono tracking-wider">
            <span className="text-text-muted">[</span>
            <span className="text-text-body">{stat.label}:</span>
            <span className="text-amber font-semibold">{stat.value}</span>
            {stat.change && <span className="text-text-muted text-[10px]">({stat.change})</span>}
            <span className="text-text-muted">]</span>
            <span className="text-border-strong px-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
