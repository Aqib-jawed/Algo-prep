import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PatternDetailClient } from "@/components/patterns/PatternDetailClient";
import { PATTERNS, patternBySlug } from "@/data/patterns";

export function generateStaticParams() {
  return PATTERNS.map((pattern) => ({ slug: pattern.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pattern = patternBySlug[params.slug];
  return {
    title: pattern ? `${pattern.name} | Algo Prep` : "Pattern | Algo Prep",
    description: pattern?.description ?? "DSA pattern deep dive with template, complexity, mistakes, and practice problems."
  };
}

export default function PatternDetailPage({ params }: { params: { slug: string } }) {
  const pattern = patternBySlug[params.slug];
  if (!pattern) notFound();
  return <PatternDetailClient pattern={pattern} />;
}
