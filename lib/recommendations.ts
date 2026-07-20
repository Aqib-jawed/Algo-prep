import { PATTERNS } from "@/data/patterns";
import { PROBLEMS, problemById } from "@/data/problems";
import { COMPANY_DATA } from "@/data/companies";
import { ROADMAP_WEEKS } from "@/data/roadmap";
import type { Pattern, Problem } from "@/types";

const frequencyRank = { "Very High": 0, High: 1, Medium: 2, Niche: 3 };
const difficultyRank = { Easy: 0, Medium: 1, Hard: 2 };

function sortByPriority(a: Problem, b: Problem) {
  return frequencyRank[a.frequency] - frequencyRank[b.frequency] || difficultyRank[a.difficulty] - difficultyRank[b.difficulty] || a.id - b.id;
}

export function getRecommendedProblems(solvedIds: number[], currentWeek: number, count = 5): Problem[] {
  const solved = new Set(solvedIds);
  const week = ROADMAP_WEEKS[currentWeek - 1] ?? ROADMAP_WEEKS[0];
  const nextWeek = ROADMAP_WEEKS[currentWeek] ?? ROADMAP_WEEKS[0];
  const fromWeek = week.problemIds
    .map((id) => PROBLEMS.find((problem) => problem.id === id))
    .filter((problem): problem is Problem => !!problem && !solved.has(problem.id))
    .sort(sortByPriority);

  if (fromWeek.length >= count) return fromWeek.slice(0, count);

  const fallback = nextWeek.problemIds
    .map((id) => PROBLEMS.find((problem) => problem.id === id))
    .filter((problem): problem is Problem => !!problem && !solved.has(problem.id) && !fromWeek.some((item) => item.id === problem.id))
    .sort(sortByPriority);

  return [...fromWeek, ...fallback].slice(0, count);
}

export function getNextPattern(completedSlugs: string[]): Pattern | null {
  return [...PATTERNS].sort((a, b) => a.orderInRoadmap - b.orderInRoadmap).find((pattern) => !completedSlugs.includes(pattern.slug)) ?? null;
}

function hashDate(seed: string) {
  return seed.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

export function getDailyChallenge(solvedIds: number[], date: Date): Problem {
  const solved = new Set(solvedIds);
  const seed = date.toISOString().slice(0, 10);
  const unsolvedMediums = PROBLEMS.filter((problem) => problem.difficulty === "Medium" && !solved.has(problem.id));
  const pool = unsolvedMediums.length ? unsolvedMediums : PROBLEMS.filter((problem) => !solved.has(problem.id));
  return pool[hashDate(seed) % pool.length] ?? PROBLEMS[0];
}

export function getReadinessScore(
  solvedIds: number[],
  streak: number,
  patternsCompleted: string[]
): { score: number; label: string; breakdown: Record<string, number> } {
  const solved = new Set(solvedIds);
  const mediumHard = PROBLEMS.filter((problem) => problem.difficulty === "Medium" || problem.difficulty === "Hard");
  const solvedMediumHard = mediumHard.filter((problem) => solved.has(problem.id));
  const breakdown = {
    problems: Math.min(100, (solvedIds.length / PROBLEMS.length) * 100),
    patterns: Math.min(100, (patternsCompleted.length / PATTERNS.length) * 100),
    streak: Math.min(streak, 30) / 30 * 100,
    difficulty: mediumHard.length ? solvedMediumHard.length / mediumHard.length * 100 : 0
  };
  const score = Math.round(breakdown.problems * 0.4 + breakdown.patterns * 0.3 + breakdown.streak * 0.2 + breakdown.difficulty * 0.1);
  const label = score < 40 ? "Beginner" : score < 60 ? "Building" : score < 80 ? "Interview Ready" : "FAANG Ready";
  return { score, label, breakdown: Object.fromEntries(Object.entries(breakdown).map(([key, value]) => [key, Math.round(value)])) };
}

export function getPatternMasteryFromIds(patternSlug: string, solvedIds: number[]) {
  const related = PROBLEMS.filter((problem) => problem.patterns.includes(patternSlug));
  if (!related.length) return { solved: 0, total: 0, pct: 0 };
  const solved = related.filter((problem) => solvedIds.includes(problem.id)).length;
  return { solved, total: related.length, pct: Math.round((solved / related.length) * 100) };
}

export function getMockInterviewProblem(solvedIds: number[], companySlug?: string | null): Problem | null {
  const solved = new Set(solvedIds);
  const pool = companySlug
    ? (COMPANY_DATA[companySlug]?.topProblems ?? [])
        .map((id) => problemById[id])
        .filter((problem): problem is Problem => !!problem && !solved.has(problem.id))
    : PROBLEMS.filter((problem) => (problem.difficulty === "Medium" || problem.difficulty === "Hard") && !solved.has(problem.id));

  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}