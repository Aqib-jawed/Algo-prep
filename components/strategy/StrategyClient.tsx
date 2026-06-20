"use client";

import { useMemo, useState } from "react";
import { PATTERNS } from "@/data/patterns";

const insights = [
  { title: "Pattern-first beats random grinding", bullets: ["Cluster problems by invariant.", "Redo misses by pattern within 48 hours.", "Track why the first approach failed.", "Keep one Java template per pattern."] },
  { title: "NeetCode-style progression works because it layers prerequisites", bullets: ["Arrays before windows.", "Trees before graph DFS.", "1D DP before string DP.", "Hard problems only after the medium family feels automatic."] },
  { title: "Sean Prashad lists are best used as frequency filters", bullets: ["Prioritize repeated company tags.", "Do not skip fundamentals.", "Mix easy warmups with timed mediums.", "Keep a final top-50 redo queue."] },
  { title: "Clement-style explanation practice matters", bullets: ["Talk through brute force first.", "Name constraints that force optimization.", "State invariants before code.", "Narrate tests after implementation."] },
  { title: "Mocks expose communication debt", bullets: ["Record one self-mock weekly.", "Score clarification, coding, testing separately.", "Practice recovery after a bug.", "Stop silent debugging."] },
  { title: "Java speed comes from muscle memory", bullets: ["Use ArrayDeque, not Stack.", "Avoid comparator subtraction.", "Memorize PriorityQueue patterns.", "Know Arrays.fill and computeIfAbsent."] },
  { title: "Postmortems compound faster than new solves", bullets: ["Write the missed signal.", "Write the wrong invariant.", "Write one counterexample.", "Redo without looking."] },
  { title: "Final month is a weak-area sprint", bullets: ["Sort mastery lowest first.", "Timebox every medium.", "Use frequency as a tiebreaker.", "Protect sleep before mocks."] }
];

const rounds = [
  { round: "OA Screening", patterns: "Arrays, HashMaps, Sliding Window", freq: 82 },
  { round: "First Technical", patterns: "Trees, Graph BFS/DFS, Binary Search", freq: 74 },
  { round: "Onsite Coding", patterns: "DP, Graphs, Heaps, Intervals", freq: 68 },
  { round: "Final Onsite", patterns: "Mixed follow-ups, Greedy proof, Design-adjacent DSA", freq: 55 }
];

export function StrategyClient() {
  const [open, setOpen] = useState(0);
  const [selected, setSelected] = useState(PATTERNS[0]);
  const ordered = useMemo(() => [...PATTERNS].sort((a, b) => a.orderInRoadmap - b.orderInRoadmap).slice(0, 25), []);

  return (
    <div className="grid gap-6 lg:grid-cols-[180px_1fr]">
      <aside className="sticky top-24 hidden h-fit space-y-1 lg:block">
        {["Prep", "Sequence", "Rounds", "Mocks", "Flowchart"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="block border-l-2 border-transparent px-3 py-2 text-sm text-secondary hover:border-accent hover:text-primary">{item}</a>
        ))}
      </aside>
      <main className="space-y-6">
        <header>
          <p className="label">Strategy guide</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-[0]">FAANG prep operating system</h1>
          <p className="mt-2 max-w-3xl text-secondary">A focused strategy surface for sequencing, mocks, and interview decision-making.</p>
        </header>

        <section id="prep" className="space-y-3">
          {insights.map((item, index) => (
            <div key={item.title} className="card">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between p-4 text-left">
                <span className="font-semibold tracking-[0]">{item.title}</span>
                <span className="font-mono text-muted">{open === index ? "-" : "+"}</span>
              </button>
              {open === index && <ul className="border-t border-border p-4 text-sm text-secondary">{item.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}</ul>}
            </div>
          ))}
        </section>

        <section id="sequence" className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Pattern Mastery Sequence</h2>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {ordered.map((pattern) => (
              <button key={pattern.slug} onClick={() => setSelected(pattern)} className={`min-w-24 rounded-card border px-3 py-2 text-xs ${selected.slug === pattern.slug ? "border-accent bg-accent-dim text-accent" : "border-border bg-base text-secondary"}`}>
                {pattern.orderInRoadmap}. {pattern.name}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-card border border-border bg-base p-4 text-sm text-secondary">{selected.coreInvariant}</div>
        </section>

        <section id="rounds" className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Interview Round Analysis</h2>
          <table className="mt-4 w-full text-left text-sm">
            <thead><tr className="border-b border-border"><th className="py-2 label">Round Type</th><th className="py-2 label">Patterns Dominant</th><th className="py-2 label">Frequency Bar</th></tr></thead>
            <tbody>{rounds.map((row) => <tr key={row.round} className="border-b border-border"><td className="py-3">{row.round}</td><td className="py-3 text-secondary">{row.patterns}</td><td><div className="h-2 w-40 rounded-full bg-border"><div className="h-full rounded-full bg-accent" style={{ width: `${row.freq}%` }} /></div></td></tr>)}</tbody>
          </table>
        </section>

        <section id="mocks" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {["Pramp", "Interviewing.io", "Self-mock protocol", "Scoring rubric"].map((name) => (
            <div key={name} className="card p-4"><h3 className="font-semibold tracking-[0]">{name}</h3><p className="mt-2 text-sm text-secondary">Run realistic 45-minute loops, score communication and correctness separately, and redo the same prompt after review.</p></div>
          ))}
        </section>

        <section id="flowchart" className="card overflow-x-auto p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Mental Models Flowchart</h2>
          <svg viewBox="0 0 680 500" className="mt-4 min-w-[680px]">
            {[
              ["New problem seen", 280, 20], ["Sorted input?", 80, 110], ["Contiguous?", 280, 110], ["Graph states?", 480, 110], ["Binary Search", 40, 210], ["Two Pointers", 140, 210], ["Sliding Window", 250, 210], ["Prefix Sum", 360, 210], ["BFS/DFS", 470, 210], ["DP state?", 580, 210], ["Greedy proof", 220, 340], ["Heap/Stack", 380, 340], ["Implement + test", 300, 440]
            ].map(([text, x, y]) => <g key={String(text)}><rect x={Number(x)} y={Number(y)} width="120" height="42" rx="8" fill="#141414" stroke="#2a2a2a" /><text x={Number(x) + 60} y={Number(y) + 26} textAnchor="middle" fill="#f5f5f5" fontSize="12">{text}</text></g>)}
          </svg>
        </section>
      </main>
    </div>
  );
}
