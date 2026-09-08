import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#04070a",
        midnight: "#070b12",
        navy: {
          950: "#050810",
          900: "#0a0f1a",
          800: "#0f1626",
          700: "#161f34",
          600: "#202c46",
        },
        graphite: {
          900: "#0c0e12",
          800: "#14171d",
          700: "#1c2129",
          600: "#2a303b",
          500: "#3d4552",
        },
        ice: {
          100: "#f5f8fa",
          200: "#e8eef2",
          300: "#c9d4dc",
          400: "#9fb0bc",
        },
        teal: {
          400: "#4fd6c8",
          500: "#2bc4b8",
          600: "#1a9e94",
        },
        cyan: {
          300: "#7fe8ff",
          400: "#4fd0f0",
          500: "#22b8dd",
        },
        signal: {
          amber: "#e8a94f",
          rose: "#e0637a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest2: "0.28em",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 60% at 50% 0%, rgba(79,214,200,0.14) 0%, rgba(4,7,10,0) 70%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(79,214,200,0.25)",
        "glow-sm": "0 0 24px rgba(79,214,200,0.18)",
        panel: "0 24px 80px rgba(0,0,0,0.5)",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      maxWidth: {
        content: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
