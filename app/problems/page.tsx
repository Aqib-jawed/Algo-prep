import type { Metadata } from "next";
import { Suspense } from "react";
import { ProblemTable } from "@/components/problems/ProblemTable";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

export const metadata: Metadata = {
  title: "Problem Sheet | Algo Prep",
  description: "Filterable 160-question LeetCode sheet with timers, hints, starred problems, and progress tracking."
};

export default function ProblemsPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="label">Master question sheet</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">160 curated LeetCode problems with live filters</h1>
        <p className="mt-2 max-w-3xl text-secondary">Search, filter, time, star, solve, and review hints without leaving the prep surface.</p>
      </header>
      <Suspense fallback={<PageSkeleton />}>
        <ProblemTable />
      </Suspense>
    </div>
  );
}
