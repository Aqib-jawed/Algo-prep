"use client";

import { motion } from "framer-motion";
import { Clock, Target } from "lucide-react";
import { RoadmapWeek } from "@/data/roadmap";
import { useProgressStore } from "@/store/useProgressStore";
import { Badge } from "@/components/ui/Badge";
import { TopicNode } from "./TopicNode";
import { cn } from "@/lib/utils";

export function WeekCard({ week }: { week: RoadmapWeek }) {
  const activeWeek = useProgressStore((state) => state.currentWeek);
  const setActiveWeek = useProgressStore((state) => state.setCurrentWeek);
  const active = activeWeek === week.week;

  return (
    <motion.article
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.1 }}
      className={cn("card p-5 transition-colors hover:border-accent/50 hover:bg-elevated", active && "border-accent/60 bg-elevated")}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="label">Week {week.week}</p>
          <h3 className="mt-1 text-lg font-semibold tracking-[0]">{week.theme}</h3>
          <p className="mt-1 text-sm text-secondary">{week.weeklyGoal}</p>
        </div>
        <button onClick={() => setActiveWeek(week.week)}>
          <Badge tone={active ? "accent" : "neutral"}>{active ? "Active" : "Set Active"}</Badge>
        </button>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="flex items-center gap-1 text-xs text-secondary"><Clock size={14} /> {week.dailyBreakdown.reduce((sum, day) => sum + day.problemCount, 0)} problems</span>
        <span className="flex items-center gap-1 text-xs text-secondary"><Target size={14} /> {week.problemIds.length} mapped LC IDs</span>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {week.topics.slice(0, 6).map((topic) => <TopicNode key={topic} slug={topic} />)}
      </div>
      <ul className="mt-4 space-y-1 text-sm text-secondary">
        {week.dailyBreakdown.slice(0, 3).map((day) => <li key={day.day}>• {day.day}: {day.focus} ({day.difficulty})</li>)}
      </ul>
    </motion.article>
  );
}
