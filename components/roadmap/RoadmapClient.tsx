"use client";

import { Trophy, Sparkles, Zap, Layers } from "lucide-react";
import { PATTERNS } from "@/data/patterns";
import { ROADMAP_WEEKS } from "@/data/roadmap";
import { patternCategoryColors } from "@/lib/constants";
import { useProgressStore } from "@/store/useProgressStore";
import { PatternTag } from "@/components/ui/PatternTag";
import { HeatmapCalendar } from "@/components/progress/HeatmapCalendar";
import { Card3D } from "@/components/ui/Card3D";
import { RoadmapCanvas3D } from "./RoadmapCanvas3D";
import { motion } from "framer-motion";

const graphWidth = 700;
const graphHeight = 400;

function DependencyGraph() {
  const positions = PATTERNS.map((pattern) => {
    const col = Math.floor((pattern.orderInRoadmap - 1) / 5);
    const row = (pattern.orderInRoadmap - 1) % 5;
    return {
      slug: pattern.slug,
      name: pattern.name,
      category: pattern.category,
      x: 70 + col * 125,
      y: 50 + row * 70
    };
  });
  const bySlug = new Map(positions.map((node) => [node.slug, node]));

  return (
    <section className="card overflow-hidden p-5 relative border-accent/20 bg-surface/90 backdrop-blur-md shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="label text-accent font-mono uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
            3D Interactive Dependency Matrix
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-[0]">Pattern Prerequisite Graph</h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="min-w-[700px]">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,4 L0,8 Z" fill="#f97316" />
            </marker>
          </defs>
          {PATTERNS.flatMap((pattern) =>
            pattern.prerequisitePatterns.map((pre) => {
              const from = bySlug.get(pre);
              const to = bySlug.get(pattern.slug);
              if (!from || !to) return null;
              return <line key={`${pre}-${pattern.slug}`} x1={from.x + 84} y1={from.y} x2={to.x - 84} y2={to.y} stroke="#f97316" strokeOpacity="0.4" strokeWidth="1.5" markerEnd="url(#arrow)" />;
            })
          )}
          {positions.map((node) => {
            const color = patternCategoryColors[node.category];
            return (
              <g key={node.slug} onClick={() => { window.location.href = `/patterns/${node.slug}`; }} className="cursor-pointer group">
                <rect x={node.x - 52} y={node.y - 18} width="104" height="36" rx="8" fill="#141414" stroke={color} strokeWidth="1.5" className="transition-all duration-300 group-hover:scale-105 group-hover:stroke-accent" />
                <text x={node.x} y={node.y + 4} textAnchor="middle" fill="#f5f5f5" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600">
                  {node.name.length > 14 ? `${node.name.slice(0, 13)}...` : node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}

export function RoadmapClient() {
  const currentWeek = useProgressStore((state) => state.currentWeek);
  const setCurrentWeek = useProgressStore((state) => state.setCurrentWeek);

  function startWeek(week: number) {
    setCurrentWeek(week);
    window.location.href = `/problems?week=${week}`;
  }

  return (
    <div className="space-y-8 relative overflow-hidden">
      {/* 3D Dynamic Constellation Canvas Background */}
      <RoadmapCanvas3D />

      {/* Hero Header with 3D Depth Glassmorphism */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-6 rounded-card border border-border/80 bg-surface/80 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="label text-accent font-mono uppercase tracking-widest flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-accent animate-bounce" />
              Interactive 3D Curriculum
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
              16-Week Placement Operating System
            </h1>
            <p className="mt-2 max-w-3xl text-sm text-secondary leading-relaxed">
              Step through our interactive 3D roadmap. Tilt cards to inspect daily breakdown, constraint invariants, and weekly deliverables.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-card border border-accent/30 bg-accent/10 backdrop-blur-md text-xs font-mono text-accent font-semibold flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>16 Weeks • 25 Patterns • 500+ Problems</span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Sticky 3D Tab Bar */}
      <div className="sticky top-16 z-20 -mx-4 overflow-x-auto border-b border-border/60 bg-base/90 backdrop-blur-md px-4 py-3 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="flex min-w-max gap-2">
          {ROADMAP_WEEKS.map((week) => (
            <button
              key={week.week}
              onClick={() => document.getElementById(`week-${week.week}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`flex items-center gap-1.5 rounded-card px-3.5 py-2 text-xs font-semibold font-mono transition-all ${
                currentWeek === week.week
                  ? "bg-accent text-white shadow-lg shadow-accent/25 border border-accent"
                  : "bg-surface/60 text-secondary hover:text-primary hover:bg-surface border border-border/40"
              }`}
            >
              {(week.week === 8 || week.week === 16) && <Trophy size={14} className="text-amber-400 animate-pulse" />}
              Week {week.week}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Tiltable Grid of Week Cards */}
      <div className="grid gap-6 xl:grid-cols-2 relative z-10">
        {ROADMAP_WEEKS.map((week, idx) => (
          <motion.div
            key={week.week}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <Card3D depth={12} glowColor="#f97316" className="h-full">
              <article
                id={`week-${week.week}`}
                className="scroll-mt-32 rounded-card border border-border/80 bg-surface/90 backdrop-blur-md p-6 h-full flex flex-col justify-between shadow-xl hover:border-accent/60 transition-all duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="inline-block rounded-full bg-accent/15 border border-accent/30 px-3 py-1 text-2xs font-mono font-bold text-accent">
                        WEEK {week.week} OF 16
                      </span>
                      <h2 className="mt-2 text-lg font-bold tracking-tight text-primary">{week.theme}</h2>
                    </div>
                    <button
                      onClick={() => startWeek(week.week)}
                      className="rounded-card border border-accent/50 bg-accent px-4 py-2 text-xs font-bold text-white hover:bg-accent/90 shadow-md shadow-accent/20 transition-all"
                    >
                      Start Week {week.week}
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {week.topics.map((slug) => {
                      const pattern = PATTERNS.find((item) => item.slug === slug);
                      return pattern ? <PatternTag key={slug} category={pattern.category} label={pattern.name} /> : null;
                    })}
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[500px] border-collapse text-xs">
                      <thead className="bg-base/80">
                        <tr className="border-b border-border/60 text-left">
                          <th className="px-3 py-2 label font-mono">Day</th>
                          <th className="px-3 py-2 label">Focus</th>
                          <th className="px-3 py-2 label font-mono">Problems</th>
                          <th className="px-3 py-2 label">Difficulty</th>
                        </tr>
                      </thead>
                      <tbody>
                        {week.dailyBreakdown.map((day) => (
                          <tr key={day.day} className="border-b border-border/40 hover:bg-elevated/40 transition-colors">
                            <td className="px-3 py-2 font-mono text-2xs text-muted">{day.day}</td>
                            <td className="px-3 py-2 text-secondary font-medium">{day.focus}</td>
                            <td className="px-3 py-2 text-secondary font-mono">{day.problemCount}</td>
                            <td className="px-3 py-2 text-secondary font-mono">{day.difficulty}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 space-y-3 pt-4 border-t border-border/40">
                  <blockquote className="border-l-2 border-accent bg-accent/10 px-4 py-3 text-xs text-secondary rounded-r-card">
                    {week.weeklyGoal}
                  </blockquote>
                  
                  <div className="rounded-card border border-border/60 bg-base/80 p-3 text-xs text-secondary">
                    {week.transitionReasoning.includes("[TODO") && (
                      <span className="mb-1.5 inline-flex items-center gap-1 rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-2xs font-mono font-bold text-amber-400">
                        ⚠️ Transition Reasoning Needed
                      </span>
                    )}
                    <p>{week.transitionReasoning}</p>
                  </div>

                  <div className="rounded-card border border-hard/30 bg-hard/10 p-3 text-xs text-hard">
                    {week.commonMistakes.includes("[TODO") && (
                      <span className="mb-1.5 inline-flex items-center gap-1 rounded bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 text-2xs font-mono font-bold text-rose-400">
                        ⚠️ Common Mistakes Needed
                      </span>
                    )}
                    <p>{week.commonMistakes}</p>
                  </div>
                </div>
              </article>
            </Card3D>
          </motion.div>
        ))}
      </div>

      <DependencyGraph />
      <HeatmapCalendar weeks={52} />
    </div>
  );
}

