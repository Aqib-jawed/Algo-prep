"use client";

import React from "react";
import { SelectionCard } from "../SelectionCard";
import { ExperienceLevel } from "@/types/interview";
import { EXPERIENCES } from "@/data/interview/experience";
import { UserCheck, Award, GraduationCap } from "lucide-react";

interface SetupStep3Props {
  selectedExperience: ExperienceLevel | null;
  onSelect: (experience: ExperienceLevel) => void;
}

export function SetupStep3({ selectedExperience, onSelect }: SetupStep3Props) {
  const icons = {
    fresher: <GraduationCap className="h-5 w-5" />,
    "1-2": <UserCheck className="h-5 w-5" />,
    "3-5": <Award className="h-5 w-5" />,
  };

  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-primary">Select Experience Level</h2>
        <p className="text-xs text-secondary mt-1">
          Adjust the mock difficulty expectation, interview scenario behavior, and grading benchmarks.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {EXPERIENCES.map((exp) => (
          <SelectionCard
            key={exp.id}
            selected={selectedExperience === exp.id}
            onClick={() => onSelect(exp.id)}
            title={exp.label}
            description={exp.description}
            icon={icons[exp.id]}
          />
        ))}
      </div>
    </div>
  );
}
