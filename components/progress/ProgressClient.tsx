"use client";

import { useMemo, useState } from "react";
import {
  Flame,
  Target,
  Calendar,
  Award,
  Download,
  Copy,
  Check,
  X,
  Search,
  Edit3,
  Clock,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS } from "@/data/problems";
import { exportProgressToMarkdown, triggerDownload } from "@/lib/export";
import { getPatternMasteryFromIds, getReadinessScore } from "@/lib/recommendations";
import { patternCategoryColors } from "@/lib/constants";
import { useProgressStore } from "@/store/useProgressStore";
import { HeatmapCalendar } from "@/components/progress/HeatmapCalendar";

const diffColors = { Easy: "#00b8a3", Medium: "#ffc01e", Hard: "#ff375f" };

function daysUntil(date: string | null) {
  if (!date) return null;
  return Math.max(0, Math.ceil((new Date(date).getTime() - Date.now()) / 86_400_000));
}

function scoreColor(score: number) {
  if (score < 40) return "#ff375f";
  if (score < 60) return "#ffc01e";
  if (score < 80) return "#f97316";
  return "#00b8a3";
}

export function ProgressClient() {
  const store = useProgressStore();
  const [editingGoal, setEditingGoal] = useState(false);
  const [goalInput, setGoalInput] = useState(String(store.weeklyGoal));
  const [dateInput, setDateInput] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Pattern filtering & search state
  const [searchQuery, setSearchQuery] = useState("");
  const [patternFilter, setPatternFilter] = useState<"all" | "in-progress" | "mastered" | "unstarted">("all");

  // Export Modal state
  const [showExportModal, setShowExportModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const streak = store.getStreak();
  const todayCount = store.getTodayCount();
  const weekCount = store.getWeekCount();
  const targetDays = daysUntil(store.targetDate);
  const remainingProblems = PROBLEMS.length - store.solvedProblems.length;
  const dailyTarget = targetDays ? Math.ceil(remainingProblems / Math.max(1, targetDays)) : null;

  const readiness = getReadinessScore(store.solvedProblems, streak, store.patternsCompleted);
  const markdown = exportProgressToMarkdown(
    store.solvedProblems,
    store.patternsCompleted,
    store.dailyLog,
    streak,
    PROBLEMS,
    PATTERNS
  );

  const masteryRows = useMemo(() => {
    return PATTERNS.map((pattern) => ({
      pattern,
      ...getPatternMasteryFromIds(pattern.slug, store.solvedProblems)
    })).sort((a, b) => b.pct - a.pct);
  }, [store.solvedProblems]);

  const masteredCount = useMemo(() => masteryRows.filter((r) => r.pct === 100).length, [masteryRows]);
  const inProgressCount = useMemo(() => masteryRows.filter((r) => r.pct > 0 && r.pct < 100).length, [masteryRows]);
  const unstartedCount = useMemo(() => masteryRows.filter((r) => r.pct === 0).length, [masteryRows]);

  const filteredMasteryRows = useMemo(() => {
    return masteryRows.filter(({ pattern, pct }) => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pattern.category.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (patternFilter === "mastered") return pct === 100;
      if (patternFilter === "in-progress") return pct > 0 && pct < 100;
      if (patternFilter === "unstarted") return pct === 0;
      return true;
    });
  }, [masteryRows, searchQuery, patternFilter]);

  const difficultyData = (["Easy", "Medium", "Hard"] as const).map((difficulty) => ({
    name: difficulty,
    value: PROBLEMS.filter((problem) => problem.difficulty === difficulty && store.solvedProblems.includes(problem.id)).length
  }));

  const timeStats = (["Easy", "Medium", "Hard"] as const).map((difficulty) => {
    const avg = Math.round(store.getAvgSolveTime(difficulty, PROBLEMS) / 60);
    return { difficulty, avg };
  });

  const lowestBreakdownKey = useMemo(() => {
    const entries = Object.entries(readiness.breakdown);
    return entries.sort((a, b) => a[1] - b[1])[0]?.[0] ?? "problems";
  }, [readiness.breakdown]);

  const adviceText = useMemo(() => {
    if (lowestBreakdownKey === "problems") {
      return `Solve ${Math.max(1, 40 - store.solvedProblems.length)} more problems to reach the next readiness tier.`;
    }
    if (lowestBreakdownKey === "patterns") {
      return `Complete ${Math.max(1, 10 - store.patternsCompleted.length)} more pattern modules.`;
    }
    if (lowestBreakdownKey === "streak") {
      return "Build a continuous 7-day solve streak to boost consistency score.";
    }
    return `Solve more Medium/Hard problems from the advanced pool.`;
  }, [lowestBreakdownKey, store.solvedProblems.length, store.patternsCompleted.length]);

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="label">Progress Telemetry</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight">Interview Readiness & Analytics</h1>
          <p className="mt-0.5 text-xs text-secondary">
            Track your solve velocity, pattern coverage, and preparation score in one dashboard.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowExportModal(true)}
            className="inline-flex items-center gap-1.5 rounded-card border border-accent/40 bg-accent-dim px-3.5 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent/20"
          >
            <Download size={14} />
            Export Report
          </button>
        </div>
      </header>

      {/* Row 1: Top Telemetry Metrics Bar (4 Columns) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Metric 1: Streak */}
        <div className="card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="label">Current Streak</span>
            <div className="rounded-full bg-accent-dim p-2 text-accent">
              <Flame size={18} />
            </div>
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold text-primary">{streak}</span>
              <span className="text-xs text-secondary font-medium">Days</span>
            </div>
            <p className="mt-1 text-xs text-muted">{todayCount} solves recorded today</p>
          </div>
        </div>

        {/* Metric 2: Weekly Goal */}
        <div className="card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="label">Weekly Goal</span>
            {editingGoal ? (
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={goalInput}
                  onChange={(e) => setGoalInput(e.target.value)}
                  className="w-14 rounded border border-border bg-base px-1.5 py-0.5 text-xs text-primary"
                  autoFocus
                />
                <button
                  onClick={() => {
                    store.setWeeklyGoal(Math.max(1, Number(goalInput) || 10));
                    setEditingGoal(false);
                  }}
                  className="text-accent hover:underline text-xs"
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                onClick={() => setEditingGoal(true)}
                className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
              >
                <Edit3 size={12} />
                Edit
              </button>
            )}
          </div>
          <div className="mt-3">
            <div className="flex items-baseline gap-1 font-mono text-2xl font-bold">
              <span>{weekCount}</span>
              <span className="text-sm font-normal text-muted">/ {store.weeklyGoal} problems</span>
            </div>
            <div className="mt-2.5 h-1.5 w-full rounded-full bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-300"
                style={{ width: `${Math.min(100, Math.round((weekCount / store.weeklyGoal) * 100))}%` }}
              />
            </div>
          </div>
        </div>

        {/* Metric 3: Target Countdown */}
        <div className="card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="label">Interview Target</span>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-xs text-accent hover:underline"
            >
              {store.targetDate ? "Change" : "Set date"}
            </button>
          </div>
          <div className="mt-3">
            {showDatePicker ? (
              <div className="flex items-center gap-1.5">
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full rounded border border-border bg-base px-2 py-1 text-xs text-primary"
                />
                <button
                  onClick={() => {
                    if (dateInput) {
                      store.setTargetDate(dateInput);
                      setShowDatePicker(false);
                    }
                  }}
                  className="rounded bg-accent px-2 py-1 text-xs font-semibold text-white"
                >
                  Set
                </button>
              </div>
            ) : store.targetDate ? (
              <>
                <div className="flex items-baseline gap-1 font-mono text-2xl font-bold">
                  <span>{targetDays}</span>
                  <span className="text-sm font-normal text-muted">Days remaining</span>
                </div>
                <p className="mt-1 text-xs text-secondary font-medium">
                  {dailyTarget} solves / day suggested
                </p>
              </>
            ) : (
              <div>
                <p className="text-xs text-secondary">No target date set</p>
                <p className="mt-1 text-[11px] text-muted">Set a date to get daily targets</p>
              </div>
            )}
          </div>
        </div>

        {/* Metric 4: Readiness Score */}
        <div className="card p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="label">Readiness Score</span>
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-semibold border border-border bg-base"
              style={{ color: scoreColor(readiness.score) }}
            >
              {readiness.label}
            </span>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span
              className="font-mono text-3xl font-bold"
              style={{ color: scoreColor(readiness.score) }}
            >
              {readiness.score}
            </span>
            <span className="text-xs text-muted font-mono">/ 100</span>
          </div>
        </div>
      </div>

      {/* Row 2: Full Width Activity Heatmap */}
      <HeatmapCalendar weeks={52} />

      {/* Row 3: Balanced 2-Column Dashboard Layout */}
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* Left Column: Difficulty & Readiness Details (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* Card A: Problem Distribution & Speed */}
          <section className="card p-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h2 className="text-base font-semibold tracking-tight">Difficulty & Solve Velocity</h2>
                <p className="text-xs text-muted mt-0.5">Distribution across Easy, Medium, and Hard</p>
              </div>
              <span className="font-mono text-xs text-accent bg-accent-dim px-2 py-1 rounded border border-accent/20">
                {store.solvedProblems.length} Total Solved
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Donut Chart */}
              <div className="relative h-48 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={difficultyData}
                      dataKey="value"
                      innerRadius={55}
                      outerRadius={78}
                      paddingAngle={3}
                    >
                      {difficultyData.map((entry) => (
                        <Cell key={entry.name} fill={diffColors[entry.name]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: "6px" }} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-2xl font-bold">{store.solvedProblems.length}</span>
                  <span className="text-[10px] text-muted uppercase tracking-wider">Solved</span>
                </div>
              </div>

              {/* Stats & Averages List */}
              <div className="space-y-3">
                <div className="space-y-2">
                  {difficultyData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs border-b border-border/50 pb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: diffColors[item.name] }} />
                        <span className="font-medium text-secondary">{item.name}</span>
                      </div>
                      <span className="font-mono font-semibold text-primary">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-2 border-t border-border">
                  <p className="label mb-2">Average Solve Speed</p>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeStats.map((item) => (
                      <div key={item.difficulty} className="rounded-card border border-border bg-base p-2 text-center">
                        <p className="text-[10px] text-muted uppercase font-medium">{item.difficulty}</p>
                        <p className="font-mono text-xs font-semibold text-accent mt-0.5">{item.avg}m</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Card B: Readiness Breakdown & Advice */}
          <section className="card p-5">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h2 className="text-base font-semibold tracking-tight">Readiness Analytics</h2>
                <p className="text-xs text-muted mt-0.5">Component breakdown of your readiness score</p>
              </div>
              <Award size={18} className="text-accent" />
            </div>

            <div className="mt-4 space-y-3">
              {Object.entries(readiness.breakdown).map(([key, value]) => (
                <div key={key}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="capitalize text-secondary font-medium">{key}</span>
                    <span className="font-mono font-semibold text-primary">{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <div className="h-full rounded-full bg-accent transition-all duration-300" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-card border border-accent/20 bg-accent-glow p-3.5">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles size={15} />
                <span className="text-xs font-semibold uppercase tracking-wider">Recommendation</span>
              </div>
              <p className="mt-1.5 text-xs text-secondary leading-relaxed">{adviceText}</p>
            </div>
          </section>
        </div>

        {/* Right Column: Pattern Mastery Dashboard (6 cols) */}
        <div className="lg:col-span-6">
          <section className="card p-5 flex flex-col h-[600px]">
            {/* Header & Stats */}
            <div className="border-b border-border pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold tracking-tight">Pattern Mastery</h2>
                  <p className="text-xs text-muted mt-0.5">
                    {masteredCount} of {PATTERNS.length} patterns fully mastered
                  </p>
                </div>
                <span className="font-mono text-xs text-secondary bg-base border border-border px-2 py-1 rounded">
                  {Math.round((masteredCount / PATTERNS.length) * 100)}% Complete
                </span>
              </div>

              {/* Filters & Search Bar */}
              <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    placeholder="Search pattern or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-card border border-border bg-base pl-8 pr-3 py-1.5 text-xs text-primary placeholder:text-muted focus:border-accent focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-primary"
                    >
                      <X size={12} />
                    </button>
                  )}
                </div>

                <div className="flex gap-1 bg-base p-1 rounded-card border border-border overflow-x-auto">
                  <button
                    onClick={() => setPatternFilter("all")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      patternFilter === "all" ? "bg-surface text-accent shadow-sm" : "text-muted hover:text-secondary"
                    }`}
                  >
                    All ({PATTERNS.length})
                  </button>
                  <button
                    onClick={() => setPatternFilter("in-progress")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      patternFilter === "in-progress" ? "bg-surface text-accent shadow-sm" : "text-muted hover:text-secondary"
                    }`}
                  >
                    Active ({inProgressCount})
                  </button>
                  <button
                    onClick={() => setPatternFilter("mastered")}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                      patternFilter === "mastered" ? "bg-surface text-accent shadow-sm" : "text-muted hover:text-secondary"
                    }`}
                  >
                    Done ({masteredCount})
                  </button>
                </div>
              </div>
            </div>

            {/* Pattern List */}
            <div className="flex-1 overflow-y-auto pr-1.5 mt-3 space-y-3 custom-scrollbar">
              {filteredMasteryRows.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-center text-muted">
                  <p className="text-xs">No patterns match your filter</p>
                  <button
                    onClick={() => { setSearchQuery(""); setPatternFilter("all"); }}
                    className="mt-2 text-xs text-accent hover:underline"
                  >
                    Reset filters
                  </button>
                </div>
              ) : (
                filteredMasteryRows.map(({ pattern, solved, total, pct }) => (
                  <div key={pattern.slug} className="rounded-card border border-border/70 bg-base/50 p-2.5 hover:border-border transition-colors">
                    <div className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: patternCategoryColors[pattern.category] || "#f97316" }}
                        />
                        <span className="text-xs font-semibold text-primary">{pattern.name}</span>
                        <span className="text-[10px] text-muted border border-border px-1.5 py-0.5 rounded bg-surface">
                          {pattern.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-medium text-secondary">
                        {solved}/{total} · <span className="text-primary font-bold">{pct}%</span>
                      </span>
                    </div>

                    <div className="h-1.5 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${pct}%`,
                          backgroundColor: patternCategoryColors[pattern.category] || "#f97316"
                        }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Export Report Modal */}
      {showExportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="card w-full max-w-2xl p-6 shadow-xl border-border animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="text-lg font-bold tracking-tight">Export Telemetry Report</h3>
                <p className="text-xs text-muted mt-0.5">Download or copy your progress report in Markdown format.</p>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                className="rounded-full p-1 text-muted hover:bg-elevated hover:text-primary"
              >
                <X size={18} />
              </button>
            </div>

            {/* Markdown Code Preview */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-xs text-muted mb-1.5">
                <span>Markdown Preview</span>
                <span>{markdown.split("\n").length} lines</span>
              </div>
              <pre className="max-h-72 overflow-y-auto rounded-card border border-border bg-[#0a0a0a] p-4 font-mono text-xs text-secondary leading-relaxed select-all">
                {markdown}
              </pre>
            </div>

            {/* Modal Actions */}
            <div className="mt-5 flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-border">
              <button
                onClick={handleCopyMarkdown}
                className="inline-flex items-center gap-1.5 rounded-card border border-border bg-base px-4 py-2 text-xs font-medium text-secondary hover:bg-elevated hover:text-primary transition-colors"
              >
                {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                {copied ? "Copied to Clipboard!" : "Copy Markdown"}
              </button>

              <button
                onClick={() => {
                  triggerDownload(markdown, "progress-report.md");
                  setShowExportModal(false);
                }}
                className="inline-flex items-center gap-1.5 rounded-card border border-accent bg-accent px-4 py-2 text-xs font-medium text-white hover:opacity-90 transition-opacity"
              >
                <Download size={14} />
                Download Report (.md)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

