import { ProgrammingLanguage } from "@/types/interview";

export interface LanguageItem {
  id: ProgrammingLanguage;
  name: string;
  description: string;
}

export const LANGUAGES: LanguageItem[] = [
  {
    id: "java",
    name: "Java",
    description: "Strongly typed, object-oriented language common in enterprise systems.",
  },
  {
    id: "python",
    name: "Python",
    description: "Clean, readable, dynamic language popular for algorithms and scripting.",
  },
  {
    id: "cpp",
    name: "C++",
    description: "High-performance language widely used for competitive programming.",
  },
  {
    id: "javascript",
    name: "JavaScript",
    description: "Standard language of the web, running on V8 with asynchronous control.",
  },
  {
    id: "c",
    name: "C",
    description: "Low-level system programming language providing direct memory control.",
  },
];
