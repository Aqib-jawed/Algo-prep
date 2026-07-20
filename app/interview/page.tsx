import type { Metadata } from "next";
import React from "react";
import { InterviewHero } from "@/components/interview/InterviewHero";
import { InterviewStats } from "@/components/interview/InterviewStats";
import { CompanyCategoryCard, CompanyCategory } from "@/components/interview/CompanyCategoryCard";
import { InterviewHistory } from "@/components/interview/InterviewHistory";
import { CompanyResearchHub } from "@/components/interview/CompanyResearchHub";

export const metadata: Metadata = {
  title: "Target OA & Technical Interview Workspace | Algo Prep",
  description: "Company research intel, real OA test simulations, sandbox execution environment, and performance analytics."
};

const CATEGORIES: CompanyCategory[] = [
  {
    id: "cat-google",
    name: "Google Target",
    description: "Highly focused on advanced graphs, dynamic programming, complex tree traversals, and algorithmic optimization.",
    roundsCount: 4,
    difficulty: "Hard",
    tags: ["Graphs", "DP", "Trees"],
  },
  {
    id: "cat-meta",
    name: "Meta Simulation",
    description: "Focuses on speed and correctness in typical high-frequency array/string problems, trees, and system design.",
    roundsCount: 3,
    difficulty: "Medium",
    tags: ["Arrays", "System Design", "Subarrays"],
  },
  {
    id: "cat-amazon",
    name: "Amazon Track",
    description: "High emphasis on customer obsession, leadership principles, priority queues, binary search, and graphs.",
    roundsCount: 4,
    difficulty: "Medium",
    tags: ["Heaps", "Binary Search", "Behavioral"],
  },
  {
    id: "cat-startups",
    name: "High-Growth Startups",
    description: "Covers fast paced coding rounds focusing on standard web stack problems, concurrency, and real-time APIs.",
    roundsCount: 2,
    difficulty: "Mixed",
    tags: ["APIs", "Concurrency", "Algorithms"],
  },
];

export default function InterviewPage() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <InterviewHero />

      {/* Stats Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight text-primary">Your OA & Interview Performance Analytics</h2>
        <InterviewStats />
      </div>

      {/* Company Intelligence & OA Research Hub */}
      <CompanyResearchHub />

      {/* Target Company Tracks */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-primary">Fast-Track Category Simulations</h2>
          <p className="text-xs text-secondary mt-1">Select an isolated preparation module specialized for each company tier.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <CompanyCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* Past History */}
      <InterviewHistory />
    </div>
  );
}
