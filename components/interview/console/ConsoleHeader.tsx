"use client";

import React from "react";
import { Terminal, Trash2, X } from "lucide-react";

interface ConsoleHeaderProps {
  onClose: () => void;
  onClear: () => void;
  showClear: boolean;
}

export function ConsoleHeader({ onClose, onClear, showClear }: ConsoleHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-[#141414] px-4 py-2 border-b border-border text-xs text-secondary">
      <div className="flex items-center gap-2">
        <Terminal className="h-4 w-4 text-accent" />
        <span className="font-semibold text-primary">Execution Output Console</span>
      </div>

      <div className="flex items-center gap-3">
        {showClear && (
          <button
            onClick={onClear}
            title="Clear Console Results"
            aria-label="Clear Console Results"
            className="hover:text-primary transition-colors focus:border-accent"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
        <button
          onClick={onClose}
          title="Minimize Console Drawer"
          aria-label="Minimize Console Drawer"
          className="hover:text-primary transition-colors focus:border-accent"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
