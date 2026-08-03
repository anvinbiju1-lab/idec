import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-mono tracking-wide rounded-md transition-all duration-150 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:ring-offset-canvas disabled:opacity-50 disabled:pointer-events-none select-none";

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-2 h-8",
      md: "text-sm px-4 py-2 gap-2 h-10",
      lg: "text-base px-6 py-3 gap-3 h-12",
    };

    const variantStyles = {
      primary:
        "bg-amber text-canvas font-semibold shadow-[0_0_20px_rgba(255,107,0,0.25)] hover:shadow-[0_0_30px_rgba(255,107,0,0.45)] hover:bg-[#ff7a1a] border border-amber",
      secondary:
        "bg-surface-l2 text-text-heading border border-border-strong hover:border-text-heading/40 hover:bg-surface-l3",
      ghost:
        "bg-transparent text-text-body hover:text-text-heading hover:bg-surface-l2 border border-transparent",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        disabled={disabled}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-block transition-transform group-hover:-translate-x-0.5">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-block transition-transform group-hover:translate-x-0.5">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
