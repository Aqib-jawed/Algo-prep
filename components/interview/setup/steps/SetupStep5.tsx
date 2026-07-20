"use client";

import React from "react";
import { SummaryCard } from "../SummaryCard";
import { Company, CompanyTier, ExperienceLevel, ProgrammingLanguage } from "@/types/interview";
import { Sparkles } from "lucide-react";

interface SetupStep5Props {
  companyCategory: CompanyTier | null;
  company: Company | null;
  experience: ExperienceLevel | null;
  language: ProgrammingLanguage | null;
  onGenerate: () => void;
}

export function SetupStep5({
  companyCategory,
  company,
  experience,
  language,
  onGenerate,
}: SetupStep5Props) {
  const isComplete = companyCategory && company && experience && language;

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-primary">Ready to Generate Workspace?</h2>
        <p className="text-xs text-secondary mt-1">
          Review your selected settings. Generating the session will configure the mock interview dashboard.
        </p>
      </div>

      {isComplete ? (
        <div className="space-y-8">
          <SummaryCard
            companyCategory={companyCategory}
            company={company}
            experience={experience}
            language={language}
          />

          <div className="flex justify-center border-t border-border pt-6 mt-8">
            <button
              onClick={onGenerate}
              className="inline-flex items-center gap-2 rounded-card bg-accent px-8 py-3.5 font-bold text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base"
            >
              <Sparkles className="h-5 w-5" />
              <span>Generate Interview</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="card p-8 text-center text-secondary">
          Some configuration details are missing. Please complete all previous steps.
        </div>
      )}
    </div>
  );
}
