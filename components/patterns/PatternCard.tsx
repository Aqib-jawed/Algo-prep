"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Pattern } from "@/data/patterns";
import { PatternTag } from "@/components/ui/PatternTag";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { useProgressStore } from "@/store/useProgressStore";

export function PatternCard({ pattern }: { pattern: Pattern }) {
  const mastery = useProgressStore((state) => state.getPatternMastery(pattern.slug));

  return (
    <motion.article whileHover={{ scale: 1.005 }} transition={{ duration: 0.1 }} className="card p-5 transition-colors hover:border-accent/50 hover:bg-elevated">
      <div className="flex items-start justify-between gap-3">
        <PatternTag category={pattern.category} />
        <ProgressRing value={mastery} size={48} stroke={5} />
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-[0]">{pattern.name}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-secondary">{pattern.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-border bg-base px-2 py-0.5 text-xs text-secondary">{pattern.relatedProblems.length} problems</span>
        <span className="rounded-full border border-border bg-base px-2 py-0.5 text-xs text-secondary">#{pattern.orderInRoadmap}</span>
      </div>
      <Link href={`/patterns/${pattern.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-card border border-accent/40 bg-accent-dim px-3 py-2 text-sm font-medium text-accent">
        Start Pattern <ArrowRight size={15} />
      </Link>
    </motion.article>
  );
}
