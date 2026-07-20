"use client";

import React from "react";
import { SelectionCard } from "../SelectionCard";
import { ProgrammingLanguage } from "@/types/interview";
import { LANGUAGES } from "@/data/interview/languages";
import { Code } from "lucide-react";

interface SetupStep4Props {
  selectedLanguage: ProgrammingLanguage | null;
  onSelect: (language: ProgrammingLanguage) => void;
}

export function SetupStep4({ selectedLanguage, onSelect }: SetupStep4Props) {
  return (
    <div className="space-y-6">
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-semibold text-primary">Select Programming Language</h2>
        <p className="text-xs text-secondary mt-1">
          Configure the primary compiler syntax, testing frameworks, and code editor defaults.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {LANGUAGES.map((lang) => (
          <SelectionCard
            key={lang.id}
            selected={selectedLanguage === lang.id}
            onClick={() => onSelect(lang.id)}
            title={lang.name}
            description={lang.description}
            icon={<Code className="h-4 w-4" />}
          />
        ))}
      </div>
    </div>
  );
}
