import { Lightbulb } from "lucide-react";

export function CheatCode({ children }: { children: React.ReactNode }) {
  return (
    <div className="card flex gap-3 border-accent/35 bg-accent-dim/40 p-4">
      <Lightbulb size={18} className="mt-1 shrink-0 text-accent" />
      <p className="text-sm text-secondary">{children}</p>
    </div>
  );
}
