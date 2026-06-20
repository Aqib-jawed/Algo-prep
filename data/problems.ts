import type { PatternCategory } from "./patterns";

export type Difficulty = "Easy" | "Medium" | "Hard";
export type Frequency = "Very High" | "High" | "Medium" | "Niche";

export type Problem = {
  id: number;
  title: string;
  slug: string;
  difficulty: Difficulty;
  patterns: string[];
  frequency: Frequency;
  companies: string[];
  isNeetCode150: boolean;
  isBlind75: boolean;
  isIndianUnicorn: boolean;
  weekInRoadmap: number;
  unlockHint: string;
  estimatedMinutes: 5 | 10 | 20 | 30;
  category: PatternCategory | string;
};

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Arrays/Hash"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    slug: "add-two-numbers",
    difficulty: "Medium",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    difficulty: "Medium",
    patterns: [
    "sliding-window"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    difficulty: "Hard",
    patterns: [
    "divide-conquer",
    "binary-search"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Divide and Conquer invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Arrays/Hash"
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    difficulty: "Medium",
    patterns: [
    "dp-strings"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    slug: "regular-expression-matching",
    difficulty: "Hard",
    patterns: [
    "dp-strings"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 11,
    title: "Container With Most Water",
    slug: "container-with-most-water",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 15,
    title: "3Sum",
    slug: "3sum",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 17,
    title: "Letter Combinations of a Phone Number",
    slug: "letter-combinations-of-a-phone-number",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    slug: "remove-nth-node-from-end-of-list",
    difficulty: "Medium",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 20,
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "Easy",
    patterns: [
    "stack-basic"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Stack Basics invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Stack/Queue"
  },
  {
    id: 21,
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    difficulty: "Easy",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 22,
    title: "Generate Parentheses",
    slug: "generate-parentheses",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    slug: "merge-k-sorted-lists",
    difficulty: "Hard",
    patterns: [
    "heaps",
    "divide-conquer"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Google",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 7,
    unlockHint: "Look for the Heaps invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 24,
    title: "Swap Nodes in Pairs",
    slug: "swap-nodes-in-pairs",
    difficulty: "Medium",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 25,
    title: "Reverse Nodes in k-Group",
    slug: "reverse-nodes-in-k-group",
    difficulty: "Hard",
    patterns: [
    "fast-slow-pointers",
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Pointers"
  },
  {
    id: 31,
    title: "Next Permutation",
    slug: "next-permutation",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 33,
    title: "Search in Rotated Sorted Array",
    slug: "search-in-rotated-sorted-array",
    difficulty: "Medium",
    patterns: [
    "binary-search"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 34,
    title: "Find First and Last Position of Element in Sorted Array",
    slug: "find-first-and-last-position-of-element-in-sorted-array",
    difficulty: "Medium",
    patterns: [
    "binary-search"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 35,
    title: "Search Insert Position",
    slug: "search-insert-position",
    difficulty: "Easy",
    patterns: [
    "binary-search"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Binary Search"
  },
  {
    id: 36,
    title: "Valid Sudoku",
    slug: "valid-sudoku",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 39,
    title: "Combination Sum",
    slug: "combination-sum",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 40,
    title: "Combination Sum II",
    slug: "combination-sum-ii",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 42,
    title: "Trapping Rain Water",
    slug: "trapping-rain-water",
    difficulty: "Hard",
    patterns: [
    "monotonic-stack",
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Stack invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 45,
    title: "Jump Game II",
    slug: "jump-game-ii",
    difficulty: "Medium",
    patterns: [
    "greedy"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 46,
    title: "Permutations",
    slug: "permutations",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 48,
    title: "Rotate Image",
    slug: "rotate-image",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 49,
    title: "Group Anagrams",
    slug: "group-anagrams",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 51,
    title: "N-Queens",
    slug: "n-queens",
    difficulty: "Hard",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 53,
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    difficulty: "Medium",
    patterns: [
    "kadanes-algorithm"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 11,
    unlockHint: "Look for the Kadane's Algorithm invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 54,
    title: "Spiral Matrix",
    slug: "spiral-matrix",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 55,
    title: "Jump Game",
    slug: "jump-game",
    difficulty: "Medium",
    patterns: [
    "greedy"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 56,
    title: "Merge Intervals",
    slug: "merge-intervals",
    difficulty: "Medium",
    patterns: [
    "merge-intervals"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 13,
    unlockHint: "Look for the Merge Intervals invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 57,
    title: "Insert Interval",
    slug: "insert-interval",
    difficulty: "Medium",
    patterns: [
    "merge-intervals"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 13,
    unlockHint: "Look for the Merge Intervals invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 62,
    title: "Unique Paths",
    slug: "unique-paths",
    difficulty: "Medium",
    patterns: [
    "dp-2d-grid"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 12,
    unlockHint: "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 64,
    title: "Minimum Path Sum",
    slug: "minimum-path-sum",
    difficulty: "Medium",
    patterns: [
    "dp-2d-grid"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 12,
    unlockHint: "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 70,
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    difficulty: "Easy",
    patterns: [
    "dp-1d"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "DP"
  },
  {
    id: 72,
    title: "Edit Distance",
    slug: "edit-distance",
    difficulty: "Medium",
    patterns: [
    "dp-strings"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 73,
    title: "Set Matrix Zeroes",
    slug: "set-matrix-zeroes",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 74,
    title: "Search a 2D Matrix",
    slug: "search-a-2d-matrix",
    difficulty: "Medium",
    patterns: [
    "binary-search"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 75,
    title: "Sort Colors",
    slug: "sort-colors",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 76,
    title: "Minimum Window Substring",
    slug: "minimum-window-substring",
    difficulty: "Hard",
    patterns: [
    "sliding-window"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Pointers"
  },
  {
    id: 78,
    title: "Subsets",
    slug: "subsets",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 79,
    title: "Word Search",
    slug: "word-search",
    difficulty: "Medium",
    patterns: [
    "recursion-backtracking",
    "dfs-graph"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 84,
    title: "Largest Rectangle in Histogram",
    slug: "largest-rectangle-in-histogram",
    difficulty: "Hard",
    patterns: [
    "monotonic-stack"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Stack invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 85,
    title: "Maximal Rectangle",
    slug: "maximal-rectangle",
    difficulty: "Hard",
    patterns: [
    "monotonic-stack",
    "dp-2d-grid"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Stack invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 91,
    title: "Decode Ways",
    slug: "decode-ways",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 94,
    title: "Binary Tree Inorder Traversal",
    slug: "binary-tree-inorder-traversal",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 96,
    title: "Unique Binary Search Trees",
    slug: "unique-binary-search-trees",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 98,
    title: "Validate Binary Search Tree",
    slug: "validate-binary-search-tree",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 100,
    title: "Same Tree",
    slug: "same-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 101,
    title: "Symmetric Tree",
    slug: "symmetric-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 102,
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    difficulty: "Medium",
    patterns: [
    "bfs"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 103,
    title: "Binary Tree Zigzag Level Order Traversal",
    slug: "binary-tree-zigzag-level-order-traversal",
    difficulty: "Medium",
    patterns: [
    "bfs"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 104,
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-of-binary-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 105,
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    slug: "construct-binary-tree-from-preorder-and-inorder-traversal",
    difficulty: "Medium",
    patterns: [
    "dfs-tree",
    "divide-conquer"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 108,
    title: "Convert Sorted Array to Binary Search Tree",
    slug: "convert-sorted-array-to-binary-search-tree",
    difficulty: "Easy",
    patterns: [
    "divide-conquer"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Divide and Conquer invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Arrays/Hash"
  },
  {
    id: 110,
    title: "Balanced Binary Tree",
    slug: "balanced-binary-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 112,
    title: "Path Sum",
    slug: "path-sum",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 114,
    title: "Flatten Binary Tree to Linked List",
    slug: "flatten-binary-tree-to-linked-list",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 116,
    title: "Populating Next Right Pointers in Each Node",
    slug: "populating-next-right-pointers-in-each-node",
    difficulty: "Medium",
    patterns: [
    "bfs"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-and-sell-stock",
    difficulty: "Easy",
    patterns: [
    "kadanes-algorithm"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 11,
    unlockHint: "Look for the Kadane's Algorithm invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "DP"
  },
  {
    id: 122,
    title: "Best Time to Buy and Sell Stock II",
    slug: "best-time-to-buy-and-sell-stock-ii",
    difficulty: "Medium",
    patterns: [
    "greedy"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 124,
    title: "Binary Tree Maximum Path Sum",
    slug: "binary-tree-maximum-path-sum",
    difficulty: "Hard",
    patterns: [
    "dfs-tree",
    "dp-trees"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 125,
    title: "Valid Palindrome",
    slug: "valid-palindrome",
    difficulty: "Easy",
    patterns: [
    "two-pointers"
  ],
    frequency: "Very High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 127,
    title: "Word Ladder",
    slug: "word-ladder",
    difficulty: "Hard",
    patterns: [
    "bfs"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 128,
    title: "Longest Consecutive Sequence",
    slug: "longest-consecutive-sequence",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency",
    "union-find"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 129,
    title: "Sum Root to Leaf Numbers",
    slug: "sum-root-to-leaf-numbers",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Very High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 133,
    title: "Clone Graph",
    slug: "clone-graph",
    difficulty: "Medium",
    patterns: [
    "dfs-graph",
    "bfs"
  ],
    frequency: "Very High",
    companies: [
    "Google",
    "Razorpay",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 9,
    unlockHint: "Look for the DFS on Graphs invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 138,
    title: "Copy List with Random Pointer",
    slug: "copy-list-with-random-pointer",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "Very High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 139,
    title: "Word Break",
    slug: "word-break",
    difficulty: "Medium",
    patterns: [
    "dp-strings"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 140,
    title: "Word Break II",
    slug: "word-break-ii",
    difficulty: "Hard",
    patterns: [
    "dp-strings",
    "recursion-backtracking"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 141,
    title: "Linked List Cycle",
    slug: "linked-list-cycle",
    difficulty: "Easy",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 143,
    title: "Reorder List",
    slug: "reorder-list",
    difficulty: "Medium",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 146,
    title: "LRU Cache",
    slug: "lru-cache",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 150,
    title: "Evaluate Reverse Polish Notation",
    slug: "evaluate-reverse-polish-notation",
    difficulty: "Medium",
    patterns: [
    "stack-basic"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 4,
    unlockHint: "Look for the Stack Basics invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 152,
    title: "Maximum Product Subarray",
    slug: "maximum-product-subarray",
    difficulty: "Medium",
    patterns: [
    "kadanes-algorithm",
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the Kadane's Algorithm invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 153,
    title: "Find Minimum in Rotated Sorted Array",
    slug: "find-minimum-in-rotated-sorted-array",
    difficulty: "Medium",
    patterns: [
    "binary-search"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 155,
    title: "Min Stack",
    slug: "min-stack",
    difficulty: "Medium",
    patterns: [
    "stack-basic"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 4,
    unlockHint: "Look for the Stack Basics invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 167,
    title: "Two Sum II - Input Array Is Sorted",
    slug: "two-sum-ii-input-array-is-sorted",
    difficulty: "Medium",
    patterns: [
    "two-pointers"
  ],
    frequency: "High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 169,
    title: "Majority Element",
    slug: "majority-element",
    difficulty: "Easy",
    patterns: [
    "greedy"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Greedy"
  },
  {
    id: 190,
    title: "Reverse Bits",
    slug: "reverse-bits",
    difficulty: "Easy",
    patterns: [
    "bit-manipulation"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Bit Manipulation invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Math/Bits"
  },
  {
    id: 191,
    title: "Number of 1 Bits",
    slug: "number-of-1-bits",
    difficulty: "Easy",
    patterns: [
    "bit-manipulation"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Bit Manipulation invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Math/Bits"
  },
  {
    id: 198,
    title: "House Robber",
    slug: "house-robber",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 199,
    title: "Binary Tree Right Side View",
    slug: "binary-tree-right-side-view",
    difficulty: "Medium",
    patterns: [
    "bfs",
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 200,
    title: "Number of Islands",
    slug: "number-of-islands",
    difficulty: "Medium",
    patterns: [
    "dfs-graph",
    "bfs"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Razorpay",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 9,
    unlockHint: "Look for the DFS on Graphs invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 206,
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "Easy",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 207,
    title: "Course Schedule",
    slug: "course-schedule",
    difficulty: "Medium",
    patterns: [
    "topological-sort"
  ],
    frequency: "High",
    companies: [
    "Atlassian",
    "Google",
    "Razorpay"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 10,
    unlockHint: "Look for the Topological Sort invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 208,
    title: "Implement Trie (Prefix Tree)",
    slug: "implement-trie-prefix-tree",
    difficulty: "Medium",
    patterns: [
    "tries"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 14,
    unlockHint: "Look for the Tries invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 210,
    title: "Course Schedule II",
    slug: "course-schedule-ii",
    difficulty: "Medium",
    patterns: [
    "topological-sort"
  ],
    frequency: "High",
    companies: [
    "Atlassian",
    "Google",
    "Razorpay"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 10,
    unlockHint: "Look for the Topological Sort invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 211,
    title: "Design Add and Search Words Data Structure",
    slug: "design-add-and-search-words-data-structure",
    difficulty: "Medium",
    patterns: [
    "tries"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Tries invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 212,
    title: "Word Search II",
    slug: "word-search-ii",
    difficulty: "Hard",
    patterns: [
    "tries",
    "recursion-backtracking"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Tries invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 213,
    title: "House Robber II",
    slug: "house-robber-ii",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 215,
    title: "Kth Largest Element in an Array",
    slug: "kth-largest-element-in-an-array",
    difficulty: "Medium",
    patterns: [
    "heaps"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 7,
    unlockHint: "Look for the Heaps invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 217,
    title: "Contains Duplicate",
    slug: "contains-duplicate",
    difficulty: "Easy",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Arrays/Hash"
  },
  {
    id: 224,
    title: "Basic Calculator",
    slug: "basic-calculator",
    difficulty: "Hard",
    patterns: [
    "stack-basic"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 4,
    unlockHint: "Look for the Stack Basics invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 226,
    title: "Invert Binary Tree",
    slug: "invert-binary-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 227,
    title: "Basic Calculator II",
    slug: "basic-calculator-ii",
    difficulty: "Medium",
    patterns: [
    "stack-basic"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 4,
    unlockHint: "Look for the Stack Basics invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 230,
    title: "Kth Smallest Element in a BST",
    slug: "kth-smallest-element-in-a-bst",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 235,
    title: "Lowest Common Ancestor of a Binary Search Tree",
    slug: "lowest-common-ancestor-of-a-binary-search-tree",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 236,
    title: "Lowest Common Ancestor of a Binary Tree",
    slug: "lowest-common-ancestor-of-a-binary-tree",
    difficulty: "Medium",
    patterns: [
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 238,
    title: "Product of Array Except Self",
    slug: "product-of-array-except-self",
    difficulty: "Medium",
    patterns: [
    "prefix-sum"
  ],
    frequency: "High",
    companies: [
    "Meta",
    "Amazon",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Prefix Sum invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 239,
    title: "Sliding Window Maximum",
    slug: "sliding-window-maximum",
    difficulty: "Hard",
    patterns: [
    "monotonic-deque"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Zepto",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Deque invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 240,
    title: "Search a 2D Matrix II",
    slug: "search-a-2d-matrix-ii",
    difficulty: "Medium",
    patterns: [
    "binary-search"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 242,
    title: "Valid Anagram",
    slug: "valid-anagram",
    difficulty: "Easy",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Arrays/Hash"
  },
  {
    id: 261,
    title: "Graph Valid Tree",
    slug: "graph-valid-tree",
    difficulty: "Medium",
    patterns: [
    "union-find"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 10,
    unlockHint: "Look for the Union Find invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 268,
    title: "Missing Number",
    slug: "missing-number",
    difficulty: "Easy",
    patterns: [
    "bit-manipulation"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Bit Manipulation invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Math/Bits"
  },
  {
    id: 269,
    title: "Alien Dictionary",
    slug: "alien-dictionary",
    difficulty: "Hard",
    patterns: [
    "topological-sort"
  ],
    frequency: "High",
    companies: [
    "Atlassian",
    "Google",
    "Razorpay"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 10,
    unlockHint: "Look for the Topological Sort invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 279,
    title: "Perfect Squares",
    slug: "perfect-squares",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 283,
    title: "Move Zeroes",
    slug: "move-zeroes",
    difficulty: "Easy",
    patterns: [
    "two-pointers"
  ],
    frequency: "High",
    companies: [
    "Meta",
    "Google",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Two Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 287,
    title: "Find the Duplicate Number",
    slug: "find-the-duplicate-number",
    difficulty: "Medium",
    patterns: [
    "fast-slow-pointers",
    "binary-search"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 289,
    title: "Game of Life",
    slug: "game-of-life",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 295,
    title: "Find Median from Data Stream",
    slug: "find-median-from-data-stream",
    difficulty: "Hard",
    patterns: [
    "two-heap"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 7,
    unlockHint: "Look for the Two Heap invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Stack/Queue"
  },
  {
    id: 297,
    title: "Serialize and Deserialize Binary Tree",
    slug: "serialize-and-deserialize-binary-tree",
    difficulty: "Hard",
    patterns: [
    "dfs-tree"
  ],
    frequency: "High",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 300,
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    difficulty: "Medium",
    patterns: [
    "dp-1d",
    "binary-search"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 301,
    title: "Remove Invalid Parentheses",
    slug: "remove-invalid-parentheses",
    difficulty: "Hard",
    patterns: [
    "recursion-backtracking"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 8,
    unlockHint: "Look for the Recursion & Backtracking invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 309,
    title: "Best Time to Buy and Sell Stock with Cooldown",
    slug: "best-time-to-buy-and-sell-stock-with-cooldown",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 312,
    title: "Burst Balloons",
    slug: "burst-balloons",
    difficulty: "Hard",
    patterns: [
    "dp-2d-grid"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 12,
    unlockHint: "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 322,
    title: "Coin Change",
    slug: "coin-change",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 329,
    title: "Longest Increasing Path in a Matrix",
    slug: "longest-increasing-path-in-a-matrix",
    difficulty: "Hard",
    patterns: [
    "dp-2d-grid",
    "dfs-graph"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 12,
    unlockHint: "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 338,
    title: "Counting Bits",
    slug: "counting-bits",
    difficulty: "Easy",
    patterns: [
    "bit-manipulation"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Bit Manipulation invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Math/Bits"
  },
  {
    id: 347,
    title: "Top K Frequent Elements",
    slug: "top-k-frequent-elements",
    difficulty: "Medium",
    patterns: [
    "heaps",
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Google",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 7,
    unlockHint: "Look for the Heaps invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 378,
    title: "Kth Smallest Element in a Sorted Matrix",
    slug: "kth-smallest-element-in-a-sorted-matrix",
    difficulty: "Medium",
    patterns: [
    "binary-search",
    "heaps"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 380,
    title: "Insert Delete GetRandom O(1)",
    slug: "insert-delete-getrandom-o1",
    difficulty: "Medium",
    patterns: [
    "hashmap-frequency"
  ],
    frequency: "High",
    companies: [
    "Amazon",
    "Meta",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 1,
    unlockHint: "Look for the HashMap Frequency invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 416,
    title: "Partition Equal Subset Sum",
    slug: "partition-equal-subset-sum",
    difficulty: "Medium",
    patterns: [
    "dp-knapsack"
  ],
    frequency: "High",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 15,
    unlockHint: "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 424,
    title: "Longest Repeating Character Replacement",
    slug: "longest-repeating-character-replacement",
    difficulty: "Medium",
    patterns: [
    "sliding-window"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 435,
    title: "Non-overlapping Intervals",
    slug: "non-overlapping-intervals",
    difficulty: "Medium",
    patterns: [
    "merge-intervals",
    "greedy"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the Merge Intervals invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 437,
    title: "Path Sum III",
    slug: "path-sum-iii",
    difficulty: "Medium",
    patterns: [
    "dfs-tree",
    "prefix-sum"
  ],
    frequency: "Medium",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 494,
    title: "Target Sum",
    slug: "target-sum",
    difficulty: "Medium",
    patterns: [
    "dp-knapsack"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 518,
    title: "Coin Change II",
    slug: "coin-change-ii",
    difficulty: "Medium",
    patterns: [
    "dp-knapsack"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Adobe",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 15,
    unlockHint: "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 525,
    title: "Contiguous Array",
    slug: "contiguous-array",
    difficulty: "Medium",
    patterns: [
    "prefix-sum"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Google"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 3,
    unlockHint: "Look for the Prefix Sum invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 543,
    title: "Diameter of Binary Tree",
    slug: "diameter-of-binary-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Medium",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 560,
    title: "Subarray Sum Equals K",
    slug: "subarray-sum-equals-k",
    difficulty: "Medium",
    patterns: [
    "prefix-sum"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Google"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 3,
    unlockHint: "Look for the Prefix Sum invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Arrays/Hash"
  },
  {
    id: 567,
    title: "Permutation in String",
    slug: "permutation-in-string",
    difficulty: "Medium",
    patterns: [
    "sliding-window"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 572,
    title: "Subtree of Another Tree",
    slug: "subtree-of-another-tree",
    difficulty: "Easy",
    patterns: [
    "dfs-tree"
  ],
    frequency: "Medium",
    companies: [
    "Microsoft",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the DFS on Trees invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Trees/Graphs"
  },
  {
    id: 621,
    title: "Task Scheduler",
    slug: "task-scheduler",
    difficulty: "Medium",
    patterns: [
    "greedy",
    "heaps"
  ],
    frequency: "Medium",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 647,
    title: "Palindromic Substrings",
    slug: "palindromic-substrings",
    difficulty: "Medium",
    patterns: [
    "dp-strings"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 684,
    title: "Redundant Connection",
    slug: "redundant-connection",
    difficulty: "Medium",
    patterns: [
    "union-find"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Amazon",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 10,
    unlockHint: "Look for the Union Find invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 695,
    title: "Max Area of Island",
    slug: "max-area-of-island",
    difficulty: "Medium",
    patterns: [
    "dfs-graph"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Razorpay",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: false,
    weekInRoadmap: 9,
    unlockHint: "Look for the DFS on Graphs invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 721,
    title: "Accounts Merge",
    slug: "accounts-merge",
    difficulty: "Medium",
    patterns: [
    "union-find"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Amazon",
    "Flipkart"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 10,
    unlockHint: "Look for the Union Find invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 739,
    title: "Daily Temperatures",
    slug: "daily-temperatures",
    difficulty: "Medium",
    patterns: [
    "monotonic-stack"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: true,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Stack invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 743,
    title: "Network Delay Time",
    slug: "network-delay-time",
    difficulty: "Medium",
    patterns: [
    "heaps",
    "bfs"
  ],
    frequency: "Medium",
    companies: [
    "Amazon",
    "Google",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 7,
    unlockHint: "Look for the Heaps invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 763,
    title: "Partition Labels",
    slug: "partition-labels",
    difficulty: "Medium",
    patterns: [
    "greedy"
  ],
    frequency: "Medium",
    companies: [
    "Amazon",
    "Meta",
    "Zepto"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 14,
    unlockHint: "Look for the Greedy invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Greedy"
  },
  {
    id: 787,
    title: "Cheapest Flights Within K Stops",
    slug: "cheapest-flights-within-k-stops",
    difficulty: "Medium",
    patterns: [
    "bfs",
    "dp-1d"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 853,
    title: "Car Fleet",
    slug: "car-fleet",
    difficulty: "Medium",
    patterns: [
    "monotonic-stack"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Amazon",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Stack invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 875,
    title: "Koko Eating Bananas",
    slug: "koko-eating-bananas",
    difficulty: "Medium",
    patterns: [
    "binary-search-on-answer"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Flipkart",
    "Razorpay"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search on Answer invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 876,
    title: "Middle of the Linked List",
    slug: "middle-of-the-linked-list",
    difficulty: "Easy",
    patterns: [
    "fast-slow-pointers"
  ],
    frequency: "Medium",
    companies: [
    "Amazon",
    "Microsoft",
    "Meta"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 5,
    unlockHint: "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    estimatedMinutes: 10,
    category: "Pointers"
  },
  {
    id: 904,
    title: "Fruit Into Baskets",
    slug: "fruit-into-baskets",
    difficulty: "Medium",
    patterns: [
    "sliding-window"
  ],
    frequency: "Medium",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 934,
    title: "Shortest Bridge",
    slug: "shortest-bridge",
    difficulty: "Medium",
    patterns: [
    "bfs",
    "dfs-graph"
  ],
    frequency: "Medium",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 983,
    title: "Minimum Cost For Tickets",
    slug: "minimum-cost-for-tickets",
    difficulty: "Medium",
    patterns: [
    "dp-1d"
  ],
    frequency: "Medium",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 994,
    title: "Rotting Oranges",
    slug: "rotting-oranges",
    difficulty: "Medium",
    patterns: [
    "bfs"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Trees/Graphs"
  },
  {
    id: 1004,
    title: "Max Consecutive Ones III",
    slug: "max-consecutive-ones-iii",
    difficulty: "Medium",
    patterns: [
    "sliding-window"
  ],
    frequency: "Niche",
    companies: [
    "Meta",
    "Amazon",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 2,
    unlockHint: "Look for the Sliding Window invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Pointers"
  },
  {
    id: 1011,
    title: "Capacity To Ship Packages Within D Days",
    slug: "capacity-to-ship-packages-within-d-days",
    difficulty: "Medium",
    patterns: [
    "binary-search-on-answer"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Flipkart",
    "Razorpay"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 3,
    unlockHint: "Look for the Binary Search on Answer invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Binary Search"
  },
  {
    id: 1143,
    title: "Longest Common Subsequence",
    slug: "longest-common-subsequence",
    difficulty: "Medium",
    patterns: [
    "dp-strings"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: true,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "DP"
  },
  {
    id: 1235,
    title: "Maximum Profit in Job Scheduling",
    slug: "maximum-profit-in-job-scheduling",
    difficulty: "Hard",
    patterns: [
    "dp-1d",
    "binary-search"
  ],
    frequency: "Niche",
    companies: [
    "Amazon",
    "Google",
    "Flipkart"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 11,
    unlockHint: "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 1312,
    title: "Minimum Insertion Steps to Make a String Palindrome",
    slug: "minimum-insertion-steps-to-make-a-string-palindrome",
    difficulty: "Hard",
    patterns: [
    "dp-strings"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Adobe",
    "Microsoft"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 13,
    unlockHint: "Look for the String Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 1335,
    title: "Minimum Difficulty of a Job Schedule",
    slug: "minimum-difficulty-of-a-job-schedule",
    difficulty: "Hard",
    patterns: [
    "dp-2d-grid"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Microsoft",
    "Adobe"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 12,
    unlockHint: "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "DP"
  },
  {
    id: 1345,
    title: "Jump Game IV",
    slug: "jump-game-iv",
    difficulty: "Hard",
    patterns: [
    "bfs"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Microsoft",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: false,
    weekInRoadmap: 6,
    unlockHint: "Look for the Breadth-First Search invariant before choosing data structures.",
    estimatedMinutes: 30,
    category: "Trees/Graphs"
  },
  {
    id: 1438,
    title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
    slug: "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    difficulty: "Medium",
    patterns: [
    "monotonic-deque"
  ],
    frequency: "Niche",
    companies: [
    "Google",
    "Zepto",
    "Amazon"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 4,
    unlockHint: "Look for the Monotonic Deque invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  },
  {
    id: 1514,
    title: "Path with Maximum Probability",
    slug: "path-with-maximum-probability",
    difficulty: "Medium",
    patterns: [
    "heaps",
    "dfs-graph"
  ],
    frequency: "Niche",
    companies: [
    "Amazon",
    "Google",
    "Zepto"
  ],
    isNeetCode150: false,
    isBlind75: false,
    isIndianUnicorn: true,
    weekInRoadmap: 7,
    unlockHint: "Look for the Heaps invariant before choosing data structures.",
    estimatedMinutes: 20,
    category: "Stack/Queue"
  }
];

export const problems = PROBLEMS;
export const problemById = Object.fromEntries(PROBLEMS.map((problem) => [problem.id, problem])) as Record<number, Problem>;
