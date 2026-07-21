"use client";

import React, { useState } from "react";
import { CheckCircle2, HelpCircle, ArrowRight, Award } from "lucide-react";

export interface MCQQuestion {
  id: number;
  question: string;
  category: "Algorithms" | "Data Structures" | "System Design" | "Behavioral";
  options: string[];
  correctIndex: number;
  explanation: string;
}

const OA_MCQ_POOL: MCQQuestion[] = [
  {
    id: 1,
    question: "What is the worst-case time complexity of inserting N elements into an initially empty Min-Heap?",
    category: "Algorithms",
    options: ["O(N)", "O(N log N)", "O(N^2)", "O(log N)"],
    correctIndex: 1,
    explanation: "Each of the N insertions takes O(log K) where K is current heap size, resulting in total O(N log N) worst-case time."
  },
  {
    id: 2,
    question: "Which data structure combination allows O(1) time complexity for both GET and PUT operations in an LRU Cache?",
    category: "Data Structures",
    options: [
      "Doubly Linked List + Hash Map",
      "Singly Linked List + Binary Search Tree",
      "Array + Max Heap",
      "Stack + Queue"
    ],
    correctIndex: 0,
    explanation: "Hash Map provides O(1) key lookups to nodes, while Doubly Linked List allows O(1) node removal and insertion at the head."
  },
  {
    id: 3,
    question: "In a Graph with negative weight edges but NO negative cycles, which algorithm MUST be used to find single-source shortest paths?",
    category: "Algorithms",
    options: ["Dijkstra's Algorithm", "Bellman-Ford Algorithm", "Kruskal's Algorithm", "BFS Traversal"],
    correctIndex: 1,
    explanation: "Dijkstra's algorithm fails with negative edge weights because it assumes non-decreasing path costs. Bellman-Ford correctly handles negative edge weights."
  },
  {
    id: 4,
    question: "Amazon Leadership Principle: You disagree with your team leader's architectural decision for an upcoming service. What is the expected action?",
    category: "Behavioral",
    options: [
      "Have Backbone; Disagree and Commit - Respectfully challenge with data, but once decided, commit fully.",
      "Silently write your own implementation and replace it later without notice.",
      "Escalate immediately to the VP without discussing with the team first.",
      "Agree immediately during meetings even if you know it will crash."
    ],
    correctIndex: 0,
    explanation: "'Have Backbone; Disagree and Commit' expects engineers to respectfully challenge decisions when they disagree, but align completely once a decision is made."
  },
  {
    id: 5,
    question: "What primary condition leads to a Deadlock in multi-threaded programming?",
    category: "System Design",
    options: [
      "Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait occurring simultaneously.",
      "A thread running in an infinite while loop.",
      "Memory leak caused by unreferenced objects.",
      "Reading shared data concurrently without writing."
    ],
    correctIndex: 0,
    explanation: "Coffman conditions state that all 4 conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait) must hold simultaneously for a deadlock to occur."
  }
];

export function OAMcqSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId: number, optionIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    OA_MCQ_POOL.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 20; // 20 points per question = 100 max
      }
    });
    return score;
  };

  return (
    <div className="card p-6 bg-surface border border-border space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2 text-accent">
            <HelpCircle size={18} />
            <span className="label text-accent">OA Section 1: Aptitude & Technical Screening</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-primary mt-1">
            Company OA Multiple Choice Questions (MCQs)
          </h2>
          <p className="text-xs text-secondary mt-0.5">
            Real OA screening questions tested by Amazon, Goldman Sachs, TCS, and Tech Giants.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-card text-emerald-400 font-mono text-xs font-bold">
            <Award size={16} />
            <span>Score: {calculateScore()} / 100 PTS</span>
          </div>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length < OA_MCQ_POOL.length}
            className="inline-flex items-center gap-1.5 rounded-card bg-accent px-4 py-2 text-xs font-semibold text-base-dark transition-all hover:bg-accent/90 disabled:opacity-50"
          >
            <span>Submit MCQ Section</span>
            <ArrowRight size={14} />
          </button>
        )}
      </div>

      <div className="space-y-6">
        {OA_MCQ_POOL.map((q, idx) => {
          const isCorrect = selectedAnswers[q.id] === q.correctIndex;
          const hasAnswered = selectedAnswers[q.id] !== undefined;

          return (
            <div key={q.id} className="rounded-card border border-border/80 bg-base/40 p-4 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-bold text-primary leading-relaxed">
                  <span className="text-accent font-mono mr-1.5">Q{idx + 1}.</span>
                  {q.question}
                </p>
                <span className="text-[10px] font-mono border border-border bg-surface px-2 py-0.5 rounded text-muted shrink-0">
                  {q.category}
                </span>
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = selectedAnswers[q.id] === optIdx;
                  let btnStyle = "border-border bg-surface text-secondary hover:border-accent/50";

                  if (submitted) {
                    if (optIdx === q.correctIndex) {
                      btnStyle = "border-emerald-500/50 bg-emerald-500/10 text-emerald-400 font-semibold";
                    } else if (isSelected) {
                      btnStyle = "border-rose-500/50 bg-rose-500/10 text-rose-400 font-semibold";
                    } else {
                      btnStyle = "border-border/40 bg-surface/40 text-muted opacity-60";
                    }
                  } else if (isSelected) {
                    btnStyle = "border-accent bg-accent-dim text-accent font-semibold";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`text-left text-xs p-3 rounded-card border transition-all flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {submitted && optIdx === q.correctIndex && (
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-2 text-[11px] text-secondary bg-surface p-2.5 rounded border border-border/60 font-mono">
                  <span className="text-accent font-bold">Explanation: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
