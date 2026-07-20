import type { Metadata } from "next";
import { Suspense } from "react";
import { ProblemTable } from "@/components/problems/ProblemTable";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

export const metadata: Metadata = {
  title: "Problem Sheet | Algo Prep",
  description: "Filterable 500+ LeetCode & Striver A2Z DSA Sheet with timers, hints, starred problems, and progress tracking."
};

export default function ProblemsPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="label">Master question sheet</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">500+ curated LeetCode & Striver A2Z problems with live filters</h1>
        <p className="mt-2 max-w-3xl text-secondary">Search, filter, time, star, solve, and review hints across all Striver A2Z DSA sheet questions & core patterns.</p>
      </header>
      <Suspense fallback={<PageSkeleton />}>
        <ProblemTable />
      </Suspense>
    </div>
  );
}
