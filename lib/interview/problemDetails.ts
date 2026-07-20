import { problemById, PROBLEMS, Problem } from "@/data/problems";

export interface ProblemDetails {
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  notes?: string;
}

export function getProblemDetails(problemId: number, title: string): ProblemDetails {
  const problem: Problem | undefined = problemById[problemId] || PROBLEMS.find((p) => p.title.toLowerCase() === title.toLowerCase());

  // 1. Check known specific high-frequency problems
  if (problemId === 1 || title.toLowerCase().includes("two sum")) {
    return {
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
      examples: [
        {
          input: "nums = [2, 7, 11, 15], target = 9",
          output: "[0, 1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3, 2, 4], target = 6",
          output: "[1, 2]",
        },
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists.",
      ],
      notes: "An O(N) time complexity solution is expected using a Hash Map tracking seen element indices.",
    };
  }

  if (problemId === 2 || title.toLowerCase().includes("add two numbers")) {
    return {
      description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
      examples: [
        {
          input: "l1 = [2, 4, 3], l2 = [5, 6, 4]",
          output: "[7, 0, 8]",
          explanation: "342 + 465 = 807.",
        },
      ],
      constraints: [
        "The number of nodes in each linked list is in the range [1, 100].",
        "0 <= Node.val <= 9",
        "It is guaranteed that the list represents a number that does not have leading zeros.",
      ],
      notes: "Iterate through both lists simultaneously, maintaining a carry digit across additions.",
    };
  }

  if (problemId === 3 || title.toLowerCase().includes("longest substring without repeating")) {
    return {
      description: "Given a string `s`, find the length of the longest substring without repeating characters.",
      examples: [
        {
          input: 's = "abcabcbb"',
          output: "3",
          explanation: 'The answer is "abc", with the length of 3.',
        },
        {
          input: 's = "bbbbb"',
          output: "1",
          explanation: 'The answer is "b", with the length of 1.',
        },
      ],
      constraints: [
        "0 <= s.length <= 5 * 10^4",
        "s consists of English letters, digits, symbols and spaces.",
      ],
      notes: "Maintain a sliding window using a set or map to store recently seen indices.",
    };
  }

  if (title.toLowerCase().includes("reverse linked list")) {
    return {
      description: "Given the `head` of a singly linked list, reverse the list, and return the reversed list's head.",
      examples: [
        {
          input: "head = [1, 2, 3, 4, 5]",
          output: "[5, 4, 3, 2, 1]",
        },
        {
          input: "head = [1, 2]",
          output: "[2, 1]",
        },
      ],
      constraints: [
        "The number of nodes in the list is the range [0, 5000].",
        "-5000 <= Node.val <= 5000",
      ],
      notes: "Can be solved iteratively or recursively using three pointers (prev, current, next).",
    };
  }

  if (title.toLowerCase().includes("valid parentheses")) {
    return {
      description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.\n3. Every close bracket has a corresponding open bracket of the same type.",
      examples: [
        {
          input: 's = "()[]{}"',
          output: "true",
        },
        {
          input: 's = "(]"',
          output: "false",
        },
      ],
      constraints: [
        "1 <= s.length <= 10^4",
        "s consists of parentheses only '()[]{}'.",
      ],
      notes: "Use a Stack data structure to match closing brackets against open brackets.",
    };
  }

  if (title.toLowerCase().includes("lru cache")) {
    return {
      description: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n\nImplement the `LRUCache` class:\n- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.\n- `int get(int key)` Return the value of the key if key exists, otherwise return -1.\n- `void put(int key, int value)` Update or insert key-value. If capacity exceeded, evict the least recently used key.",
      examples: [
        {
          input: '["LRUCache", "put", "put", "get", "put", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2]]',
          output: "[null, null, null, 1, null, -1]",
        },
      ],
      constraints: [
        "1 <= capacity <= 3000",
        "0 <= key <= 10^4",
        "At most 2 * 10^5 calls will be made to get and put.",
      ],
      notes: "Combine a Doubly Linked List with a Hash Map to achieve O(1) time complexity for get and put.",
    };
  }

  if (title.toLowerCase().includes("course schedule")) {
    return {
      description: "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [a, b]` indicates that you must take course `b` first if you want to take course `a`.\n\nReturn `true` if you can finish all courses. Otherwise, return `false`.",
      examples: [
        {
          input: "numCourses = 2, prerequisites = [[1,0]]",
          output: "true",
          explanation: "There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
        },
        {
          input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
          output: "false",
          explanation: "Cycle detected in graph.",
        },
      ],
      constraints: [
        "1 <= numCourses <= 2000",
        "0 <= prerequisites.length <= 5000",
      ],
      notes: "Topological Sort (Kahn's Algorithm BFS or DFS cycle detection) is optimal.",
    };
  }

  // 2. Dynamic generation for any of the 512 problems in dataset
  const problemTitle = problem ? problem.title : title;
  const problemCategory = problem ? problem.category : "Data Structures & Algorithms";
  const problemHint = problem?.unlockHint || `Focus on standard invariants and edge cases for ${problemTitle}.`;
  const problemPattern = problem?.patterns?.[0] || "Core Algorithmic Pattern";
  const companiesStr = problem?.companies?.length ? problem.companies.join(", ") : "Top Tech Companies";

  return {
    description: `### Problem Statement: ${problemTitle}\n\nYou are working on an interview problem frequently asked at **${companiesStr}** under the **${problemCategory}** module.\n\nImplement an optimal, bug-free solution for **${problemTitle}** adhering to strict time and space complexity limits.\n\nKey Requirement: Your solution must handle all standard inputs as well as boundary edge cases (empty structures, single elements, extreme range values).`,
    examples: [
      {
        input: `Input: Standard test case parameters for ${problemTitle}`,
        output: `Output: Valid result computed according to ${problemPattern}`,
        explanation: `Applies ${problemPattern} to transform input into target state.`,
      },
    ],
    constraints: [
      "1 <= N <= 10^5 (Input array/string size)",
      "-10^9 <= Values <= 10^9",
      "Time Complexity target: O(N) or O(N log N)",
      "Space Complexity target: O(1) auxiliary space or O(N) worst-case",
    ],
    notes: `💡 Hint: ${problemHint}`,
  };
}
