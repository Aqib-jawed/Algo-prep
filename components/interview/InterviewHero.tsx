"use client";

import React from "react";
import Link from "next/link";
import { Terminal, Sparkles, ArrowRight } from "lucide-react";

interface InterviewHeroProps {
  onStartInterview?: () => void;
}

export function InterviewHero({ onStartInterview }: InterviewHeroProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface via-surface to-accent-dim p-8 md:p-12 shadow-lg">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-accent opacity-5 blur-[120px]" />
      
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-3.5 py-1.5 text-xs font-medium text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Real OA Online Assessment & Technical Loops</span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-primary md:text-5xl">
          Master Company OA Tests & Technical Loops
        </h1>
        
        <p className="mt-4 text-md text-secondary leading-relaxed">
          Prepare for target companies (Google, Meta, Amazon, Microsoft, Razorpay, TCS, Flipkart & Unicorns) with timed Online Assessment (OA) test suites, company research intelligence, live sandbox code execution, and detailed test case evaluation.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/interview/setup"
            className="inline-flex items-center gap-2 rounded-card bg-accent px-6 py-3 font-semibold text-base-dark shadow-md transition-all hover:bg-accent/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base text-sm"
          >
            <span>Start Target OA Simulation</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <div className="flex items-center gap-2 text-xs text-muted font-mono">
            <Terminal className="h-4 w-4 text-accent" />
            <span>500+ Curated OA questions & multi-testcase runner active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
