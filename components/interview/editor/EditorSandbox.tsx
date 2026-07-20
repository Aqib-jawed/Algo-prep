"use client";

import React from "react";

export function EditorSandbox() {
  return (
    <div className="card p-6 flex flex-col items-center justify-center min-h-[300px] text-center border-dashed">
      <p className="text-sm font-semibold text-primary">Monaco Code Editor Sandbox</p>
      <p className="text-xs text-secondary mt-1 max-w-sm">
        This component is a placeholder for the future Phase 2 integration of the Monaco Editor, syntax highlighting, and themes.
      </p>
    </div>
  );
}
