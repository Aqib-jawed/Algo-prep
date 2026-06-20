import type { Metadata } from "next";
import { ProgressClient } from "@/components/progress/ProgressClient";

export const metadata: Metadata = {
  title: "Progress Tracker | Algo Prep",
  description: "Track DSA solve streaks, weekly goals, countdown, pattern mastery, solve times, and markdown exports."
};

export default function ProgressPage() {
  return <ProgressClient />;
}
