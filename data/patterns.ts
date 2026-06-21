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
  pythonTemplate: string;
  cppTemplate: string;
  cTemplate: string;
  javascriptTemplate: string;
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
    description: "Two pointers keeps two indices into an array or string and moves them based on a condition, eliminating the need for a nested loop. Use it when the brute force is O(n²) and the input is sorted or you can exploit some ordering property.",
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
    pythonTemplate: `def two_pointers(arr, target):
    left, right = 0, len(arr) - 1
    result = 0
    while left < right:
        current = arr[left] + arr[right]
        if current == target:
            result = max(result, right - left)
            left += 1
            right -= 1
        elif current < target:
            left += 1
        else:
            right -= 1
    return result`,
    cppTemplate: `int twoPointers(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    int result = 0;
    while (left < right) {
        int cur = arr[left] + arr[right];
        if (cur == target) { result = max(result, right - left); left++; right--; }
        else if (cur < target) left++;
        else right--;
    }
    return result;
}`,
    cTemplate: `int twoPointers(int* arr, int n, int target) {
    int left = 0, right = n - 1, result = 0;
    while (left < right) {
        int cur = arr[left] + arr[right];
        if (cur == target) { if (right-left>result) result=right-left; left++; right--; }
        else if (cur < target) left++;
        else right--;
    }
    return result;
}`,
    javascriptTemplate: `function twoPointers(arr, target) {
    let left = 0, right = arr.length - 1, result = 0;
    while (left < right) {
        const cur = arr[left] + arr[right];
        if (cur === target) { result = Math.max(result, right - left); left++; right--; }
        else if (cur < target) left++;
        else right--;
    }
    return result;
}`,
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
    description: "Sliding window maintains a contiguous subarray or substring and expands or shrinks it by moving the right or left boundary. The key insight is that you never need to recompute the window from scratch — just update it incrementally as the boundary moves.",
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
    pythonTemplate: `def sliding_window(s, k):
    count = {}
    left = 0
    best = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        while len(count) > k:
            count[s[left]] -= 1
            if count[s[left]] == 0:
                del count[s[left]]
            left += 1
        best = max(best, right - left + 1)
    return best`,
    cppTemplate: `int slidingWindow(string s, int k) {
    unordered_map<char,int> count;
    int left = 0, best = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right]]++;
        while ((int)count.size() > k) {
            if (--count[s[left]] == 0) count.erase(s[left]);
            left++;
        }
        best = max(best, right - left + 1);
    }
    return best;
}`,
    cTemplate: `int slidingWindow(char* s, int n, int k) {
    int count[128] = {0}, distinct = 0, left = 0, best = 0;
    for (int r = 0; r < n; r++) {
        if (count[(int)s[r]]++ == 0) distinct++;
        while (distinct > k) {
            if (--count[(int)s[left]] == 0) distinct--;
            left++;
        }
        if (r - left + 1 > best) best = r - left + 1;
    }
    return best;
}`,
    javascriptTemplate: `function slidingWindow(s, k) {
    const count = new Map();
    let left = 0, best = 0;
    for (let right = 0; right < s.length; right++) {
        count.set(s[right], (count.get(s[right]) || 0) + 1);
        while (count.size > k) {
            count.set(s[left], count.get(s[left]) - 1);
            if (count.get(s[left]) === 0) count.delete(s[left]);
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}`,
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
    description: "Prefix sum precomputes cumulative totals so that any range sum query becomes O(1) instead of O(n). If a problem asks for the sum of a subarray many times, or asks whether a subarray sum equals a target, prefix sum is almost always the right tool.",
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
    pythonTemplate: `def prefix_sum(nums, queries):
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i + 1] = prefix[i] + n
    return [prefix[r + 1] - prefix[l] for l, r in queries]`,
    cppTemplate: `vector<int> prefixSum(vector<int>& nums, vector<pair<int,int>>& q) {
    int n = nums.size();
    vector<int> pre(n+1,0);
    for (int i=0;i<n;i++) pre[i+1]=pre[i]+nums[i];
    vector<int> res;
    for (auto& [l,r]:q) res.push_back(pre[r+1]-pre[l]);
    return res;
}`,
    cTemplate: `void prefixSum(int* nums, int n, int* out, int* ql, int* qr, int q) {
    int* pre = calloc(n+1,4);
    for (int i=0;i<n;i++) pre[i+1]=pre[i]+nums[i];
    for (int i=0;i<q;i++) out[i]=pre[qr[i]+1]-pre[ql[i]];
    free(pre);
}`,
    javascriptTemplate: `function prefixSum(nums, queries) {
    const pre = new Array(nums.length+1).fill(0);
    for (let i=0;i<nums.length;i++) pre[i+1]=pre[i]+nums[i];
    return queries.map(([l,r])=>pre[r+1]-pre[l]);
}`,
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
    description: "Binary search eliminates half the search space on every step, giving O(log n) instead of O(n) for finding a target in a sorted collection. The key is identifying the monotonic property — what makes the left half invalid and the right half valid, or vice versa.",
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
    pythonTemplate: `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1`,
    cppTemplate: `int binarySearch(vector<int>& nums, int target) {
    int l=0, r=nums.size()-1;
    while (l<=r) {
        int mid=l+(r-l)/2;
        if (nums[mid]==target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`,
    cTemplate: `int binarySearch(int* nums, int n, int target) {
    int l=0,r=n-1;
    while (l<=r) {
        int mid=l+(r-l)/2;
        if (nums[mid]==target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`,
    javascriptTemplate: `function binarySearch(nums, target) {
    let l=0, r=nums.length-1;
    while (l<=r) {
        const mid=l+Math.floor((r-l)/2);
        if (nums[mid]===target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`,
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
    description: "Binary search on the answer space applies binary search not to the input array but to the range of possible answers. If you can write a function that checks \"is answer X feasible?\" in O(n), you can binary search over all possible answers in O(n log n).",
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
    pythonTemplate: `def bs_on_answer(nums, limit):
    def feasible(mid):
        count, total = 1, 0
        for n in nums:
            if total+n>mid: count+=1; total=0
            total+=n
        return count<=limit
    left, right = max(nums), sum(nums)
    while left<right:
        mid=left+(right-left)//2
        if feasible(mid): right=mid
        else: left=mid+1
    return left`,
    cppTemplate: `int bsOnAnswer(vector<int>& nums, int limit) {
    auto ok=[&](int mid){
        int cnt=1,tot=0;
        for (int n:nums){if(tot+n>mid){cnt++;tot=0;}tot+=n;}
        return cnt<=limit;
    };
    int l=*max_element(nums.begin(),nums.end());
    int r=accumulate(nums.begin(),nums.end(),0);
    while(l<r){int m=l+(r-l)/2;if(ok(m))r=m;else l=m+1;}
    return l;
}`,
    cTemplate: `int bsOnAnswer(int* nums, int n, int limit) {
    int mx=0,sm=0;
    for(int i=0;i<n;i++){if(nums[i]>mx)mx=nums[i];sm+=nums[i];}
    int l=mx,r=sm;
    while(l<r){
        int m=l+(r-l)/2,cnt=1,tot=0;
        for(int i=0;i<n;i++){if(tot+nums[i]>m){cnt++;tot=0;}tot+=nums[i];}
        if(cnt<=limit)r=m;else l=m+1;
    }
    return l;
}`,
    javascriptTemplate: `function bsOnAnswer(nums, limit) {
    const ok=mid=>{
        let cnt=1,tot=0;
        for(const n of nums){if(tot+n>mid){cnt++;tot=0;}tot+=n;}
        return cnt<=limit;
    };
    let l=Math.max(...nums),r=nums.reduce((a,b)=>a+b,0);
    while(l<r){const m=l+Math.floor((r-l)/2);if(ok(m))r=m;else l=m+1;}
    return l;
}`,
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
    description: "Kadane's algorithm finds the maximum subarray sum in O(n) by tracking a local maximum that resets to zero whenever it goes negative. It is the gateway to 1D DP — the recurrence dp[i] = max(nums[i], dp[i-1] + nums[i]) is the core idea behind most linear DP problems.",
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
    pythonTemplate: `def kadanes(nums):
    best=cur=nums[0]
    for n in nums[1:]:
        cur=max(n,cur+n)
        best=max(best,cur)
    return best`,
    cppTemplate: `int kadanes(vector<int>& nums) {
    int best=nums[0],cur=nums[0];
    for(int i=1;i<(int)nums.size();i++){
        cur=max(nums[i],cur+nums[i]);
        best=max(best,cur);
    }
    return best;
}`,
    cTemplate: `int kadanes(int* nums, int n) {
    int best=nums[0],cur=nums[0];
    for(int i=1;i<n;i++){
        cur=nums[i]>cur+nums[i]?nums[i]:cur+nums[i];
        if(cur>best)best=cur;
    }
    return best;
}`,
    javascriptTemplate: `function kadanes(nums) {
    let best=nums[0],cur=nums[0];
    for(let i=1;i<nums.length;i++){
        cur=Math.max(nums[i],cur+nums[i]);
        best=Math.max(best,cur);
    }
    return best;
}`,
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
    description: "HashMap frequency trading uses a hash map to count occurrences or store previously seen values, converting O(n²) lookup problems into O(n). The pattern is: iterate once, store in map, look up the complement or pair on each step.",
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
    pythonTemplate: `def two_sum(nums, target):
    seen={}
    for i,n in enumerate(nums):
        if target-n in seen: return [seen[target-n],i]
        seen[n]=i
    return []`,
    cppTemplate: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int,int> seen;
    for(int i=0;i<(int)nums.size();i++){
        int c=target-nums[i];
        if(seen.count(c)) return {seen[c],i};
        seen[nums[i]]=i;
    }
    return {};
}`,
    cTemplate: `void twoSum(int* nums, int n, int target, int* out) {
    for(int i=0;i<n;i++)
        for(int j=i+1;j<n;j++)
            if(nums[i]+nums[j]==target){out[0]=i;out[1]=j;return;}
}`,
    javascriptTemplate: `function twoSum(nums, target) {
    const seen=new Map();
    for(let i=0;i<nums.length;i++){
        const c=target-nums[i];
        if(seen.has(c)) return [seen.get(c),i];
        seen.set(nums[i],i);
    }
    return [];
}`,
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
    description: "A stack solves problems that require you to remember previous context and process it in reverse order (LIFO). Classic uses: matching brackets, evaluating expressions, and tracking the most recent valid state. If the problem involves 'undo' or 'most recent', think stack.",
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
    pythonTemplate: `def is_valid(s):
    stack=[]
    pairs={')':'(','}':'{',']':'['}
    for c in s:
        if c in '([{': stack.append(c)
        elif not stack or stack[-1]!=pairs[c]: return False
        else: stack.pop()
    return not stack`,
    cppTemplate: `bool isValid(string s) {
    stack<char> st;
    unordered_map<char,char> p={{')','{'},{'(','{'},{'}',' '}};
    // corrected pairs
    unordered_map<char,char> pairs={{')',('(')} ,{'}','{'},{']','['}};
    for(char c:s){
        if(c=='('||c=='{'||c=='[') st.push(c);
        else if(st.empty()||st.top()!=pairs[c]) return false;
        else st.pop();
    }
    return st.empty();
}`,
    cTemplate: `bool isValid(char* s) {
    char stack[10001];int top=-1;
    for(int i=0;s[i];i++){
        char c=s[i];
        if(c=='('||c=='{'||c=='[') stack[++top]=c;
        else{
            if(top<0) return false;
            char t=stack[top--];
            if((c==')'&&t!='(')||(c=='}'&&t!='{')||(c==']'&&t!='[')) return false;
        }
    }
    return top==-1;
}`,
    javascriptTemplate: `function isValid(s) {
    const stack=[], pairs={')':'(','}':'{',']':'['};
    for(const c of s){
        if('([{'.includes(c)) stack.push(c);
        else if(!stack.length||stack[stack.length-1]!==pairs[c]) return false;
        else stack.pop();
    }
    return stack.length===0;
}`,
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
    description: "A monotonic stack maintains elements in strictly increasing or decreasing order by popping elements that violate the order when a new element arrives. Use it for 'next greater element', 'previous smaller element', and histogram problems like Trapping Rain Water.",
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
    pythonTemplate: `def next_greater(nums):
    result=[-1]*len(nums)
    stack=[]
    for i in range(len(nums)):
        while stack and nums[stack[-1]]<nums[i]:
            result[stack.pop()]=nums[i]
        stack.append(i)
    return result`,
    cppTemplate: `vector<int> nextGreater(vector<int>& nums) {
    int n=nums.size();
    vector<int> res(n,-1);
    stack<int> st;
    for(int i=0;i<n;i++){
        while(!st.empty()&&nums[st.top()]<nums[i]){res[st.top()]=nums[i];st.pop();}
        st.push(i);
    }
    return res;
}`,
    cTemplate: `void nextGreater(int* nums, int n, int* result) {
    int* st=malloc(n*4);int top=-1;
    for(int i=0;i<n;i++) result[i]=-1;
    for(int i=0;i<n;i++){
        while(top>=0&&nums[st[top]]<nums[i]) result[st[top--]]=nums[i];
        st[++top]=i;
    }
    free(st);
}`,
    javascriptTemplate: `function nextGreater(nums) {
    const res=new Array(nums.length).fill(-1),st=[];
    for(let i=0;i<nums.length;i++){
        while(st.length&&nums[st[st.length-1]]<nums[i]) res[st.pop()]=nums[i];
        st.push(i);
    }
    return res;
}`,
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
    description: "A monotonic deque extends the monotonic stack to a double-ended queue, enabling O(1) window maximum or minimum queries as the window slides. This is the pattern behind the Sliding Window Maximum problem and most range maximum queries.",
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
    pythonTemplate: `from collections import deque
def max_sliding_window(nums, k):
    dq=deque()
    res=[]
    for i in range(len(nums)):
        while dq and dq[0]<i-k+1: dq.popleft()
        while dq and nums[dq[-1]]<nums[i]: dq.pop()
        dq.append(i)
        if i>=k-1: res.append(nums[dq[0]])
    return res`,
    cppTemplate: `vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    deque<int> dq;
    vector<int> res;
    for(int i=0;i<(int)nums.size();i++){
        while(!dq.empty()&&dq.front()<i-k+1) dq.pop_front();
        while(!dq.empty()&&nums[dq.back()]<nums[i]) dq.pop_back();
        dq.push_back(i);
        if(i>=k-1) res.push_back(nums[dq.front()]);
    }
    return res;
}`,
    cTemplate: `void maxSlidingWindow(int* nums, int n, int k, int* res, int* sz) {
    int* dq=malloc(n*4);int fr=0,bk=0;*sz=0;
    for(int i=0;i<n;i++){
        while(fr<bk&&dq[fr]<i-k+1) fr++;
        while(fr<bk&&nums[dq[bk-1]]<nums[i]) bk--;
        dq[bk++]=i;
        if(i>=k-1) res[(*sz)++]=nums[dq[fr]];
    }
    free(dq);
}`,
    javascriptTemplate: `function maxSlidingWindow(nums, k) {
    const dq=[],res=[];
    for(let i=0;i<nums.length;i++){
        while(dq.length&&dq[0]<i-k+1) dq.shift();
        while(dq.length&&nums[dq[dq.length-1]]<nums[i]) dq.pop();
        dq.push(i);
        if(i>=k-1) res.push(nums[dq[0]]);
    }
    return res;
}`,
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
    description: "Backtracking explores all possible solutions by building them incrementally and abandoning a path the moment it becomes invalid. The template: choose, recurse, unchoose. Use it for permutations, combinations, subsets, and constraint-satisfaction problems like N-Queens.",
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
    pythonTemplate: `def subsets(nums):
    res=[]
    def bt(start,cur):
        res.append(list(cur))
        for i in range(start,len(nums)):
            cur.append(nums[i]);bt(i+1,cur);cur.pop()
    bt(0,[])
    return res`,
    cppTemplate: `vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> res;
    vector<int> cur;
    function<void(int)> bt=[&](int s){
        res.push_back(cur);
        for(int i=s;i<(int)nums.size();i++){
            cur.push_back(nums[i]);bt(i+1);cur.pop_back();
        }
    };
    bt(0);
    return res;
}`,
    cTemplate: `void subsets(int* nums, int n, int** out, int* sz) {
    *sz=1<<n;
    for(int mask=0;mask<*sz;mask++){
        int idx=0;
        for(int i=0;i<n;i++) if(mask&(1<<i)) out[mask][idx++]=nums[i];
    }
}`,
    javascriptTemplate: `function subsets(nums) {
    const res=[];
    function bt(start,cur) {
        res.push([...cur]);
        for(let i=start;i<nums.length;i++){
            cur.push(nums[i]);bt(i+1,cur);cur.pop();
        }
    }
    bt(0,[]);
    return res;
}`,
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
    description: "BFS explores a graph level by level using a queue, making it optimal for finding the shortest path in an unweighted graph. If a problem asks for minimum steps, minimum moves, or the nearest node satisfying a condition, BFS is almost always correct.",
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
    pythonTemplate: `from collections import deque
def bfs(graph, start, target):
    queue=deque([(start,0)])
    visited={start}
    while queue:
        node,dist=queue.popleft()
        if node==target: return dist
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb)
                queue.append((nb,dist+1))
    return -1`,
    cppTemplate: `int bfs(unordered_map<int,vector<int>>& g, int s, int t) {
    queue<pair<int,int>> q;
    unordered_set<int> vis;
    q.push({s,0});vis.insert(s);
    while(!q.empty()){
        auto [node,d]=q.front();q.pop();
        if(node==t) return d;
        for(int nb:g[node]) if(!vis.count(nb)){vis.insert(nb);q.push({nb,d+1});}
    }
    return -1;
}`,
    cTemplate: `int bfs(int** g, int* sz, int s, int t, int n) {
    int vis[1000]={0},dist[1000]={0},q[1000],fr=0,bk=0;
    vis[s]=1;q[bk++]=s;
    while(fr<bk){
        int node=q[fr++];
        if(node==t) return dist[node];
        for(int i=0;i<sz[node];i++){
            int nb=g[node][i];
            if(!vis[nb]){vis[nb]=1;dist[nb]=dist[node]+1;q[bk++]=nb;}
        }
    }
    return -1;
}`,
    javascriptTemplate: `function bfs(graph, start, target) {
    const queue=[[start,0]],visited=new Set([start]);
    let head=0;
    while(head<queue.length){
        const [node,dist]=queue[head++];
        if(node===target) return dist;
        for(const nb of (graph[node]||[])){
            if(!visited.has(nb)){visited.add(nb);queue.push([nb,dist+1]);}
        }
    }
    return -1;
}`,
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
    description: "DFS on trees uses recursion to visit every node exactly once, returning values up the call stack. The three traversal orders (preorder, inorder, postorder) each have specific use cases: inorder for BST, preorder for serialisation, postorder for subtree aggregation.",
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
    pythonTemplate: `def max_depth(root):
    if not root: return 0
    return 1+max(max_depth(root.left),max_depth(root.right))

def inorder(root,result=[]):
    if not root: return result
    inorder(root.left,result)
    result.append(root.val)
    inorder(root.right,result)
    return result`,
    cppTemplate: `int maxDepth(TreeNode* root) {
    if(!root) return 0;
    return 1+max(maxDepth(root->left),maxDepth(root->right));
}
void inorder(TreeNode* root,vector<int>& res) {
    if(!root) return;
    inorder(root->left,res);res.push_back(root->val);inorder(root->right,res);
}`,
    cTemplate: `int maxDepth(struct TreeNode* root) {
    if(!root) return 0;
    int l=maxDepth(root->left),r=maxDepth(root->right);
    return 1+(l>r?l:r);
}`,
    javascriptTemplate: `function maxDepth(root) {
    if(!root) return 0;
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
}
function inorder(root,res=[]) {
    if(!root) return res;
    inorder(root.left,res);res.push(root.val);inorder(root.right,res);
    return res;
}`,
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
    description: "DFS on graphs adds a visited set to tree DFS to handle cycles and disconnected components. Use it for connected components, cycle detection, path existence, and flood fill problems. Always initialise the visited set before the first DFS call.",
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
    pythonTemplate: `def count_components(n, edges):
    g=[[] for _ in range(n)]
    for u,v in edges: g[u].append(v);g[v].append(u)
    vis=set()
    def dfs(node):
        vis.add(node)
        for nb in g[node]:
            if nb not in vis: dfs(nb)
    cnt=0
    for i in range(n):
        if i not in vis: dfs(i);cnt+=1
    return cnt`,
    cppTemplate: `int countComponents(int n, vector<vector<int>>& edges) {
    vector<vector<int>> g(n);
    for(auto& e:edges){g[e[0]].push_back(e[1]);g[e[1]].push_back(e[0]);}
    vector<bool> vis(n,false);
    function<void(int)> dfs=[&](int u){vis[u]=true;for(int v:g[u])if(!vis[v])dfs(v);};
    int cnt=0;
    for(int i=0;i<n;i++) if(!vis[i]){dfs(i);cnt++;}
    return cnt;
}`,
    cTemplate: `void dfs(int** g, int* sz, int* vis, int u) {
    vis[u]=1;
    for(int i=0;i<sz[u];i++) if(!vis[g[u][i]]) dfs(g,sz,vis,g[u][i]);
}
int countComponents(int n) {
    int vis[1000]={0},cnt=0;
    for(int i=0;i<n;i++) if(!vis[i]){dfs(NULL,NULL,vis,i);cnt++;}
    return cnt;
}`,
    javascriptTemplate: `function countComponents(n, edges) {
    const g=Array.from({length:n},()=>[]);
    for(const [u,v] of edges){g[u].push(v);g[v].push(u);}
    const vis=new Set();
    const dfs=u=>{vis.add(u);for(const v of g[u])if(!vis.has(v))dfs(v);};
    let cnt=0;
    for(let i=0;i<n;i++) if(!vis.has(i)){dfs(i);cnt++;}
    return cnt;
}`,
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
    description: "Topological sort orders nodes in a DAG such that every edge points from earlier to later. Use Kahn's algorithm (BFS with in-degree tracking) for most cases, or DFS with a finish stack. The canonical problem is Course Schedule — any dependency ordering problem fits.",
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
    pythonTemplate: `from collections import deque
def topo_sort(n, prereqs):
    g=[[] for _ in range(n)]
    ind=[0]*n
    for a,b in prereqs: g[b].append(a);ind[a]+=1
    q=deque(i for i in range(n) if ind[i]==0)
    order=[]
    while q:
        u=q.popleft();order.append(u)
        for v in g[u]:
            ind[v]-=1
            if ind[v]==0: q.append(v)
    return order if len(order)==n else []`,
    cppTemplate: `vector<int> topoSort(int n, vector<vector<int>>& p) {
    vector<vector<int>> g(n);vector<int> ind(n,0);
    for(auto& e:p){g[e[1]].push_back(e[0]);ind[e[0]]++;}
    queue<int> q;
    for(int i=0;i<n;i++) if(ind[i]==0) q.push(i);
    vector<int> order;
    while(!q.empty()){
        int u=q.front();q.pop();order.push_back(u);
        for(int v:g[u]) if(--ind[v]==0) q.push(v);
    }
    return order.size()==n?order:vector<int>();
}`,
    cTemplate: `void topoSort(int n, int* result, int* sz) {
    int ind[200]={0};
    int q[200],fr=0,bk=0;*sz=0;
    for(int i=0;i<n;i++) if(ind[i]==0) q[bk++]=i;
    while(fr<bk) result[(*sz)++]=q[fr++];
}`,
    javascriptTemplate: `function topoSort(n, prereqs) {
    const g=Array.from({length:n},()=>[]),ind=new Array(n).fill(0);
    for(const [a,b] of prereqs){g[b].push(a);ind[a]++;}
    const q=[],order=[];
    for(let i=0;i<n;i++) if(ind[i]===0) q.push(i);
    let head=0;
    while(head<q.length){
        const u=q[head++];order.push(u);
        for(const v of g[u]) if(--ind[v]===0) q.push(v);
    }
    return order.length===n?order:[];
}`,
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
    description: "Union Find (DSU) tracks which elements belong to the same connected component using a parent array with path compression and union by rank. Faster than BFS/DFS for repeated connectivity queries on a dynamic graph. Use it for Redundant Connection and Friend Circles.",
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
    pythonTemplate: `class UnionFind:
    def __init__(self,n):
        self.parent=list(range(n));self.rank=[0]*n
    def find(self,x):
        if self.parent[x]!=x: self.parent[x]=self.find(self.parent[x])
        return self.parent[x]
    def union(self,x,y):
        px,py=self.find(x),self.find(y)
        if px==py: return False
        if self.rank[px]<self.rank[py]: px,py=py,px
        self.parent[py]=px
        if self.rank[px]==self.rank[py]: self.rank[px]+=1
        return True`,
    cppTemplate: `struct UF {
    vector<int> p,r;
    UF(int n):p(n),r(n,0){iota(p.begin(),p.end(),0);}
    int find(int x){return p[x]==x?x:p[x]=find(p[x]);}
    bool unite(int x,int y){
        int px=find(x),py=find(y);
        if(px==py) return false;
        if(r[px]<r[py]) swap(px,py);
        p[py]=px;if(r[px]==r[py])r[px]++;
        return true;
    }
};`,
    cTemplate: `int par[10001],rnk[10001];
void init(int n){for(int i=0;i<n;i++){par[i]=i;rnk[i]=0;}}
int find(int x){return par[x]==x?x:(par[x]=find(par[x]));}
bool unite(int x,int y){
    int px=find(x),py=find(y);
    if(px==py)return false;
    if(rnk[px]<rnk[py]){int t=px;px=py;py=t;}
    par[py]=px;if(rnk[px]==rnk[py])rnk[px]++;
    return true;
}`,
    javascriptTemplate: `class UnionFind {
    constructor(n){this.p=Array.from({length:n},(_,i)=>i);this.r=new Array(n).fill(0);}
    find(x){if(this.p[x]!==x)this.p[x]=this.find(this.p[x]);return this.p[x];}
    union(x,y){
        let px=this.find(x),py=this.find(y);
        if(px===py)return false;
        if(this.r[px]<this.r[py])[px,py]=[py,px];
        this.p[py]=px;if(this.r[px]===this.r[py])this.r[px]++;
        return true;
    }
}`,
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
    description: "A heap (priority queue) gives O(log n) insert and O(1) peek at the min or max element. The canonical patterns: K-th largest element, merge K sorted lists, task scheduling, and the top-K frequency pattern. Java's PriorityQueue is a min-heap by default.",
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
    pythonTemplate: `import heapq
def kth_largest(nums,k):
    heap=[]
    for n in nums:
        heapq.heappush(heap,n)
        if len(heap)>k: heapq.heappop(heap)
    return heap[0]`,
    cppTemplate: `int kthLargest(vector<int>& nums,int k){
    priority_queue<int,vector<int>,greater<int>> pq;
    for(int n:nums){pq.push(n);if((int)pq.size()>k)pq.pop();}
    return pq.top();
}`,
    cTemplate: `void heapify(int* h,int n,int i){
    int s=i,l=2*i+1,r=2*i+2;
    if(l<n&&h[l]<h[s])s=l;
    if(r<n&&h[r]<h[s])s=r;
    if(s!=i){int t=h[i];h[i]=h[s];h[s]=t;heapify(h,n,s);}
}
int kthLargest(int* nums,int n,int k){
    int* h=malloc(k*4);
    for(int i=0;i<k;i++)h[i]=nums[i];
    for(int i=k/2-1;i>=0;i--)heapify(h,k,i);
    for(int i=k;i<n;i++)if(nums[i]>h[0]){h[0]=nums[i];heapify(h,k,0);}
    int r=h[0];free(h);return r;
}`,
    javascriptTemplate: `function kthLargest(nums,k){
    const heap=nums.slice(0,k).sort((a,b)=>a-b);
    for(let i=k;i<nums.length;i++){
        if(nums[i]>heap[0]){heap[0]=nums[i];heap.sort((a,b)=>a-b);}
    }
    return heap[0];
}`,
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
    description: "Merge intervals sorts intervals by start time and then greedily merges overlapping ones. The key condition: if the current interval's start <= previous interval's end, merge them. Used for meeting rooms, calendar conflicts, and CPU burst scheduling.",
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
    pythonTemplate: `def merge_intervals(intervals):
    intervals.sort(key=lambda x:x[0])
    merged=[intervals[0]]
    for s,e in intervals[1:]:
        if s<=merged[-1][1]: merged[-1][1]=max(merged[-1][1],e)
        else: merged.append([s,e])
    return merged`,
    cppTemplate: `vector<vector<int>> merge(vector<vector<int>>& iv){
    sort(iv.begin(),iv.end());
    vector<vector<int>> res={iv[0]};
    for(int i=1;i<(int)iv.size();i++){
        if(iv[i][0]<=res.back()[1]) res.back()[1]=max(res.back()[1],iv[i][1]);
        else res.push_back(iv[i]);
    }
    return res;
}`,
    cTemplate: `void mergeIv(int** iv,int n,int** out,int* sz){
    // sort by start externally
    *sz=0;
    out[*sz][0]=iv[0][0];out[(*sz)++][1]=iv[0][1];
    for(int i=1;i<n;i++){
        if(iv[i][0]<=out[*sz-1][1]){if(iv[i][1]>out[*sz-1][1])out[*sz-1][1]=iv[i][1];}
        else{out[*sz][0]=iv[i][0];out[(*sz)++][1]=iv[i][1];}
    }
}`,
    javascriptTemplate: `function merge(intervals){
    intervals.sort((a,b)=>a[0]-b[0]);
    const res=[intervals[0]];
    for(let i=1;i<intervals.length;i++){
        const [s,e]=intervals[i];
        if(s<=res[res.length-1][1]) res[res.length-1][1]=Math.max(res[res.length-1][1],e);
        else res.push([s,e]);
    }
    return res;
}`,
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
    description: "Two heap maintains a max-heap of the lower half and a min-heap of the upper half, balancing them after every insertion to keep the median accessible in O(1). Used for Find Median from Data Stream and Sliding Window Median.",
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
    pythonTemplate: `import heapq
class MedianFinder:
    def __init__(self):
        self.lo=[]  # max-heap (negate)
        self.hi=[]  # min-heap
    def add_num(self,num):
        heapq.heappush(self.lo,-num)
        heapq.heappush(self.hi,-heapq.heappop(self.lo))
        if len(self.hi)>len(self.lo):
            heapq.heappush(self.lo,-heapq.heappop(self.hi))
    def find_median(self):
        if len(self.lo)>len(self.hi): return -self.lo[0]
        return (-self.lo[0]+self.hi[0])/2.0`,
    cppTemplate: `class MedianFinder {
    priority_queue<int> lo;
    priority_queue<int,vector<int>,greater<int>> hi;
public:
    void addNum(int num){
        lo.push(num);hi.push(lo.top());lo.pop();
        if(hi.size()>lo.size()){lo.push(hi.top());hi.pop();}
    }
    double findMedian(){
        return lo.size()>hi.size()?lo.top():(lo.top()+hi.top())/2.0;
    }
};`,
    cTemplate: `// Simplified sort-based median for C
double findMedian(int* nums, int n){
    // In production: maintain two heaps
    // Here: sort and pick middle
    return n%2 ? nums[n/2] : (nums[n/2-1]+nums[n/2])/2.0;
}`,
    javascriptTemplate: `class MedianFinder {
    constructor(){this.lo=[];this.hi=[];}
    addNum(num){
        this.lo.push(num);this.lo.sort((a,b)=>b-a);
        this.hi.push(this.lo.shift());this.hi.sort((a,b)=>a-b);
        if(this.hi.length>this.lo.length){this.lo.unshift(this.hi.shift());this.lo.sort((a,b)=>b-a);}
    }
    findMedian(){
        return this.lo.length>this.hi.length?this.lo[0]:(this.lo[0]+this.hi[0])/2;
    }
}`,
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
    description: "1D DP solves problems with optimal substructure where the answer at position i depends only on previous positions. The template: define dp[i], write the recurrence, initialise base cases. Classic problems: Fibonacci, Climbing Stairs, House Robber, Decode Ways.",
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
    pythonTemplate: `def house_robber(nums):
    if not nums: return 0
    if len(nums)==1: return nums[0]
    dp=[0]*len(nums)
    dp[0]=nums[0];dp[1]=max(nums[0],nums[1])
    for i in range(2,len(nums)):
        dp[i]=max(dp[i-1],dp[i-2]+nums[i])
    return dp[-1]`,
    cppTemplate: `int houseRobber(vector<int>& nums){
    int n=nums.size();
    if(n==1) return nums[0];
    vector<int> dp(n);
    dp[0]=nums[0];dp[1]=max(nums[0],nums[1]);
    for(int i=2;i<n;i++) dp[i]=max(dp[i-1],dp[i-2]+nums[i]);
    return dp[n-1];
}`,
    cTemplate: `int houseRobber(int* nums,int n){
    if(n==1) return nums[0];
    int p2=nums[0],p1=nums[0]>nums[1]?nums[0]:nums[1];
    for(int i=2;i<n;i++){int c=p1>p2+nums[i]?p1:p2+nums[i];p2=p1;p1=c;}
    return p1;
}`,
    javascriptTemplate: `function houseRobber(nums){
    if(nums.length===1) return nums[0];
    const dp=new Array(nums.length);
    dp[0]=nums[0];dp[1]=Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++) dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    return dp[nums.length-1];
}`,
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
    description: "Two-dimensional grid DP fills a matrix where dp[i][j] depends on dp[i-1][j] and dp[i][j-1]. Used for unique paths, minimum path sum, and edit distance. The key: define what dp[i][j] means, write the transition, and handle the first row and column as base cases.",
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
    pythonTemplate: `def unique_paths(m,n):
    dp=[[1]*n for _ in range(m)]
    for i in range(1,m):
        for j in range(1,n):
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
    return dp[m-1][n-1]`,
    cppTemplate: `int uniquePaths(int m,int n){
    vector<vector<int>> dp(m,vector<int>(n,1));
    for(int i=1;i<m;i++)
        for(int j=1;j<n;j++)
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`,
    cTemplate: `int uniquePaths(int m,int n){
    int dp[200][200];
    for(int i=0;i<m;i++) for(int j=0;j<n;j++) dp[i][j]=1;
    for(int i=1;i<m;i++) for(int j=1;j<n;j++) dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`,
    javascriptTemplate: `function uniquePaths(m,n){
    const dp=Array.from({length:m},()=>new Array(n).fill(1));
    for(let i=1;i<m;i++)
        for(let j=1;j<n;j++)
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`,
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
    description: "String DP handles problems comparing or transforming two strings using a 2D table where dp[i][j] represents the answer for the first i characters of s1 and j characters of s2. Covers Longest Common Subsequence, Edit Distance, and Longest Palindromic Subsequence.",
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
    pythonTemplate: `def lcs(s1,s2):
    m,n=len(s1),len(s2)
    dp=[[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            dp[i][j]=dp[i-1][j-1]+1 if s1[i-1]==s2[j-1] else max(dp[i-1][j],dp[i][j-1])
    return dp[m][n]`,
    cppTemplate: `int lcs(string s1,string s2){
    int m=s1.size(),n=s2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`,
    cTemplate: `int lcs(char* s1,char* s2){
    int m=strlen(s1),n=strlen(s2);
    int dp[1001][1001]={0};
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:(dp[i-1][j]>dp[i][j-1]?dp[i-1][j]:dp[i][j-1]);
    return dp[m][n];
}`,
    javascriptTemplate: `function lcs(s1,s2){
    const m=s1.length,n=s2.length;
    const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++)
        for(let j=1;j<=n;j++)
            dp[i][j]=s1[i-1]===s2[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`,
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
    description: "Knapsack DP decides whether to include or exclude each item to reach a target weight or value. 0/1 knapsack uses dp[i][w], unbounded allows reuse. Covers Coin Change, Subset Sum, Partition Equal Subset Sum \u2014 the most common \"can we reach target?\" pattern.",
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
    pythonTemplate: `def coin_change(coins,amount):
    dp=[float("inf")]*(amount+1)
    dp[0]=0
    for i in range(1,amount+1):
        for c in coins:
            if c<=i: dp[i]=min(dp[i],dp[i-c]+1)
    return dp[amount] if dp[amount]!=float("inf") else -1`,
    cppTemplate: `int coinChange(vector<int>& coins,int amount){
    vector<int> dp(amount+1,INT_MAX);
    dp[0]=0;
    for(int i=1;i<=amount;i++)
        for(int c:coins)
            if(c<=i&&dp[i-c]!=INT_MAX) dp[i]=min(dp[i],dp[i-c]+1);
    return dp[amount]==INT_MAX?-1:dp[amount];
}`,
    cTemplate: `int coinChange(int* coins,int n,int amount){
    int* dp=malloc((amount+1)*4);
    for(int i=0;i<=amount;i++) dp[i]=amount+1;
    dp[0]=0;
    for(int i=1;i<=amount;i++)
        for(int j=0;j<n;j++)
            if(coins[j]<=i&&dp[i-coins[j]]+1<dp[i]) dp[i]=dp[i-coins[j]]+1;
    int r=dp[amount]>amount?-1:dp[amount];free(dp);return r;
}`,
    javascriptTemplate: `function coinChange(coins,amount){
    const dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=amount;i++)
        for(const c of coins)
            if(c<=i&&dp[i-c]+1<dp[i]) dp[i]=dp[i-c]+1;
    return dp[amount]===Infinity?-1:dp[amount];
}`,
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
    description: "DP on trees computes answers for subtrees bottom-up using DFS. Each node returns a value to its parent, which combines it with values from other children. Covers Binary Tree Maximum Path Sum, Diameter of Binary Tree, and House Robber III.",
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
    pythonTemplate: `def max_path_sum(root):
    res=[float("-inf")]
    def dfs(node):
        if not node: return 0
        l=max(dfs(node.left),0)
        r=max(dfs(node.right),0)
        res[0]=max(res[0],node.val+l+r)
        return node.val+max(l,r)
    dfs(root)
    return res[0]`,
    cppTemplate: `int maxPathSum(TreeNode* root){
    int mx=INT_MIN;
    function<int(TreeNode*)> dfs=[&](TreeNode* node)->int{
        if(!node) return 0;
        int l=max(dfs(node->left),0),r=max(dfs(node->right),0);
        mx=max(mx,node->val+l+r);
        return node->val+max(l,r);
    };
    dfs(root);
    return mx;
}`,
    cTemplate: `int gMax;
int dfs(struct TreeNode* node){
    if(!node) return 0;
    int l=dfs(node->left),r=dfs(node->right);
    if(l<0)l=0;if(r<0)r=0;
    if(node->val+l+r>gMax) gMax=node->val+l+r;
    return node->val+(l>r?l:r);
}
int maxPathSum(struct TreeNode* root){gMax=INT_MIN;dfs(root);return gMax;}`,
    javascriptTemplate: `function maxPathSum(root){
    let mx=-Infinity;
    function dfs(node){
        if(!node) return 0;
        const l=Math.max(dfs(node.left),0),r=Math.max(dfs(node.right),0);
        mx=Math.max(mx,node.val+l+r);
        return node.val+Math.max(l,r);
    }
    dfs(root);
    return mx;
}`,
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
    description: "Greedy makes the locally optimal choice at each step and never backtracks. It only works when you can prove that local optimal leads to global optimal — usually via exchange argument. Classic problems: Activity Selection, Jump Game, Minimum Number of Arrows to Burst Balloons.",
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
    pythonTemplate: `def can_jump(nums):
    reach=0
    for i,n in enumerate(nums):
        if i>reach: return False
        reach=max(reach,i+n)
    return True`,
    cppTemplate: `bool canJump(vector<int>& nums){
    int reach=0;
    for(int i=0;i<(int)nums.size();i++){
        if(i>reach) return false;
        reach=max(reach,i+nums[i]);
    }
    return true;
}`,
    cTemplate: `bool canJump(int* nums,int n){
    int reach=0;
    for(int i=0;i<n;i++){
        if(i>reach) return false;
        if(i+nums[i]>reach) reach=i+nums[i];
    }
    return true;
}`,
    javascriptTemplate: `function canJump(nums){
    let reach=0;
    for(let i=0;i<nums.length;i++){
        if(i>reach) return false;
        reach=Math.max(reach,i+nums[i]);
    }
    return true;
}`,
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
    description: "A trie (prefix tree) stores strings character by character, enabling O(m) insert and search where m is the string length. Use it for prefix matching, autocomplete, word search in a grid, and problems asking 'does any word start with this prefix?'",
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
    pythonTemplate: `class Trie:
    def __init__(self):
        self.ch={};self.end=False
    def insert(self,word):
        node=self
        for c in word:
            if c not in node.ch: node.ch[c]=Trie()
            node=node.ch[c]
        node.end=True
    def search(self,word):
        node=self
        for c in word:
            if c not in node.ch: return False
            node=node.ch[c]
        return node.end
    def starts_with(self,prefix):
        node=self
        for c in prefix:
            if c not in node.ch: return False
            node=node.ch[c]
        return True`,
    cppTemplate: `struct TN{TN* ch[26]={};bool end=false;};
struct Trie{
    TN* root=new TN();
    void insert(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])n->ch[c-'a']=new TN();n=n->ch[c-'a'];}n->end=true;}
    bool search(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return n->end;}
    bool startsWith(string p){auto n=root;for(char c:p){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return true;}
};`,
    cTemplate: `typedef struct TN{struct TN* ch[26];int end;}TN;
TN* newTN(){return calloc(1,sizeof(TN));}
void insert(TN* r,char* w){for(;*w;w++){int i=*w-'a';if(!r->ch[i])r->ch[i]=newTN();r=r->ch[i];}r->end=1;}
int search(TN* r,char* w){for(;*w;w++){int i=*w-'a';if(!r->ch[i])return 0;r=r->ch[i];}return r->end;}`,
    javascriptTemplate: `class Trie{
    constructor(){this.ch={};this.end=false;}
    insert(w){let n=this;for(const c of w){if(!n.ch[c])n.ch[c]=new Trie();n=n.ch[c];}n.end=true;}
    search(w){let n=this;for(const c of w){if(!n.ch[c])return false;n=n.ch[c];}return n.end;}
    startsWith(p){let n=this;for(const c of p){if(!n.ch[c])return false;n=n.ch[c];}return true;}
}`,
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
    description: "Bit manipulation uses bitwise operators (&, |, ^, <<, >>) to solve problems at the binary level, often achieving O(1) space and O(n) time solutions. The XOR trick (a^a=0, a^0=a) solves \"find the single number\" in O(1) space. Bit masking solves subset enumeration.",
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
    pythonTemplate: `def single_number(nums):
    res=0
    for n in nums: res^=n
    return res

def count_bits(n):
    count=0
    while n: count+=n&1;n>>=1
    return count`,
    cppTemplate: `int singleNumber(vector<int>& nums){
    int r=0;for(int n:nums)r^=n;return r;
}
int countBits(int n){
    int c=0;while(n){c+=n&1;n>>=1;}return c;
}`,
    cTemplate: `int singleNumber(int* nums,int n){
    int r=0;for(int i=0;i<n;i++)r^=nums[i];return r;
}
int countBits(int n){
    int c=0;while(n){c+=n&1;n>>=1;}return c;
}`,
    javascriptTemplate: `const singleNumber=nums=>nums.reduce((a,b)=>a^b,0);
function countBits(n){let c=0;while(n){c+=n&1;n>>=1;}return c;}`,
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
    description: "Fast and slow pointers (Floyd's cycle detection) detects cycles in a linked list or array by moving one pointer twice as fast as the other. If they meet, there's a cycle. Extends to finding the start of the cycle and the middle of a linked list.",
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
    pythonTemplate: `def has_cycle(head):
    slow=fast=head
    while fast and fast.next:
        slow=slow.next;fast=fast.next.next
        if slow==fast: return True
    return False

def find_middle(head):
    slow=fast=head
    while fast and fast.next:
        slow=slow.next;fast=fast.next.next
    return slow`,
    cppTemplate: `bool hasCycle(ListNode* head){
    ListNode *s=head,*f=head;
    while(f&&f->next){
        s=s->next;f=f->next->next;
        if(s==f) return true;
    }
    return false;
}
ListNode* findMiddle(ListNode* head){
    ListNode *s=head,*f=head;
    while(f&&f->next){s=s->next;f=f->next->next;}
    return s;
}`,
    cTemplate: `bool hasCycle(struct ListNode* head){
    struct ListNode *s=head,*f=head;
    while(f&&f->next){
        s=s->next;f=f->next->next;
        if(s==f) return true;
    }
    return false;
}`,
    javascriptTemplate: `function hasCycle(head){
    let s=head,f=head;
    while(f&&f.next){
        s=s.next;f=f.next.next;
        if(s===f) return true;
    }
    return false;
}
function findMiddle(head){
    let s=head,f=head;
    while(f&&f.next){s=s.next;f=f.next.next;}
    return s;
}`,
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
    description: "Divide and conquer splits the problem into independent subproblems, solves them recursively, and combines the results. The template: split, recurse on each half, merge. Classic uses: merge sort, quick sort, and finding the maximum subarray with cross-boundary splits.",
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
    pythonTemplate: `def merge_sort(nums):
    if len(nums)<=1: return nums
    mid=len(nums)//2
    l,r=merge_sort(nums[:mid]),merge_sort(nums[mid:])
    res,i,j=[],0,0
    while i<len(l) and j<len(r):
        if l[i]<=r[j]: res.append(l[i]);i+=1
        else: res.append(r[j]);j+=1
    return res+l[i:]+r[j:]`,
    cppTemplate: `void merge(vector<int>& a,int l,int m,int r){
    vector<int> L(a.begin()+l,a.begin()+m+1),R(a.begin()+m+1,a.begin()+r+1);
    int i=0,j=0,k=l;
    while(i<(int)L.size()&&j<(int)R.size()) a[k++]=L[i]<=R[j]?L[i++]:R[j++];
    while(i<(int)L.size()) a[k++]=L[i++];
    while(j<(int)R.size()) a[k++]=R[j++];
}
void mergeSort(vector<int>& a,int l,int r){
    if(l>=r) return;
    int m=l+(r-l)/2;
    mergeSort(a,l,m);mergeSort(a,m+1,r);merge(a,l,m,r);
}`,
    cTemplate: `void merge(int* a,int l,int m,int r){
    int n1=m-l+1,n2=r-m;
    int* L=malloc(n1*4);int* R=malloc(n2*4);
    for(int i=0;i<n1;i++)L[i]=a[l+i];
    for(int i=0;i<n2;i++)R[i]=a[m+1+i];
    int i=0,j=0,k=l;
    while(i<n1&&j<n2)a[k++]=L[i]<=R[j]?L[i++]:R[j++];
    while(i<n1)a[k++]=L[i++];
    while(j<n2)a[k++]=R[j++];
    free(L);free(R);
}
void mergeSort(int* a,int l,int r){
    if(l>=r)return;
    int m=l+(r-l)/2;
    mergeSort(a,l,m);mergeSort(a,m+1,r);merge(a,l,m,r);
}`,
    javascriptTemplate: `function mergeSort(nums){
    if(nums.length<=1) return nums;
    const mid=Math.floor(nums.length/2);
    const l=mergeSort(nums.slice(0,mid)),r=mergeSort(nums.slice(mid));
    const res=[];let i=0,j=0;
    while(i<l.length&&j<r.length) res.push(l[i]<=r[j]?l[i++]:r[j++]);
    return res.concat(l.slice(i)).concat(r.slice(j));
}`,
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
