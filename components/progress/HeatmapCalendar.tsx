"use client";

import { useMemo } from "react";
import { useProgressStore } from "@/store/useProgressStore";

export function HeatmapCalendar({ weeks = 52, showLabels = true }: { weeks?: number; showLabels?: boolean }) {
  const dailyLog = useProgressStore((state) => state.dailyLog);
  const days = useMemo(() => {
    const now = new Date();
    return Array.from({ length: weeks * 7 }, (_, index) => {
      const date = new Date(now);
      date.setDate(now.getDate() - (weeks * 7 - 1 - index));
      const key = date.toISOString().slice(0, 10);
      const count = dailyLog[key] ?? 0;
      return { key, count };
    });
  }, [dailyLog, weeks]);

  const months = useMemo(() => {
    const labels: { label: string; col: number }[] = [];
    days.forEach((day, index) => {
      const date = new Date(day.key);
      if (date.getDate() <= 7) {
        const label = date.toLocaleString("en", { month: "short" });
        const col = Math.floor(index / 7);
        if (labels[labels.length - 1]?.label !== label) labels.push({ label, col });
      }
    });
    return labels;
  }, [days]);

  const totalActiveDays = useMemo(() => {
    return Object.values(dailyLog).filter((count) => count > 0).length;
  }, [dailyLog]);

  return (
    <section className="card p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold tracking-tight">52-Week Solve Activity</h2>
          <p className="text-xs text-muted mt-0.5">{totalActiveDays} active solve days logged</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-secondary">
          <span className="text-[11px] text-muted">Less</span>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-[3px] border border-border bg-[#1c1c1c]" title="0 solves" />
            <div className="h-3 w-3 rounded-[3px] border border-border bg-[rgba(249,115,22,0.3)]" title="1 solve" />
            <div className="h-3 w-3 rounded-[3px] border border-border bg-[rgba(249,115,22,0.65)]" title="2 solves" />
            <div className="h-3 w-3 rounded-[3px] border border-border bg-[#f97316]" title="3+ solves" />
          </div>
          <span className="text-[11px] text-muted">More</span>
        </div>
      </div>

      {showLabels && (
        <div className="relative ml-7 h-5 text-[10px] text-muted">
          {months.map((month) => (
            <span key={`${month.label}-${month.col}`} className="absolute" style={{ left: `${(month.col / weeks) * 100}%` }}>
              {month.label}
            </span>
          ))}
        </div>
      )}
      <div className="flex gap-2">
        {showLabels && (
          <div className="grid grid-rows-7 gap-1 pt-0 text-[10px] leading-3 text-muted">
            <span />
            <span>M</span>
            <span />
            <span>W</span>
            <span />
            <span>F</span>
            <span />
          </div>
        )}
        <div className="grid flex-1 grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-1">
          {days.map((day) => (
            <div
              key={day.key}
              title={`${day.key}: ${day.count} solved`}
              className="h-3 w-3 rounded-[3px] border border-border transition-colors hover:border-accent"
              style={{
                backgroundColor:
                  day.count === 0 ? "#1c1c1c" : day.count === 1 ? "rgba(249,115,22,0.3)" : day.count === 2 ? "rgba(249,115,22,0.65)" : "#f97316"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
