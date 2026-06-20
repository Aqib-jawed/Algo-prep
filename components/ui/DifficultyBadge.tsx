import { cn } from "@/lib/utils";

const styles = {
  Easy: "text-easy bg-easy/10 border-easy/30",
  Medium: "text-medium bg-medium/10 border-medium/30",
  Hard: "text-hard bg-hard/10 border-hard/30"
};

export function DifficultyBadge({ difficulty }: { difficulty: "Easy" | "Medium" | "Hard" }) {
  return (
    <span className={cn("inline-flex rounded-full border px-2 py-0.5 text-2xs font-medium uppercase tracking-[0.08em]", styles[difficulty])}>
      {difficulty}
    </span>
  );
}
