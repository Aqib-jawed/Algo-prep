"use client";

import React from "react";
import { ProgrammingLanguage } from "@/types/interview";
import { LanguageSelector } from "./LanguageSelector";
import { Maximize2, Minimize2, Moon, Sun, Type, RotateCcw } from "lucide-react";

interface EditorToolbarProps {
  language: ProgrammingLanguage;
  onLanguageChange: (lang: ProgrammingLanguage) => void;
  onReset: () => void;
  theme: "vs-dark" | "light";
  onThemeChange: (theme: "vs-dark" | "light") => void;
  fontSize: number;
  onFontSizeChange: (size: number) => void;
  isFullscreen: boolean;
  onFullscreenToggle: () => void;
}

export function EditorToolbar({
  language,
  onLanguageChange,
  onReset,
  theme,
  onThemeChange,
  fontSize,
  onFontSizeChange,
  isFullscreen,
  onFullscreenToggle,
}: EditorToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#141414] px-4 py-2 border-b border-border text-xs">
      <div className="flex items-center gap-3">
        <LanguageSelector value={language} onChange={onLanguageChange} />
        
        <button
          onClick={onReset}
          title="Reset Code"
          aria-label="Reset Code to starter template"
          className="flex items-center gap-1.5 rounded border border-border bg-elevated px-2.5 py-1 text-2xs font-semibold text-secondary hover:text-primary transition-colors focus:border-accent"
        >
          <RotateCcw className="h-3 w-3" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Font Size Selector */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onFontSizeChange(fontSize - 1)}
            disabled={fontSize <= 10}
            title="Decrease Font Size"
            aria-label="Decrease Font Size"
            className="p-1 rounded bg-elevated hover:text-primary disabled:opacity-40 transition-colors focus:border-accent"
          >
            <Type className="h-3 w-3" />
          </button>
          <span className="font-mono text-2xs px-1 text-primary">{fontSize}px</span>
          <button
            onClick={() => onFontSizeChange(fontSize + 1)}
            disabled={fontSize >= 24}
            title="Increase Font Size"
            aria-label="Increase Font Size"
            className="p-1 rounded bg-elevated hover:text-primary disabled:opacity-40 transition-colors focus:border-accent"
          >
            <Type className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => onThemeChange(theme === "vs-dark" ? "light" : "vs-dark")}
          title="Toggle Editor Theme"
          aria-label="Toggle Editor Theme"
          className="p-1 rounded bg-elevated text-secondary hover:text-primary transition-colors focus:border-accent"
        >
          {theme === "vs-dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={onFullscreenToggle}
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          className="p-1 rounded bg-elevated text-secondary hover:text-primary transition-colors focus:border-accent"
        >
          {isFullscreen ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
        </button>
      </div>
    </div>
  );
}
