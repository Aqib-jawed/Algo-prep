export interface ProblemDetails {
  description: string;
  examples: { input: string; output: string; explanation?: string }[];
  constraints: string[];
  notes?: string;
}

export function getProblemDetails(problemId: number, title: string): ProblemDetails {
  if (problemId === 1) {
    return {
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.",
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
      ],
      constraints: [
        "2 <= nums.length <= 10^4",
        "-10^9 <= nums[i] <= 10^9",
        "-10^9 <= target <= 10^9",
        "Only one valid answer exists.",
      ],
      notes: "An O(N) time complexity solution is expected using a Hash Map tracking seen indices.",
    };
  }

  if (problemId === 2) {
    return {
      description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
      examples: [
        {
          input: "l1 = [2,4,3], l2 = [5,6,4]",
          output: "[7,0,8]",
          explanation: "342 + 465 = 807.",
        },
      ],
      constraints: [
        "The number of nodes in each linked list is in the range [1, 100].",
        "0 <= Node.val <= 9",
        "It is guaranteed that the list represents a number that does not have leading zeros.",
      ],
      notes: "Iterate through both lists simultaneously, maintaining a carry digit across rounds.",
    };
  }

  if (problemId === 3) {
    return {
      description: "Given a string `s`, find the length of the longest substring without repeating characters.",
      examples: [
        {
          input: 's = "abcabcbb"',
          output: "3",
          explanation: 'The answer is "abc", with the length of 3.',
        },
      ],
      constraints: [
        "0 <= s.length <= 5 * 10^4",
        "s consists of English letters, digits, symbols and spaces.",
      ],
      notes: "Maintain a sliding window using a set or map to store recently seen indices.",
    };
  }

  // Robust default fallback
  return {
    description: `Given the parameters and constraints of "${title}", implement a complete, efficient, and type-safe solution. Optimize for runtime and memory complexity.`,
    examples: [
      {
        input: "nums = [1, 2, 3]",
        output: "true",
        explanation: "Matches expected base constraints.",
      },
    ],
    constraints: [
      "Input parameters are non-null and correctly typed.",
      "Optimized time complexity: O(N) or O(N log N) is preferred.",
      "Memory complexity bounds: O(1) auxiliary space where feasible.",
    ],
    notes: "Utilize the correct data structure templates and verify edge cases such as empty values or bounds overflow.",
  };
}
