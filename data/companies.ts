export type CompanyData = {
  name: string;
  interviewStyle: string;
  patternEmphasis: string[];
  topProblems: number[];
  roundStructure: string;
  difficulty: "High" | "Very High" | "Extreme";
  avgRounds: number;
};

export const COMPANY_DATA: Record<string, CompanyData> = {
  "google": {
    "name": "Google",
    "interviewStyle": "Google coding interviews heavily reward optimization, clean state modeling, and proving why the chosen approach is correct. Expect ambiguous prompts, follow-ups that change constraints, and a high bar for edge-case reasoning.",
    "patternEmphasis": [
      "binary-search-on-answer",
      "dfs-graph",
      "dp-strings",
      "heaps"
    ],
    "topProblems": [
      4,
      127,
      212,
      295,
      297,
      300,
      329,
      743,
      1143,
      1514
    ],
    "roundStructure": "Usually recruiter screen, phone/virtual technical rounds, then onsite loops with 3-4 coding rounds and a Googliness/leadership round.",
    "difficulty": "Extreme",
    "avgRounds": 5
  },
  "amazon": {
    "name": "Amazon",
    "interviewStyle": "Amazon mixes practical DSA with Leadership Principles, so tradeoffs and ownership language matter while coding. Problems skew toward arrays, trees, heaps, graphs, and operational edge cases that can be discussed through customer impact.",
    "patternEmphasis": [
      "hashmap-frequency",
      "bfs",
      "heaps",
      "dp-1d"
    ],
    "topProblems": [
      1,
      23,
      49,
      56,
      121,
      200,
      215,
      347,
      621,
      994
    ],
    "roundStructure": "Online assessment, one or two technical screens, then a loop with coding, design, and behavioral LP-heavy rounds.",
    "difficulty": "Very High",
    "avgRounds": 5
  },
  "microsoft": {
    "name": "Microsoft",
    "interviewStyle": "Microsoft interviews often value clear fundamentals, maintainable code, and conversational problem solving. Tree, linked-list, DP, and design-flavored questions appear frequently, with follow-ups around API cleanliness and edge behavior.",
    "patternEmphasis": [
      "dfs-tree",
      "fast-slow-pointers",
      "dp-strings",
      "stack-basic"
    ],
    "topProblems": [
      20,
      21,
      70,
      98,
      102,
      146,
      206,
      236,
      297,
      1143
    ],
    "roundStructure": "Recruiter screen, technical phone or OA, then 3-5 onsite rounds including coding, design, and manager conversations.",
    "difficulty": "High",
    "avgRounds": 4
  },
  "meta": {
    "name": "Meta",
    "interviewStyle": "Meta emphasizes fast execution on known medium patterns, especially arrays, strings, trees, and graphs. Interviewers expect concise clarification, immediate pattern recognition, and production-clean implementation under time pressure.",
    "patternEmphasis": [
      "sliding-window",
      "two-pointers",
      "dfs-tree",
      "merge-intervals"
    ],
    "topProblems": [
      3,
      15,
      56,
      76,
      124,
      125,
      200,
      238,
      560,
      680
    ],
    "roundStructure": "Recruiter screen, coding screen, then onsite loops with coding, behavioral, and system/product architecture depending on level.",
    "difficulty": "Very High",
    "avgRounds": 5
  },
  "atlassian": {
    "name": "Atlassian",
    "interviewStyle": "Atlassian frequently blends DSA with practical product engineering, API design, and collaboration scenarios. Graph/dependency modeling, rate limits, and clean object boundaries show up more than puzzle-style tricks.",
    "patternEmphasis": [
      "topological-sort",
      "hashmap-frequency",
      "bfs",
      "greedy"
    ],
    "topProblems": [
      146,
      207,
      210,
      380,
      621,
      721,
      743,
      981,
      994,
      1235
    ],
    "roundStructure": "Online assessment or screen, coding, values interview, and system/design rounds tailored to product engineering.",
    "difficulty": "High",
    "avgRounds": 4
  },
  "adobe": {
    "name": "Adobe",
    "interviewStyle": "Adobe interviews are fundamentals-heavy with strings, DP, trees, and backtracking appearing regularly. They reward careful implementation and ability to explain tradeoffs rather than only final complexity.",
    "patternEmphasis": [
      "dp-strings",
      "recursion-backtracking",
      "tries",
      "bit-manipulation"
    ],
    "topProblems": [
      10,
      39,
      46,
      72,
      79,
      91,
      208,
      212,
      338,
      1143
    ],
    "roundStructure": "OA or phone screen followed by multiple technical rounds and a hiring-manager discussion.",
    "difficulty": "High",
    "avgRounds": 4
  },
  "razorpay": {
    "name": "Razorpay",
    "interviewStyle": "Razorpay is backend-heavy and often expects system design thinking even for intern or early-career loops. DSA questions tend to connect with scalable services: graphs, queues, rate limits, idempotency, and correctness under failure.",
    "patternEmphasis": [
      "dfs-graph",
      "topological-sort",
      "heaps",
      "binary-search-on-answer"
    ],
    "topProblems": [
      127,
      146,
      207,
      210,
      215,
      295,
      743,
      787,
      994,
      1514
    ],
    "roundStructure": "DSA/OA, backend coding or machine-coding, system design, and bar-raiser or manager rounds.",
    "difficulty": "Very High",
    "avgRounds": 5
  },
  "flipkart": {
    "name": "Flipkart",
    "interviewStyle": "Flipkart interviews commonly stress algorithmic speed, machine-coding readiness, and design choices for commerce-scale systems. Binary search, DP, heaps, and graph modeling appear alongside practical backend discussions.",
    "patternEmphasis": [
      "binary-search-on-answer",
      "dp-knapsack",
      "heaps",
      "union-find"
    ],
    "topProblems": [
      23,
      56,
      128,
      215,
      300,
      322,
      416,
      721,
      875,
      1011
    ],
    "roundStructure": "OA or coding screen, DSA rounds, machine-coding/system-design round, and hiring-manager discussion.",
    "difficulty": "Very High",
    "avgRounds": 5
  },
  "zepto": {
    "name": "Zepto",
    "interviewStyle": "Zepto has a fast-paced startup bar where candidates must code quickly and reason about product constraints. Expect DSA plus product thinking around dispatch, inventory, prioritization, and latency tradeoffs.",
    "patternEmphasis": [
      "heaps",
      "monotonic-deque",
      "greedy",
      "sliding-window"
    ],
    "topProblems": [
      45,
      55,
      215,
      239,
      621,
      763,
      853,
      904,
      1438,
      1235
    ],
    "roundStructure": "Fast coding screen, practical DSA/machine-coding, product or system discussion, and founder/manager-style culture round.",
    "difficulty": "Very High",
    "avgRounds": 4
  }
};

export const companySheets = Object.entries(COMPANY_DATA).map(([slug, data]) => ({ slug, ...data }));
