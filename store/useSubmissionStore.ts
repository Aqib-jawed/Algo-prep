import { create } from "zustand";
import { persist } from "zustand/middleware";
import { SubmissionResult } from "@/types/interview";

export interface SubmissionHistoryItem {
  questionId: number;
  submittedAt: string;
  result: SubmissionResult["status"];
  runtime: number;
  memory: number;
}

interface SubmissionState {
  isSubmitting: boolean;
  lastSubmission: SubmissionResult | null;
  submissionHistory: SubmissionHistoryItem[];
  submitSolution: (code: string, language: string, problemId: number) => Promise<SubmissionResult | null>;
  clearHistory: () => void;
  resetSubmission: () => void;
}

export const useSubmissionStore = create<SubmissionState>()(
  persist(
    (set, get) => ({
      isSubmitting: false,
      lastSubmission: null,
      submissionHistory: [],

      submitSolution: async (code, language, problemId) => {
        set({ isSubmitting: true, lastSubmission: null });
        try {
          const res = await fetch("/api/interview/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code, language, problemId }),
          });

          if (!res.ok) {
            const errData = await res.json();
            throw new Error(errData?.error || "Submission request failed.");
          }

          const result: SubmissionResult = await res.json();

          const historyItem: SubmissionHistoryItem = {
            questionId: problemId,
            submittedAt: result.submittedAt,
            result: result.status,
            runtime: result.runtime,
            memory: result.memory,
          };

          set((state) => ({
            isSubmitting: false,
            lastSubmission: result,
            submissionHistory: [historyItem, ...state.submissionHistory],
          }));

          return result;
        } catch (err) {
          console.error("Submission failed:", err);
          set({ isSubmitting: false });
          return null;
        }
      },

      clearHistory: () => set({ submissionHistory: [] }),

      resetSubmission: () => set({ lastSubmission: null, isSubmitting: false }),
    }),
    {
      name: "algo-prep-submissions",
    }
  )
);
