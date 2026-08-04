import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        surface: {
          l1: "#F8F9FA",
          l2: "#F1F3F5",
          l3: "#E9ECEF",
          l4: "#DEE2E6",
        },
        text: {
          heading: "#111827",
          body: "#4B5563",
          muted: "#9CA3AF",
        },
        amber: {
          DEFAULT: "#FF6B00",
          glow: "rgba(255, 107, 0, 0.15)",
        },
        phosphor: {
          green: "#10B981",
        },
        border: {
          subtle: "rgba(0, 0, 0, 0.08)",
          strong: "rgba(0, 0, 0, 0.18)",
          focus: "#FF6B00",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "20px",
        full: "9999px",
      },
      boxShadow: {
        tactile: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "tactile-hover": "0 20px 40px -4px rgba(0, 0, 0, 0.1), 0 0 30px 0 rgba(255, 107, 0, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-fade": "glowFade 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glowFade: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
