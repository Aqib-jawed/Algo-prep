import type { Metadata } from "next";
import { PatternsClient } from "@/components/patterns/PatternsClient";

export const metadata: Metadata = {
  title: "Pattern Library | Algo Prep",
  description: "Search, sort, and track mastery for DSA interview patterns with Java templates."
};

export default function PatternsPage() {
  return (
    <div className="space-y-6">
      <header>
        <p className="label">Pattern library</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">29 interview patterns with Java templates</h1>
        <p className="mt-2 max-w-3xl text-secondary">Search by name, filter by category, and surface low-mastery patterns first.</p>
      </header>
      <PatternsClient />
    </div>
  );
}
