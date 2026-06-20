"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { PROBLEMS } from "@/data/problems";
import { useProgressStore } from "@/store/useProgressStore";

type TimerState = {
  isActive: boolean;
  problemId: number | null;
  problemTitle: string;
  seconds: number;
  showHint: boolean;
  startTimer: (id: number, title: string) => void;
  stopTimer: () => void;
  toggleHint: () => void;
  closeHint: () => void;
};

const TimerContext = createContext<TimerState | null>(null);

function format(seconds: number) {
  return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
}

export function SolveTimerProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);
  const [problemId, setProblemId] = useState<number | null>(null);
  const [problemTitle, setProblemTitle] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const id = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(id);
  }, [isActive]);

  useEffect(() => {
    const close = () => setShowHint(false);
    window.addEventListener("close-hints", close);
    return () => window.removeEventListener("close-hints", close);
  }, []);

  const value = useMemo<TimerState>(() => ({
    isActive,
    problemId,
    problemTitle,
    seconds,
    showHint,
    startTimer(id, title) {
      setProblemId(id);
      setProblemTitle(title);
      setSeconds(0);
      setShowHint(false);
      setIsActive(true);
    },
    stopTimer() {
      setIsActive(false);
      setProblemId(null);
      setProblemTitle("");
      setSeconds(0);
      setShowHint(false);
    },
    toggleHint() {
      setShowHint((value) => !value);
    },
    closeHint() {
      setShowHint(false);
    }
  }), [isActive, problemId, problemTitle, seconds, showHint]);

  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
}

export function useSolveTimer() {
  const context = useContext(TimerContext);
  if (!context) throw new Error("useSolveTimer must be used inside SolveTimerProvider");
  return context;
}

export function SolveTimerBar() {
  const timer = useSolveTimer();
  const markSolved = useProgressStore((state) => state.markSolved);
  const logSolveTime = useProgressStore((state) => state.logSolveTime);
  const problem = timer.problemId ? PROBLEMS.find((item) => item.id === timer.problemId) : null;
  if (!timer.isActive || !problem) return null;
  const title = timer.problemTitle.length > 30 ? `${timer.problemTitle.slice(0, 30)}...` : timer.problemTitle;

  return (
    <div className="sticky bottom-7 z-40 border-t border-border bg-surface">
      <div className="flex h-12 items-center justify-between gap-4 px-5">
        <div className="min-w-0 font-mono text-sm text-primary">⏱ {format(timer.seconds)} <span className="font-sans text-secondary">- {title}</span></div>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => { markSolved(problem.id); logSolveTime(problem.id, timer.seconds); timer.stopTimer(); }} className="rounded-card bg-accent px-3 py-1.5 text-sm text-white">Mark Solved</button>
          <button onClick={timer.toggleHint} className="rounded-card border border-border px-3 py-1.5 text-sm text-secondary">Hint</button>
          <button onClick={timer.stopTimer} className="rounded-card border border-border px-3 py-1.5 text-sm text-hard">Stop</button>
        </div>
        <div className="hidden text-sm text-muted md:block">Est: {problem.estimatedMinutes}m</div>
      </div>
      {timer.showHint && (
        <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-1.5 text-sm italic text-muted">
          <span className="truncate">{problem.unlockHint}</span>
          <button onClick={timer.closeHint} aria-label="Close hint"><X size={14} /></button>
        </div>
      )}
    </div>
  );
}
