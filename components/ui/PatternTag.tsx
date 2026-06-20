import { patternCategoryColors } from "@/lib/constants";

export function PatternTag({ category, label }: { category: string; label?: string }) {
  const color = patternCategoryColors[category] ?? "#f97316";
  return (
    <span
      className="inline-flex items-center rounded-full border px-2 py-0.5 text-2xs font-medium uppercase tracking-[0.08em]"
      style={{
        color,
        borderColor: `${color}55`,
        backgroundColor: `${color}14`
      }}
    >
      {label ?? category}
    </span>
  );
}
