"use client";

import Link from "next/link";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Trophy, Target, Flame, CalendarDays, Code2, Layers, LineChart, Award } from "lucide-react";

// Mock data for the landing page dashboard preview
const mockRadarData = [
  { category: "Arrays/Hash", score: 85 },
  { category: "Pointers", score: 90 },
  { category: "Trees/Graphs", score: 75 },
  { category: "DP", score: 60 },
  { category: "Stack/Queue", score: 80 },
  { category: "Binary Search", score: 70 },
];

export function LandingPage() {
  const features = [
    {
      icon: Code2,
      title: "29 DSA Pattern Library",
      desc: "Stop memorizing specific solutions. Master the 29 underlying recognition patterns that solve 90% of technical interview questions, complete with optimized templates.",
    },
    {
      icon: Layers,
      title: "16-Week Structured Roadmap",
      desc: "An organized curriculum designed around conceptual prerequisites. Advance from simple array traversals to tree-recursion, graphs, and advanced DP in logical order.",
    },
    {
      icon: LineChart,
      title: "Interview Frequency Analysis",
      desc: "Optimize your preparation for specific targets. See which patterns and specific problems appear most frequently at Google, Meta, Amazon, and other top-tier systems.",
    },
    {
      icon: Award,
      title: "Progress & Metrics Tracking",
      desc: "Track your active preparation streak, count solved problems, visualize pattern readiness on an interactive radar chart, and log key postmortems to avoid repeating bugs.",
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* ── HERO SECTION ── */}
      <header className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface to-base p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-accent-glow/5 pointer-events-none" />
        <span className="inline-block rounded-full bg-accent-dim px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">
          DSA Interview War Room
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-primary">
          Master DSA Patterns. Ace the FAANG Loop.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-secondary leading-relaxed">
          Algo Prep bridges the gap between random LeetCode grinding and methodical, template-driven interview mastery. Learn to recognize patterns, apply robust templates, and measure readiness.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-card border border-accent bg-accent text-white px-6 py-3 text-md font-semibold hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
          >
            Sign in to start
          </Link>
          <a
            href="#preview"
            className="rounded-card border border-border bg-surface px-6 py-3 text-md font-semibold text-secondary hover:text-primary transition-all"
          >
            See preview
          </a>
        </div>
      </header>

      {/* ── CORE FEATURES GRID ── */}
      <section className="space-y-6">
        <div className="text-center">
          <p className="label">Capabilities</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">Structured for high-bar interviews</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="card p-6 flex flex-col items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-card border border-border bg-base text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-base text-primary">{feature.title}</h3>
                  <p className="mt-2 text-xs text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW SECTION ── */}
      <section id="preview" className="space-y-6 scroll-mt-24">
        <div className="text-center">
          <p className="label">Live Preview</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">The candidate progress dashboard</h2>
          <p className="text-xs text-secondary mt-1">Here is what your interactive interface looks like once you begin solving</p>
        </div>

        <div className="rounded-xl border border-border bg-surface/50 p-6 space-y-6 opacity-90 select-none pointer-events-none">
          {/* Stat Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="card p-5">
              <Trophy size={18} className="text-accent" />
              <p className="label mt-4">Total Solved</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-primary">124 <span className="text-sm text-muted">/ 500+</span></p>
            </div>
            <div className="card p-5">
              <Target size={18} className="text-accent" />
              <p className="label mt-4">Patterns Mastered</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-primary">19 <span className="text-sm text-muted">/ 25</span></p>
            </div>
            <div className="card p-5">
              <Flame size={18} className="text-accent" />
              <p className="label mt-4">Current Streak</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-primary">14 <span className="text-sm text-muted">days</span></p>
            </div>
            <div className="card p-5">
              <CalendarDays size={18} className="text-accent" />
              <p className="label mt-4">Days Until Target</p>
              <p className="mt-1 font-mono text-2xl font-semibold text-primary">42 <span className="text-sm text-muted">days</span></p>
            </div>
          </div>

          {/* Grid section */}
          <div className="grid gap-4 xl:grid-cols-[1fr_380px]">
            {/* Daily Focus mock */}
            <div className="card p-5 flex flex-col justify-between">
              <div>
                <p className="label">Today&apos;s focus</p>
                <h3 className="mt-2 text-lg font-semibold text-primary">DFS on Trees &amp; Subtree Queries</h3>
                <p className="mt-2 text-xs text-secondary leading-relaxed">
                  Master tree depth-first traversal patterns. Practice building post-order aggregation states and finding Lowest Common Ancestors.
                </p>
              </div>
              <div className="mt-5 space-y-2.5">
                <div className="flex items-center justify-between rounded-card border border-border bg-base p-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">LC 104</span>
                    <span className="text-xs font-semibold text-primary">Maximum Depth of Binary Tree</span>
                  </div>
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[10px] text-emerald-500 font-semibold uppercase">Easy</span>
                </div>
                <div className="flex items-center justify-between rounded-card border border-border bg-base p-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">LC 236</span>
                    <span className="text-xs font-semibold text-primary">Lowest Common Ancestor of a Binary Tree</span>
                  </div>
                  <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] text-amber-500 font-semibold uppercase">Medium</span>
                </div>
                <div className="flex items-center justify-between rounded-card border border-border bg-base p-2.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-muted">LC 124</span>
                    <span className="text-xs font-semibold text-primary">Binary Tree Maximum Path Sum</span>
                  </div>
                  <span className="rounded bg-rose-500/10 px-1.5 py-0.5 text-[10px] text-rose-500 font-semibold uppercase">Hard</span>
                </div>
              </div>
            </div>

            {/* Pattern Radar mock */}
            <div className="card p-5">
              <p className="label">Pattern Radar</p>
              <div className="mt-3 h-56 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={mockRadarData}>
                    <PolarGrid gridType="polygon" stroke="#2a2a2a" />
                    <PolarAngleAxis dataKey="category" tick={{ fill: "#8f8f8f", fontSize: 9 }} />
                    <Radar dataKey="score" stroke="#f97316" fill="rgba(249,115,22,0.12)" fillOpacity={1} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="rounded-xl border border-border bg-elevated/40 p-8 md:p-10 text-center space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-primary">Ready to transform your DSA prep?</h2>
        <p className="mx-auto max-w-xl text-sm text-secondary leading-relaxed">
          Create your account to start mapping your progress, accessing compileable Java templates for the 29 patterns, and organizing your roadmap.
        </p>
        <div>
          <Link
            href="/login"
            className="inline-block rounded-card border border-accent bg-accent text-white px-6 py-2.5 text-sm font-semibold hover:bg-accent/90 transition-all"
          >
            Start Preparing Now
          </Link>
        </div>
      </section>
    </div>
  );
}
