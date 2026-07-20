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
  isStriverA2Z: boolean;
  weekInRoadmap: number;
  unlockHint: string;
  estimatedMinutes: 5 | 10 | 15 | 20 | 30;
  category: PatternCategory | string;
  source?: string;
};

export const PROBLEMS: Problem[] = [
  {
    "id": 1,
    "title": "Two Sum",
    "slug": "two-sum",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 2,
    "title": "Add Two Numbers",
    "slug": "add-two-numbers",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 3,
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 4,
    "title": "Median of Two Sorted Arrays",
    "slug": "median-of-two-sorted-arrays",
    "difficulty": "Hard",
    "patterns": [
      "divide-conquer",
      "binary-search"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Divide and Conquer invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 5,
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 7,
    "title": "Reverse a number",
    "slug": "reverse-integer",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 8,
    "title": "String to Integer (atoi)",
    "slug": "string-to-integer-atoi",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 9,
    "title": "Palindrome Number",
    "slug": "palindrome-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 10,
    "title": "Regular Expression Matching",
    "slug": "regular-expression-matching",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 11,
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 13,
    "title": "Roman to Integer",
    "slug": "roman-to-integer",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 14,
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 15,
    "title": "3Sum",
    "slug": "3sum",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 17,
    "title": "Letter Combinations of a Phone Number",
    "slug": "letter-combinations-of-a-phone-number",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 18,
    "title": "4 Sum",
    "slug": "4sum",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 19,
    "title": "Remove Nth Node From End of List",
    "slug": "remove-nth-node-from-end-of-list",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20,
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Stack Basics invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21,
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "difficulty": "Easy",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 22,
    "title": "Generate Parentheses",
    "slug": "generate-parentheses",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 23,
    "title": "Merge k Sorted Lists",
    "slug": "merge-k-sorted-lists",
    "difficulty": "Hard",
    "patterns": [
      "heaps",
      "divide-conquer"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Google",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Heaps invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 24,
    "title": "Swap Nodes in Pairs",
    "slug": "swap-nodes-in-pairs",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 25,
    "title": "Reverse Nodes in k-Group",
    "slug": "reverse-nodes-in-k-group",
    "difficulty": "Hard",
    "patterns": [
      "fast-slow-pointers",
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 26,
    "title": "Remove duplicates from Sorted array",
    "slug": "remove-duplicates-from-sorted-array",
    "difficulty": "Easy",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 29,
    "title": "Divide two numbers without multiplication and division",
    "slug": "divide-two-integers",
    "difficulty": "Medium",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 31,
    "title": "Next Permutation",
    "slug": "next-permutation",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 33,
    "title": "Search in Rotated Sorted Array",
    "slug": "search-in-rotated-sorted-array",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 34,
    "title": "Find First and Last Position of Element in Sorted Array",
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 35,
    "title": "Search Insert Position",
    "slug": "search-insert-position",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 36,
    "title": "Valid Sudoku",
    "slug": "valid-sudoku",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 37,
    "title": "Sudoku Solver",
    "slug": "sudoku-solver",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 38,
    "title": "Count and say",
    "slug": "count-and-say",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 39,
    "title": "Combination Sum",
    "slug": "combination-sum",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 40,
    "title": "Combination Sum II",
    "slug": "combination-sum-ii",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 42,
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "difficulty": "Hard",
    "patterns": [
      "monotonic-stack",
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Stack invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 44,
    "title": "Wildcard matching",
    "slug": "wildcard-matching",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 45,
    "title": "Jump Game II",
    "slug": "jump-game-ii",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 46,
    "title": "Permutations",
    "slug": "permutations",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 48,
    "title": "Rotate Image",
    "slug": "rotate-image",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 49,
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 50,
    "title": "Pow(x, n)",
    "slug": "powx-n",
    "difficulty": "Easy",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 51,
    "title": "N-Queens",
    "slug": "n-queens",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 53,
    "title": "Maximum Subarray",
    "slug": "maximum-subarray",
    "difficulty": "Medium",
    "patterns": [
      "kadanes-algorithm"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the Kadane's Algorithm invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 54,
    "title": "Spiral Matrix",
    "slug": "spiral-matrix",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 55,
    "title": "Jump Game",
    "slug": "jump-game",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 56,
    "title": "Merge Intervals",
    "slug": "merge-intervals",
    "difficulty": "Medium",
    "patterns": [
      "merge-intervals"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the Merge Intervals invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 57,
    "title": "Insert Interval",
    "slug": "insert-interval",
    "difficulty": "Medium",
    "patterns": [
      "merge-intervals"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the Merge Intervals invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 61,
    "title": "Rotate a LL",
    "slug": "rotate-list",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 62,
    "title": "Unique Paths",
    "slug": "unique-paths",
    "difficulty": "Medium",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 63,
    "title": "Unique paths II",
    "slug": "unique-paths-ii",
    "difficulty": "Medium",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 64,
    "title": "Minimum Path Sum",
    "slug": "minimum-path-sum",
    "difficulty": "Medium",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 70,
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "difficulty": "Easy",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 72,
    "title": "Edit Distance",
    "slug": "edit-distance",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 73,
    "title": "Set Matrix Zeroes",
    "slug": "set-matrix-zeroes",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 74,
    "title": "Search a 2D Matrix",
    "slug": "search-a-2d-matrix",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 75,
    "title": "Sort Colors",
    "slug": "sort-colors",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 76,
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 78,
    "title": "Subsets",
    "slug": "subsets",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 79,
    "title": "Word Search",
    "slug": "word-search",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking",
      "dfs-graph"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 81,
    "title": "Search in rotated sorted array-II",
    "slug": "search-in-rotated-sorted-array-ii",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 84,
    "title": "Largest Rectangle in Histogram",
    "slug": "largest-rectangle-in-histogram",
    "difficulty": "Hard",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Stack invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 85,
    "title": "Maximal Rectangle",
    "slug": "maximal-rectangle",
    "difficulty": "Hard",
    "patterns": [
      "monotonic-stack",
      "dp-2d-grid"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Stack invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 88,
    "title": "Merge two sorted arrays without extra space",
    "slug": "merge-sorted-array",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 90,
    "title": "Subsets II",
    "slug": "subsets-ii",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 91,
    "title": "Decode Ways",
    "slug": "decode-ways",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 94,
    "title": "Binary Tree Inorder Traversal",
    "slug": "binary-tree-inorder-traversal",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 96,
    "title": "Unique Binary Search Trees",
    "slug": "unique-binary-search-trees",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 98,
    "title": "Validate Binary Search Tree",
    "slug": "validate-binary-search-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 99,
    "title": "Correct BST with two nodes swapped",
    "slug": "recover-binary-search-tree",
    "difficulty": "Hard",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 100,
    "title": "Same Tree",
    "slug": "same-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 101,
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 102,
    "title": "Binary Tree Level Order Traversal",
    "slug": "binary-tree-level-order-traversal",
    "difficulty": "Medium",
    "patterns": [
      "bfs"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 103,
    "title": "Binary Tree Zigzag Level Order Traversal",
    "slug": "binary-tree-zigzag-level-order-traversal",
    "difficulty": "Medium",
    "patterns": [
      "bfs"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 104,
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 105,
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "divide-conquer"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 106,
    "title": "Construct the Binary Tree from Postorder and Inorder Traversal",
    "slug": "construct-binary-tree-from-inorder-and-postorder-traversal",
    "difficulty": "Hard",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 108,
    "title": "Convert Sorted Array to Binary Search Tree",
    "slug": "convert-sorted-array-to-binary-search-tree",
    "difficulty": "Easy",
    "patterns": [
      "divide-conquer"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Divide and Conquer invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 110,
    "title": "Balanced Binary Tree",
    "slug": "balanced-binary-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 112,
    "title": "Path Sum",
    "slug": "path-sum",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 114,
    "title": "Flatten Binary Tree to Linked List",
    "slug": "flatten-binary-tree-to-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 115,
    "title": "Distinct subsequences",
    "slug": "distinct-subsequences",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 116,
    "title": "Populating Next Right Pointers in Each Node",
    "slug": "populating-next-right-pointers-in-each-node",
    "difficulty": "Medium",
    "patterns": [
      "bfs"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 118,
    "title": "Pascal's Triangle I",
    "slug": "pascals-triangle",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 120,
    "title": "Triangle",
    "slug": "triangle",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 121,
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "Easy",
    "patterns": [
      "kadanes-algorithm"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the Kadane's Algorithm invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 122,
    "title": "Best Time to Buy and Sell Stock II",
    "slug": "best-time-to-buy-and-sell-stock-ii",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 123,
    "title": "Best time to buy and sell stock III",
    "slug": "best-time-to-buy-and-sell-stock-iii",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 124,
    "title": "Binary Tree Maximum Path Sum",
    "slug": "binary-tree-maximum-path-sum",
    "difficulty": "Hard",
    "patterns": [
      "dfs-tree",
      "dp-trees"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 125,
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "difficulty": "Easy",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Very High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 126,
    "title": "Word ladder II",
    "slug": "word-ladder-ii",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 127,
    "title": "Word Ladder",
    "slug": "word-ladder",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 128,
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency",
      "union-find"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 129,
    "title": "Sum Root to Leaf Numbers",
    "slug": "sum-root-to-leaf-numbers",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Very High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 130,
    "title": "Surrounded Regions",
    "slug": "surrounded-regions",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 132,
    "title": "Palindrome partitioning II ",
    "slug": "palindrome-partitioning-ii",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 133,
    "title": "Clone Graph",
    "slug": "clone-graph",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph",
      "bfs"
    ],
    "frequency": "Very High",
    "companies": [
      "Google",
      "Razorpay",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Look for the DFS on Graphs invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 135,
    "title": "Candy",
    "slug": "candy",
    "difficulty": "Hard",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 136,
    "title": "Find the number that appears once, and other numbers twice.",
    "slug": "single-number",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 138,
    "title": "Copy List with Random Pointer",
    "slug": "copy-list-with-random-pointer",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Very High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 139,
    "title": "Word Break",
    "slug": "word-break",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 140,
    "title": "Word Break II",
    "slug": "word-break-ii",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings",
      "recursion-backtracking"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 141,
    "title": "Linked List Cycle",
    "slug": "linked-list-cycle",
    "difficulty": "Easy",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 142,
    "title": "Find the starting point in LL",
    "slug": "linked-list-cycle-ii",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 143,
    "title": "Reorder List",
    "slug": "reorder-list",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 144,
    "title": "Preorder Traversal",
    "slug": "binary-tree-preorder-traversal",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 145,
    "title": "Postorder Traversal",
    "slug": "binary-tree-postorder-traversal",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 146,
    "title": "LRU Cache",
    "slug": "lru-cache",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 148,
    "title": "Sort LL",
    "slug": "sort-list",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 150,
    "title": "Evaluate Reverse Polish Notation",
    "slug": "evaluate-reverse-polish-notation",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Stack Basics invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 151,
    "title": "Reverse words in a given string / Palindrome Check",
    "slug": "reverse-words-in-a-string",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 152,
    "title": "Maximum Product Subarray",
    "slug": "maximum-product-subarray",
    "difficulty": "Medium",
    "patterns": [
      "kadanes-algorithm",
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the Kadane's Algorithm invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 153,
    "title": "Find Minimum in Rotated Sorted Array",
    "slug": "find-minimum-in-rotated-sorted-array",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 155,
    "title": "Min Stack",
    "slug": "min-stack",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Stack Basics invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 160,
    "title": "Find the intersection point of Y LL",
    "slug": "intersection-of-two-linked-lists",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 162,
    "title": "Find peak element",
    "slug": "find-peak-element",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 167,
    "title": "Two Sum II - Input Array Is Sorted",
    "slug": "two-sum-ii-input-array-is-sorted",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 169,
    "title": "Majority Element",
    "slug": "majority-element",
    "difficulty": "Easy",
    "patterns": [
      "greedy"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 173,
    "title": "Merge 2 BST's",
    "slug": "binary-search-tree-iterator",
    "difficulty": "Hard",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 188,
    "title": "Best time to buy and sell stock IV",
    "slug": "best-time-to-buy-and-sell-stock-iv",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 189,
    "title": "Left Rotate Array by One",
    "slug": "rotate-array",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 190,
    "title": "Reverse Bits",
    "slug": "reverse-bits",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Bit Manipulation invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Math/Bits",
    "isStriverA2Z": false
  },
  {
    "id": 191,
    "title": "Number of 1 Bits",
    "slug": "number-of-1-bits",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Bit Manipulation invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Math/Bits",
    "isStriverA2Z": false
  },
  {
    "id": 198,
    "title": "House Robber",
    "slug": "house-robber",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 199,
    "title": "Binary Tree Right Side View",
    "slug": "binary-tree-right-side-view",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 200,
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph",
      "bfs"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Razorpay",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 9,
    "unlockHint": "Look for the DFS on Graphs invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 204,
    "title": "Count primes in range L to R",
    "slug": "count-primes",
    "difficulty": "Hard",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 205,
    "title": "Isomorphic String",
    "slug": "isomorphic-strings",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 206,
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 207,
    "title": "Course Schedule",
    "slug": "course-schedule",
    "difficulty": "Medium",
    "patterns": [
      "topological-sort"
    ],
    "frequency": "High",
    "companies": [
      "Atlassian",
      "Google",
      "Razorpay"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Topological Sort invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 208,
    "title": "Implement Trie (Prefix Tree)",
    "slug": "implement-trie-prefix-tree",
    "difficulty": "Medium",
    "patterns": [
      "tries"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Tries invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 210,
    "title": "Course Schedule II",
    "slug": "course-schedule-ii",
    "difficulty": "Medium",
    "patterns": [
      "topological-sort"
    ],
    "frequency": "High",
    "companies": [
      "Atlassian",
      "Google",
      "Razorpay"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Topological Sort invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 211,
    "title": "Design Add and Search Words Data Structure",
    "slug": "design-add-and-search-words-data-structure",
    "difficulty": "Medium",
    "patterns": [
      "tries"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Tries invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 212,
    "title": "Word Search II",
    "slug": "word-search-ii",
    "difficulty": "Hard",
    "patterns": [
      "tries",
      "recursion-backtracking"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Tries invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 213,
    "title": "House Robber II",
    "slug": "house-robber-ii",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 215,
    "title": "Kth Largest Element in an Array",
    "slug": "kth-largest-element-in-an-array",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Heaps invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 216,
    "title": "Combination Sum III",
    "slug": "combination-sum-iii",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 217,
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 222,
    "title": "Count total nodes in a complete BT",
    "slug": "count-complete-tree-nodes",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 224,
    "title": "Basic Calculator",
    "slug": "basic-calculator",
    "difficulty": "Hard",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Stack Basics invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 225,
    "title": "Implement Stack using Queue",
    "slug": "implement-stack-using-queues",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 226,
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 227,
    "title": "Basic Calculator II",
    "slug": "basic-calculator-ii",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Stack Basics invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 229,
    "title": "Majority Element-II",
    "slug": "majority-element-ii",
    "difficulty": "Hard",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 230,
    "title": "Kth Smallest Element in a BST",
    "slug": "kth-smallest-element-in-a-bst",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 231,
    "title": "Check if a Number is Power of 2 or Not",
    "slug": "power-of-two",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 232,
    "title": "Implement Queue using Stack",
    "slug": "implement-queue-using-stacks",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 234,
    "title": "Check if LL is palindrome or not",
    "slug": "palindrome-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 235,
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 236,
    "title": "Lowest Common Ancestor of a Binary Tree",
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 237,
    "title": "Deletion of the head of LL",
    "slug": "delete-node-in-a-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 238,
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "difficulty": "Medium",
    "patterns": [
      "prefix-sum"
    ],
    "frequency": "High",
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Prefix Sum invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 239,
    "title": "Sliding Window Maximum",
    "slug": "sliding-window-maximum",
    "difficulty": "Hard",
    "patterns": [
      "monotonic-deque"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Zepto",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Deque invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 240,
    "title": "Search a 2D Matrix II",
    "slug": "search-a-2d-matrix-ii",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 242,
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 261,
    "title": "Graph Valid Tree",
    "slug": "graph-valid-tree",
    "difficulty": "Medium",
    "patterns": [
      "union-find"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Union Find invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 268,
    "title": "Missing Number",
    "slug": "missing-number",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Bit Manipulation invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Math/Bits",
    "isStriverA2Z": false
  },
  {
    "id": 269,
    "title": "Alien Dictionary",
    "slug": "alien-dictionary",
    "difficulty": "Hard",
    "patterns": [
      "topological-sort"
    ],
    "frequency": "High",
    "companies": [
      "Atlassian",
      "Google",
      "Razorpay"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Topological Sort invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 279,
    "title": "Perfect Squares",
    "slug": "perfect-squares",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 282,
    "title": "Expression Add Operators",
    "slug": "expression-add-operators",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 283,
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "difficulty": "Easy",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "High",
    "companies": [
      "Meta",
      "Google",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Two Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 285,
    "title": "Inorder Successor/Predecessor in BST",
    "slug": "inorder-successor-in-bst",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 287,
    "title": "Find the Duplicate Number",
    "slug": "find-the-duplicate-number",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers",
      "binary-search"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 289,
    "title": "Game of Life",
    "slug": "game-of-life",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 295,
    "title": "Find Median from Data Stream",
    "slug": "find-median-from-data-stream",
    "difficulty": "Hard",
    "patterns": [
      "two-heap"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Two Heap invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 297,
    "title": "Serialize and Deserialize Binary Tree",
    "slug": "serialize-and-deserialize-binary-tree",
    "difficulty": "Hard",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "High",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 300,
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d",
      "binary-search"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 301,
    "title": "Remove Invalid Parentheses",
    "slug": "remove-invalid-parentheses",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Look for the Recursion & Backtracking invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 305,
    "title": "Number of islands II",
    "slug": "number-of-islands-ii",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 309,
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "slug": "best-time-to-buy-and-sell-stock-with-cooldown",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 312,
    "title": "Burst Balloons",
    "slug": "burst-balloons",
    "difficulty": "Hard",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 322,
    "title": "Coin Change",
    "slug": "coin-change",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 328,
    "title": "Segregate odd and even nodes in Linked List",
    "slug": "odd-even-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 329,
    "title": "Longest Increasing Path in a Matrix",
    "slug": "longest-increasing-path-in-a-matrix",
    "difficulty": "Hard",
    "patterns": [
      "dp-2d-grid",
      "dfs-graph"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 338,
    "title": "Counting Bits",
    "slug": "counting-bits",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Bit Manipulation invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Math/Bits",
    "isStriverA2Z": false
  },
  {
    "id": 340,
    "title": "Longest Substring With At Most K Distinct Characters",
    "slug": "longest-substring-with-at-most-k-distinct-characters",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 347,
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "difficulty": "Medium",
    "patterns": [
      "heaps",
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Google",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Heaps invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 355,
    "title": "Design Twitter",
    "slug": "design-twitter",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 368,
    "title": "Largest Divisible Subset",
    "slug": "largest-divisible-subset",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 378,
    "title": "Kth Smallest Element in a Sorted Matrix",
    "slug": "kth-smallest-element-in-a-sorted-matrix",
    "difficulty": "Medium",
    "patterns": [
      "binary-search",
      "heaps"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "isStriverA2Z": false
  },
  {
    "id": 380,
    "title": "Insert Delete GetRandom O(1)",
    "slug": "insert-delete-getrandom-o1",
    "difficulty": "Medium",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "High",
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 1,
    "unlockHint": "Look for the HashMap Frequency invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 402,
    "title": "Remove K Digits",
    "slug": "remove-k-digits",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 410,
    "title": "Split array - largest sum",
    "slug": "split-array-largest-sum",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 416,
    "title": "Partition Equal Subset Sum",
    "slug": "partition-equal-subset-sum",
    "difficulty": "Medium",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "High",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 421,
    "title": "Maximum XOR of two numbers in an array",
    "slug": "maximum-xor-of-two-numbers-in-an-array",
    "difficulty": "Hard",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 424,
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 435,
    "title": "Non-overlapping Intervals",
    "slug": "non-overlapping-intervals",
    "difficulty": "Medium",
    "patterns": [
      "merge-intervals",
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the Merge Intervals invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 437,
    "title": "Path Sum III",
    "slug": "path-sum-iii",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "prefix-sum"
    ],
    "frequency": "Medium",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 450,
    "title": "Delete a node in BST",
    "slug": "delete-node-in-a-bst",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 451,
    "title": "Sort Characters by Frequency",
    "slug": "sort-characters-by-frequency",
    "difficulty": "Easy",
    "patterns": [
      "hashmap-frequency"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 455,
    "title": "Assign Cookies",
    "slug": "assign-cookies",
    "difficulty": "Easy",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 460,
    "title": "LFU Cache",
    "slug": "lfu-cache",
    "difficulty": "Hard",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 485,
    "title": "Maximum Consecutive Ones",
    "slug": "max-consecutive-ones",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 493,
    "title": "Reverse Pairs",
    "slug": "reverse-pairs",
    "difficulty": "Hard",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 494,
    "title": "Target Sum",
    "slug": "target-sum",
    "difficulty": "Medium",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 496,
    "title": "Next Greater Element",
    "slug": "next-greater-element-i",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 503,
    "title": "Next Greater Element - 2",
    "slug": "next-greater-element-ii",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 509,
    "title": "Fibonacci Number",
    "slug": "fibonacci-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 516,
    "title": "Longest palindromic subsequence",
    "slug": "longest-palindromic-subsequence",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 518,
    "title": "Coin Change II",
    "slug": "coin-change-ii",
    "difficulty": "Medium",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Adobe",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Look for the Knapsack Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 525,
    "title": "Contiguous Array",
    "slug": "contiguous-array",
    "difficulty": "Medium",
    "patterns": [
      "prefix-sum"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Prefix Sum invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "isStriverA2Z": false
  },
  {
    "id": 540,
    "title": "Single element in a Sorted Array",
    "slug": "single-element-in-a-sorted-array",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 542,
    "title": "Distance of nearest cell having one",
    "slug": "01-matrix",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 543,
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Medium",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 545,
    "title": "Boundary Traversal",
    "slug": "boundary-of-binary-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 547,
    "title": "Number of provinces",
    "slug": "number-of-provinces",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 560,
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "difficulty": "Medium",
    "patterns": [
      "prefix-sum"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Prefix Sum invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 567,
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 572,
    "title": "Subtree of Another Tree",
    "slug": "subtree-of-another-tree",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree"
    ],
    "frequency": "Medium",
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the DFS on Trees invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 583,
    "title": "Minimum insertions or deletions to convert string A to B",
    "slug": "delete-operation-for-two-strings",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 621,
    "title": "Task Scheduler",
    "slug": "task-scheduler",
    "difficulty": "Medium",
    "patterns": [
      "greedy",
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 647,
    "title": "Palindromic Substrings",
    "slug": "palindromic-substrings",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 653,
    "title": "Two Sum In BST | Check if there exists a pair with Sum K",
    "slug": "two-sum-iv-input-is-a-bst",
    "difficulty": "Hard",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 662,
    "title": "Maximum Width of BT",
    "slug": "maximum-width-of-binary-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 673,
    "title": "Number of Longest Increasing Subsequences",
    "slug": "number-of-longest-increasing-subsequence",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 678,
    "title": "Valid Paranthesis Checker",
    "slug": "valid-parenthesis-string",
    "difficulty": "Hard",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 684,
    "title": "Redundant Connection",
    "slug": "redundant-connection",
    "difficulty": "Medium",
    "patterns": [
      "union-find"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Union Find invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 686,
    "title": "Rabin Karp Algorithm",
    "slug": "repeated-string-match",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 695,
    "title": "Max Area of Island",
    "slug": "max-area-of-island",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Razorpay",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Look for the DFS on Graphs invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 700,
    "title": "Search in a Binary Search Tree",
    "slug": "search-in-a-binary-search-tree",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 701,
    "title": "Insert a given node in BST",
    "slug": "insert-into-a-binary-search-tree",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 703,
    "title": "Kth largest element in a stream of running integers",
    "slug": "kth-largest-element-in-a-stream",
    "difficulty": "Hard",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 704,
    "title": "Search X in sorted array",
    "slug": "binary-search",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 714,
    "title": "Best time to buy and sell stock with transaction fees",
    "slug": "best-time-to-buy-and-sell-stock-with-transaction-fee",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 721,
    "title": "Accounts Merge",
    "slug": "accounts-merge",
    "difficulty": "Medium",
    "patterns": [
      "union-find"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Flipkart"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 10,
    "unlockHint": "Look for the Union Find invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 727,
    "title": "Minimum Window Subsequence",
    "slug": "minimum-window-subsequence",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 733,
    "title": "Flood fill algorithm",
    "slug": "flood-fill",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 735,
    "title": "Asteroid Collision",
    "slug": "asteroid-collision",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 739,
    "title": "Daily Temperatures",
    "slug": "daily-temperatures",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": true,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Stack invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 743,
    "title": "Network Delay Time",
    "slug": "network-delay-time",
    "difficulty": "Medium",
    "patterns": [
      "heaps",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Heaps invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 763,
    "title": "Partition Labels",
    "slug": "partition-labels",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Amazon",
      "Meta",
      "Zepto"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Look for the Greedy invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "isStriverA2Z": false
  },
  {
    "id": 774,
    "title": "Minimize Max Distance to Gas Station",
    "slug": "minimize-max-distance-to-gas-station",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 778,
    "title": "Swim in Rising Water",
    "slug": "swim-in-rising-water",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 785,
    "title": "Bipartite Graph (DFS)",
    "slug": "is-graph-bipartite",
    "difficulty": "Hard",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 787,
    "title": "Cheapest Flights Within K Stops",
    "slug": "cheapest-flights-within-k-stops",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 796,
    "title": "Rotate String",
    "slug": "rotate-string",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 802,
    "title": "Find eventual safe states",
    "slug": "find-eventual-safe-states",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 827,
    "title": "Making a large island",
    "slug": "making-a-large-island",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 846,
    "title": "Hand of Straights",
    "slug": "hand-of-straights",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 853,
    "title": "Car Fleet",
    "slug": "car-fleet",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Stack invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 860,
    "title": "Lemonade Change",
    "slug": "lemonade-change",
    "difficulty": "Easy",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 863,
    "title": "Print all nodes at a distance of K in BT",
    "slug": "all-nodes-distance-k-in-binary-tree",
    "difficulty": "Hard",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 875,
    "title": "Koko Eating Bananas",
    "slug": "koko-eating-bananas",
    "difficulty": "Medium",
    "patterns": [
      "binary-search-on-answer"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Flipkart",
      "Razorpay"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search on Answer invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 876,
    "title": "Middle of the Linked List",
    "slug": "middle-of-the-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Look for the Fast & Slow Pointers invariant before choosing data structures.",
    "estimatedMinutes": 10,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 901,
    "title": "Stock span problem",
    "slug": "online-stock-span",
    "difficulty": "Hard",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 904,
    "title": "Fruit Into Baskets",
    "slug": "fruit-into-baskets",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Medium",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "isStriverA2Z": false
  },
  {
    "id": 907,
    "title": "Sum of Subarray Minimums",
    "slug": "sum-of-subarray-minimums",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 921,
    "title": "Minimum number of bracket reversals to make an expression balanced",
    "slug": "minimum-add-to-make-parentheses-valid",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 930,
    "title": "Binary Subarrays With Sum",
    "slug": "binary-subarrays-with-sum",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 934,
    "title": "Shortest Bridge",
    "slug": "shortest-bridge",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 947,
    "title": "Most stones removed with same row or column",
    "slug": "most-stones-removed-with-same-row-or-column",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 983,
    "title": "Minimum Cost For Tickets",
    "slug": "minimum-cost-for-tickets",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 987,
    "title": "Vertical Order Traversal",
    "slug": "vertical-order-traversal-of-a-binary-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 992,
    "title": "Subarrays with K Different Integers",
    "slug": "subarrays-with-k-different-integers",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 994,
    "title": "Rotting Oranges",
    "slug": "rotting-oranges",
    "difficulty": "Medium",
    "patterns": [
      "bfs"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1004,
    "title": "Max Consecutive Ones III",
    "slug": "max-consecutive-ones-iii",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Niche",
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Look for the Sliding Window invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1008,
    "title": "Construct a BST from a preorder traversal",
    "slug": "construct-binary-search-tree-from-preorder-traversal",
    "difficulty": "Medium",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1011,
    "title": "Capacity To Ship Packages Within D Days",
    "slug": "capacity-to-ship-packages-within-d-days",
    "difficulty": "Medium",
    "patterns": [
      "binary-search-on-answer"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Flipkart",
      "Razorpay"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 3,
    "unlockHint": "Look for the Binary Search on Answer invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1020,
    "title": "Number of enclaves",
    "slug": "number-of-enclaves",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1021,
    "title": "Remove Outermost Parentheses",
    "slug": "remove-outermost-parentheses",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1043,
    "title": "Partition Array for Maximum Sum",
    "slug": "partition-array-for-maximum-sum",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1048,
    "title": "Longest String Chain",
    "slug": "longest-string-chain",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1091,
    "title": "Shortest Distance in a Binary Maze",
    "slug": "shortest-path-in-binary-matrix",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1092,
    "title": "Shortest common supersequence",
    "slug": "shortest-common-supersequence",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1106,
    "title": "Different Ways to Evaluate a Boolean Expression",
    "slug": "parsing-a-boolean-expression",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1134,
    "title": "Check if the Number is Armstrong",
    "slug": "armstrong-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1143,
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": true,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1192,
    "title": "Bridges in graph",
    "slug": "critical-connections-in-a-network",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1235,
    "title": "Maximum Profit in Job Scheduling",
    "slug": "maximum-profit-in-job-scheduling",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d",
      "binary-search"
    ],
    "frequency": "Niche",
    "companies": [
      "Amazon",
      "Google",
      "Flipkart"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 11,
    "unlockHint": "Look for the 1D Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 1248,
    "title": "Count number of Nice subarrays",
    "slug": "count-number-of-nice-subarrays",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1277,
    "title": "Count Square Submatrices with All Ones|(DP-56)",
    "slug": "count-square-submatrices-with-all-ones",
    "difficulty": "Easy",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1283,
    "title": "Find the smallest divisor",
    "slug": "find-the-smallest-divisor-given-a-threshold",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1312,
    "title": "Minimum Insertion Steps to Make a String Palindrome",
    "slug": "minimum-insertion-steps-to-make-a-string-palindrome",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Adobe",
      "Microsoft"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Look for the String Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1319,
    "title": "Number of operations to make network connected",
    "slug": "number-of-operations-to-make-network-connected",
    "difficulty": "Hard",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1334,
    "title": "Find the city with the smallest number of neighbors",
    "slug": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1335,
    "title": "Minimum Difficulty of a Job Schedule",
    "slug": "minimum-difficulty-of-a-job-schedule",
    "difficulty": "Hard",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Microsoft",
      "Adobe"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 12,
    "unlockHint": "Look for the 2D Grid Dynamic Programming invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "DP",
    "isStriverA2Z": false
  },
  {
    "id": 1345,
    "title": "Jump Game IV",
    "slug": "jump-game-iv",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Microsoft",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Look for the Breadth-First Search invariant before choosing data structures.",
    "estimatedMinutes": 30,
    "category": "Trees/Graphs",
    "isStriverA2Z": false
  },
  {
    "id": 1358,
    "title": "Number of Substrings Containing All Three Characters",
    "slug": "number-of-substrings-containing-all-three-characters",
    "difficulty": "Hard",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1373,
    "title": "Largest BST in Binary Tree",
    "slug": "maximum-sum-bst-in-binary-tree",
    "difficulty": "Hard",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1392,
    "title": "Longest happy prefix",
    "slug": "longest-happy-prefix",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1423,
    "title": "Maximum Points You Can Obtain from Cards ",
    "slug": "maximum-points-you-can-obtain-from-cards",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1438,
    "title": "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit",
    "slug": "longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-deque"
    ],
    "frequency": "Niche",
    "companies": [
      "Google",
      "Zepto",
      "Amazon"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 4,
    "unlockHint": "Look for the Monotonic Deque invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 1482,
    "title": "Minimum days to make M bouquets",
    "slug": "minimum-number-of-days-to-make-m-bouquets",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1514,
    "title": "Path with Maximum Probability",
    "slug": "path-with-maximum-probability",
    "difficulty": "Medium",
    "patterns": [
      "heaps",
      "dfs-graph"
    ],
    "frequency": "Niche",
    "companies": [
      "Amazon",
      "Google",
      "Zepto"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": true,
    "weekInRoadmap": 7,
    "unlockHint": "Look for the Heaps invariant before choosing data structures.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "isStriverA2Z": false
  },
  {
    "id": 1520,
    "title": "Kosaraju's algorithm",
    "slug": "maximum-number-of-non-overlapping-substrings",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1539,
    "title": "Kth Missing Positive Number",
    "slug": "kth-missing-positive-number",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1547,
    "title": "Minimum cost to cut the stick",
    "slug": "minimum-cost-to-cut-a-stick",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1614,
    "title": "Maximum Nesting Depth of the Parentheses",
    "slug": "maximum-nesting-depth-of-the-parentheses",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1631,
    "title": "Path with minimum effort",
    "slug": "path-with-minimum-effort",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1707,
    "title": "Maximum Xor with an element from an array",
    "slug": "maximum-xor-with-an-element-from-array",
    "difficulty": "Hard",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1752,
    "title": "Check if the Array is Sorted II",
    "slug": "check-if-array-is-sorted-and-rotated",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 1781,
    "title": "Sum of Beauty of All Substrings",
    "slug": "sum-of-beauty-of-all-substrings",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20020,
    "title": "Count Inversions",
    "slug": "count-inversions",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20021,
    "title": "Find the repeating and missing number",
    "slug": "find-the-repeating-and-missing-number",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20030,
    "title": "Leaders in an Array",
    "slug": "leaders-in-an-array",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20034,
    "title": "Rearrange array elements by sign",
    "slug": "rearrange-array-elements-by-sign",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20038,
    "title": "Largest Element ",
    "slug": "largest-element",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20041,
    "title": "Linear Search",
    "slug": "linear-search",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20043,
    "title": "Second Largest Element",
    "slug": "second-largest-element",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20044,
    "title": "Find missing number",
    "slug": "find-missing-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20048,
    "title": "Union of two sorted arrays",
    "slug": "union-of-two-sorted-arrays",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20065,
    "title": "Find Peak Element - II",
    "slug": "find-a-peak-element-ii",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20066,
    "title": "Find row with maximum 1's",
    "slug": "find-row-with-maximum-1-s",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20067,
    "title": "Matrix Median",
    "slug": "matrix-median",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20073,
    "title": "Aggressive Cows",
    "slug": "aggressive-cows",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20074,
    "title": "Book Allocation Problem",
    "slug": "book-allocation-problem",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20080,
    "title": "Lower Bound ",
    "slug": "lower-bound",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20082,
    "title": "Upper Bound",
    "slug": "upper-bound",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20084,
    "title": "Find out how many times the array is rotated",
    "slug": "find-out-how-many-times-the-array-is-rotated",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20086,
    "title": "Floor and Ceil in Sorted Array",
    "slug": "floor-and-ceil-in-sorted-array",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20091,
    "title": "Find Nth root of a number",
    "slug": "find-nth-root-of-a-number",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20092,
    "title": "Find square root of a number",
    "slug": "find-square-root-of-a-number",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20107,
    "title": "Floor and Ceil in a BST",
    "slug": "floor-and-ceil-in-a-bst",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20111,
    "title": "Requirements needed to construct a unique BT",
    "slug": "requirements-needed-to-construct-a-unique-bt",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20115,
    "title": "Bottom view of BT",
    "slug": "bottom-view-of-bt",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20120,
    "title": "Minimum time taken to burn the BT from a given Node",
    "slug": "minimum-time-taken-to-burn-the-bt-from-a-given-node",
    "difficulty": "Hard",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20122,
    "title": "Print root to leaf path in BT",
    "slug": "print-root-to-leaf-path-in-bt",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20124,
    "title": "Top View of BT",
    "slug": "top-view-of-bt",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20136,
    "title": "Pre, Post, Inorder in one traversal",
    "slug": "pre-post-inorder-in-one-traversal",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20141,
    "title": "Minimum Bit Flips to Convert Number",
    "slug": "minimum-bit-flips-to-convert-number",
    "difficulty": "Medium",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20145,
    "title": "Single Number - III",
    "slug": "single-number-iii",
    "difficulty": "Medium",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20146,
    "title": "XOR of numbers in a given range",
    "slug": "xor-of-numbers-in-a-given-range",
    "difficulty": "Medium",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20171,
    "title": "Check if a Number is Odd or Not",
    "slug": "check-if-a-number-is-odd-or-not",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20177,
    "title": "Check if the i-th bit is Set or Not",
    "slug": "check-if-the-i-th-bit-is-set-or-not",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20185,
    "title": "Children Sum Property in Binary Tree",
    "slug": "children-sum-property-in-binary-tree",
    "difficulty": "Medium",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20222,
    "title": "Count Good Numbers",
    "slug": "count-good-numbers",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20229,
    "title": "Count Occurrences in a Sorted Array",
    "slug": "count-occurrences-in-a-sorted-array",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20231,
    "title": "Count Palindromic Subsequences",
    "slug": "count-palindromic-subsequences",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20243,
    "title": "Count the Number of Set Bits",
    "slug": "count-the-number-of-set-bits",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20252,
    "title": "Counting Frequencies of Array Elements",
    "slug": "counting-frequencies-of-array-elements",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20285,
    "title": "Number of Greater Elements to the Right",
    "slug": "number-of-greater-elements-to-the-right",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20288,
    "title": "Frog Jump",
    "slug": "frog-jump",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20289,
    "title": "Frog jump with K distances",
    "slug": "frog-jump-with-k-distances",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20292,
    "title": "Ninja's training",
    "slug": "ninja-s-training",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20309,
    "title": "Longest common substring",
    "slug": "longest-common-substring",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20317,
    "title": "Count partitions with given difference",
    "slug": "count-partitions-with-given-difference",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20318,
    "title": "Count subsets with sum K",
    "slug": "count-subsets-with-sum-k",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20320,
    "title": "Partition a set into two subsets with minimum absolute sum difference",
    "slug": "partition-array-into-two-arrays-to-minimize-sum-difference",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20325,
    "title": "Unbounded knapsack",
    "slug": "unbounded-knapsack",
    "difficulty": "Hard",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20327,
    "title": "Matrix chain multiplication",
    "slug": "matrix-chain-multiplication",
    "difficulty": "Hard",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20342,
    "title": "Reverse an array",
    "slug": "reverse-an-array",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20344,
    "title": "Highest Occurring Element in an Array",
    "slug": "frequency-of-the-most-frequent-element",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20348,
    "title": "Delete head of Doubly Linked List",
    "slug": "delete-head-of-doubly-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20356,
    "title": "Insertion at the head of Linked List",
    "slug": "insertion-at-the-head-of-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20361,
    "title": "Insert node before head in Doubly Linked List",
    "slug": "insert-node-before-head-in-doubly-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20365,
    "title": "Check for Prime Number",
    "slug": "check-for-prime-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20367,
    "title": "Count all Digits of a Number",
    "slug": "count-all-digits-of-a-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20370,
    "title": "Divisors of a Number",
    "slug": "divisors-of-a-number",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20371,
    "title": "Factorial of a given number",
    "slug": "factorial-of-a-given-number",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20372,
    "title": "GCD of Two Numbers",
    "slug": "gcd-of-two-numbers",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20386,
    "title": "Sum of First N Numbers",
    "slug": "sum-of-first-n-numbers",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20387,
    "title": "Implement Queue using Arrays",
    "slug": "implement-queue-using-arrays",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20388,
    "title": "Implement queue using Linkedlist",
    "slug": "implement-queue-using-linkedlist",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20390,
    "title": "Implement Stack using Arrays",
    "slug": "implement-stack-using-arrays",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20391,
    "title": "Implement stack using Linkedlist",
    "slug": "implement-stack-using-linkedlist",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20394,
    "title": "Largest Odd Number in a String",
    "slug": "largest-odd-number-in-string",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20401,
    "title": "Pattern 1",
    "slug": "pattern-1",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20402,
    "title": "Pattern 10",
    "slug": "pattern-10",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20403,
    "title": "Pattern 11",
    "slug": "pattern-11",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20404,
    "title": "Pattern 12",
    "slug": "pattern-12",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20405,
    "title": "Pattern 13",
    "slug": "pattern-13",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20406,
    "title": "Pattern 14",
    "slug": "pattern-14",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20407,
    "title": "Pattern 15",
    "slug": "pattern-15",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20408,
    "title": "Pattern 16",
    "slug": "pattern-16",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20409,
    "title": "Pattern 17",
    "slug": "pattern-17",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20410,
    "title": "Pattern 18",
    "slug": "pattern-18",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20411,
    "title": "Pattern 19",
    "slug": "pattern-19",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20412,
    "title": "Pattern 2",
    "slug": "pattern-2",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20413,
    "title": "Pattern 20",
    "slug": "pattern-20",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20414,
    "title": "Pattern 21",
    "slug": "pattern-21",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20415,
    "title": "Pattern 22",
    "slug": "pattern-22",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20416,
    "title": "Pattern 3",
    "slug": "pattern-3",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20417,
    "title": "Pattern 4",
    "slug": "pattern-4",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20418,
    "title": "Pattern 5",
    "slug": "pattern-5",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20419,
    "title": "Pattern 6",
    "slug": "pattern-6",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20420,
    "title": "Pattern 7",
    "slug": "pattern-7",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20421,
    "title": "Pattern 8",
    "slug": "pattern-8",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20422,
    "title": "Pattern 9",
    "slug": "pattern-9",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20424,
    "title": "If ElseIf",
    "slug": "if-elseif",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20425,
    "title": "Input Output",
    "slug": "input-output",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20429,
    "title": "Switch Case",
    "slug": "switch-case",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20452,
    "title": "Find Pairs with Given Sum in Doubly Linked List",
    "slug": "find-pairs-with-given-sum-in-doubly-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20470,
    "title": "Find the length of the Linked List",
    "slug": "find-the-length-of-the-linked-list",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20489,
    "title": "Fractional Knapsack",
    "slug": "fractional-knapsack",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20493,
    "title": "Generate Binary Strings Without Consecutive 1s",
    "slug": "generate-binary-strings-without-consecutive-1s",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20496,
    "title": "Articulation point in graph",
    "slug": "articulation-point-in-graph",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20502,
    "title": "Topological sort or Kahn's algorithm",
    "slug": "topological-sort-or-kahn-s-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "topological-sort"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20507,
    "title": "Shortest path in DAG",
    "slug": "shortest-path-in-dag",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20508,
    "title": "Shortest path in undirected graph with unit weights",
    "slug": "shortest-path-in-undirected-graph-with-unit-weights",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20516,
    "title": "Disjoint Set ",
    "slug": "disjoint-set",
    "difficulty": "Hard",
    "patterns": [
      "union-find"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20517,
    "title": "Find the MST weight",
    "slug": "find-the-mst-weight",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20522,
    "title": "Floyd warshall algorithm",
    "slug": "floyd-warshall-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20523,
    "title": "Minimum multiplications to reach end",
    "slug": "minimum-multiplications-to-reach-end",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20524,
    "title": "Number of ways to arrive at destination",
    "slug": "number-of-ways-to-arrive-at-destination",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20528,
    "title": "Connected Components",
    "slug": "connected-components",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20529,
    "title": "Traversal Techniques",
    "slug": "traversal-techniques",
    "difficulty": "Medium",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20547,
    "title": "Job sequencing Problem",
    "slug": "job-sequencing-problem",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20548,
    "title": "Minimum number of platforms required for a railway",
    "slug": "minimum-number-of-platforms-required-for-a-railway",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20549,
    "title": "N meetings in one room",
    "slug": "n-meetings-in-one-room",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20551,
    "title": "Shortest Job First",
    "slug": "shortest-job-first",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20562,
    "title": "Count subarrays with given xor K",
    "slug": "count-subarrays-with-given-xor-k",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20564,
    "title": "Longest subarray with sum K",
    "slug": "longest-subarray-with-sum-k",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20568,
    "title": "Maximum Sum Combination",
    "slug": "maximum-sum-combination",
    "difficulty": "Hard",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20571,
    "title": "Check if an array represents a min heap ",
    "slug": "check-if-an-array-represents-a-min-heap",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20572,
    "title": "Convert Min Heap to Max Heap",
    "slug": "convert-min-heap-to-max-heap",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20576,
    "title": "Implement Min Heap",
    "slug": "implement-min-heap",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20578,
    "title": "K-th Largest element in an array",
    "slug": "k-th-largest-element-in-an-array",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20586,
    "title": "Infix to Postfix Conversion",
    "slug": "infix-to-postfix-conversion",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20587,
    "title": "Infix to Prefix Conversion",
    "slug": "infix-to-prefix-conversion",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20605,
    "title": "Largest Subarray with Sum 0",
    "slug": "largest-subarray-with-sum-0",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20609,
    "title": "Delete all occurrences of a key in DLL",
    "slug": "delete-all-occurrences-of-a-key-in-dll",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20610,
    "title": "Remove duplicates from sorted DLL",
    "slug": "remove-duplicates-from-sorted-dll",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20617,
    "title": "Add one to a number represented by LL",
    "slug": "add-one-to-a-number-represented-by-ll",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20619,
    "title": "Delete the middle node in LL",
    "slug": "delete-the-middle-node-of-a-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20623,
    "title": "Length of loop in LL",
    "slug": "length-of-loop-in-ll",
    "difficulty": "Medium",
    "patterns": [
      "fast-slow-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 5,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20629,
    "title": "Sort a Linked List of 0's 1's and 2's",
    "slug": "sort-a-linked-list-of-0-s-1-s-and-2-s",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20633,
    "title": "Longest Bitonic Subsequence",
    "slug": "longest-bitonic-subsequence",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20652,
    "title": "Prime factorisation of a Number",
    "slug": "prime-factorisation-of-a-number",
    "difficulty": "Hard",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20755,
    "title": "Minimum Cost to Connect Sticks",
    "slug": "minimum-cost-to-connect-sticks",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20768,
    "title": "Next Smaller Element",
    "slug": "next-smaller-element",
    "difficulty": "Medium",
    "patterns": [
      "monotonic-stack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20769,
    "title": "Ninja and his Friends",
    "slug": "ninja-and-his-friends",
    "difficulty": "Medium",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20805,
    "title": "Painter's Partition",
    "slug": "painter-s-partition",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20824,
    "title": "Postfix to Infix Conversion",
    "slug": "postfix-to-infix-conversion",
    "difficulty": "Easy",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20825,
    "title": "Postfix to Prefix Conversion",
    "slug": "postfix-to-prefix-conversion",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20848,
    "title": "Prefix to Infix Conversion",
    "slug": "prefix-to-infix-conversion",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20849,
    "title": "Prefix to Postfix Conversion",
    "slug": "prefix-to-postfix-conversion",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20850,
    "title": "Print 1 to N using Recursion",
    "slug": "print-1-to-n-using-recursion",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20851,
    "title": "Print Longest Increasing Subsequence",
    "slug": "print-longest-increasing-subsequence",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20852,
    "title": "Print N to 1 using Recursion",
    "slug": "print-n-to-1-using-recursion",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20867,
    "title": "Subsets I",
    "slug": "subsets-i",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20869,
    "title": "M Coloring Problem",
    "slug": "m-coloring-problem",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20871,
    "title": "Palindrome partitioning",
    "slug": "palindrome-partitioning",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20872,
    "title": "Rat in a Maze",
    "slug": "rat-in-a-maze",
    "difficulty": "Hard",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20878,
    "title": "Power Set",
    "slug": "power-set",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20879,
    "title": "Check if there exists a subsequence with sum K",
    "slug": "check-if-there-exists-a-subsequence-with-sum-k",
    "difficulty": "Easy",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20880,
    "title": "Count all subsequences with sum K",
    "slug": "count-all-subsequences-with-sum-k",
    "difficulty": "Easy",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20881,
    "title": "Recursive Bubble Sort",
    "slug": "recursive-bubble-sort",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20882,
    "title": "Recursive Insertion Sort",
    "slug": "recursive-insertion-sort",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20898,
    "title": "Replace Elements by Their Rank",
    "slug": "replace-elements-by-their-rank",
    "difficulty": "Easy",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20900,
    "title": "Reverse a Doubly Linked List",
    "slug": "reverse-a-doubly-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20901,
    "title": "Reverse a Stack",
    "slug": "reverse-a-stack",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20905,
    "title": "Search in Linked List",
    "slug": "search-in-linked-list",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20926,
    "title": " Fruit Into Baskets",
    "slug": "fruit-into-baskets",
    "difficulty": "Medium",
    "patterns": [
      "sliding-window",
      "two-pointers"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20943,
    "title": "Bubble Sort",
    "slug": "bubble-sort",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20944,
    "title": "Insertion Sorting",
    "slug": "insertion-sorting",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20945,
    "title": "Merge Sorting",
    "slug": "merge-sorting",
    "difficulty": "Medium",
    "patterns": [
      "divide-conquer"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20946,
    "title": "Quick Sorting",
    "slug": "quick-sorting",
    "difficulty": "Easy",
    "patterns": [
      "divide-conquer"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20947,
    "title": "Selection Sort",
    "slug": "selection-sort",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20957,
    "title": "Celebrity Problem",
    "slug": "celebrity-problem",
    "difficulty": "Hard",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20972,
    "title": "Sum of Subarray Ranges",
    "slug": "sum-of-subarray-ranges",
    "difficulty": "Medium",
    "patterns": [
      "stack-basic"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 4,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20977,
    "title": "KMP Algorithm or LPS array",
    "slug": "implement-strstr",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20980,
    "title": "Shortest Palindrome",
    "slug": "shortest-palindrome",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 20981,
    "title": "Z function",
    "slug": "z-function",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21005,
    "title": "Swap Two Numbers",
    "slug": "swap-two-numbers",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21023,
    "title": "Longest Word with All Prefixes",
    "slug": "longest-word-with-all-prefixes",
    "difficulty": "Medium",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21026,
    "title": "Number of distinct substrings in a string",
    "slug": "number-of-distinct-substrings-in-a-string",
    "difficulty": "Medium",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21027,
    "title": "Trie Implementation and Advanced Operations",
    "slug": "trie-implementation-and-advanced-operations",
    "difficulty": "Hard",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21153,
    "title": "Introduction to BST",
    "slug": "introduction-to-bst",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21155,
    "title": "Introduction to Bits and Tricks",
    "slug": "introduction-to-bits-and-tricks",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21195,
    "title": "Introduction to DP",
    "slug": "introduction-to-dp",
    "difficulty": "Easy",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21203,
    "title": "Basic Hashing",
    "slug": "basic-hashing",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21205,
    "title": "Hard",
    "slug": "hard",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21211,
    "title": "Cpp Basics",
    "slug": "cpp-basics",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21216,
    "title": "Easy and Medium",
    "slug": "easy-and-medium",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21217,
    "title": "Java Collections",
    "slug": "java-collections",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21218,
    "title": "STL",
    "slug": "stl",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21219,
    "title": "Theory with examples",
    "slug": "theory-with-examples",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21221,
    "title": "MST theory",
    "slug": "mst-theory",
    "difficulty": "Easy",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21222,
    "title": "Introduction to Graph",
    "slug": "introduction-to-graph",
    "difficulty": "Easy",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21223,
    "title": "Heaps (Theory Video)",
    "slug": "heaps-theory-video",
    "difficulty": "Easy",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21234,
    "title": "Introduction to Doubly LL",
    "slug": "introduction-to-doubly-ll",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 21237,
    "title": "Introduction to Singly LinkedList",
    "slug": "introduction-to-singly-linkedlist",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22390,
    "title": "Bit PreRequisites for TRIE Problems",
    "slug": "bit-prerequisites-for-trie-problems",
    "difficulty": "Easy",
    "patterns": [
      "tries"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22394,
    "title": "Count Number of Substrings",
    "slug": "count-number-of-substrings",
    "difficulty": "Easy",
    "patterns": [
      "sliding-window"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 2,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Pointers",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22398,
    "title": "Find Min/Max in BST",
    "slug": "find-min-max-in-bst",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22399,
    "title": "Hashing In Strings | Theory",
    "slug": "hashing-in-strings-theory",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22400,
    "title": "Learn All Patterns of Subsequences (Theory)",
    "slug": "learn-all-patterns-of-subsequences-theory",
    "difficulty": "Easy",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22401,
    "title": "Understand recursion by print something N times",
    "slug": "understand-recursion-by-print-something-n-times",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22405,
    "title": "Print name N times using recursion",
    "slug": "print-name-n-times-using-recursion",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22409,
    "title": "Sort K sorted array",
    "slug": "sort-k-sorted-array",
    "difficulty": "Easy",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22410,
    "title": "Set/Unset the rightmost unset bit",
    "slug": "set-unset-the-rightmost-unset-bit",
    "difficulty": "Easy",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22761,
    "title": "Print subarray with maximum subarray sum (extended version of above problem)",
    "slug": "print-subarray-with-maximum-subarray-sum-extended-version-of-above-problem",
    "difficulty": "Medium",
    "patterns": [
      "kadanes-algorithm"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22767,
    "title": "Kth element of 2 sorted arrays",
    "slug": "kth-element-of-2-sorted-arrays",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22778,
    "title": "Floor in a Binary Search Tree",
    "slug": "floor-in-a-binary-search-tree",
    "difficulty": "Easy",
    "patterns": [
      "binary-search"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 3,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Binary Search",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22789,
    "title": "Preorder, Inorder, and Postorder Traversal in one Traversal",
    "slug": "preorder-inorder-and-postorder-traversal-in-one-traversal",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22799,
    "title": "Print Longest Common Subsequence | (DP - 26)",
    "slug": "print-longest-common-subsequence-dp-26",
    "difficulty": "Hard",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22801,
    "title": "Coin Change 2 (DP - 22)",
    "slug": "coin-change-2",
    "difficulty": "Hard",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22803,
    "title": "Rod Cutting Problem | (DP - 24)",
    "slug": "rod-cutting-problem-dp-24",
    "difficulty": "Hard",
    "patterns": [
      "dp-1d"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 11,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22804,
    "title": "Subset sum equal to target (DP- 14)",
    "slug": "subset-sum-equal-to-target-dp-14",
    "difficulty": "Hard",
    "patterns": [
      "dp-knapsack"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22806,
    "title": "Matrix Chain Multiplication | Bottom-Up|(DP-49)",
    "slug": "matrix-chain-multiplication-bottom-up-dp-49",
    "difficulty": "Hard",
    "patterns": [
      "dp-2d-grid"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 12,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22807,
    "title": "Print all Divisors",
    "slug": "print-all-divisors",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22817,
    "title": "Cycle Detection in Undirected Graph (bfs)",
    "slug": "cycle-detection-in-undirected-graph-bfs",
    "difficulty": "Hard",
    "patterns": [
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22822,
    "title": "Topo Sort",
    "slug": "topo-sort",
    "difficulty": "Hard",
    "patterns": [
      "topological-sort"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 10,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22825,
    "title": "Prim's Algorithm",
    "slug": "prim-s-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22826,
    "title": "Bellman Ford Algorithm",
    "slug": "bellman-ford-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22827,
    "title": "Djisktra's Algorithm",
    "slug": "djisktra-s-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22828,
    "title": "Why priority Queue is used in Djisktra's Algorithm",
    "slug": "why-priority-queue-is-used-in-djisktra-s-algorithm",
    "difficulty": "Hard",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22830,
    "title": "Connected Components Problem in Matrix",
    "slug": "connected-components-problem-in-matrix",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22831,
    "title": "DFS",
    "slug": "dfs",
    "difficulty": "Medium",
    "patterns": [
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 9,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22836,
    "title": "Longest subarray with given sum K(positives)",
    "slug": "longest-subarray-with-given-sum-k-positives",
    "difficulty": "Medium",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22840,
    "title": "Kth smallest element in an array [use priority queue]",
    "slug": "kth-smallest-element-in-an-array-use-priority-queue",
    "difficulty": "Medium",
    "patterns": [
      "heaps"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 7,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Stack/Queue",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22841,
    "title": "Flattening of LL",
    "slug": "flattening-of-ll",
    "difficulty": "Hard",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22851,
    "title": "Longest Increasing Subsequence |(DP-43)",
    "slug": "longest-increasing-subsequence-dp-43",
    "difficulty": "Medium",
    "patterns": [
      "dp-strings"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 13,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "DP",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22853,
    "title": "Print Prime Factors of a Number",
    "slug": "print-prime-factors-of-a-number",
    "difficulty": "Hard",
    "patterns": [
      "bit-manipulation"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 15,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22858,
    "title": "Sort a stack using recursion",
    "slug": "sort-a-stack-using-recursion",
    "difficulty": "Medium",
    "patterns": [
      "recursion-backtracking"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 8,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Math/Bits",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22859,
    "title": "Program for Least Recently Used (LRU) Page Replacement Algorithm",
    "slug": "program-for-least-recently-used-lru-page-replacement-algorithm",
    "difficulty": "Medium",
    "patterns": [
      "greedy"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 14,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Greedy",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22864,
    "title": "Binary Tree Representation in Java",
    "slug": "binary-tree-representation-in-java",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22865,
    "title": "Introduction to Trees",
    "slug": "introduction-to-trees",
    "difficulty": "Easy",
    "patterns": [
      "dfs-tree",
      "bfs"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22866,
    "title": "Functions (Pass by Reference and Value)",
    "slug": "functions-pass-by-reference-and-value",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22867,
    "title": "For loops",
    "slug": "for-loops",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22868,
    "title": "While loops",
    "slug": "while-loops",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22869,
    "title": "What are arrays, strings?",
    "slug": "what-are-arrays-strings",
    "difficulty": "Easy",
    "patterns": [
      "fundamentals"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 1,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Arrays/Hash",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22870,
    "title": "Graph Representation | C++",
    "slug": "graph-representation-c",
    "difficulty": "Easy",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  },
  {
    "id": 22871,
    "title": "Graph Representation | Java",
    "slug": "graph-representation-java",
    "difficulty": "Easy",
    "patterns": [
      "bfs",
      "dfs-graph"
    ],
    "frequency": "Medium",
    "companies": [
      "Striver A2Z"
    ],
    "isNeetCode150": false,
    "isBlind75": false,
    "isIndianUnicorn": false,
    "weekInRoadmap": 6,
    "unlockHint": "Imported from Striver's A2Z DSA sheet.",
    "estimatedMinutes": 20,
    "category": "Trees/Graphs",
    "source": "striver-a2z",
    "isStriverA2Z": true
  }
];

export const problemById: Record<number, Problem> = Object.fromEntries(PROBLEMS.map((p) => [p.id, p]));
