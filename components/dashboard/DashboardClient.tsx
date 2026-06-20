"use client";

import Link from "next/link";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { CalendarDays, Flame, Target, Trophy } from "lucide-react";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS } from "@/data/problems";
import { ROADMAP_WEEKS } from "@/data/roadmap";
import { patternCategoryColors } from "@/lib/constants";
import { getDailyChallenge, getRecommendedProblems } from "@/lib/recommendations";
import { useProgressStore } from "@/store/useProgressStore";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { PatternTag } from "@/components/ui/PatternTag";

function daysUntil(date: string | null) {
  if (!date) return null;
  const diff = new Date(date).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / 86_400_000));
}

export function DashboardClient() {
  const store = useProgressStore();
  const recommended = getRecommendedProblems(store.solvedProblems, store.currentWeek, 3);
  const dailyChallenge = getDailyChallenge(store.solvedProblems, new Date());
  const currentWeek = ROADMAP_WEEKS.find((week) => week.week === store.currentWeek) ?? ROADMAP_WEEKS[0];
  const remaining = daysUntil(store.targetDate);
  const categories = Array.from(new Set(PATTERNS.map((pattern) => pattern.category)));
  const radarData = categories.map((category) => {
    const problems = PROBLEMS.filter((problem) => problem.category === category);
    const solved = problems.filter((problem) => store.solvedProblems.includes(problem.id)).length;
    return { category, score: problems.length ? Math.round((solved / problems.length) * 100) : 0 };
  });
  const topicBars = ROADMAP_WEEKS.map((week) => {
    const total = week.problemIds.length;
    const solved = week.problemIds.filter((id) => store.solvedProblems.includes(id)).length;
    return { label: `W${week.week}`, solved, total, pct: total ? Math.round((solved / total) * 100) : 0 };
  });

  const statCards = [
    { label: "Total Solved", value: store.solvedProblems.length, icon: Trophy },
    { label: "Patterns Mastered", value: store.patternsCompleted.length, icon: Target },
    { label: "Current Streak", value: store.getStreak(), suffix: "days", icon: Flame },
    { label: "Days Until Target", value: remaining ?? "Set target", icon: CalendarDays }
  ];

  return (
    <div className="space-y-6">
      <header className="rounded-card border border-border bg-surface p-6">
        <p className="label">Dashboard</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">Let's Begin The DSA Journey</h1>
        <p className="mt-2 text-secondary">Week {store.currentWeek} of 16 · {currentWeek.theme}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.label} className="card p-5">
              <Icon size={18} className="text-accent" />
              <p className="label mt-4">{card.label}</p>
              <p className="mt-1 font-mono text-2xl font-semibold">{card.value} <span className="text-sm text-muted">{card.suffix}</span></p>
            </div>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_420px]">
        <div className="card p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="label">Today&apos;s focus</p>
              <h2 className="mt-1 text-xl font-semibold tracking-[0]">{currentWeek.theme}</h2>
              <p className="mt-2 text-sm text-secondary">{currentWeek.weeklyGoal}</p>
            </div>
            <Link href="/problems" className="rounded-card border border-border px-3 py-2 text-sm text-secondary hover:border-accent/50 hover:text-primary">Open sheet</Link>
          </div>
          <div className="mt-5 space-y-3">
            {[dailyChallenge, ...recommended.filter((problem) => problem.id !== dailyChallenge.id)].slice(0, 3).map((problem) => (
              <a key={problem.id} href={`https://leetcode.com/problems/${problem.slug}/`} target="_blank" rel="noreferrer" className="flex flex-wrap items-center gap-3 rounded-card border border-border bg-base p-3 hover:border-accent/50">
                <span className="font-mono text-xs text-muted">LC {problem.id}</span>
                <span className="font-medium">{problem.title}</span>
                <DifficultyBadge difficulty={problem.difficulty} />
                <PatternTag category={problem.category} label={problem.patterns[0]} />
              </a>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <p className="label">Pattern radar</p>
          <div className="mt-3 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid gridType="polygon" stroke="#2a2a2a" />
                <PolarAngleAxis dataKey="category" tick={{ fill: "#a3a3a3", fontSize: 11 }} />
                <Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8 }} />
                <Radar dataKey="score" stroke="#f97316" fill="rgba(249,115,22,0.15)" fillOpacity={1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_420px]">
        <div className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Roadmap Progress</h2>
          <div className="mt-4 space-y-3">
            {topicBars.map((topic, index) => (
              <div key={topic.label}>
                <div className="mb-1 flex justify-between text-xs text-secondary">
                  <span>{ROADMAP_WEEKS[index].theme}</span>
                  <span>{topic.solved}/{topic.total}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${topic.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Recently Solved</h2>
          <div className="mt-4 space-y-3">
            {PROBLEMS.filter((problem) => store.solvedProblems.includes(problem.id)).slice(-5).reverse().map((problem) => (
              <div key={problem.id} className="flex items-center justify-between gap-3 rounded-card border border-border bg-base p-3">
                <div>
                  <p className="font-medium">LC {problem.id} · {problem.title}</p>
                  <p className="font-mono text-xs text-muted">Logged in local progress</p>
                </div>
                <DifficultyBadge difficulty={problem.difficulty} />
              </div>
            ))}
            {store.solvedProblems.length === 0 && <p className="text-sm text-secondary">No solved problems logged yet.</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
