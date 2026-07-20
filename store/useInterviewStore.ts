import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Company, CompanyTier, ExperienceLevel, ProgrammingLanguage, InterviewSetup } from "@/types/interview";
import { showGlobalToast } from "@/components/ui/Toast";

interface InterviewState {
  setup: InterviewSetup;
  setStep: (step: number) => void;
  nextStep: () => void;
  previousStep: () => void;
  setCompanyCategory: (category: CompanyTier) => void;
  setCompany: (company: Company) => void;
  setExperience: (experience: ExperienceLevel) => void;
  setLanguage: (language: ProgrammingLanguage) => void;
  resetSetup: () => void;
  validateCurrentStep: () => boolean;
  generateInterview: () => void;
}

const initialSetup: InterviewSetup = {
  step: 1,
  companyCategory: null,
  company: null,
  experience: null,
  language: null,
  duration: undefined,
  difficulty: undefined,
  interviewMode: undefined,
  questionSet: undefined,
  sessionId: null,
};

export const useInterviewStore = create<InterviewState>()(
  persist(
    (set, get) => ({
      setup: initialSetup,

      setStep: (step) =>
        set((state) => ({
          setup: { ...state.setup, step },
        })),

      nextStep: () => {
        if (get().validateCurrentStep()) {
          set((state) => ({
            setup: { ...state.setup, step: Math.min(state.setup.step + 1, 5) },
          }));
        } else {
          showGlobalToast("Please make a selection before proceeding.", "info");
        }
      },

      previousStep: () =>
        set((state) => ({
          setup: { ...state.setup, step: Math.max(state.setup.step - 1, 1) },
        })),

      setCompanyCategory: (category) =>
        set((state) => {
          // If category changes, reset selected company
          const company = state.setup.company && state.setup.company.tier === category 
            ? state.setup.company 
            : null;
          return {
            setup: { ...state.setup, companyCategory: category, company },
          };
        }),

      setCompany: (company) =>
        set((state) => ({
          setup: { ...state.setup, company },
        })),

      setExperience: (experience) =>
        set((state) => ({
          setup: { ...state.setup, experience },
        })),

      setLanguage: (language) =>
        set((state) => ({
          setup: { ...state.setup, language },
        })),

      resetSetup: () =>
        set(() => ({
          setup: initialSetup,
        })),

      validateCurrentStep: () => {
        const { step, companyCategory, company, experience, language } = get().setup;
        switch (step) {
          case 1:
            return companyCategory !== null;
          case 2:
            return company !== null && company.tier === companyCategory;
          case 3:
            return experience !== null;
          case 4:
            return language !== null;
          case 5:
            return (
              companyCategory !== null &&
              company !== null &&
              experience !== null &&
              language !== null
            );
          default:
            return false;
        }
      },

      generateInterview: () => {
        showGlobalToast("Interview generated! Starting mock session...", "success");
      },
    }),
    {
      name: "algo-prep-interview-setup",
    }
  )
);
