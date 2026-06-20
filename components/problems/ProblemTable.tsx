"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { COMPANY_DATA } from "@/data/companies";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS } from "@/data/problems";
import { searchProblems, useDebounceSearch } from "@/lib/search";
import { SearchBar } from "@/components/ui/SearchBar";
import { useProgressStore } from "@/store/useProgressStore";
import { ProblemRow } from "./ProblemRow";
import { SolveTimerBar, SolveTimerProvider, useSolveTimer } from "./SolveTimer";

const difficultyRank = { Easy: 1, Medium: 2, Hard: 3 };
const frequencyRank = { "Very High": 4, High: 3, Medium: 2, Niche: 1 };

function ProblemTableInner({ initialPattern, hideFilters = false }: { initialPattern?: string; hideFilters?: boolean }) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const debounced = useDebounceSearch(query, 200);
  const [selectedPatterns, setSelectedPatterns] = useState<string[]>(initialPattern ? [initialPattern] : []);
  const [difficulty, setDifficulty] = useState("All");
  const [status, setStatus] = useState("All");
  const [frequency, setFrequency] = useState("All");
  const [company, setCompany] = useState("All");
  const [quick, setQuick] = useState<"None" | "NeetCode" | "Blind75" | "Indian">("None");
  const [sort, setSort] = useState<"#" | "Frequency" | "Difficulty">("#");
  const [page, setPage] = useState(1);
  const solvedProblems = useProgressStore((state) => state.solvedProblems);
  const starredProblems = useProgressStore((state) => state.starredProblems);
  const timer = useSolveTimer();

  useEffect(() => {
    setPage(1);
  }, [debounced, selectedPatterns, difficulty, status, frequency, company, quick, sort]);

  const weekFilter = Number(searchParams.get("week") ?? 0);
  const companies = ["All", ...Object.values(COMPANY_DATA).map((item) => item.name)];

  const filtered = useMemo(() => {
    const searched = searchProblems(debounced, PROBLEMS);
    const rows = searched.filter((problem) => {
      const matchesPattern = selectedPatterns.length === 0 || selectedPatterns.some((slug) => problem.patterns.includes(slug));
      const matchesDifficulty = difficulty === "All" || problem.difficulty === difficulty;
      const matchesStatus =
        status === "All" ||
        (status === "Solved" && solvedProblems.includes(problem.id)) ||
        (status === "Unsolved" && !solvedProblems.includes(problem.id)) ||
        (status === "Starred" && starredProblems.includes(problem.id));
      const matchesFrequency = frequency === "All" || problem.frequency === frequency;
      const matchesCompany = company === "All" || problem.companies.includes(company);
      const matchesQuick =
        quick === "None" ||
        (quick === "NeetCode" && problem.isNeetCode150) ||
        (quick === "Blind75" && problem.isBlind75) ||
        (quick === "Indian" && problem.isIndianUnicorn);
      const matchesWeek = !weekFilter || problem.weekInRoadmap === weekFilter;
      return matchesPattern && matchesDifficulty && matchesStatus && matchesFrequency && matchesCompany && matchesQuick && matchesWeek;
    });
    rows.sort((a, b) => {
      if (sort === "Frequency") return frequencyRank[b.frequency] - frequencyRank[a.frequency] || a.id - b.id;
      if (sort === "Difficulty") return difficultyRank[a.difficulty] - difficultyRank[b.difficulty] || a.id - b.id;
      return a.id - b.id;
    });
    return rows;
  }, [debounced, selectedPatterns, difficulty, status, frequency, company, quick, sort, solvedProblems, starredProblems, weekFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / 50));
  const visible = filtered.slice((page - 1) * 50, page * 50);
  const from = filtered.length ? (page - 1) * 50 + 1 : 0;
  const to = Math.min(page * 50, filtered.length);

  function togglePattern(slug: string) {
    setSelectedPatterns((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]);
  }

  return (
    <div className="space-y-4 pb-16">
      {!hideFilters && (
        <div className="sticky top-16 z-30 -mx-4 space-y-3 border-b border-border bg-base px-4 py-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          <SearchBar value={query} onChange={setQuery} placeholder="Search title, companies, or hint" />
          <div className="flex flex-wrap gap-2">
            {PATTERNS.map((pattern) => (
              <button key={pattern.slug} onClick={() => togglePattern(pattern.slug)} className={`rounded-full border px-2 py-1 text-xs ${selectedPatterns.includes(pattern.slug) ? "border-accent bg-accent-dim text-accent" : "border-border bg-surface text-secondary"}`}>
                {pattern.slug}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Easy", "Medium", "Hard"].map((item) => <button key={item} onClick={() => setDifficulty(item)} className={`rounded-full border px-3 py-1 text-xs ${difficulty === item ? "border-accent text-accent" : "border-border text-secondary"}`}>{item}</button>)}
            {["All", "Solved", "Unsolved", "Starred"].map((item) => <button key={item} onClick={() => setStatus(item)} className={`rounded-full border px-3 py-1 text-xs ${status === item ? "border-accent text-accent" : "border-border text-secondary"}`}>{item}</button>)}
            {["All", "Very High", "High", "Medium"].map((item) => <button key={item} onClick={() => setFrequency(item)} className={`rounded-full border px-3 py-1 text-xs ${frequency === item ? "border-accent text-accent" : "border-border text-secondary"}`}>{item}</button>)}
            <select value={company} onChange={(event) => setCompany(event.target.value)} className="h-8 rounded-card border border-border bg-surface px-2 text-xs text-secondary">
              {companies.map((item) => <option key={item}>{item}</option>)}
            </select>
            {[
              ["NeetCode", "★ NeetCode 150"],
              ["Blind75", "Blind 75"],
              ["Indian", "Indian Unicorns"]
            ].map(([value, label]) => <button key={value} onClick={() => setQuick(quick === value ? "None" : value as typeof quick)} className={`rounded-full border px-3 py-1 text-xs ${quick === value ? "border-accent text-accent" : "border-border text-secondary"}`}>{label}</button>)}
            <select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)} className="h-8 rounded-card border border-border bg-surface px-2 text-xs text-secondary">
              {["#", "Frequency", "Difficulty"].map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>
      )}

      <div className="overflow-hidden rounded-card border border-border bg-base">
        <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3 text-sm text-secondary">
          <span>Showing <span className="font-mono text-primary">{from}-{to}</span> of <span className="font-mono text-primary">{filtered.length}</span> problems</span>
          <div className="flex gap-2">
            <button disabled={page === 1} onClick={() => setPage((value) => Math.max(1, value - 1))} className="rounded border border-border px-2 py-1 disabled:opacity-40">Previous</button>
            <button disabled={page === totalPages} onClick={() => setPage((value) => Math.min(totalPages, value + 1))} className="rounded border border-border px-2 py-1 disabled:opacity-40">Next</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1180px] border-collapse text-left">
            <thead className="bg-surface">
              <tr className="border-b border-border">
                {["Status", "#", "Name", "Pattern", "Difficulty", "Frequency", "Companies", "Star", "Hint"].map((head) => <th key={head} className="px-3 py-3 label">{head}</th>)}
              </tr>
            </thead>
            <tbody>{visible.map((problem, index) => <ProblemRow key={problem.id} problem={problem} rowIndex={index} onStartTimer={timer.startTimer} />)}</tbody>
          </table>
        </div>
      </div>
      <SolveTimerBar />
    </div>
  );
}

export function ProblemTable(props: { initialPattern?: string; hideFilters?: boolean }) {
  return (
    <SolveTimerProvider>
      <ProblemTableInner {...props} />
    </SolveTimerProvider>
  );
}
