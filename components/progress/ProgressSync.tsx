"use client";

import { useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { useProgressStore } from "@/store/useProgressStore";

export function ProgressSync() {
  const { status } = useSession();
  const hasSynced = useRef(false);

  useEffect(() => {
    if (status !== "authenticated" || hasSynced.current) return;
    hasSynced.current = true;

    (async () => {
      try {
        const res = await fetch("/api/progress");
        const data = await res.json();

        if (data.synced) {
          useProgressStore.getState().hydrateFromServer(data);
          return;
        }

        const local = useProgressStore.getState();
        const hasLocalProgress =
          local.solvedProblems.length > 0 ||
          local.starredProblems.length > 0 ||
          local.patternsCompleted.length > 0;

        if (hasLocalProgress) {
          await fetch("/api/progress/migrate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              solvedProblems: local.solvedProblems,
              starredProblems: local.starredProblems,
              patternsCompleted: local.patternsCompleted,
              dailyLog: local.dailyLog,
              solveTime: local.solveTime,
              currentWeek: local.currentWeek,
              targetDate: local.targetDate,
              weeklyGoal: local.weeklyGoal,
              lastActiveDate: local.lastActiveDate,
              streak: local.streak
            })
          });
        }
      } catch (err) {
        console.error("Progress sync failed:", err);
        hasSynced.current = false;
      }
    })();
  }, [status]);

  return null;
}