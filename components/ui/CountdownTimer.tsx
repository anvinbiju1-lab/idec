"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.isExpired) {
    return <span className="font-mono text-xs text-phosphor-green">[ EVENT LIVE NOW ]</span>;
  }

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="inline-flex items-center gap-3 font-mono text-xs bg-surface-l1 border border-border-subtle px-3 py-1.5 rounded-sm">
      <span className="text-text-muted">T-MINUS</span>
      <div className="flex items-center gap-1.5 text-text-heading font-semibold">
        <span className="bg-surface-l3 px-1.5 py-0.5 rounded-sm text-amber">{pad(timeLeft.days)}d</span>
        <span>:</span>
        <span className="bg-surface-l3 px-1.5 py-0.5 rounded-sm text-amber">{pad(timeLeft.hours)}h</span>
        <span>:</span>
        <span className="bg-surface-l3 px-1.5 py-0.5 rounded-sm text-amber">{pad(timeLeft.minutes)}m</span>
        <span>:</span>
        <span className="bg-surface-l3 px-1.5 py-0.5 rounded-sm text-amber">{pad(timeLeft.seconds)}s</span>
      </div>
    </div>
  );
};
