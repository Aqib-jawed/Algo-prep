"use client";

import React, { KeyboardEvent } from "react";
import { cn } from "@/lib/utils";

interface SelectionCardProps {
  selected: boolean;
  onClick: () => void;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
}

export function SelectionCard({
  selected,
  onClick,
  title,
  description,
  icon,
  badge,
  className,
}: SelectionCardProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-pressed={selected}
      className={cn(
        "card cursor-pointer p-6 flex flex-col justify-between transition-all outline-none",
        "hover:border-accent/50 hover:bg-elevated/20 focus:border-accent focus:ring-1 focus:ring-accent",
        selected 
          ? "border-accent bg-accent-dim/30 ring-1 ring-accent" 
          : "border-border bg-surface",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          {icon && (
            <div className={cn(
              "rounded-lg p-2 transition-colors",
              selected ? "bg-accent/15 text-accent" : "bg-elevated text-secondary"
            )}>
              {icon}
            </div>
          )}
          {badge && (
            <span className={cn(
              "rounded-full border px-2.5 py-0.5 text-2xs font-semibold tracking-wider uppercase",
              selected ? "bg-accent/10 border-accent/20 text-accent" : "bg-elevated border-border text-secondary"
            )}>
              {badge}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-md font-semibold text-primary">{title}</h3>
          {description && (
            <p className="mt-2 text-xs text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
