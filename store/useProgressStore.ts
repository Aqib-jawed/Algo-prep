"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS, Problem } from "@/data/problems";
import { showGlobalToast } from "@/components/ui/Toast";

const MILESTONES = [
  { count: 10, label: "First 10!", emoji: "🔥" },
  { count: 25, label: "Quarter century", emoji: "⚡" },
  { count: 50, label: "Halfway warrior", emoji: "🎯" },
  { count: 75, label: "75 down", emoji: "💪" },
  { count: 100, label: "Triple digits", emoji: "🏆" },
  { count: 150, label: "Almost there", emoji: "🌟" },
  { count: 160, label: "LeetCode conquered", emoji: "👑" },
];

function checkMilestone(prev: number, next: number) {
  return MILESTONES.find((m) => prev < m.count && next >= m.count) ?? null;
}

type Difficulty = "Easy" | "Medium" | "Hard";

type ServerProgressSnapshot = {
  solvedProblems: number[];
  starredProblems: number[];
  patternsCompleted: string[];
  dailyLog: Record<string, number>;
  solveTime: Record<number, number>;
  currentWeek: number;
  targetDate: string | null;
  weeklyGoal: number;
  lastActiveDate: string;
  streak: number;
};

type ProgressState = {
  solvedProblems: number[];
  starredProblems: number[];
  patternsCompleted: string[];
  dailyLog: Record<string, number>;
  solveTime: Record<number, number>;
  postMortemLogs: Record<number, { category: string; notes: string; date: string }>;
  currentWeek: number;
  targetDate: string | null;
  weeklyGoal: number;
  lastActiveDate: string;
  streak: number;
  markSolved: (id: number) => void;
  unmarkSolved: (id: number) => void;
  toggleStarred: (id: number) => void;
  markPatternComplete: (slug: string) => void;
  logSolveTime: (id: number, seconds: number) => void;
  savePostMortem: (id: number, category: string, notes: string) => void;
  setTargetDate: (date: string) => void;
  setCurrentWeek: (week: number) => void;
  setWeeklyGoal: (n: number) => void;
  hydrateFromServer: (data: ServerProgressSnapshot) => void;
  getStreak: () => number;
  getTodayCount: () => number;
  getWeekCount: () => number;
  getPatternMastery: (slug: string, problems?: Problem[]) => number;
  getAvgSolveTime: (difficulty: Difficulty, problems?: Problem[]) => number;
};


// Fire-and-forget sync to the server. Local state above is already updated
// optimistically, so a failed or skipped call here (offline, logged out —
// a 401 is expected for anonymous visitors) just means this one change
// doesn't reach the server until the next successful sync.
function syncMutation(body: Record<string, unknown>) {
  fetch("/api/progress", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).catch(() => {});
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function isYesterday(dateKey: string, today: string) {
  return dateKey === todayKey(addDays(new Date(today), -1));
}

function weekBounds(date = new Date()) {
  const start = new Date(date);
  const day = (start.getDay() + 6) % 7;
  start.setDate(start.getDate() - day);
  const end = addDays(start, 6);
  return { start: todayKey(start), end: todayKey(end) };
}

function streakFromLog(dailyLog: Record<string, number>) {
  let streak = 0;
  let cursor = new Date();
  while ((dailyLog[todayKey(cursor)] ?? 0) > 0) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      solvedProblems: [],
      starredProblems: [],
      patternsCompleted: [],
      dailyLog: {},
      solveTime: {},
      postMortemLogs: {},
      currentWeek: 1,
      targetDate: null,
      weeklyGoal: 15,
      lastActiveDate: "",
      streak: 0,

      savePostMortem: (id, category, notes) => {
        set((state) => ({
          postMortemLogs: {
            ...state.postMortemLogs,
            [id]: { category, notes, date: new Date().toISOString() }
          }
        }));
      },


      markSolved: (id) => {
        set((state) => {
          const alreadySolved = state.solvedProblems.includes(id);
          const prevCount = state.solvedProblems.length;
          const solvedProblems = alreadySolved ? state.solvedProblems : [...state.solvedProblems, id];
          const today = todayKey();
          const dailyLog = alreadySolved ? state.dailyLog : { ...state.dailyLog, [today]: (state.dailyLog[today] ?? 0) + 1 };
          let streak = state.streak;
          if (!alreadySolved) {
            if (state.lastActiveDate === today) streak = state.streak;
            else if (isYesterday(state.lastActiveDate, today)) streak = state.streak + 1;
            else streak = 1;
          }
          const milestone = checkMilestone(prevCount, solvedProblems.length);
          if (milestone) showGlobalToast(`${milestone.emoji} ${milestone.label}`, "milestone");
          return { solvedProblems, dailyLog, streak, lastActiveDate: today };
        });
        syncMutation({ type: "markSolved", problemId: id });
      },

      unmarkSolved: (id) => {
        set((state) => ({
          solvedProblems: state.solvedProblems.filter((solvedId) => solvedId !== id)
        }));
        syncMutation({ type: "unmarkSolved", problemId: id });
      },

      toggleStarred: (id) => {
        set((state) => ({
          starredProblems: state.starredProblems.includes(id)
            ? state.starredProblems.filter((starredId) => starredId !== id)
            : [...state.starredProblems, id]
        }));
        syncMutation({ type: "toggleStarred", problemId: id });
      },

      markPatternComplete: (slug) => {
        let changed = false;
        set((state) => {
          if (state.patternsCompleted.includes(slug)) return state;
          changed = true;
          const pattern = PATTERNS.find((item) => item.slug === slug);
          showGlobalToast(`Pattern complete: ${pattern?.name ?? slug}`, "success");
          return { patternsCompleted: [...state.patternsCompleted, slug] };
        });
        if (changed) syncMutation({ type: "markPatternComplete", patternSlug: slug });
      },

      logSolveTime: (id, seconds) => {
        const clamped = Math.max(0, Math.round(seconds));
        set((state) => ({ solveTime: { ...state.solveTime, [id]: clamped } }));
        syncMutation({ type: "logSolveTime", problemId: id, seconds: clamped });
      },

      setTargetDate: (date) => {
        set({ targetDate: date || null });
        syncMutation({ type: "setTargetDate", date: date || null });
      },
      setCurrentWeek: (week) => {
        const clamped = Math.max(1, Math.min(16, Math.round(week)));
        set({ currentWeek: clamped });
        syncMutation({ type: "setCurrentWeek", week: clamped });
      },
      setWeeklyGoal: (n) => {
        const clamped = Math.max(1, Math.min(100, Math.round(n)));
        set({ weeklyGoal: clamped });
        syncMutation({ type: "setWeeklyGoal", goal: clamped });
      },

      hydrateFromServer: (data) => set(data),

      getStreak: () => streakFromLog(get().dailyLog),
      getTodayCount: () => get().dailyLog[todayKey()] ?? 0,
      getWeekCount: () => {
        const { start, end } = weekBounds();
        return Object.entries(get().dailyLog).reduce((sum, [date, count]) => (date >= start && date <= end ? sum + count : sum), 0);
      },
      getPatternMastery: (slug, problems = PROBLEMS) => {
        const related = problems.filter((problem) => problem.patterns.includes(slug));
        if (related.length === 0) return 0;
        const solved = related.filter((problem) => get().solvedProblems.includes(problem.id)).length;
        return Math.round((solved / related.length) * 100);
      },
      getAvgSolveTime: (difficulty, problems = PROBLEMS) => {
        const solved = problems.filter((problem) => problem.difficulty === difficulty && get().solvedProblems.includes(problem.id) && get().solveTime[problem.id]);
        if (solved.length === 0) return 0;
        const total = solved.reduce((sum, problem) => sum + get().solveTime[problem.id], 0);
        return Math.round(total / solved.length);
      }
    }),
    {
      name: "dsa-prep-v1",
      storage: createJSONStorage(() => localStorage)
    }
  )
);