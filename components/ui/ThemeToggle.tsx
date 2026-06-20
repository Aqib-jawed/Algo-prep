"use client";

import { Moon } from "lucide-react";

export function ThemeToggle() {
  return (
    <button
      aria-label="Dark mode enabled"
      title="Dark mode enabled"
      className="flex h-9 items-center gap-2 rounded-card border border-border bg-surface px-3 text-sm text-secondary transition-colors hover:border-accent/50 hover:bg-elevated hover:text-primary"
    >
      <Moon size={16} className="text-accent" />
      <span className="hidden sm:inline">Dark</span>
    </button>
  );
}
