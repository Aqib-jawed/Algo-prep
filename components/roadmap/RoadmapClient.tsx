"use client";

import { Trophy } from "lucide-react";
import { PATTERNS } from "@/data/patterns";
import { ROADMAP_WEEKS } from "@/data/roadmap";
import { patternCategoryColors } from "@/lib/constants";
import { useProgressStore } from "@/store/useProgressStore";
import { PatternTag } from "@/components/ui/PatternTag";
import { HeatmapCalendar } from "@/components/progress/HeatmapCalendar";

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
    <section className="card overflow-hidden p-5">
      <div className="mb-4">
        <p className="label">Topic dependency graph</p>
        <h2 className="mt-1 text-lg font-semibold tracking-[0]">Pattern prerequisites</h2>
      </div>
      <div className="overflow-x-auto">
        <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="min-w-[700px]">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L8,4 L0,8 Z" fill="#525252" />
            </marker>
          </defs>
          {PATTERNS.flatMap((pattern) =>
            pattern.prerequisitePatterns.map((pre) => {
              const from = bySlug.get(pre);
              const to = bySlug.get(pattern.slug);
              if (!from || !to) return null;
              return <line key={`${pre}-${pattern.slug}`} x1={from.x + 84} y1={from.y} x2={to.x - 84} y2={to.y} stroke="#525252" strokeWidth="1.2" markerEnd="url(#arrow)" />;
            })
          )}
          {positions.map((node) => {
            const color = patternCategoryColors[node.category];
            return (
              <g key={node.slug} onClick={() => { window.location.href = `/patterns/${node.slug}`; }} className="cursor-pointer">
                <rect x={node.x - 52} y={node.y - 18} width="104" height="36" rx="8" fill="#141414" stroke={color} />
                <text x={node.x} y={node.y + 4} textAnchor="middle" fill="#f5f5f5" fontFamily="JetBrains Mono" fontSize="10">
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
    <div className="space-y-6">
      <header>
        <p className="label">16-week roadmap</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-[0]">Placement prep with weekly deliverables</h1>
        <p className="mt-2 max-w-3xl text-secondary">Tabs jump through the plan; cards expose daily execution, transitions, and the mistakes to avoid each week.</p>
      </header>

      <div className="sticky top-16 z-20 -mx-4 overflow-x-auto border-b border-border bg-base px-4 py-3 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        <div className="flex min-w-max gap-2">
          {ROADMAP_WEEKS.map((week) => (
            <button
              key={week.week}
              onClick={() => document.getElementById(`week-${week.week}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`flex items-center gap-1 border-b-2 px-3 py-2 text-sm transition-colors ${currentWeek === week.week ? "border-accent text-accent" : "border-transparent text-secondary hover:text-primary"}`}
            >
              {(week.week === 8 || week.week === 16) && <Trophy size={14} />}
              Week {week.week}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        {ROADMAP_WEEKS.map((week) => (
          <article id={`week-${week.week}`} key={week.week} className="scroll-mt-32 rounded-card border border-border bg-surface p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="label">Week {week.week}</p>
                <h2 className="mt-1 text-lg font-semibold tracking-[0]">{week.theme}</h2>
              </div>
              <button onClick={() => startWeek(week.week)} className="rounded-card border border-accent/40 bg-accent-dim px-3 py-2 text-sm text-accent hover:bg-elevated">
                Start This Week
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {week.topics.map((slug) => {
                const pattern = PATTERNS.find((item) => item.slug === slug);
                return pattern ? <PatternTag key={slug} category={pattern.category} label={pattern.name} /> : null;
              })}
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-sm">
                <thead className="bg-base">
                  <tr className="border-b border-border text-left">
                    <th className="px-3 py-2 label">Day</th>
                    <th className="px-3 py-2 label">Focus</th>
                    <th className="px-3 py-2 label">Problems</th>
                    <th className="px-3 py-2 label">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {week.dailyBreakdown.map((day) => (
                    <tr key={day.day} className="border-b border-border">
                      <td className="px-3 py-2 font-mono text-xs text-muted">{day.day}</td>
                      <td className="px-3 py-2 text-secondary">{day.focus}</td>
                      <td className="px-3 py-2 text-secondary">{day.problemCount}</td>
                      <td className="px-3 py-2 text-secondary">{day.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <blockquote className="mt-5 border-l-2 border-accent bg-accent-dim/30 px-4 py-3 text-sm text-secondary">{week.weeklyGoal}</blockquote>
            
            <div className="mt-4 rounded-card border border-border bg-base p-3 text-sm text-secondary">
              {week.transitionReasoning.includes("[TODO") && (
                <span className="mb-1.5 inline-flex items-center gap-1 rounded bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-2xs font-mono font-bold text-amber-400">
                  ⚠️ Transition Reasoning Needed
                </span>
              )}
              <p>{week.transitionReasoning}</p>
            </div>

            <div className="mt-3 rounded-card border border-hard/30 bg-hard/10 p-3 text-sm text-hard">
              {week.commonMistakes.includes("[TODO") && (
                <span className="mb-1.5 inline-flex items-center gap-1 rounded bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 text-2xs font-mono font-bold text-rose-400">
                  ⚠️ Common Mistakes Needed
                </span>
              )}
              <p>{week.commonMistakes}</p>
            </div>
          </article>

        ))}
      </div>

      <DependencyGraph />
      <HeatmapCalendar weeks={52} />
    </div>
  );
}
