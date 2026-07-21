"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Pattern } from "@/data/patterns";
import { PatternTag } from "@/components/ui/PatternTag";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { useProgressStore } from "@/store/useProgressStore";
import { Card3D } from "@/components/ui/Card3D";

export function PatternCard({ pattern }: { pattern: Pattern }) {
  const mastery = useProgressStore((state) => state.getPatternMastery(pattern.slug));

  return (
    <Card3D depth={15} glowColor="#3b82f6" className="h-full">
      <article className="card p-5 h-full flex flex-col justify-between transition-all border-border/80 bg-surface/90 backdrop-blur-md hover:border-accent/60 shadow-xl">
        <div>
          <div className="flex items-start justify-between gap-3">
            <PatternTag category={pattern.category} />
            <ProgressRing value={mastery} size={48} stroke={5} />
          </div>
          <h3 className="mt-4 text-lg font-bold tracking-tight text-primary flex items-center gap-2">
            {pattern.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-xs text-secondary leading-relaxed">{pattern.description}</p>
        </div>

        <div className="mt-5 pt-3 border-t border-border/40">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="rounded-full border border-border/60 bg-base px-2.5 py-0.5 text-2xs font-mono text-secondary">
              {pattern.relatedProblems.length} problems
            </span>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-2xs font-mono font-bold text-accent">
              Roadmap #{pattern.orderInRoadmap}
            </span>
          </div>

          <Link
            href={`/patterns/${pattern.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 rounded-card border border-accent/40 bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent/90 shadow-md shadow-accent/20 transition-all"
          >
            <span>Explore Pattern</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    </Card3D>
  );
}

