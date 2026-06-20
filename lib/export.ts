import type { Pattern, Problem } from "@/types";
import { getReadinessScore } from "./recommendations";

export function exportProgressToMarkdown(
  solvedIds: number[],
  patternsCompleted: string[],
  dailyLog: Record<string, number>,
  streak: number,
  problems: Problem[],
  patterns: Pattern[]
): string {
  const readiness = getReadinessScore(solvedIds, streak, patternsCompleted);
  const solved = problems.filter((problem) => solvedIds.includes(problem.id));
  const lines = [
    "# DSA Prep Progress Report",
    `Generated: ${new Date().toLocaleString()}`,
    "",
    "## Summary",
    "| Metric | Value |",
    "| --- | --- |",
    `| Problems Solved | ${solvedIds.length} / 160 |`,
    `| Patterns Mastered | ${patternsCompleted.length} / 25 |`,
    `| Current Streak | ${streak} days |`,
    `| Readiness Score | ${readiness.score} / 100 - ${readiness.label} |`,
    "",
    "## Pattern Mastery",
    "| Pattern | Solved / Total | Mastery |",
    "| --- | ---: | ---: |"
  ];

  for (const pattern of patterns) {
    const related = problems.filter((problem) => problem.patterns.includes(pattern.slug));
    const count = related.filter((problem) => solvedIds.includes(problem.id)).length;
    const mastery = related.length ? Math.round((count / related.length) * 100) : 0;
    lines.push(`| ${pattern.name} | ${count} / ${related.length} | ${mastery}% |`);
  }

  lines.push("", "## Solved Problems");
  for (const difficulty of ["Easy", "Medium", "Hard"] as const) {
    lines.push("", `### ${difficulty}`);
    const rows = solved.filter((problem) => problem.difficulty === difficulty);
    if (!rows.length) lines.push("_None yet._");
    for (const problem of rows) lines.push(`- #${problem.id} - ${problem.title} (${problem.patterns[0]})`);
  }

  lines.push("", "## Weekly Activity (last 8 weeks)", "");
  const today = new Date();
  for (let week = 7; week >= 0; week--) {
    let row = "";
    for (let day = 6; day >= 0; day--) {
      const date = new Date(today);
      date.setDate(today.getDate() - week * 7 - day);
      const count = dailyLog[date.toISOString().slice(0, 10)] ?? 0;
      row += count === 0 ? "░" : count <= 2 ? "▒" : "▓";
    }
    lines.push(row);
  }

  return lines.join("\n");
}

export function triggerDownload(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}
