"use client";

import { useMemo, useState } from "react";
import { Flame } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS } from "@/data/problems";
import { exportProgressToMarkdown, triggerDownload } from "@/lib/export";
import { getPatternMasteryFromIds } from "@/lib/recommendations";
import { patternCategoryColors } from "@/lib/constants";
import { useProgressStore } from "@/store/useProgressStore";

import { HeatmapCalendar } from "@/components/progress/HeatmapCalendar";
import { ReadinessCard } from "@/components/progress/ReadinessCard";

const diffColors = { Easy: "#00b8a3", Medium: "#ffc01e", Hard: "#ff375f" };

function daysUntil(date: string | null) {
  if (!date) return null;
  return Math.max(0, Math.ceil((new Date(date).getTime() - Date.now()) / 86_400_000));
}

export function ProgressClient() {
  const store = useProgressStore();
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(String(store.weeklyGoal));
  const [dateInput, setDateInput] = useState("");
  const markdown = exportProgressToMarkdown(store.solvedProblems, store.patternsCompleted, store.dailyLog, store.getStreak(), PROBLEMS, PATTERNS);
  const weekCount = store.getWeekCount();
  const targetDays = daysUntil(store.targetDate);
  const remainingProblems = PROBLEMS.length - store.solvedProblems.length;
  const dailyTarget = targetDays ? Math.ceil(remainingProblems / Math.max(1, targetDays)) : null;

  const masteryRows = useMemo(() => PATTERNS
    .map((pattern) => ({ pattern, ...getPatternMasteryFromIds(pattern.slug, store.solvedProblems) }))
    .sort((a, b) => a.pct - b.pct), [store.solvedProblems]);

  const difficultyData = (["Easy", "Medium", "Hard"] as const).map((difficulty) => ({
    name: difficulty,
    value: PROBLEMS.filter((problem) => problem.difficulty === difficulty && store.solvedProblems.includes(problem.id)).length
  }));

  const timeStats = (["Easy", "Medium", "Hard"] as const).map((difficulty) => {
    const avg = Math.round(store.getAvgSolveTime(difficulty, PROBLEMS) / 60);
    return { difficulty, avg };
  });

  return (
    <div className="space-y-6">
      <header>
        <p className="label">Progress tracker</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">Your interview prep telemetry</h1>
      </header>

      <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
        <div className="space-y-4">
          <HeatmapCalendar weeks={52} />
          <section className="grid gap-4 md:grid-cols-3">
            <div className="card p-5">
              <Flame size={22} className="text-accent" />
              <p className="mt-3 font-mono text-3xl font-semibold">{store.getStreak()}</p>
              <p className="label">day streak</p>
              <p className="mt-2 text-sm text-muted">Today: {store.getTodayCount()} solves</p>
            </div>
            <div className="card p-5 md:col-span-2">
              <div className="flex items-center justify-between">
                <p className="label">This week</p>
                {editingGoal ? (
                  <input value={goalInput} onChange={(event) => setGoalInput(event.target.value)} onBlur={() => { store.setWeeklyGoal(Number(goalInput)); setEditingGoal(false); }} className="w-20 rounded border border-border bg-base px-2 py-1 text-sm" />
                ) : (
                  <button onClick={() => setEditingGoal(true)} className="text-xs text-accent">Edit goal</button>
                )}
              </div>
              <p className="mt-2 text-sm text-secondary">{weekCount} / {store.weeklyGoal} problems this week</p>
              <div className="mt-3 h-2 rounded-full bg-border"><div className="h-full rounded-full bg-accent" style={{ width: `${Math.min(100, Math.round(weekCount / store.weeklyGoal * 100))}%` }} /></div>
            </div>
          </section>
          <section className="card p-5">
            <p className="label">Interview countdown</p>
            {store.targetDate ? (
              <p className="mt-2 text-lg font-semibold">{targetDays} days remaining · {dailyTarget} problems/day suggested</p>
            ) : (
              <div className="mt-3 flex flex-wrap gap-2">
                <input type="date" value={dateInput} onChange={(event) => setDateInput(event.target.value)} className="rounded-card border border-border bg-base px-3 py-2 text-sm" />
                <button onClick={() => store.setTargetDate(dateInput)} className="rounded-card border border-accent/40 bg-accent-dim px-3 py-2 text-sm text-accent">Set target</button>
              </div>
            )}
          </section>
          <ReadinessCard />
        </div>

        <div className="space-y-4">
          <section className="card max-h-[520px] overflow-y-auto p-5">
            <h2 className="text-lg font-semibold tracking-[0]">Pattern Mastery</h2>
            <div className="mt-4 space-y-3">
              {masteryRows.map(({ pattern, solved, total, pct }) => (
                <div key={pattern.slug}>
                  <div className="mb-1 flex justify-between text-xs text-secondary"><span>{pattern.name}</span><span>{solved}/{total} · {pct}%</span></div>
                  <div className="h-2 rounded-full bg-border"><div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: patternCategoryColors[pattern.category] }} /></div>
                </div>
              ))}
            </div>
          </section>
          <section className="card p-5">
            <h2 className="text-lg font-semibold tracking-[0]">Difficulty Donut</h2>
            <div className="relative mt-3 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={difficultyData} dataKey="value" innerRadius={62} outerRadius={88} paddingAngle={2}>
                    {difficultyData.map((entry) => <Cell key={entry.name} fill={diffColors[entry.name]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-2xl font-semibold">{store.solvedProblems.length}</div>
            </div>
          </section>
          <section className="card p-5">
            <h2 className="text-lg font-semibold tracking-[0]">Solve Time Stats</h2>
            <div className="mt-3 grid grid-cols-3 gap-2">{timeStats.map((item) => <div key={item.difficulty} className="rounded-card border border-border bg-base p-3 text-center text-sm"><p className="text-secondary">{item.difficulty}</p><p className="font-mono text-accent">{item.avg}m avg</p></div>)}</div>
          </section>
        </div>
      </div>

      <section className="card p-5">
        <button onClick={() => triggerDownload(markdown, "progress-report.md")} className="rounded-card border border-accent/40 bg-accent-dim px-4 py-2 text-sm font-medium text-accent">Export to Notion</button>
        <pre className="mt-4 max-h-60 overflow-auto rounded-card border border-border bg-[#0a0a0a] p-4 font-mono text-xs text-secondary">{markdown.split("\n").slice(0, 10).join("\n")}</pre>
      </section>
    </div>
  );
}
