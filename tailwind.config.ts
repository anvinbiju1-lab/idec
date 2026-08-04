import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#070708",
        surface: {
          l1: "#0F0F12",
          l2: "#18181C",
          l3: "#222228",
          l4: "#2C2C34",
        },
        text: {
          heading: "#F4F4F6",
          body: "#8E8E9A",
          muted: "#3F3F4A",
        },
        amber: {
          DEFAULT: "#FF6B00",
          glow: "rgba(255, 107, 0, 0.15)",
        },
        phosphor: {
          green: "#10B981",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          strong: "rgba(255, 255, 255, 0.18)",
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
        tactile: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
        "tactile-hover": "0 20px 40px -4px rgba(0, 0, 0, 0.8), 0 0 30px 0 rgba(255, 107, 0, 0.05)",
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
