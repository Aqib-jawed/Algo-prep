import type { Metadata } from "next";
import { StrategyClient } from "@/components/strategy/StrategyClient";

export const metadata: Metadata = {
  title: "Strategy Guide | Algo Prep",
  description: "FAANG DSA preparation strategy with prep insights, mastery sequence, mock plan, and mental model flowchart."
};

export default function StrategyPage() {
  return <StrategyClient />;
}
