import { ExperienceLevel } from "@/types/interview";
import { Difficulty } from "@/data/problems";

export interface CompanyProfile {
  companyId: string;
  defaultRounds: number;
  estimatedDuration: number;
  preferredPatterns: string[];
  difficultyDistribution: Record<ExperienceLevel, Difficulty[]>;
}

export const COMPANY_PROFILES: CompanyProfile[] = [
  // Service Based
  {
    companyId: "tcs",
    defaultRounds: 2,
    estimatedDuration: 45,
    preferredPatterns: ["hashmap-frequency", "two-pointers-opposite", "sliding-window-fixed"],
    difficultyDistribution: {
      fresher: ["Easy", "Easy"],
      "1-2": ["Easy", "Medium"],
      "3-5": ["Medium", "Medium"],
    },
  },
  {
    companyId: "infosys",
    defaultRounds: 2,
    estimatedDuration: 45,
    preferredPatterns: ["hashmap-frequency", "two-pointers-opposite", "binary-search-value"],
    difficultyDistribution: {
      fresher: ["Easy", "Easy"],
      "1-2": ["Easy", "Medium"],
      "3-5": ["Medium", "Medium"],
    },
  },
  {
    companyId: "wipro",
    defaultRounds: 2,
    estimatedDuration: 45,
    preferredPatterns: ["hashmap-frequency", "two-pointers-opposite", "sliding-window-fixed"],
    difficultyDistribution: {
      fresher: ["Easy", "Easy"],
      "1-2": ["Easy", "Medium"],
      "3-5": ["Medium", "Medium"],
    },
  },
  {
    companyId: "cognizant",
    defaultRounds: 2,
    estimatedDuration: 45,
    preferredPatterns: ["hashmap-frequency", "two-pointers-opposite", "binary-search-value"],
    difficultyDistribution: {
      fresher: ["Easy", "Easy"],
      "1-2": ["Easy", "Medium"],
      "3-5": ["Medium", "Medium"],
    },
  },
  {
    companyId: "accenture",
    defaultRounds: 2,
    estimatedDuration: 45,
    preferredPatterns: ["hashmap-frequency", "two-pointers-opposite", "sliding-window-fixed"],
    difficultyDistribution: {
      fresher: ["Easy", "Easy"],
      "1-2": ["Easy", "Medium"],
      "3-5": ["Medium", "Medium"],
    },
  },

  // Mid Product
  {
    companyId: "razorpay",
    defaultRounds: 3,
    estimatedDuration: 60,
    preferredPatterns: ["fast-slow-pointers", "linked-list-inplace", "binary-tree-dfs"],
    difficultyDistribution: {
      fresher: ["Easy", "Medium", "Medium"],
      "1-2": ["Medium", "Medium", "Medium"],
      "3-5": ["Medium", "Medium", "Hard"],
    },
  },
  {
    companyId: "phonepe",
    defaultRounds: 3,
    estimatedDuration: 60,
    preferredPatterns: ["topological-sort", "graph-bfs", "graph-dfs"],
    difficultyDistribution: {
      fresher: ["Easy", "Medium", "Medium"],
      "1-2": ["Medium", "Medium", "Medium"],
      "3-5": ["Medium", "Medium", "Hard"],
    },
  },
  {
    companyId: "groww",
    defaultRounds: 3,
    estimatedDuration: 60,
    preferredPatterns: ["two-pointers-opposite", "binary-search-range", "stack-monotonic"],
    difficultyDistribution: {
      fresher: ["Easy", "Medium", "Medium"],
      "1-2": ["Medium", "Medium", "Medium"],
      "3-5": ["Medium", "Medium", "Hard"],
    },
  },
  {
    companyId: "zepto",
    defaultRounds: 3,
    estimatedDuration: 60,
    preferredPatterns: ["heap-top-k", "merge-intervals", "hashmap-frequency"],
    difficultyDistribution: {
      fresher: ["Easy", "Medium", "Medium"],
      "1-2": ["Medium", "Medium", "Medium"],
      "3-5": ["Medium", "Medium", "Hard"],
    },
  },
  {
    companyId: "cred",
    defaultRounds: 3,
    estimatedDuration: 60,
    preferredPatterns: ["heap-top-k", "merge-intervals", "fast-slow-pointers"],
    difficultyDistribution: {
      fresher: ["Easy", "Medium", "Medium"],
      "1-2": ["Medium", "Medium", "Medium"],
      "3-5": ["Medium", "Medium", "Hard"],
    },
  },

  // Product / FAANG
  {
    companyId: "google",
    defaultRounds: 4,
    estimatedDuration: 90,
    preferredPatterns: ["backtracking-decision", "dp-subsequences", "topological-sort", "binary-tree-dfs"],
    difficultyDistribution: {
      fresher: ["Medium", "Medium", "Medium", "Hard"],
      "1-2": ["Medium", "Medium", "Hard", "Hard"],
      "3-5": ["Medium", "Hard", "Hard", "Hard"],
    },
  },
  {
    companyId: "amazon",
    defaultRounds: 4,
    estimatedDuration: 90,
    preferredPatterns: ["heap-top-k", "graph-bfs", "graph-dfs", "binary-search-range"],
    difficultyDistribution: {
      fresher: ["Medium", "Medium", "Medium", "Hard"],
      "1-2": ["Medium", "Medium", "Hard", "Hard"],
      "3-5": ["Medium", "Hard", "Hard", "Hard"],
    },
  },
  {
    companyId: "meta",
    defaultRounds: 4,
    estimatedDuration: 90,
    preferredPatterns: ["two-pointers-opposite", "sliding-window-fixed", "binary-tree-dfs", "backtracking-decision"],
    difficultyDistribution: {
      fresher: ["Medium", "Medium", "Medium", "Hard"],
      "1-2": ["Medium", "Medium", "Hard", "Hard"],
      "3-5": ["Medium", "Hard", "Hard", "Hard"],
    },
  },
  {
    companyId: "microsoft",
    defaultRounds: 4,
    estimatedDuration: 90,
    preferredPatterns: ["binary-tree-dfs", "linked-list-inplace", "topological-sort", "dp-subsequences"],
    difficultyDistribution: {
      fresher: ["Medium", "Medium", "Medium", "Hard"],
      "1-2": ["Medium", "Medium", "Hard", "Hard"],
      "3-5": ["Medium", "Hard", "Hard", "Hard"],
    },
  },
  {
    companyId: "uber",
    defaultRounds: 4,
    estimatedDuration: 90,
    preferredPatterns: ["graph-bfs", "graph-dfs", "topological-sort", "backtracking-decision"],
    difficultyDistribution: {
      fresher: ["Medium", "Medium", "Medium", "Hard"],
      "1-2": ["Medium", "Medium", "Hard", "Hard"],
      "3-5": ["Medium", "Hard", "Hard", "Hard"],
    },
  },
];
