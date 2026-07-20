"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export function EmptySessionState() {
  return (
    <div className="max-w-md mx-auto py-16 px-4">
      <div className="card p-8 text-center bg-surface space-y-6">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-hard/10 text-hard">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <div className="space-y-2">
          <h2 className="text-md font-bold text-primary">No Interview Session Found</h2>
          <p className="text-xs text-secondary leading-relaxed">
            The session identifier is invalid or has expired. Please configure a new session using the setup wizard.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/interview/setup"
            className="inline-flex items-center justify-center gap-2 w-full rounded-card bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-accent/90 focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Interview Setup</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
