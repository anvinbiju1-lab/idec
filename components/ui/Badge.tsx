import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "amber" | "green" | "neutral" | "outline";
  showDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "neutral",
  showDot = false,
  className,
}) => {
  const variantStyles = {
    amber: "bg-amber/10 text-amber border-amber/30",
    green: "bg-phosphor-green/10 text-phosphor-green border-phosphor-green/30",
    neutral: "bg-surface-l3 text-text-body border-border-subtle",
    outline: "bg-transparent text-text-heading border-border-strong",
  };

  const dotStyles = {
    amber: "bg-amber shadow-[0_0_8px_#FF6B00]",
    green: "bg-phosphor-green shadow-[0_0_8px_#10B981]",
    neutral: "bg-text-body",
    outline: "bg-text-heading",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono tracking-wider rounded-sm border transition-colors duration-150 uppercase select-none",
        variantStyles[variant],
        className
      )}
    >
      {showDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block animate-pulse", dotStyles[variant])}
        />
      )}
      {children}
    </span>
  );
};
