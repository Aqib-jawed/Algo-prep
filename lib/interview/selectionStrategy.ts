import { CompanyProfile, COMPANY_PROFILES } from "@/data/interview/companyProfiles";
import { ExperienceLevel, InterviewQuestion, Company } from "@/types/interview";
import { Difficulty, Problem } from "@/data/problems";

export function getCompanyProfile(companyId: string): CompanyProfile | null {
  return COMPANY_PROFILES.find((p) => p.companyId === companyId) || null;
}

export function buildDifficultyPlan(profile: CompanyProfile, experience: ExperienceLevel): Difficulty[] {
  return profile.difficultyDistribution[experience] || Array(profile.defaultRounds).fill("Medium");
}

export function selectProblems(
  plan: Difficulty[],
  profile: CompanyProfile,
  problems: Problem[],
  companyName: string
): Problem[] {
  const selected: Problem[] = [];
  const usedIds = new Set<number>();

  // Helper to check if a problem is associated with the company name
  const matchesCompany = (p: Problem) =>
    p.companies.some((c) => c.toLowerCase() === companyName.toLowerCase());

  // Helper to check if a problem matches preferred patterns
  const matchesPreferredPattern = (p: Problem) =>
    p.patterns.some((pat) => profile.preferredPatterns.includes(pat));

  plan.forEach((difficulty) => {
    // 1. Filter candidates by target difficulty and exclude already selected ones
    const candidates = problems.filter((p) => p.difficulty === difficulty && !usedIds.has(p.id));

    // 2. Stratify candidates by priority
    const companyAndPattern = candidates.filter((p) => matchesCompany(p) && matchesPreferredPattern(p));
    const companyOnly = candidates.filter((p) => matchesCompany(p));
    const patternOnly = candidates.filter((p) => matchesPreferredPattern(p));

    let chosen: Problem | undefined;

    // Dynamic selection: Pick randomly from top matching candidates to keep OA tests fresh and realistic
    const selectDynamic = (arr: Problem[]) => {
      if (arr.length === 0) return undefined;
      const index = Math.floor(Math.random() * arr.length);
      return arr[index];
    };

    chosen = selectDynamic(companyAndPattern) ||
             selectDynamic(companyOnly) ||
             selectDynamic(patternOnly) ||
             selectDynamic(candidates);

    // Safe fallback if target difficulty has no problems at all
    if (!chosen) {
      const globalFallbackCandidates = problems.filter((p) => !usedIds.has(p.id));
      chosen = selectDynamic(globalFallbackCandidates);
    }

    if (chosen) {
      selected.push(chosen);
      usedIds.add(chosen.id);
    }
  });

  return selected;
}

export function removeDuplicateProblems(problems: Problem[]): Problem[] {
  const seen = new Set<number>();
  return problems.filter((p) => {
    if (seen.has(p.id)) return false;
    seen.add(p.id);
    return true;
  });
}

export function assignQuestionOrder(problems: Problem[], plan: Difficulty[]): InterviewQuestion[] {
  return problems.map((problem, index) => {
    const round = index + 1;
    return {
      problemId: problem.id,
      title: problem.title,
      difficulty: problem.difficulty,
      pattern: problem.patterns[0] || "General",
      round,
      order: 1, // 1 question per round for this setup
      status: "assigned" as const,
    };
  });
}
