import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral"
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "success";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-2xs font-medium uppercase tracking-[0.08em]",
        tone === "neutral" && "border-border bg-elevated text-secondary",
        tone === "accent" && "border-accent/40 bg-accent-dim text-accent",
        tone === "success" && "border-easy/40 bg-easy/10 text-easy",
        className
      )}
    >
      {children}
    </span>
  );
}
