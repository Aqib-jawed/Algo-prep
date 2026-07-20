import { create } from "zustand";
import { NormalizedExecutionResult } from "@/lib/judge0/judge0Mapper";

interface ExecutionResultWithTestCase extends NormalizedExecutionResult {
  input: string;
  expectedOutput: string;
}

interface ExecutionState {
  isRunning: boolean;
  result: ExecutionResultWithTestCase | null;
  error: string | null;
  lastExecutedAt: string | null;
  isConsoleOpen: boolean;
  runCode: (code: string, language: string, problemId: number) => Promise<void>;
  clearResult: () => void;
  setConsoleOpen: (open: boolean) => void;
}

export const useExecutionStore = create<ExecutionState>()((set) => ({
  isRunning: false,
  result: null,
  error: null,
  lastExecutedAt: null,
  isConsoleOpen: false,

  runCode: async (code, language, problemId) => {
    set({ isRunning: true, error: null, result: null, isConsoleOpen: true });
    try {
      const res = await fetch("/api/interview/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language, problemId }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData?.error || "Submission run failed.");
      }

      const data = await res.json();
      set({
        result: data,
        isRunning: false,
        lastExecutedAt: new Date().toISOString(),
      });
    } catch (err: any) {
      set({
        error: err?.message || "A network error occurred during code run.",
        isRunning: false,
      });
    }
  },

  clearResult: () => set({ result: null, error: null }),
  setConsoleOpen: (open) => set({ isConsoleOpen: open }),
}));
export type { ExecutionResultWithTestCase };
