"use client";

import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function FilterBar({
  label,
  options,
  value,
  onChange
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-2 text-sm text-secondary">
        <SlidersHorizontal size={15} />
        {label}
      </span>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "rounded-full border border-border bg-surface px-3 py-1 text-xs text-secondary transition-colors hover:border-accent/50 hover:text-primary",
            value === option && "border-accent/50 bg-accent-dim text-accent"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
