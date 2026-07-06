"use client";

import { useSession } from "next-auth/react";
import { Info } from "lucide-react";

export function FacultyVisibilityNotice() {
  const { data: session } = useSession();
  if (session?.user?.role === "FACULTY" || session?.user?.role === "ADMIN") return null;

  return (
    <div className="flex items-start gap-3 rounded-card border border-border bg-surface p-4">
      <Info size={16} className="mt-0.5 shrink-0 text-muted" />
      <p className="text-sm text-secondary">
        Your placement cell can see aggregate and individual prep activity here — solved counts, streaks, and
        readiness score — to help target extra sessions where the batch needs them.
      </p>
    </div>
  );
}