import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProgrammingLanguage } from "@/types/interview";
import { STARTER_TEMPLATES } from "@/data/interview/starterTemplates";

interface EditorState {
  language: ProgrammingLanguage;
  codes: Record<ProgrammingLanguage, string>;
  theme: "vs-dark" | "light";
  fontSize: number;
  isFullscreen: boolean;
  setCode: (language: ProgrammingLanguage, code: string) => void;
  setLanguage: (language: ProgrammingLanguage) => void;
  setTheme: (theme: "vs-dark" | "light") => void;
  setFontSize: (size: number) => void;
  toggleFullscreen: () => void;
  resetCode: (language: ProgrammingLanguage) => void;
}

const defaultCodes: Record<ProgrammingLanguage, string> = {
  java: STARTER_TEMPLATES.java,
  python: STARTER_TEMPLATES.python,
  cpp: STARTER_TEMPLATES.cpp,
  javascript: STARTER_TEMPLATES.javascript,
  c: STARTER_TEMPLATES.c,
};

export const useEditorStore = create<EditorState>()(
  persist(
    (set) => ({
      language: "javascript",
      codes: defaultCodes,
      theme: "vs-dark",
      fontSize: 14,
      isFullscreen: false,

      setCode: (language, code) =>
        set((state) => ({
          codes: { ...state.codes, [language]: code },
        })),

      setLanguage: (language) =>
        set(() => ({
          language,
        })),

      setTheme: (theme) =>
        set(() => ({
          theme,
        })),

      setFontSize: (fontSize) =>
        set(() => ({
          fontSize: Math.max(10, Math.min(24, fontSize)),
        })),

      toggleFullscreen: () =>
        set((state) => ({
          isFullscreen: !state.isFullscreen,
        })),

      resetCode: (language) =>
        set((state) => ({
          codes: { ...state.codes, [language]: STARTER_TEMPLATES[language] },
        })),
    }),
    {
      name: "algo-prep-editor-store",
    }
  )
);
