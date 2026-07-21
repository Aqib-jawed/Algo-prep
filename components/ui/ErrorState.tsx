"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";
import { captureException } from "@/lib/observability/sentry";

export function ErrorState({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    captureException(error, { source: "React ErrorBoundary" });
  }, [error]);

  return (
    <section className="card p-6">
      <p className="label text-hard">Page error</p>
      <h1 className="mt-2 text-xl font-semibold tracking-[0]">Something in this view failed to render.</h1>
      <p className="mt-2 max-w-2xl text-sm text-secondary">{error.message}</p>
      <button
        onClick={reset}
        className="mt-5 inline-flex items-center gap-2 rounded-card border border-border bg-surface px-3 py-2 text-sm text-secondary hover:border-accent/50 hover:text-primary"
      >
        <RotateCcw size={15} /> Try again
      </button>
    </section>
  );
}

