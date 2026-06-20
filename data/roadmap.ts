export type RoadmapWeek = {
  week: number;
  theme: string;
  topics: string[];
  dailyBreakdown: {
    day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
    focus: string;
    problemCount: number;
    difficulty: string;
  }[];
  weeklyGoal: string;
  problemIds: number[];
  transitionReasoning: string;
  commonMistakes: string;
};

export const ROADMAP_WEEKS: RoadmapWeek[] = [
  {
    week: 1,
    theme: "Week 1: Arrays & HashMaps - Foundation",
    topics: [
    "hashmap-frequency"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "HashMap Frequency",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Build constant-time lookup reflexes and finish core array/hashmap warmups.",
    problemIds: [
    1,
    36,
    49,
    73,
    128,
    138,
    146,
    217,
    242,
    289,
    347,
    380
  ],
    transitionReasoning: "Start with arrays and maps because they are the base language of almost every interview problem.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 2,
    theme: "Week 2: Two Pointers & Sliding Window - Contiguous Reasoning",
    topics: [
    "two-pointers",
    "sliding-window"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Two Pointers",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Sliding Window",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Master pointer movement and window validity without brute force.",
    problemIds: [
    3,
    11,
    15,
    31,
    42,
    48,
    54,
    75,
    76,
    125,
    167,
    283
  ],
    transitionReasoning: "Week 2 follows Week 1 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 3,
    theme: "Week 3: Prefix Sum & Binary Search - State Compression",
    topics: [
    "prefix-sum",
    "binary-search",
    "binary-search-on-answer"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Prefix Sum",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Binary Search",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Binary Search on Answer",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Recognize cumulative-state and monotonic-boundary problems quickly.",
    problemIds: [
    4,
    33,
    34,
    35,
    74,
    153,
    238,
    240,
    287,
    300,
    378,
    437
  ],
    transitionReasoning: "Week 3 follows Week 2 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 4,
    theme: "Week 4: Stack & Monotonic Stack - Candidate Elimination",
    topics: [
    "stack-basic",
    "monotonic-stack",
    "monotonic-deque"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Stack Basics",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Monotonic Stack",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Monotonic Deque",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Use stack order to resolve next/previous constraints in linear time.",
    problemIds: [
    20,
    42,
    84,
    85,
    150,
    155,
    224,
    227,
    239,
    739,
    853,
    1438
  ],
    transitionReasoning: "Week 4 follows Week 3 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 5,
    theme: "Week 5: Linked Lists - Pointer Discipline",
    topics: [
    "fast-slow-pointers"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Fast & Slow Pointers",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Handle list mutation, cycle detection, middle finding, and reorder flows safely.",
    problemIds: [
    2,
    19,
    21,
    24,
    25,
    141,
    143,
    206,
    287,
    876
  ],
    transitionReasoning: "Week 5 follows Week 4 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 6,
    theme: "Week 6: Trees BFS/DFS - Recursive Returns",
    topics: [
    "dfs-tree",
    "bfs"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "DFS on Trees",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Breadth-First Search",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Make every tree call return exactly what its parent needs.",
    problemIds: [
    94,
    98,
    100,
    101,
    102,
    103,
    104,
    105,
    110,
    112,
    114,
    116
  ],
    transitionReasoning: "Week 6 follows Week 5 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 7,
    theme: "Week 7: BST & Heaps - Ordered Data Access",
    topics: [
    "dfs-tree",
    "heaps",
    "two-heap"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "DFS on Trees",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Heaps",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Two Heap",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Combine ordered traversal with priority queues for top-k and streaming problems.",
    problemIds: [
    23,
    94,
    98,
    100,
    101,
    104,
    105,
    110,
    112,
    114,
    124,
    129
  ],
    transitionReasoning: "Week 7 follows Week 6 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 8,
    theme: "Week 8: MOCK WEEK - Backtracking and Review",
    topics: [
    "recursion-backtracking"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Recursion & Backtracking",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Run timed mocks and patch recursion, duplicate handling, and communication gaps.",
    problemIds: [
    17,
    22,
    25,
    39,
    40,
    46,
    51,
    78,
    79,
    140,
    212,
    301
  ],
    transitionReasoning: "Week 8 follows Week 7 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 9,
    theme: "Week 9: Graphs BFS/DFS - Modeling",
    topics: [
    "bfs",
    "dfs-graph"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Breadth-First Search",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "DFS on Graphs",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Convert grids, words, and objects into graph states with clean visited rules.",
    problemIds: [
    79,
    102,
    103,
    116,
    127,
    133,
    199,
    200,
    329,
    695,
    743,
    787
  ],
    transitionReasoning: "Week 9 follows Week 8 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 10,
    theme: "Week 10: Topo Sort & Union Find - Dependency Systems",
    topics: [
    "topological-sort",
    "union-find"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Topological Sort",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Union Find",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Separate directed dependency ordering from undirected connectivity.",
    problemIds: [
    128,
    207,
    210,
    261,
    269,
    684,
    721
  ],
    transitionReasoning: "Week 10 follows Week 9 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 11,
    theme: "Week 11: DP 1D & Kadane - Linear Decisions",
    topics: [
    "dp-1d",
    "kadanes-algorithm"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "1D Dynamic Programming",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Kadane's Algorithm",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Name one-dimensional states and compress only after the recurrence is correct.",
    problemIds: [
    53,
    70,
    91,
    96,
    121,
    152,
    198,
    213,
    279,
    300,
    309,
    322
  ],
    transitionReasoning: "Week 11 follows Week 10 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 12,
    theme: "Week 12: DP 2D & Grid - Table Geometry",
    topics: [
    "dp-2d-grid"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "2D Grid Dynamic Programming",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Use table axes and base rows/columns to solve grid and matrix DP.",
    problemIds: [
    62,
    64,
    85,
    312,
    329,
    1335
  ],
    transitionReasoning: "Week 12 follows Week 11 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 13,
    theme: "Week 13: DP Strings & Intervals - Prefix and Range States",
    topics: [
    "dp-strings",
    "merge-intervals"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "String Dynamic Programming",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Merge Intervals",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Handle two-string tables and interval sorting without off-by-one drift.",
    problemIds: [
    5,
    10,
    56,
    57,
    72,
    139,
    140,
    435,
    647,
    1143,
    1312
  ],
    transitionReasoning: "Week 13 follows Week 12 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 14,
    theme: "Week 14: Greedy & Tries - Irreversible Choices",
    topics: [
    "greedy",
    "tries"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Greedy",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Tries",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Prove local choices and use prefix trees for dictionary-heavy questions.",
    problemIds: [
    45,
    55,
    122,
    169,
    208,
    211,
    212,
    435,
    621,
    763
  ],
    transitionReasoning: "Week 14 follows Week 13 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 15,
    theme: "Week 15: Bit Manipulation, Math & Advanced - Final Gaps",
    topics: [
    "bit-manipulation",
    "dp-knapsack",
    "dp-trees",
    "divide-conquer"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Bit Manipulation",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Knapsack Dynamic Programming",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Tree Dynamic Programming",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Divide and Conquer",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Review and redo misses",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Timed mixed set",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "Review and redo misses",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Close specialist gaps that often decide senior screens.",
    problemIds: [
    4,
    23,
    105,
    108,
    124,
    190,
    191,
    268,
    338,
    416,
    494,
    518
  ],
    transitionReasoning: "Week 15 follows Week 14 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  },
  {
    week: 16,
    theme: "Week 16: FINAL MOCK WEEK - Interview Simulation",
    topics: [
    "two-pointers",
    "sliding-window",
    "prefix-sum",
    "binary-search",
    "binary-search-on-answer",
    "kadanes-algorithm",
    "hashmap-frequency",
    "stack-basic"
  ],
    dailyBreakdown: [
    {
      "day": "Mon",
      "focus": "Two Pointers",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Tue",
      "focus": "Sliding Window",
      "problemCount": 3,
      "difficulty": "2E + 1M"
    },
    {
      "day": "Wed",
      "focus": "Prefix Sum",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Thu",
      "focus": "Binary Search",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Fri",
      "focus": "Binary Search on Answer",
      "problemCount": 3,
      "difficulty": "1E + 2M"
    },
    {
      "day": "Sat",
      "focus": "Kadane's Algorithm",
      "problemCount": 4,
      "difficulty": "3M + 1H"
    },
    {
      "day": "Sun",
      "focus": "HashMap Frequency",
      "problemCount": 2,
      "difficulty": "Redo misses"
    }
  ],
    weeklyGoal: "Run full interview loops, redo misses, and lock a final revision queue.",
    problemIds: [
    1,
    3,
    4,
    11,
    15,
    20,
    31,
    33,
    34,
    35,
    36,
    42,
    48,
    49,
    53,
    54
  ],
    transitionReasoning: "Week 16 follows Week 15 by adding one new constraint model while reusing the previous week's implementation discipline.",
    commonMistakes: "Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week."
  }
];

export const roadmap = ROADMAP_WEEKS;
