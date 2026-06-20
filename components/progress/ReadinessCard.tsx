"use client";

import { PROBLEMS } from "@/data/problems";
import { getReadinessScore } from "@/lib/recommendations";
import { useProgressStore } from "@/store/useProgressStore";

function scoreColor(score: number) {
  if (score < 40) return "#ff375f";
  if (score < 60) return "#ffc01e";
  if (score < 80) return "#f97316";
  return "#00b8a3";
}

export function ReadinessCard() {
  const solvedProblems = useProgressStore((state) => state.solvedProblems);
  const patternsCompleted = useProgressStore((state) => state.patternsCompleted);
  const streak = useProgressStore((state) => state.getStreak());
  const readiness = getReadinessScore(solvedProblems, streak, patternsCompleted);
  const entries = Object.entries(readiness.breakdown);
  const lowest = entries.sort((a, b) => a[1] - b[1])[0]?.[0] ?? "problems";
  const advice =
    lowest === "problems"
      ? `Solve ${Math.max(1, 40 - solvedProblems.length)} more problems to hit the next tier.`
      : lowest === "patterns"
        ? `Complete ${Math.max(1, 10 - patternsCompleted.length)} more patterns.`
        : lowest === "streak"
          ? "Build a 7-day streak."
          : `Solve more Medium/Hard problems from the ${PROBLEMS.filter((p) => p.difficulty !== "Easy").length}-problem advanced pool.`;

  return (
    <section className="card p-5">
      <p className="label">Readiness score</p>
      <p className="mt-3 text-5xl font-medium leading-none" style={{ color: scoreColor(readiness.score) }}>{readiness.score}</p>
      <span className="mt-3 inline-flex rounded-full border border-border bg-base px-2 py-1 text-xs text-secondary">{readiness.label}</span>
      <div className="mt-5 space-y-3">
        {Object.entries(readiness.breakdown).map(([key, value]) => (
          <div key={key}>
            <div className="mb-1 flex justify-between text-xs text-secondary"><span>{key}</span><span>{value}%</span></div>
            <div className="h-2 rounded-full bg-border"><div className="h-full rounded-full bg-accent" style={{ width: `${value}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-card border border-border bg-base p-3">
        <p className="label">What&apos;s holding you back?</p>
        <p className="mt-2 text-sm text-secondary">{advice}</p>
      </div>
    </section>
  );
}
