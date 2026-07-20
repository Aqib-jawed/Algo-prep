"use client";

import React from "react";
import { Company, CompanyTier, ExperienceLevel, ProgrammingLanguage } from "@/types/interview";
import { Building2, Briefcase, Code2, Clock, Layers } from "lucide-react";

interface SummaryCardProps {
  companyCategory: CompanyTier;
  company: Company;
  experience: ExperienceLevel;
  language: ProgrammingLanguage;
}

export function SummaryCard({
  companyCategory,
  company,
  experience,
  language,
}: SummaryCardProps) {
  const categoryLabels: Record<CompanyTier, string> = {
    service: "Service Based",
    "mid-product": "Mid-Level Product",
    product: "Product / FAANG",
  };

  const experienceLabels: Record<ExperienceLevel, string> = {
    fresher: "Fresher",
    "1-2": "1-2 Years Experience",
    "3-5": "3-5 Years Experience",
  };

  const languageLabels: Record<ProgrammingLanguage, string> = {
    java: "Java",
    python: "Python",
    cpp: "C++",
    javascript: "JavaScript",
    c: "C",
  };

  const items = [
    {
      label: "Target Company",
      value: company.name,
      icon: Building2,
      detail: categoryLabels[companyCategory],
    },
    {
      label: "Experience Level",
      value: experienceLabels[experience],
      icon: Briefcase,
    },
    {
      label: "Programming Language",
      value: languageLabels[language],
      icon: Code2,
    },
    {
      label: "Estimated Duration",
      value: `${company.estimatedDuration} minutes`,
      icon: Clock,
      detail: "Total simulation time limit",
    },
    {
      label: "Expected Rounds",
      value: `${company.defaultRounds} technical rounds`,
      icon: Layers,
      detail: "System design & coding sessions",
    },
  ];

  return (
    <div className="card divide-y divide-border overflow-hidden bg-surface">
      <div className="bg-gradient-to-r from-accent/5 to-transparent px-6 py-5">
        <h3 className="text-md font-semibold text-primary">Interview Configuration Summary</h3>
        <p className="text-xs text-secondary mt-1">Please confirm your setup details below before generating the workspace.</p>
      </div>

      <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-secondary font-medium">
                <Icon className="h-4 w-4 text-accent" />
                <span>{item.label}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">{item.value}</p>
                {item.detail && (
                  <p className="text-2xs text-secondary mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
