import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Company, CompanyTier, ExperienceLevel, ProgrammingLanguage, InterviewSession, SessionStatus, QuestionStatus } from "@/types/interview";
import { generateInterviewQuestions } from "@/lib/interview/interviewGenerator";

interface InterviewSessionState {
  activeSession: InterviewSession | null;
  sessionHistory: InterviewSession[];
  createSession: (
    company: Company,
    category: CompanyTier,
    experience: ExperienceLevel,
    language: ProgrammingLanguage
  ) => string;
  getActiveSession: () => InterviewSession | null;
  getSessionById: (id: string) => InterviewSession | null;
  updateStatus: (id: string, status: SessionStatus) => void;
  endSession: (id: string, status: "completed" | "abandoned") => void;
  clearSession: () => void;
  updateQuestionStatus: (sessionId: string, problemId: number, status: QuestionStatus) => void;
}

export const useInterviewSessionStore = create<InterviewSessionState>()(
  persist(
    (set, get) => ({
      activeSession: null,
      sessionHistory: [],

      createSession: (company, category, experience, language) => {
        const id =
          typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const partialSession: Omit<InterviewSession, "assignedQuestions" | "totalQuestions" | "totalRounds"> = {
          id,
          company,
          category,
          experience,
          language,
          status: "created",
          createdAt: new Date().toISOString(),
          currentRound: 1,
          currentQuestion: null,
        };

        const assignedQuestions = generateInterviewQuestions(partialSession);

        const newSession: InterviewSession = {
          ...partialSession,
          assignedQuestions,
          totalQuestions: assignedQuestions.length,
          totalRounds: company.defaultRounds,
        };

        set((state) => ({
          activeSession: newSession,
          sessionHistory: [newSession, ...state.sessionHistory],
        }));

        return id;
      },

      getActiveSession: () => get().activeSession,

      getSessionById: (id) => {
        if (get().activeSession?.id === id) {
          return get().activeSession;
        }
        return get().sessionHistory.find((s) => s.id === id) || null;
      },

      updateStatus: (id, status) =>
        set((state) => {
          const update = (s: InterviewSession) => (s.id === id ? { ...s, status } : s);
          return {
            activeSession: state.activeSession ? update(state.activeSession) : null,
            sessionHistory: state.sessionHistory.map(update),
          };
        }),

      endSession: (id, status) =>
        set((state) => {
          const update = (s: InterviewSession) => (s.id === id ? { ...s, status } : s);
          return {
            activeSession: state.activeSession?.id === id ? null : state.activeSession,
            sessionHistory: state.sessionHistory.map(update),
          };
        }),

      clearSession: () =>
        set(() => ({
          activeSession: null,
        })),
      updateQuestionStatus: (sessionId, problemId, status) =>
        set((state) => {
          const update = (s: InterviewSession) => {
            if (s.id !== sessionId) return s;
            return {
              ...s,
              assignedQuestions: s.assignedQuestions.map((q) =>
                q.problemId === problemId ? { ...q, status } : q
              ),
            };
          };
          return {
            activeSession: state.activeSession ? update(state.activeSession) : null,
            sessionHistory: state.sessionHistory.map(update),
          };
        }),
    }),
    {
      name: "algo-prep-interview-session",
    }
  )
);
