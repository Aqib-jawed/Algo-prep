"use client";

import { useMemo, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { COMPANY_DATA } from "@/data/companies";
import { PATTERNS } from "@/data/patterns";
import { PROBLEMS, problemById } from "@/data/problems";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { PatternTag } from "@/components/ui/PatternTag";


const tabs = ["Overview", "Google", "Amazon", "Microsoft", "Meta", "Atlassian", "Razorpay", "Startups"];
const rank = { "Very High": 4, High: 3, Medium: 2, Niche: 1 };

export function InterviewClient() {
  const [tab, setTab] = useState("Overview");
  const [expanded, setExpanded] = useState("3 weeks");
  const frequency = useMemo(() => PATTERNS.map((pattern) => ({
    name: pattern.name,
    pct: Math.round(PROBLEMS.filter((problem) => problem.patterns.includes(pattern.slug)).length / PROBLEMS.length * 100)
  })).sort((a, b) => b.pct - a.pct).slice(0, 12), []);
  const top = [...PROBLEMS].filter((problem) => problem.frequency === "Very High").sort((a, b) => b.companies.length - a.companies.length || a.id - b.id).slice(0, 50);
  const gems = PROBLEMS.filter((problem) => !problem.isNeetCode150 && problem.frequency === "High").slice(0, 15);
  const lists = { 
    "3 weeks": top.slice(0, 40), 
    // TODO: Populate these lists once real 6-week and 12-week target data sets are verified and added
    // "6 weeks": PROBLEMS.sort((a, b) => rank[b.frequency] - rank[a.frequency]).slice(0, 80), 
    // "12 weeks": PROBLEMS.slice(0, 130) 
  };

  const companyKey = tab === "Startups" ? "zepto" : tab.toLowerCase();
  const company = COMPANY_DATA[companyKey];

  return (
    <div className="space-y-6">
      <div className="sticky top-16 z-20 -mx-4 flex gap-2 overflow-x-auto border-b border-border bg-base px-4 py-3 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        {tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={`border-b-2 px-3 py-2 text-sm ${tab === item ? "border-accent text-accent" : "border-transparent text-secondary"}`}>{item}</button>)}
      </div>

      {tab === "Overview" ? (
        <>
          <section className="card p-5">
            <h1 className="text-xl font-semibold tracking-[0]">Pattern frequency analysis</h1>
            <div className="mt-4 h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={frequency} layout="vertical" margin={{ left: 90 }}>
                  <XAxis type="number" stroke="#a3a3a3" />
                  <YAxis type="category" dataKey="name" stroke="#a3a3a3" width={120} />
                  <Tooltip contentStyle={{ background: "#141414", border: "1px solid #2a2a2a" }} />
                  <Bar dataKey="pct" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
          <section className="card overflow-hidden">
            <div className="border-b border-border p-4"><h2 className="text-lg font-semibold tracking-[0]">Top 50 repeated questions</h2></div>
            <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">{top.map((problem) => <div key={problem.id} className="border-b border-r border-border p-3 text-sm"><span className="font-mono text-muted">LC {problem.id}</span> · {problem.title}</div>)}</div>
          </section>
          <section className="grid gap-3 md:grid-cols-3">{gems.map((problem) => <div key={problem.id} className="card p-3 text-sm"><p className="font-medium">LC {problem.id} · {problem.title}</p><p className="mt-1 text-secondary">{problem.unlockHint}</p></div>)}</section>
          <section className="space-y-3">{Object.entries(lists).map(([name, rows]) => <div key={name} className="card"><button onClick={() => setExpanded(name)} className="w-full p-4 text-left font-semibold">{name} ({rows.length} problems)</button>{expanded === name && <div className="grid gap-0 border-t border-border md:grid-cols-2 xl:grid-cols-4">{rows.map((problem) => <div key={problem.id} className="border-b border-r border-border p-2 text-xs text-secondary">LC {problem.id} {problem.title}</div>)}</div>}</div>)}</section>
        </>
      ) : company ? (
        <section className="card p-5">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-[0]">{company.name}</h1>
            <span className="rounded-full border border-accent/40 bg-accent-dim px-2 py-1 text-xs text-accent">{company.difficulty}</span>
            <span className="font-mono text-xs text-muted">{company.avgRounds} rounds avg</span>
          </div>
          <p className="mt-4 max-w-3xl text-secondary">{company.interviewStyle}</p>
          <div className="mt-4 flex flex-wrap gap-2">{company.patternEmphasis.map((slug) => {
            const pattern = PATTERNS.find((item) => item.slug === slug);
            return pattern ? <PatternTag key={slug} category={pattern.category} label={pattern.name} /> : null;
          })}</div>

          <table className="mt-5 w-full text-left text-sm"><tbody>{company.topProblems.map((id) => {
            const problem = problemById[id];
            return problem ? <tr key={id} className="border-b border-border"><td className="py-3 font-mono text-muted">LC {id}</td><td>{problem.title}</td><td><DifficultyBadge difficulty={problem.difficulty} /></td></tr> : null;
          })}</tbody></table>
          <p className="mt-5 rounded-card border border-border bg-base p-4 text-sm text-secondary">{company.roundStructure}</p>
        </section>
      ) : null}
    </div>
  );
}
