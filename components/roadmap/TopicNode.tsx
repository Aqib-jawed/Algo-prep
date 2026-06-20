import { CheckCircle2 } from "lucide-react";
import { PatternTag } from "@/components/ui/PatternTag";
import { PATTERNS } from "@/data/patterns";

export function TopicNode({ slug }: { slug: string }) {
  const pattern = PATTERNS.find((item) => item.slug === slug);
  return (
    <div className="flex items-center gap-2 rounded-card border border-border bg-base px-3 py-2 text-sm text-secondary">
      <CheckCircle2 size={15} className="text-accent" />
      {pattern ? <PatternTag category={pattern.category} label={pattern.name} /> : <span>{slug}</span>}
    </div>
  );
}
