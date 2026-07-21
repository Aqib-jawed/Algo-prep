"use client";

import { useState } from "react";
import { Lightbulb, Star, FileText } from "lucide-react";
import { Problem } from "@/data/problems";
import { patternCategoryColors } from "@/lib/constants";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { PatternTag } from "@/components/ui/PatternTag";
import { useProgressStore } from "@/store/useProgressStore";
import { FailurePostMortemModal } from "./FailurePostMortemModal";
import { showGlobalToast } from "@/components/ui/Toast";

const frequencyPct = { "Very High": 100, High: 76, Medium: 48, Niche: 24 };

export function ProblemRow({ problem, rowIndex, onStartTimer }: { problem: Problem; rowIndex: number; onStartTimer: (id: number, title: string) => void }) {
  const [hintOpen, setHintOpen] = useState(false);
  const [postMortemOpen, setPostMortemOpen] = useState(false);
  const solved = useProgressStore((state) => state.solvedProblems.includes(problem.id));
  const starred = useProgressStore((state) => state.starredProblems.includes(problem.id));
  const markSolved = useProgressStore((state) => state.markSolved);
  const unmarkSolved = useProgressStore((state) => state.unmarkSolved);
  const toggleStarred = useProgressStore((state) => state.toggleStarred);
  const savePostMortem = useProgressStore((state) => state.savePostMortem);
  const pastReflection = useProgressStore((state) => state.postMortemLogs[problem.id]);
  const color = patternCategoryColors[problem.category] ?? "#f97316";

  const handlePostMortemSubmit = async (category: string, notes: string) => {
    savePostMortem(problem.id, category, notes);
    try {
      await fetch("/api/problems/postmortem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          problemId: problem.id,
          failureCategory: category,
          notes,
        }),
      });
      showGlobalToast("Post-mortem logged! Review scheduled.", "success");
    } catch {
      showGlobalToast("Post-mortem saved locally.", "info");
    }
  };


  return (
    <>
      <tr
        className="group border-b border-border transition-colors hover:bg-elevated focus:bg-elevated focus:outline-none"
        tabIndex={0}
        data-row-index={rowIndex}
        data-problem-id={problem.id}
      >
        <td className="relative px-3 py-3">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-[var(--row-color)] opacity-0 transition-opacity group-hover:opacity-100" style={{ ["--row-color" as string]: color }} />
          <button
            onClick={() => (solved ? unmarkSolved(problem.id) : markSolved(problem.id))}
            className={`flex h-5 w-5 items-center justify-center rounded border ${solved ? "border-accent bg-accent text-black" : "border-border bg-surface"}`}
            aria-label={solved ? "Mark unsolved" : "Mark solved"}
          >
            {solved ? "✓" : ""}
          </button>
        </td>
        <td className="px-3 py-3 font-mono text-xs text-muted">{problem.id}</td>
        <td className="px-3 py-3">
          <a
            href={`https://leetcode.com/problems/${problem.slug}/`}
            target="_blank"
            rel="noreferrer"
            onClick={() => onStartTimer(problem.id, problem.title)}
            className={`font-medium hover:text-accent ${solved ? "text-secondary line-through" : ""}`}
          >
            {problem.title}
          </a>
        </td>
        <td className="px-3 py-3">
          <div className="flex items-center gap-2">
            <PatternTag category={problem.category} label={problem.patterns[0]} />
            {problem.patterns.length > 1 && <span className="rounded-full border border-border bg-base px-2 py-0.5 text-2xs text-muted">+{problem.patterns.length - 1}</span>}
          </div>
        </td>
        <td className="px-3 py-3"><DifficultyBadge difficulty={problem.difficulty} /></td>
        <td className="px-3 py-3">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 rounded-full bg-border">
              <div className="h-full rounded-full bg-accent" style={{ width: `${frequencyPct[problem.frequency]}%` }} />
            </div>
            <span className="text-xs text-secondary">{problem.frequency}</span>
          </div>
        </td>
        <td className="px-3 py-3">
          <div className="flex flex-wrap gap-1">
            {problem.companies.slice(0, 3).map((company) => (
              <span key={company} className="rounded-full border border-border bg-base px-2 py-0.5 text-xs text-secondary">{company}</span>
            ))}
          </div>
        </td>
        <td className="px-3 py-3">
          <div className="flex items-center gap-2">
            <button onClick={() => toggleStarred(problem.id)} className="text-muted hover:text-medium" aria-label="Toggle starred">
              <Star size={16} className={starred ? "fill-medium text-medium" : ""} />
            </button>
            <button
              onClick={() => setPostMortemOpen(true)}
              className="text-muted hover:text-amber-400"
              title="Log Attempt Post-Mortem / Reflection"
            >
              <FileText size={15} />
            </button>
          </div>
        </td>
        <td className="relative px-3 py-3">
          <button onClick={() => setHintOpen((value) => !value)} className={`text-muted hover:text-accent ${pastReflection ? "text-amber-400" : ""}`} aria-label="Show hint">
            <Lightbulb size={16} />
          </button>
          {hintOpen && (
            <div className="absolute right-3 top-9 z-20 w-80 rounded-card border border-border bg-surface p-3.5 text-xs text-secondary shadow-xl space-y-2">
              {pastReflection && (
                <div className="p-2.5 rounded bg-amber-500/15 border border-amber-500/40 text-amber-300">
                  <p className="font-bold font-mono text-2xs uppercase tracking-wider flex items-center gap-1">
                    🧠 Your Past Post-Mortem Reflection:
                  </p>
                  <p className="mt-1 font-semibold text-2xs uppercase text-amber-200">
                    [{pastReflection.category.replace(/_/g, " ")}]
                  </p>
                  {pastReflection.notes && (
                    <p className="mt-1 italic text-secondary">&quot;{pastReflection.notes}&quot;</p>
                  )}
                </div>
              )}
              <div>
                <p className="font-semibold text-primary mb-1">Standard Pattern Hint:</p>
                <p className="text-secondary">{problem.unlockHint}</p>
              </div>
            </div>
          )}
        </td>

      </tr>

      <FailurePostMortemModal
        problem={problem}
        isOpen={postMortemOpen}
        onClose={() => setPostMortemOpen(false)}
        onSubmit={handlePostMortemSubmit}
      />
    </>
  );
}

