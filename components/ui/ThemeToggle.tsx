"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 items-center gap-2 rounded-card border border-border bg-surface px-3 text-sm text-secondary transition-colors hover:border-accent/50 hover:bg-elevated hover:text-primary"
    >
      {isDark ? (
        <Sun size={16} className="text-accent" />
      ) : (
        <Moon size={16} className="text-accent" />
      )}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
