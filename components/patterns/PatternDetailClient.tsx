"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Target,
  AlertTriangle,
  Sparkles,
  Clock,
  Zap,
  BookOpen
} from "lucide-react";
import { Pattern } from "@/data/patterns";
import { PROBLEMS } from "@/data/problems";
import { ProblemTable } from "@/components/problems/ProblemTable";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { PatternTag } from "@/components/ui/PatternTag";
import { Badge } from "@/components/ui/Badge";
import { LanguageSelector, Language } from "@/components/ui/LanguageSelector";
import { useProgressStore } from "@/store/useProgressStore";

function lineNotes(code: string) {
  const lines = code.split(/\r?\n/);
  const notes: { range: string; text: string }[] = [];
  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("//")) {
      notes.push({ range: `${index + 1}`, text: trimmed.replace(/^\/\/\s?/, "") });
    }
  });
  return notes.slice(0, 8);
}

export function PatternDetailClient({ pattern }: { pattern: Pattern }) {
  const completed = useProgressStore((state) => state.patternsCompleted.includes(pattern.slug));
  const markPatternComplete = useProgressStore((state) => state.markPatternComplete);
  const [lang, setLang] = useState<Language>("java");
  const [activeTab, setActiveTab] = useState<"code" | "problems" | "mistakes">("code");

  const patternProblems = useMemo(() => {
    return PROBLEMS.filter((p) => p.patterns.includes(pattern.slug));
  }, [pattern.slug]);

  const templateCode = useMemo(() => {
    switch (lang) {
      case "python":     return pattern.pythonTemplate || "# Template coming soon";
      case "cpp":        return pattern.cppTemplate || "// Template coming soon";
      case "c":          return pattern.cTemplate || "// Template coming soon";
      case "javascript": return pattern.javascriptTemplate || "// Template coming soon";
      default:           return pattern.javaTemplate;
    }
  }, [lang, pattern]);

  const langId = useMemo(() => {
    if (lang === "cpp") return "cpp";
    if (lang === "c") return "c";
    if (lang === "javascript") return "javascript";
    if (lang === "python") return "python";
    return "java";
  }, [lang]);

  const notes = useMemo(() => lineNotes(templateCode), [templateCode]);

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <Link
            href="/patterns"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors mb-2"
          >
            <ArrowLeft size={14} />
            Back to Pattern Library
          </Link>
          <div className="flex flex-wrap items-center gap-2">
            <PatternTag category={pattern.category} />
            <Badge tone="accent">{pattern.estimatedDaysToMaster} days to master</Badge>
            {completed && <Badge tone="success">Completed</Badge>}
          </div>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary">{pattern.name}</h1>
          <p className="mt-1 max-w-3xl text-sm text-secondary leading-relaxed">{pattern.description}</p>
        </div>

        <div className="shrink-0">
          <button
            onClick={() => markPatternComplete(pattern.slug)}
            className={`inline-flex items-center gap-2 rounded-card px-4 py-2 text-xs font-semibold transition-all ${
              completed
                ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                : "border border-accent/40 bg-accent-dim text-accent hover:bg-accent/20"
            }`}
          >
            <CheckCircle2 size={16} />
            {completed ? "Completed Pattern" : "Mark Pattern Complete"}
          </button>
        </div>
      </div>

      {/* Hero Cheat Code & Signal Banner */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="card p-4 border-l-4 border-accent bg-surface">
          <div className="flex items-center gap-2 text-accent">
            <Zap size={15} />
            <span className="label text-accent">Recognition Signal</span>
          </div>
          <p className="mt-2 text-xs font-mono text-secondary leading-relaxed">
            {pattern.triggerConditions[0] || "Look for sorted bounds or window constraints."}
          </p>
        </div>

        <div className="card p-4 border-l-4 border-accent bg-surface">
          <div className="flex items-center gap-2 text-accent">
            <Sparkles size={15} />
            <span className="label text-accent">Cheat Code Formula</span>
          </div>
          <p className="mt-2 text-xs font-semibold text-primary leading-relaxed">
            {pattern.cheatCode}
          </p>
        </div>

        <div className="card p-4 border-l-4 border-accent bg-surface">
          <div className="flex items-center gap-2 text-accent">
            <BookOpen size={15} />
            <span className="label text-accent">Core Invariant</span>
          </div>
          <p className="mt-2 text-xs font-mono text-secondary leading-relaxed truncate" title={pattern.coreInvariant}>
            {pattern.coreInvariant}
          </p>
        </div>
      </section>

      {/* Tab Navigation Switcher */}
      <div className="flex items-center gap-2 border-b border-border pb-1">
        <button
          onClick={() => setActiveTab("code")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-t-card transition-colors border-b-2 -mb-1 ${
            activeTab === "code"
              ? "border-accent text-accent bg-accent-dim/30"
              : "border-transparent text-muted hover:text-secondary"
          }`}
        >
          <Code2 size={15} />
          Code Template & Strategy
        </button>

        <button
          onClick={() => setActiveTab("problems")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-t-card transition-colors border-b-2 -mb-1 ${
            activeTab === "problems"
              ? "border-accent text-accent bg-accent-dim/30"
              : "border-transparent text-muted hover:text-secondary"
          }`}
        >
          <Target size={15} />
          Practice Problems
          <span className="rounded-full bg-base px-2 py-0.5 font-mono text-[10px] border border-border">
            {patternProblems.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("mistakes")}
          className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-t-card transition-colors border-b-2 -mb-1 ${
            activeTab === "mistakes"
              ? "border-accent text-accent bg-accent-dim/30"
              : "border-transparent text-muted hover:text-secondary"
          }`}
        >
          <AlertTriangle size={15} />
          Mistakes & Avoidance
          <span className="rounded-full bg-base px-2 py-0.5 font-mono text-[10px] border border-border">
            {pattern.topMistakes.length}
          </span>
        </button>
      </div>

      {/* Tab 1: Code & Strategy */}
      {activeTab === "code" && (
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          {/* Left Column: Code Template (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="card p-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-accent" />
                  <h2 className="text-sm font-bold tracking-tight">Canonical Code Template</h2>
                </div>
                <LanguageSelector value={lang} onChange={setLang} />
              </div>

              <CodeBlock code={templateCode} language={langId} />

              {notes.length > 0 && (
                <div className="mt-4 overflow-hidden rounded-card border border-border">
                  <div className="bg-surface px-3 py-2 border-b border-border">
                    <span className="label">Template Line Explanations</span>
                  </div>
                  <table className="w-full text-left text-xs">
                    <tbody>
                      {notes.map((note) => (
                        <tr key={`${note.range}-${note.text}`} className="border-t border-border/60">
                          <td className="px-3 py-2 font-mono text-[11px] text-accent w-12">{note.range}</td>
                          <td className="px-3 py-2 text-secondary leading-relaxed">{note.text}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Complexity, Variants, Core Invariant (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Complexity Analysis Card */}
            <div className="card p-5">
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-3">
                <Clock size={16} className="text-accent" />
                <h2 className="text-sm font-bold tracking-tight">Complexity Analysis</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start justify-between border-b border-border/50 pb-2.5">
                  <div>
                    <span className="label">Time Complexity</span>
                    <p className="mt-1 text-xs text-secondary leading-relaxed">{pattern.timeComplexity.explanation}</p>
                  </div>
                  <span className="font-mono text-sm font-bold text-accent bg-accent-dim px-2 py-0.5 rounded border border-accent/20">
                    {pattern.timeComplexity.notation}
                  </span>
                </div>

                <div className="flex items-start justify-between pt-1">
                  <div>
                    <span className="label">Space Complexity</span>
                    <p className="mt-1 text-xs text-secondary leading-relaxed">{pattern.spaceComplexity.explanation}</p>
                  </div>
                  <span className="font-mono text-sm font-bold text-accent bg-accent-dim px-2 py-0.5 rounded border border-accent/20">
                    {pattern.spaceComplexity.notation}
                  </span>
                </div>
              </div>
            </div>

            {/* Core Invariant Breakdown */}
            <div className="card p-5">
              <span className="label">Core Invariant</span>
              <div className="mt-2.5 rounded-card border border-border bg-base p-3 font-mono text-xs text-secondary leading-relaxed">
                {pattern.coreInvariant}
              </div>
            </div>

            {/* Pattern Variants Summary */}
            <div className="card p-5 space-y-3">
              <span className="label">Pattern Variants</span>
              <div className="space-y-2.5">
                {pattern.variants.map((variant) => (
                  <div key={variant.name} className="rounded-card border border-border/80 bg-base/60 p-3">
                    <span className="text-xs font-bold text-primary">{variant.name}</span>
                    <p className="mt-1 text-[11px] text-secondary leading-relaxed">{variant.whenToUse}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Practice Problems */}
      {activeTab === "problems" && (
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
            <div>
              <h2 className="text-base font-semibold tracking-tight">Practice Problems ({patternProblems.length})</h2>
              <p className="text-xs text-muted mt-0.5">Filter and solve curated questions tagged with {pattern.name}</p>
            </div>
          </div>
          <ProblemTable initialPattern={pattern.slug} hideFilters={false} />
        </div>
      )}

      {/* Tab 3: Mistakes & Avoidance */}
      {activeTab === "mistakes" && (
        <div className="grid gap-6 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="card p-5">
              <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <AlertTriangle size={18} className="text-rose-500" />
                <h2 className="text-base font-semibold tracking-tight">Top 5 Mistakes & Pitfalls</h2>
              </div>
              <div className="space-y-4">
                {pattern.topMistakes.map((item, index) => (
                  <div key={item.mistake} className="rounded-card border border-border bg-base p-4">
                    <p className="text-xs font-semibold text-rose-400">
                      {index + 1}. {item.mistake}
                    </p>
                    <div className="mt-2 flex items-start gap-2 text-xs text-emerald-400 font-medium">
                      <span>✓ Fix:</span>
                      <span className="text-secondary">{item.fix}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="card p-5 space-y-3">
              <h3 className="text-sm font-bold tracking-tight">Variant Strategy Details</h3>
              <div className="space-y-3">
                {pattern.variants.map((variant) => (
                  <div key={variant.name} className="rounded-card border border-border bg-base p-3.5 space-y-1.5">
                    <p className="text-xs font-bold text-accent">{variant.name}</p>
                    <p className="text-xs text-secondary"><strong>When:</strong> {variant.whenToUse}</p>
                    <p className="text-xs text-muted"><strong>Key difference:</strong> {variant.keyDifference}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

