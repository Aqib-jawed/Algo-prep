export type CompanyTier = "service" | "mid-product" | "product";

export type ExperienceLevel = "fresher" | "1-2" | "3-5";

export type ProgrammingLanguage = "java" | "python" | "cpp" | "javascript" | "c";

export interface Company {
  id: string;
  name: string;
  tier: CompanyTier;
  estimatedDuration: number; // In minutes
  defaultRounds: number;
}

export interface InterviewSetup {
  step: number;
  companyCategory: CompanyTier | null;
  company: Company | null;
  experience: ExperienceLevel | null;
  language: ProgrammingLanguage | null;
  // Future fields (reserved for expansion, not exposed in current wizard UI)
  duration?: number;
  difficulty?: "Easy" | "Medium" | "Hard" | "Mixed";
  interviewMode?: "Standard" | "Speedrun" | "Relaxed";
  questionSet?: string[];
  sessionId?: string | null;
}

export type SessionStatus = "created" | "active" | "completed" | "abandoned";

export type QuestionStatus = "assigned" | "unlocked" | "completed" | "skipped";

export interface InterviewQuestion {
  problemId: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  pattern: string;
  round: number;
  order: number;
  status: QuestionStatus;
}

export interface InterviewSession {
  id: string;
  company: Company;
  category: CompanyTier;
  experience: ExperienceLevel;
  language: ProgrammingLanguage;
  status: SessionStatus;
  createdAt: string; // ISO string format
  currentRound: number;
  currentQuestion: string | null;
  assignedQuestions: InterviewQuestion[];
  totalQuestions: number;
  totalRounds: number;
}

export interface SubmissionResult {
  status: "Accepted" | "Wrong Answer" | "Compilation Error" | "Runtime Error" | "Time Limit Exceeded" | "Memory Limit Exceeded";
  passed: boolean;
  passedTests: number;
  totalTests: number;
  runtime: number; // in seconds or ms
  memory: number; // in KB
  submittedAt: string; // ISO format
  compilerMessage: string | null;
  runtimeMessage: string | null;
}

