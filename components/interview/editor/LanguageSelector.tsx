"use client";

import React from "react";
import { ProgrammingLanguage } from "@/types/interview";

interface LanguageSelectorProps {
  value: ProgrammingLanguage;
  onChange: (language: ProgrammingLanguage) => void;
}

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const languages: { id: ProgrammingLanguage; label: string }[] = [
    { id: "java", label: "Java" },
    { id: "python", label: "Python" },
    { id: "cpp", label: "C++" },
    { id: "javascript", label: "JavaScript" },
    { id: "c", label: "C" },
  ];

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="editor-language-select" className="sr-only">
        Select Programming Language
      </label>
      <select
        id="editor-language-select"
        value={value}
        onChange={(e) => onChange(e.target.value as ProgrammingLanguage)}
        className="rounded border border-border bg-elevated px-2 py-1 text-2xs font-semibold text-primary outline-none focus:border-accent"
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
