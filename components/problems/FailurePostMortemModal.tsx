"use client";

import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";
import { Problem } from "@/data/problems";

interface FailurePostMortemModalProps {
  problem: Problem;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (category: string, notes: string) => void;
}

export const FAILURE_BUCKETS = [
  {
    id: "conceptual_gap",
    label: "Conceptual Gap",
    desc: "Didn't recognize the underlying pattern or invariant required.",
    color: "border-amber-500/40 bg-amber-500/10 text-amber-300"
  },
  {
    id: "translation_bug",
    label: "Translation / Implementation Bug",
    desc: "Understood the algorithm but made a coding, index, or pointer error.",
    color: "border-blue-500/40 bg-blue-500/10 text-blue-300"
  },
  {
    id: "edge_case_miss",
    label: "Edge Case Miss",
    desc: "Failed on boundary conditions (empty input, duplicates, zero, overflow).",
    color: "border-purple-500/40 bg-purple-500/10 text-purple-300"
  },
  {
    id: "time_limit_exceeded",
    label: "Time Limit Exceeded (TLE)",
    desc: "Solution exceeded time complexity limits (O(N²) vs O(N log N)).",
    color: "border-rose-500/40 bg-rose-500/10 text-rose-300"
  },
  {
    id: "syntax_error",
    label: "Language / Syntax Error",
    desc: "Language syntax mistake or standard library API misunderstanding.",
    color: "border-gray-500/40 bg-gray-500/10 text-gray-300"
  }
];

export function FailurePostMortemModal({ problem, isOpen, onClose, onSubmit }: FailurePostMortemModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("conceptual_gap");
  const [notes, setNotes] = useState<string>("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedCategory, notes);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg rounded-card border border-border bg-surface p-6 shadow-2xl space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-primary transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3">
          <div className="rounded-full bg-rose-500/20 p-2 text-rose-400">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="label font-mono">Attempt Post-Mortem</p>
            <h2 className="text-lg font-bold tracking-tight text-primary">{problem.title}</h2>
          </div>
        </div>

        <p className="text-xs text-secondary leading-relaxed">
          Log what blocked you on this problem to track patterns in your mistakes over time.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-muted uppercase font-semibold">Select Primary Root Cause</label>
            <div className="space-y-2">
              {FAILURE_BUCKETS.map((bucket) => (
                <label
                  key={bucket.id}
                  onClick={() => setSelectedCategory(bucket.id)}
                  className={`flex items-start gap-3 p-3 rounded-card border cursor-pointer transition-all ${
                    selectedCategory === bucket.id
                      ? `${bucket.color} ring-1 ring-accent`
                      : "border-border/60 bg-base/60 text-secondary hover:border-border"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={bucket.id}
                    checked={selectedCategory === bucket.id}
                    onChange={() => setSelectedCategory(bucket.id)}
                    className="mt-1 accent-accent"
                  />
                  <div>
                    <p className="text-xs font-bold font-mono">{bucket.label}</p>
                    <p className="text-2xs text-secondary mt-0.5">{bucket.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono text-muted uppercase font-semibold">Reflection / Fix Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Forgot to handle duplicate numbers in Two Pointers loop..."
              className="w-full h-20 rounded-card border border-border bg-base p-2.5 text-xs text-primary placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-card border border-border px-3 py-1.5 text-xs text-secondary hover:text-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-card border border-accent bg-accent px-4 py-1.5 text-xs font-bold text-white hover:bg-accent/90 shadow-md shadow-accent/20"
            >
              Save Post-Mortem
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
