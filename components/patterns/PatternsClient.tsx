"use client";

import { useEffect, useMemo, useState } from "react";
import { PATTERNS } from "@/data/patterns";
import { PatternCard } from "@/components/patterns/PatternCard";
import { SearchBar } from "@/components/ui/SearchBar";

import { useProgressStore } from "@/store/useProgressStore";

const categories = ["All", "Arrays/Hash", "Pointers", "Trees/Graphs", "DP", "Greedy", "Stack/Queue", "Binary Search", "Math/Bits"];
const sortModes = ["Recommended Order", "Mastery %", "Problem Count"] as const;

export function PatternsClient() {
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState<(typeof sortModes)[number]>("Recommended Order");
  const getPatternMastery = useProgressStore((state) => state.getPatternMastery);

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(query), 200);
    return () => window.clearTimeout(id);
  }, [query]);

  const filtered = useMemo(() => {
    return [...PATTERNS]
      .filter((pattern) => {
        const matchesQuery = `${pattern.name} ${pattern.description}`.toLowerCase().includes(debounced.toLowerCase());
        const matchesCategory = category === "All" || pattern.category === category;
        return matchesQuery && matchesCategory;
      })
      .sort((a, b) => {
        if (sort === "Mastery %") return getPatternMastery(a.slug) - getPatternMastery(b.slug);
        if (sort === "Problem Count") return b.relatedProblems.length - a.relatedProblems.length;
        return a.orderInRoadmap - b.orderInRoadmap;
      });
  }, [debounced, category, sort, getPatternMastery]);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 xl:grid-cols-[1fr_auto]">
        <SearchBar value={query} onChange={setQuery} placeholder="Search patterns" />
        <div className="flex flex-wrap gap-2">
          {sortModes.map((mode) => (
            <button key={mode} onClick={() => setSort(mode)} className={`border-b-2 px-3 py-2 text-sm ${sort === mode ? "border-accent text-accent" : "border-transparent text-secondary hover:text-primary"}`}>
              {mode}
            </button>
          ))}
          <button className="rounded-card border border-accent/40 bg-accent-dim px-3 py-2 text-sm text-accent">
            Mock interview mode
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`border-b-2 px-3 py-2 text-sm ${category === item ? "border-accent text-accent" : "border-transparent text-secondary hover:text-primary"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
        {filtered.map((pattern) => <PatternCard key={pattern.slug} pattern={pattern} />)}
      </div>
    </div>
  );
}
