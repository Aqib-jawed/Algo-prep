"use client";

import { CheckCircle2 } from "lucide-react";
import { Pattern } from "@/data/patterns";
import { ProblemTable } from "@/components/problems/ProblemTable";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { PatternTag } from "@/components/ui/PatternTag";
import { Badge } from "@/components/ui/Badge";

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
  const notes = lineNotes(pattern.javaTemplate);
  const toc = ["Overview", "Cheat Code", "Invariant", "Java Template", "Complexity", "Variants", "Mistakes", "Problems"];

  return (
    <div className="grid gap-6 lg:grid-cols-[160px_1fr]">
      <aside className="sticky top-24 hidden h-fit space-y-1 lg:block">
        {toc.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="block border-l-2 border-transparent px-3 py-2 text-sm text-secondary hover:border-accent hover:text-primary">
            {item}
          </a>
        ))}
      </aside>

      <main className="space-y-6">
        <section id="overview" className="card p-6">
          <div className="flex flex-wrap items-center gap-2">
            <PatternTag category={pattern.category} />
            <Badge tone="accent">{pattern.estimatedDaysToMaster} days</Badge>
            {completed && <Badge tone="success">Completed</Badge>}
          </div>
          <h1 className="mt-4 text-2xl font-semibold tracking-[0]">{pattern.name}</h1>
          <p className="mt-3 max-w-3xl text-md text-secondary">{pattern.description}</p>
          <div className="mt-5 space-y-2">
            {pattern.triggerConditions.map((trigger) => (
              <div key={trigger} className="flex gap-3 text-sm text-secondary">
                <code className="rounded border border-border bg-base px-2 py-0.5 font-mono text-xs text-accent">{trigger}</code>
              </div>
            ))}
          </div>
        </section>

        <section id="cheat-code" className="border-l-[3px] border-accent bg-[#0a0a0a] p-5">
          <h2 className="text-md font-semibold tracking-[0]">{pattern.cheatCode}</h2>
          <p className="mt-3 text-sm text-secondary"><span className="label">Trigger phrase:</span> <em>{pattern.triggerConditions[0]}</em></p>
        </section>

        <section id="invariant" className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Core Invariant</h2>
          <div className="mt-3 rounded-card border border-border bg-surface p-4 font-mono text-sm text-secondary">{pattern.coreInvariant}</div>
        </section>

        <section id="java-template" className="space-y-4">
          <h2 className="text-lg font-semibold tracking-[0]">Java Template</h2>
          <CodeBlock code={pattern.javaTemplate} language="java" />
          <div className="overflow-hidden rounded-card border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface"><tr><th className="px-3 py-2 label">Line range</th><th className="px-3 py-2 label">What it does</th></tr></thead>
              <tbody>
                {notes.map((note) => (
                  <tr key={`${note.range}-${note.text}`} className="border-t border-border">
                    <td className="px-3 py-2 font-mono text-xs text-muted">{note.range}</td>
                    <td className="px-3 py-2 text-secondary">{note.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="complexity" className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Complexity</h2>
          <table className="mt-4 w-full text-left text-sm">
            <tbody>
              <tr className="border-b border-border"><td className="py-3 label">Time</td><td className="font-mono text-accent">{pattern.timeComplexity.notation}</td><td className="text-secondary">{pattern.timeComplexity.explanation}</td></tr>
              <tr><td className="py-3 label">Space</td><td className="font-mono text-accent">{pattern.spaceComplexity.notation}</td><td className="text-secondary">{pattern.spaceComplexity.explanation}</td></tr>
            </tbody>
          </table>
        </section>

        <section id="variants" className="grid gap-3 md:grid-cols-3">
          {pattern.variants.map((variant) => (
            <div key={variant.name} className="card p-4">
              <h3 className="font-semibold tracking-[0]">{variant.name}</h3>
              <p className="mt-2 text-sm text-secondary">{variant.whenToUse}</p>
              <p className="mt-2 text-sm text-muted">{variant.keyDifference}</p>
            </div>
          ))}
        </section>

        <section id="mistakes" className="card p-5">
          <h2 className="text-lg font-semibold tracking-[0]">Top 5 Mistakes</h2>
          <ol className="mt-4 space-y-3">
            {pattern.topMistakes.map((item, index) => (
              <li key={item.mistake} className="text-sm">
                <p className="text-hard">{index + 1}. {item.mistake}</p>
                <p className="mt-1 text-easy">→ Fix: {item.fix}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="problems" className="space-y-4">
          <h2 className="text-lg font-semibold tracking-[0]">Problems In This Pattern</h2>
          <ProblemTable initialPattern={pattern.slug} hideFilters />
        </section>

        <button
          onClick={() => markPatternComplete(pattern.slug)}
          className="inline-flex items-center gap-2 rounded-card border border-accent/40 bg-accent-dim px-4 py-2 text-sm font-medium text-accent"
        >
          {completed ? <CheckCircle2 size={16} /> : null}
          {completed ? "Completed" : "Mark Pattern Complete"}
        </button>
      </main>
    </div>
  );
}
