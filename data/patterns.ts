export type PatternCategory =
  | "Arrays/Hash"
  | "Pointers"
  | "Trees/Graphs"
  | "DP"
  | "Greedy"
  | "Stack/Queue"
  | "Binary Search"
  | "Math/Bits";

export type Pattern = {
  slug: string;
  name: string;
  category: PatternCategory;
  description: string;
  triggerConditions: string[];
  cheatCode: string;
  coreInvariant: string;
  javaTemplate: string;
  timeComplexity: { notation: string; explanation: string };
  spaceComplexity: { notation: string; explanation: string };
  variants: { name: string; whenToUse: string; keyDifference: string }[];
  topMistakes: { mistake: string; fix: string }[];
  relatedProblems: number[];
  prerequisitePatterns: string[];
  estimatedDaysToMaster: number;
  orderInRoadmap: number;
};

function buildJavaTemplate(title: string, coreMethod: string) {
  return String.raw`import java.util.*;

class Solution {
    // Pattern: ${title}
    // This template is intentionally complete: paste into LeetCode, keep the relevant method,
    // and rename the public method only when the target problem requires a specific signature.
    // The helper node classes below make tree and linked-list templates compile locally too.
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    private void require(boolean condition, String message) {
        if (!condition) throw new IllegalArgumentException(message);
    }

    private boolean inside(int r, int c, int rows, int cols) {
        return r >= 0 && c >= 0 && r < rows && c < cols;
    }

    private int safeMid(int left, int right) {
        return left + (right - left) / 2;
    }

    private int[] copyOf(int[] nums) {
        return Arrays.copyOf(nums, nums.length);
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private List<List<Integer>> newAnswer() {
        return new ArrayList<>();
    }

    private Map<Integer, Integer> newCounter() {
        return new HashMap<>();
    }

    private int clampToArray(int index, int length) {
        if (index < 0) return 0;
        if (index >= length) return length - 1;
        return index;
    }

    private long addAsLong(int a, int b) {
        return (long) a + b;
    }

    // Core reusable implementation for this pattern.
${coreMethod}
}
`;
}

export const PATTERNS: Pattern[] = [
  {
    slug: "two-pointers",
    name: "Two Pointers",
    category: "Pointers",
    description: "Two Pointers is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "sorted array pair",
    "palindrome check",
    "remove duplicates in-place",
    "left and right boundary",
    "triplet sum after sorting"
  ],
    cheatCode: "If the prompt says \"sorted array pair\", map it to Two Pointers and write the invariant before code.",
    coreInvariant: "At every step, Two Pointers keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Two Pointers", String.raw`    public int[] twoSumSorted(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            int sum = nums[left] + nums[right];
            // If the sum is small, every pair with this left value is too small.
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return new int[] { left, right };
            }
        }
        return new int[] { -1, -1 };
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Two Pointers classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Two Pointers with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Two Pointers optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    11,
    15,
    125,
    167,
    283
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 1
  },
  {
    slug: "sliding-window",
    name: "Sliding Window",
    category: "Pointers",
    description: "Sliding Window is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "longest substring",
    "at most k distinct",
    "minimum window",
    "contiguous subarray",
    "expand right shrink left"
  ],
    cheatCode: "If the prompt says \"longest substring\", map it to Sliding Window and write the invariant before code.",
    coreInvariant: "At every step, Sliding Window keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Sliding Window", String.raw`    public int longestAtMostKDistinct(String s, int k) {
        if (k == 0) return 0;
        Map<Character, Integer> count = new HashMap<>();
        int left = 0;
        int best = 0;
        for (int right = 0; right < s.length(); right++) {
            char add = s.charAt(right);
            count.put(add, count.getOrDefault(add, 0) + 1);
            // Restore the invariant before scoring the window.
            while (count.size() > k) {
                char remove = s.charAt(left++);
                count.put(remove, count.get(remove) - 1);
                if (count.get(remove) == 0) count.remove(remove);
            }
            best = Math.max(best, right - left + 1);
        }
        return best;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Sliding Window classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Sliding Window with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Sliding Window optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    3,
    76,
    424,
    567,
    904,
    1004
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 2
  },
  {
    slug: "prefix-sum",
    name: "Prefix Sum",
    category: "Arrays/Hash",
    description: "Prefix Sum is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "subarray sum equals k",
    "range sum query",
    "continuous subarray",
    "sum divisible by k",
    "count previous cumulative state"
  ],
    cheatCode: "If the prompt says \"subarray sum equals k\", map it to Prefix Sum and write the invariant before code.",
    coreInvariant: "At every step, Prefix Sum keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Prefix Sum", String.raw`    public int subarraySum(int[] nums, int target) {
        Map<Integer, Integer> seenPrefixes = new HashMap<>();
        seenPrefixes.put(0, 1);
        int prefix = 0;
        int answer = 0;
        for (int value : nums) {
            prefix += value;
            // Need an earlier prefix equal to current minus target.
            answer += seenPrefixes.getOrDefault(prefix - target, 0);
            seenPrefixes.put(prefix, seenPrefixes.getOrDefault(prefix, 0) + 1);
        }
        return answer;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Prefix Sum classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Prefix Sum with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Prefix Sum optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    525,
    560,
    974,
    1248,
    930
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 3
  },
  {
    slug: "binary-search",
    name: "Binary Search",
    category: "Binary Search",
    description: "Binary Search is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "sorted input",
    "first occurrence",
    "last occurrence",
    "minimum index satisfying",
    "rotated sorted array"
  ],
    cheatCode: "If the prompt says \"sorted input\", map it to Binary Search and write the invariant before code.",
    coreInvariant: "At every step, Binary Search keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Binary Search", String.raw`    public int lowerBound(int[] nums, int target) {
        int left = 0;
        int right = nums.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            // Keep the first index that could still contain target.
            if (nums[mid] >= target) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Binary Search classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Binary Search with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Binary Search optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    33,
    34,
    74,
    153,
    378
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 4
  },
  {
    slug: "binary-search-on-answer",
    name: "Binary Search on Answer",
    category: "Binary Search",
    description: "Binary Search on Answer is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "minimize maximum",
    "capacity within days",
    "smallest feasible value",
    "monotonic can function",
    "answer range not index range"
  ],
    cheatCode: "If the prompt says \"minimize maximum\", map it to Binary Search on Answer and write the invariant before code.",
    coreInvariant: "At every step, Binary Search on Answer keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Binary Search on Answer", String.raw`    public int minEatingSpeed(int[] piles, int hours) {
        int left = 1;
        int right = 1;
        for (int pile : piles) right = Math.max(right, pile);
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (canFinish(piles, hours, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    private boolean canFinish(int[] piles, int hours, int speed) {
        long used = 0;
        for (int pile : piles) {
            used += (pile + speed - 1L) / speed;
        }
        return used <= hours;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Binary Search on Answer classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Binary Search on Answer with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Binary Search on Answer optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    875,
    1011,
    410,
    1231,
    1482
  ],
    prerequisitePatterns: [
    "binary-search"
  ],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 5
  },
  {
    slug: "kadanes-algorithm",
    name: "Kadane's Algorithm",
    category: "DP",
    description: "Kadane's Algorithm is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "kadane's algorithm signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"kadane's algorithm signal\", map it to Kadane's Algorithm and write the invariant before code.",
    coreInvariant: "At every step, Kadane's Algorithm keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Kadane's Algorithm", String.raw`    public int maxSubArray(int[] nums) {
        int bestEndingHere = nums[0];
        int bestOverall = nums[0];
        for (int i = 1; i < nums.length; i++) {
            // Either extend the previous subarray or restart at i.
            bestEndingHere = Math.max(nums[i], bestEndingHere + nums[i]);
            bestOverall = Math.max(bestOverall, bestEndingHere);
        }
        return bestOverall;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Kadane's Algorithm classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Kadane's Algorithm with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Kadane's Algorithm optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    53,
    152,
    121,
    918,
    1749
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 6
  },
  {
    slug: "hashmap-frequency",
    name: "HashMap Frequency",
    category: "Arrays/Hash",
    description: "HashMap Frequency is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "count occurrences",
    "same multiset",
    "anagram grouping",
    "seen before",
    "complement lookup"
  ],
    cheatCode: "If the prompt says \"count occurrences\", map it to HashMap Frequency and write the invariant before code.",
    coreInvariant: "At every step, HashMap Frequency keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("HashMap Frequency", String.raw`    public List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String word : words) {
            int[] freq = new int[26];
            for (char c : word.toCharArray()) freq[c - 'a']++;
            String key = Arrays.toString(freq);
            groups.computeIfAbsent(key, ignored -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "HashMap Frequency classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "HashMap Frequency with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "HashMap Frequency optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    1,
    49,
    217,
    242,
    347
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 7
  },
  {
    slug: "stack-basic",
    name: "Stack Basics",
    category: "Stack/Queue",
    description: "Stack Basics is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "stack basics signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"stack basics signal\", map it to Stack Basics and write the invariant before code.",
    coreInvariant: "At every step, Stack Basics keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Stack Basics", String.raw`    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char open = stack.pop();
                if ((c == ')' && open != '(') || (c == ']' && open != '[') || (c == '}' && open != '{')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Stack Basics classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Stack Basics with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Stack Basics optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    20,
    71,
    150,
    155,
    224
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 8
  },
  {
    slug: "monotonic-stack",
    name: "Monotonic Stack",
    category: "Stack/Queue",
    description: "Monotonic Stack is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "next greater element",
    "nearest smaller",
    "histogram rectangle",
    "temperature wait",
    "pop weaker candidates"
  ],
    cheatCode: "If the prompt says \"next greater element\", map it to Monotonic Stack and write the invariant before code.",
    coreInvariant: "At every step, Monotonic Stack keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Monotonic Stack", String.raw`    public int[] dailyTemperatures(int[] temperatures) {
        int[] answer = new int[temperatures.length];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int day = 0; day < temperatures.length; day++) {
            while (!stack.isEmpty() && temperatures[day] > temperatures[stack.peek()]) {
                int colderDay = stack.pop();
                answer[colderDay] = day - colderDay;
            }
            stack.push(day);
        }
        return answer;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Monotonic Stack classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Monotonic Stack with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Monotonic Stack optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    42,
    84,
    739,
    853,
    901
  ],
    prerequisitePatterns: [
    "stack-basic"
  ],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 9
  },
  {
    slug: "monotonic-deque",
    name: "Monotonic Deque",
    category: "Stack/Queue",
    description: "Monotonic Deque is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "sliding window maximum",
    "front expires",
    "maintain best candidate",
    "window min max",
    "indices in deque"
  ],
    cheatCode: "If the prompt says \"sliding window maximum\", map it to Monotonic Deque and write the invariant before code.",
    coreInvariant: "At every step, Monotonic Deque keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Monotonic Deque", String.raw`    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] answer = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) deque.pollFirst();
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();
            deque.offerLast(i);
            if (i >= k - 1) answer[i - k + 1] = nums[deque.peekFirst()];
        }
        return answer;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Monotonic Deque classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Monotonic Deque with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Monotonic Deque optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    239,
    1438,
    862,
    1696,
    1425
  ],
    prerequisitePatterns: [
    "sliding-window",
    "monotonic-stack"
  ],
    estimatedDaysToMaster: 2,
    orderInRoadmap: 10
  },
  {
    slug: "recursion-backtracking",
    name: "Recursion & Backtracking",
    category: "Trees/Graphs",
    description: "Recursion & Backtracking is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "recursion & backtracking signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"recursion & backtracking signal\", map it to Recursion & Backtracking and write the invariant before code.",
    coreInvariant: "At every step, Recursion & Backtracking keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Recursion & Backtracking", String.raw`    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> answer = new ArrayList<>();
        buildSubsets(0, nums, new ArrayList<>(), answer);
        return answer;
    }

    private void buildSubsets(int index, int[] nums, List<Integer> path, List<List<Integer>> answer) {
        if (index == nums.length) {
            answer.add(new ArrayList<>(path));
            return;
        }
        buildSubsets(index + 1, nums, path, answer);
        path.add(nums[index]);
        buildSubsets(index + 1, nums, path, answer);
        path.remove(path.size() - 1);
    }`),
    timeComplexity: { notation: "O(V + E)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Recursion & Backtracking classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Recursion & Backtracking with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Recursion & Backtracking optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    39,
    46,
    78,
    79,
    90
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 11
  },
  {
    slug: "bfs",
    name: "Breadth-First Search",
    category: "Trees/Graphs",
    description: "Breadth-First Search is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "shortest unweighted path",
    "level order",
    "minimum steps",
    "multi-source spread",
    "queue by distance"
  ],
    cheatCode: "If the prompt says \"shortest unweighted path\", map it to Breadth-First Search and write the invariant before code.",
    coreInvariant: "At every step, Breadth-First Search keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Breadth-First Search", String.raw`    public int shortestPathBinaryMatrix(int[][] grid) {
        int n = grid.length;
        if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) return -1;
        int[][] dirs = {{1,0},{-1,0},{0,1},{0,-1},{1,1},{1,-1},{-1,1},{-1,-1}};
        Queue<int[]> queue = new ArrayDeque<>();
        queue.offer(new int[] {0, 0});
        grid[0][0] = 1;
        int distance = 1;
        while (!queue.isEmpty()) {
            for (int size = queue.size(); size > 0; size--) {
                int[] cell = queue.poll();
                if (cell[0] == n - 1 && cell[1] == n - 1) return distance;
                for (int[] d : dirs) {
                    int r = cell[0] + d[0], c = cell[1] + d[1];
                    if (r >= 0 && c >= 0 && r < n && c < n && grid[r][c] == 0) {
                        grid[r][c] = 1;
                        queue.offer(new int[] {r, c});
                    }
                }
            }
            distance++;
        }
        return -1;
    }`),
    timeComplexity: { notation: "O(V + E)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Breadth-First Search classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Breadth-First Search with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Breadth-First Search optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    102,
    127,
    200,
    994,
    1091
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 12
  },
  {
    slug: "dfs-tree",
    name: "DFS on Trees",
    category: "Trees/Graphs",
    description: "DFS on Trees is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "dfs on trees signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"dfs on trees signal\", map it to DFS on Trees and write the invariant before code.",
    coreInvariant: "At every step, DFS on Trees keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("DFS on Trees", String.raw`    private int diameter;

    public int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        height(root);
        return diameter;
    }

    private int height(TreeNode node) {
        if (node == null) return 0;
        int left = height(node.left);
        int right = height(node.right);
        // The best path through this node uses both child heights.
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "DFS on Trees classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "DFS on Trees with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "DFS on Trees optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    98,
    100,
    104,
    124,
    543
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 13
  },
  {
    slug: "dfs-graph",
    name: "DFS on Graphs",
    category: "Trees/Graphs",
    description: "DFS on Graphs is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "dfs on graphs signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"dfs on graphs signal\", map it to DFS on Graphs and write the invariant before code.",
    coreInvariant: "At every step, DFS on Graphs keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("DFS on Graphs", String.raw`    public int countComponents(int n, int[][] edges) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) graph.add(new ArrayList<>());
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        boolean[] seen = new boolean[n];
        int components = 0;
        for (int node = 0; node < n; node++) {
            if (!seen[node]) {
                components++;
                dfs(node, graph, seen);
            }
        }
        return components;
    }

    private void dfs(int node, List<List<Integer>> graph, boolean[] seen) {
        seen[node] = true;
        for (int next : graph.get(node)) if (!seen[next]) dfs(next, graph, seen);
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "DFS on Graphs classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "DFS on Graphs with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "DFS on Graphs optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    133,
    200,
    417,
    695,
    934
  ],
    prerequisitePatterns: [
    "dfs-tree"
  ],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 14
  },
  {
    slug: "topological-sort",
    name: "Topological Sort",
    category: "Trees/Graphs",
    description: "Topological Sort is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "course prerequisites",
    "dependency order",
    "directed acyclic graph",
    "indegree zero",
    "cycle prevents completion"
  ],
    cheatCode: "If the prompt says \"course prerequisites\", map it to Topological Sort and write the invariant before code.",
    coreInvariant: "At every step, Topological Sort keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Topological Sort", String.raw`    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) graph.add(new ArrayList<>());
        int[] indegree = new int[numCourses];
        for (int[] edge : prerequisites) {
            graph.get(edge[1]).add(edge[0]);
            indegree[edge[0]]++;
        }
        Queue<Integer> queue = new ArrayDeque<>();
        for (int course = 0; course < numCourses; course++) if (indegree[course] == 0) queue.offer(course);
        int taken = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            taken++;
            for (int next : graph.get(course)) if (--indegree[next] == 0) queue.offer(next);
        }
        return taken == numCourses;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Topological Sort classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Topological Sort with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Topological Sort optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    207,
    210,
    269,
    310,
    444
  ],
    prerequisitePatterns: [
    "dfs-graph",
    "bfs"
  ],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 15
  },
  {
    slug: "union-find",
    name: "Union Find",
    category: "Trees/Graphs",
    description: "Union Find is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "connected components",
    "same group query",
    "redundant edge",
    "dynamic connectivity",
    "merge sets"
  ],
    cheatCode: "If the prompt says \"connected components\", map it to Union Find and write the invariant before code.",
    coreInvariant: "At every step, Union Find keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Union Find", String.raw`    public int countComponents(int n, int[][] edges) {
        DSU dsu = new DSU(n);
        int components = n;
        for (int[] edge : edges) {
            if (dsu.union(edge[0], edge[1])) components--;
        }
        return components;
    }

    static class DSU {
        int[] parent;
        int[] rank;
        DSU(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) parent[i] = i;
        }
        int find(int x) {
            if (parent[x] != x) parent[x] = find(parent[x]);
            return parent[x];
        }
        boolean union(int a, int b) {
            int rootA = find(a), rootB = find(b);
            if (rootA == rootB) return false;
            if (rank[rootA] < rank[rootB]) parent[rootA] = rootB;
            else if (rank[rootA] > rank[rootB]) parent[rootB] = rootA;
            else { parent[rootB] = rootA; rank[rootA]++; }
            return true;
        }
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Union Find classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Union Find with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Union Find optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    128,
    261,
    684,
    721,
    947
  ],
    prerequisitePatterns: [
    "dfs-graph"
  ],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 16
  },
  {
    slug: "heaps",
    name: "Heaps",
    category: "Stack/Queue",
    description: "Heaps is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "heaps signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"heaps signal\", map it to Heaps and write the invariant before code.",
    coreInvariant: "At every step, Heaps keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Heaps", String.raw`    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int value : nums) {
            minHeap.offer(value);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.peek();
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Heaps classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Heaps with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Heaps optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    23,
    215,
    347,
    378,
    703
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 17
  },
  {
    slug: "merge-intervals",
    name: "Merge Intervals",
    category: "Greedy",
    description: "Merge Intervals is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "merge intervals signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"merge intervals signal\", map it to Merge Intervals and write the invariant before code.",
    coreInvariant: "At every step, Merge Intervals keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Merge Intervals", String.raw`    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
        List<int[]> merged = new ArrayList<>();
        for (int[] interval : intervals) {
            if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
                merged.add(new int[] { interval[0], interval[1] });
            } else {
                int[] last = merged.get(merged.size() - 1);
                last[1] = Math.max(last[1], interval[1]);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Merge Intervals classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Merge Intervals with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Merge Intervals optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    56,
    57,
    435,
    452,
    986
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 18
  },
  {
    slug: "two-heap",
    name: "Two Heap",
    category: "Stack/Queue",
    description: "Two Heap is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "two heap signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"two heap signal\", map it to Two Heap and write the invariant before code.",
    coreInvariant: "At every step, Two Heap keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Two Heap", String.raw`    private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
    private PriorityQueue<Integer> large = new PriorityQueue<>();

    public void addNum(int num) {
        if (small.isEmpty() || num <= small.peek()) small.offer(num);
        else large.offer(num);
        rebalance();
    }

    public double findMedian() {
        if (small.size() > large.size()) return small.peek();
        return (small.peek() + large.peek()) / 2.0;
    }

    private void rebalance() {
        if (small.size() > large.size() + 1) large.offer(small.poll());
        if (large.size() > small.size()) small.offer(large.poll());
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Two Heap classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Two Heap with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Two Heap optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    295,
    480,
    502,
    857,
    1825
  ],
    prerequisitePatterns: [
    "heaps"
  ],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 19
  },
  {
    slug: "dp-1d",
    name: "1D Dynamic Programming",
    category: "DP",
    description: "1D Dynamic Programming is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "1d dynamic programming signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"1d dynamic programming signal\", map it to 1D Dynamic Programming and write the invariant before code.",
    coreInvariant: "At every step, 1D Dynamic Programming keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("1D Dynamic Programming", String.raw`    public int coinChange(int[] coins, int amount) {
        int impossible = amount + 1;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, impossible);
        dp[0] = 0;
        for (int total = 1; total <= amount; total++) {
            for (int coin : coins) {
                if (total >= coin) dp[total] = Math.min(dp[total], dp[total - coin] + 1);
            }
        }
        return dp[amount] == impossible ? -1 : dp[amount];
    }`),
    timeComplexity: { notation: "O(n * state)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(state)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "1D Dynamic Programming classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "1D Dynamic Programming with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "1D Dynamic Programming optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    70,
    198,
    213,
    279,
    322
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 3,
    orderInRoadmap: 20
  },
  {
    slug: "dp-2d-grid",
    name: "2D Grid Dynamic Programming",
    category: "DP",
    description: "2D Grid Dynamic Programming is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "2d grid dynamic programming signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"2d grid dynamic programming signal\", map it to 2D Grid Dynamic Programming and write the invariant before code.",
    coreInvariant: "At every step, 2D Grid Dynamic Programming keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("2D Grid Dynamic Programming", String.raw`    public int uniquePathsWithObstacles(int[][] grid) {
        int rows = grid.length, cols = grid[0].length;
        int[][] dp = new int[rows][cols];
        if (grid[0][0] == 1) return 0;
        dp[0][0] = 1;
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 1) {
                    dp[r][c] = 0;
                } else {
                    if (r > 0) dp[r][c] += dp[r - 1][c];
                    if (c > 0) dp[r][c] += dp[r][c - 1];
                }
            }
        }
        return dp[rows - 1][cols - 1];
    }`),
    timeComplexity: { notation: "O(n * state)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(state)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "2D Grid Dynamic Programming classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "2D Grid Dynamic Programming with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "2D Grid Dynamic Programming optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    62,
    64,
    85,
    221,
    931
  ],
    prerequisitePatterns: [
    "dp-1d"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 21
  },
  {
    slug: "dp-strings",
    name: "String Dynamic Programming",
    category: "DP",
    description: "String Dynamic Programming is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "two strings",
    "subsequence",
    "edit distance",
    "palindrome interval",
    "prefix lengths"
  ],
    cheatCode: "If the prompt says \"two strings\", map it to String Dynamic Programming and write the invariant before code.",
    coreInvariant: "At every step, String Dynamic Programming keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("String Dynamic Programming", String.raw`    public int longestCommonSubsequence(String a, String b) {
        int[][] dp = new int[a.length() + 1][b.length() + 1];
        for (int i = 1; i <= a.length(); i++) {
            for (int j = 1; j <= b.length(); j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[a.length()][b.length()];
    }`),
    timeComplexity: { notation: "O(n * state)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(state)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "String Dynamic Programming classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "String Dynamic Programming with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "String Dynamic Programming optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    72,
    97,
    1143,
    1312,
    115
  ],
    prerequisitePatterns: [
    "dp-1d",
    "dp-2d-grid"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 22
  },
  {
    slug: "dp-knapsack",
    name: "Knapsack Dynamic Programming",
    category: "DP",
    description: "Knapsack Dynamic Programming is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "target sum subset",
    "capacity",
    "choose each item once",
    "ways to form amount",
    "0/1 decision"
  ],
    cheatCode: "If the prompt says \"target sum subset\", map it to Knapsack Dynamic Programming and write the invariant before code.",
    coreInvariant: "At every step, Knapsack Dynamic Programming keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Knapsack Dynamic Programming", String.raw`    public boolean canPartition(int[] nums) {
        int sum = 0;
        for (int value : nums) sum += value;
        if ((sum & 1) == 1) return false;
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int value : nums) {
            for (int total = target; total >= value; total--) {
                dp[total] = dp[total] || dp[total - value];
            }
        }
        return dp[target];
    }`),
    timeComplexity: { notation: "O(n * state)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(state)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Knapsack Dynamic Programming classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Knapsack Dynamic Programming with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Knapsack Dynamic Programming optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    416,
    494,
    518,
    1049,
    474
  ],
    prerequisitePatterns: [
    "dp-1d"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 23
  },
  {
    slug: "dp-trees",
    name: "Tree Dynamic Programming",
    category: "DP",
    description: "Tree Dynamic Programming is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "tree dynamic programming signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"tree dynamic programming signal\", map it to Tree Dynamic Programming and write the invariant before code.",
    coreInvariant: "At every step, Tree Dynamic Programming keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Tree Dynamic Programming", String.raw`    public int rob(TreeNode root) {
        int[] result = solve(root);
        return Math.max(result[0], result[1]);
    }

    private int[] solve(TreeNode node) {
        if (node == null) return new int[] {0, 0};
        int[] left = solve(node.left);
        int[] right = solve(node.right);
        int robThis = node.val + left[0] + right[0];
        int skipThis = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return new int[] {skipThis, robThis};
    }`),
    timeComplexity: { notation: "O(n * state)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(state)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Tree Dynamic Programming classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Tree Dynamic Programming with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Tree Dynamic Programming optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    337,
    437,
    543,
    124,
    968
  ],
    prerequisitePatterns: [
    "dfs-tree",
    "dp-1d"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 24
  },
  {
    slug: "greedy",
    name: "Greedy",
    category: "Greedy",
    description: "Greedy is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "greedy signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"greedy signal\", map it to Greedy and write the invariant before code.",
    coreInvariant: "At every step, Greedy keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Greedy", String.raw`    public boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            // The only state that matters is the farthest reachable index.
            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= nums.length - 1) return true;
        }
        return true;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Greedy classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Greedy with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Greedy optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    45,
    55,
    621,
    763,
    1235
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 25
  },
  {
    slug: "tries",
    name: "Tries",
    category: "Trees/Graphs",
    description: "Tries is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "prefix lookup",
    "dictionary words",
    "autocomplete",
    "startsWith",
    "word search pruning"
  ],
    cheatCode: "If the prompt says \"prefix lookup\", map it to Tries and write the invariant before code.",
    coreInvariant: "At every step, Tries keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Tries", String.raw`    static class Trie {
        Trie[] child = new Trie[26];
        boolean word;
    }

    private final Trie root = new Trie();

    public void insert(String word) {
        Trie node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.child[idx] == null) node.child[idx] = new Trie();
            node = node.child[idx];
        }
        node.word = true;
    }

    public boolean search(String word) {
        Trie node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.child[idx] == null) return false;
            node = node.child[idx];
        }
        return node.word;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Tries classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Tries with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Tries optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    208,
    211,
    212,
    421,
    648
  ],
    prerequisitePatterns: [
    "hashmap-frequency"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 26
  },
  {
    slug: "bit-manipulation",
    name: "Bit Manipulation",
    category: "Math/Bits",
    description: "Bit Manipulation is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "bit manipulation signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"bit manipulation signal\", map it to Bit Manipulation and write the invariant before code.",
    coreInvariant: "At every step, Bit Manipulation keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Bit Manipulation", String.raw`    public int singleNumber(int[] nums) {
        int answer = 0;
        for (int value : nums) {
            // Equal values cancel because x ^ x is zero.
            answer ^= value;
        }
        return answer;
    }

    public int countBitsFast(int n) {
        int[] bits = new int[n + 1];
        for (int i = 1; i <= n; i++) {
            bits[i] = bits[i >> 1] + (i & 1);
        }
        return bits[n];
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Bit Manipulation classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Bit Manipulation with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Bit Manipulation optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    136,
    190,
    191,
    268,
    338
  ],
    prerequisitePatterns: [],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 27
  },
  {
    slug: "fast-slow-pointers",
    name: "Fast & Slow Pointers",
    category: "Pointers",
    description: "Fast & Slow Pointers is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "linked list cycle",
    "middle node",
    "nth from end",
    "runner pointer",
    "cycle entry"
  ],
    cheatCode: "If the prompt says \"linked list cycle\", map it to Fast & Slow Pointers and write the invariant before code.",
    coreInvariant: "At every step, Fast & Slow Pointers keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Fast & Slow Pointers", String.raw`    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Fast & Slow Pointers classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Fast & Slow Pointers with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Fast & Slow Pointers optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    19,
    141,
    142,
    143,
    876
  ],
    prerequisitePatterns: [
    "two-pointers"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 28
  },
  {
    slug: "divide-conquer",
    name: "Divide and Conquer",
    category: "Arrays/Hash",
    description: "Divide and Conquer is the recognition pattern for problems where the brute force repeats the same structural decision. Use it to state the invariant first, then make each pointer move, queue operation, stack pop, or DP transition preserve that invariant.",
    triggerConditions: [
    "divide and conquer signal",
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ],
    cheatCode: "If the prompt says \"divide and conquer signal\", map it to Divide and Conquer and write the invariant before code.",
    coreInvariant: "At every step, Divide and Conquer keeps only states that can still become the optimal valid answer.",
    javaTemplate: buildJavaTemplate("Divide and Conquer", String.raw`    public int maxSubArrayDivideAndConquer(int[] nums) {
        return solve(nums, 0, nums.length - 1);
    }

    private int solve(int[] nums, int left, int right) {
        if (left == right) return nums[left];
        int mid = left + (right - left) / 2;
        int bestLeft = solve(nums, left, mid);
        int bestRight = solve(nums, mid + 1, right);
        int cross = bestCrossing(nums, left, mid, right);
        return Math.max(cross, Math.max(bestLeft, bestRight));
    }

    private int bestCrossing(int[] nums, int left, int mid, int right) {
        int sum = 0, leftBest = Integer.MIN_VALUE;
        for (int i = mid; i >= left; i--) { sum += nums[i]; leftBest = Math.max(leftBest, sum); }
        sum = 0;
        int rightBest = Integer.MIN_VALUE;
        for (int i = mid + 1; i <= right; i++) { sum += nums[i]; rightBest = Math.max(rightBest, sum); }
        return leftBest + rightBest;
    }`),
    timeComplexity: { notation: "O(n)", explanation: "The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used." },
    spaceComplexity: { notation: "O(n)", explanation: "Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant." },
    variants: [
    {
      "name": "Divide and Conquer classic",
      "whenToUse": "Use when the direct signal appears exactly in the prompt.",
      "keyDifference": "Keeps the base invariant visible."
    },
    {
      "name": "Divide and Conquer with counting",
      "whenToUse": "Use when duplicates, multiplicity, or number of ways matter.",
      "keyDifference": "Adds a frequency or DP count dimension."
    },
    {
      "name": "Divide and Conquer optimized",
      "whenToUse": "Use when the input limit rules out the obvious nested loop.",
      "keyDifference": "Compresses repeated work into one maintained state."
    }
  ],
    topMistakes: [
    {
      "mistake": "Starting implementation before naming the invariant.",
      "fix": "Write the invariant in one sentence and keep it beside the loop or recursion."
    },
    {
      "mistake": "Updating state in an order that uses the current element twice.",
      "fix": "Decide whether lookup happens before or after insertion and test the smallest duplicate case."
    },
    {
      "mistake": "Ignoring boundary cases such as empty input, one element, or all equal values.",
      "fix": "Dry run those three cases before submitting."
    },
    {
      "mistake": "Using the right pattern but returning the wrong state boundary.",
      "fix": "State whether the answer is current index, previous index, left boundary, or accumulated best."
    },
    {
      "mistake": "Forgetting to justify complexity from movement or state count.",
      "fix": "Explain how many times each pointer, node, edge, or DP cell is processed."
    }
  ],
    relatedProblems: [
    4,
    23,
    53,
    105,
    215
  ],
    prerequisitePatterns: [
    "recursion-backtracking"
  ],
    estimatedDaysToMaster: 4,
    orderInRoadmap: 29
  }
];

export const patterns = PATTERNS;
export const patternBySlug = Object.fromEntries(PATTERNS.map((pattern) => [pattern.slug, pattern])) as Record<string, Pattern>;
