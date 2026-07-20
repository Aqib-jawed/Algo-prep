"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SetupProgressProps {
  currentStep: number;
}

const STEPS = [
  { step: 1, label: "Category" },
  { step: 2, label: "Company" },
  { step: 3, label: "Experience" },
  { step: 4, label: "Language" },
  { step: 5, label: "Summary" },
];

export function SetupProgress({ currentStep }: SetupProgressProps) {
  const percentage = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="w-full space-y-6">
      {/* Visual Progress Bar */}
      <div className="relative h-1.5 w-full rounded-full bg-elevated">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-accent transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Steps List */}
      <div className="grid grid-cols-5 text-center">
        {STEPS.map((s) => {
          const isActive = s.step === currentStep;
          const isCompleted = s.step < currentStep;

          return (
            <div key={s.step} className="flex flex-col items-center space-y-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all",
                  isActive
                    ? "border-accent bg-accent-dim text-accent font-bold scale-110 shadow-sm"
                    : isCompleted
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-surface text-secondary"
                )}
              >
                {s.step}
              </div>
              <span
                className={cn(
                  "hidden sm:inline text-2xs font-semibold tracking-wide uppercase transition-colors",
                  isActive ? "text-accent font-bold" : isCompleted ? "text-primary" : "text-muted"
                )}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
