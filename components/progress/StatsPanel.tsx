"use client";

import { BarChart3, Clock, Flame, Trophy } from "lucide-react";
import { PROBLEMS } from "@/data/problems";
import { pct } from "@/lib/utils";
import { useProgressStore } from "@/store/useProgressStore";
import { ProgressRing } from "@/components/ui/ProgressRing";

export function StatsPanel() {
  const solvedProblems = useProgressStore((state) => state.solvedProblems);
  const starredProblems = useProgressStore((state) => state.starredProblems);
  const solveTime = useProgressStore((state) => state.solveTime);
  const solved = solvedProblems.length;
  const attempts = solved;
  const minutes = Math.round(Object.values(solveTime).reduce((sum, seconds) => sum + seconds, 0) / 60);
  const starred = starredProblems.length;
  const completion = pct(solved, PROBLEMS.length);
  const cards = [
    { label: "Solved", value: solved, icon: Trophy },
    { label: "Attempts", value: attempts, icon: BarChart3 },
    { label: "Minutes", value: minutes, icon: Clock },
    { label: "Starred", value: starred, icon: Flame }
  ];

  return (
    <section className="grid gap-4 lg:grid-cols-[240px_1fr]">
      <div className="card flex items-center justify-center p-6">
        <ProgressRing value={completion} size={132} stroke={10} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="card p-5">
              <Icon size={18} className="text-accent" />
              <p className="label mt-4">{card.label}</p>
              <p className="mt-1 font-mono text-2xl font-semibold">{card.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
