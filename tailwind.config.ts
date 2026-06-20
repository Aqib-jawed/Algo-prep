import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./store/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "var(--bg-base)",
        surface: "var(--bg-surface)",
        elevated: "var(--bg-elevated)",
        border: "var(--bg-border)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        muted: "var(--text-muted)",
        easy: "#00b8a3",
        medium: "#ffc01e",
        hard: "#ff375f"
      },
      fontFamily: {
        sans: ["var(--font-source-sans)", "Source Sans 3", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"]
      },
      fontSize: {
        "2xs": ["11px", "16px"],
        xs: ["12px", "18px"],
        sm: ["13px", "20px"],
        base: ["14px", "24px"],
        md: ["16px", "27px"],
        lg: ["20px", "30px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "38px"]
      },
      borderRadius: {
        card: "8px"
      },
      backgroundImage: {
        "home-radial": "radial-gradient(circle 200px at center, rgba(249,115,22,0.06), transparent 70%)"
      }
    }
  },
  plugins: []
};

export default config;
