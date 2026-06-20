"use client";

import { useEffect, useState } from "react";
import type { Problem } from "@/types";

interface SearchResult {
  problem: Problem;
  score: number;
  matchField: "title" | "company" | "pattern" | "hint";
}

export function searchProblems(query: string, problems: Problem[]): Problem[] {
  if (!query.trim()) return problems;
  const q = query.toLowerCase().trim();

  const scored: SearchResult[] = problems.map((problem) => {
    let score = 0;
    let matchField: SearchResult["matchField"] = "title";
    const title = problem.title.toLowerCase();
    if (title === q) score = 100;
    else if (title.startsWith(q)) score = 80;
    else if (title.includes(q)) score = 60;
    if (problem.companies.some((company) => company.toLowerCase().includes(q))) {
      score += 40;
      matchField = "company";
    }
    if (problem.patterns.some((pattern) => pattern.includes(q))) {
      score += 30;
      matchField = "pattern";
    }
    if (problem.unlockHint.toLowerCase().includes(q)) {
      score += 10;
      matchField = "hint";
    }
    if (problem.id.toString() === q) score = 110;
    return { problem, score, matchField };
  });

  return scored
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.problem);
}

export function useDebounceSearch(value: string, delay = 200): string {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
