"use client";

import React, { useEffect, useState } from "react";

export const EngineeringGrid: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 32px CAD Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Proximity Lighting Overlay around cursor */}
      <div
        className="absolute inset-0 transition-opacity duration-300 opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 107, 0, 0.03), transparent 80%)`,
        }}
      />

      {/* Subtle CAD Crosshair Marks at Screen Corners */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-white/10">+</div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-white/10">+</div>
      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-white/10">+</div>
      <div className="absolute bottom-6 right-6 font-mono text-[10px] text-white/10">+</div>
    </div>
  );
};
