"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface WizardNavigationProps {
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
  canNext: boolean;
}

export function WizardNavigation({
  currentStep,
  onBack,
  onNext,
  canNext,
}: WizardNavigationProps) {
  return (
    <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
      {currentStep > 1 ? (
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-card border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-elevated hover:text-primary focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>
      ) : (
        <div />
      )}

      {currentStep < 5 && (
        <button
          disabled={!canNext}
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-card bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
