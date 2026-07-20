import fs from "node:fs";

const root = process.cwd();
const lcRows = JSON.parse(fs.readFileSync("C:/tmp/leetcode-problems.json", "utf8"));
const lcById = new Map(lcRows.map((row) => [Number(row.questionFrontendId), row]));

const categories = {
  "two-pointers": "Pointers",
  "sliding-window": "Pointers",
  "prefix-sum": "Arrays/Hash",
  "binary-search": "Binary Search",
  "binary-search-on-answer": "Binary Search",
  "kadanes-algorithm": "DP",
  "hashmap-frequency": "Arrays/Hash",
  "stack-basic": "Stack/Queue",
  "monotonic-stack": "Stack/Queue",
  "monotonic-deque": "Stack/Queue",
  "recursion-backtracking": "Trees/Graphs",
  bfs: "Trees/Graphs",
  "dfs-tree": "Trees/Graphs",
  "dfs-graph": "Trees/Graphs",
  "topological-sort": "Trees/Graphs",
  "union-find": "Trees/Graphs",
  heaps: "Stack/Queue",
  "merge-intervals": "Greedy",
  "two-heap": "Stack/Queue",
  "dp-1d": "DP",
  "dp-2d-grid": "DP",
  "dp-strings": "DP",
  "dp-knapsack": "DP",
  "dp-trees": "DP",
  greedy: "Greedy",
  tries: "Trees/Graphs",
  "bit-manipulation": "Math/Bits",
  "fast-slow-pointers": "Pointers",
  "divide-conquer": "Arrays/Hash"
};

const patternNames = {
  "two-pointers": "Two Pointers",
  "sliding-window": "Sliding Window",
  "prefix-sum": "Prefix Sum",
  "binary-search": "Binary Search",
  "binary-search-on-answer": "Binary Search on Answer",
  "kadanes-algorithm": "Kadane's Algorithm",
  "hashmap-frequency": "HashMap Frequency",
  "stack-basic": "Stack Basics",
  "monotonic-stack": "Monotonic Stack",
  "monotonic-deque": "Monotonic Deque",
  "recursion-backtracking": "Recursion & Backtracking",
  bfs: "Breadth-First Search",
  "dfs-tree": "DFS on Trees",
  "dfs-graph": "DFS on Graphs",
  "topological-sort": "Topological Sort",
  "union-find": "Union Find",
  heaps: "Heaps",
  "merge-intervals": "Merge Intervals",
  "two-heap": "Two Heap",
  "dp-1d": "1D Dynamic Programming",
  "dp-2d-grid": "2D Grid Dynamic Programming",
  "dp-strings": "String Dynamic Programming",
  "dp-knapsack": "Knapsack Dynamic Programming",
  "dp-trees": "Tree Dynamic Programming",
  greedy: "Greedy",
  tries: "Tries",
  "bit-manipulation": "Bit Manipulation",
  "fast-slow-pointers": "Fast & Slow Pointers",
  "divide-conquer": "Divide and Conquer"
};

const patternSlugs = [
  "two-pointers",
  "sliding-window",
  "prefix-sum",
  "binary-search",
  "binary-search-on-answer",
  "kadanes-algorithm",
  "hashmap-frequency",
  "stack-basic",
  "monotonic-stack",
  "monotonic-deque",
  "recursion-backtracking",
  "bfs",
  "dfs-tree",
  "dfs-graph",
  "topological-sort",
  "union-find",
  "heaps",
  "merge-intervals",
  "two-heap",
  "dp-1d",
  "dp-2d-grid",
  "dp-strings",
  "dp-knapsack",
  "dp-trees",
  "greedy",
  "tries",
  "bit-manipulation",
  "fast-slow-pointers",
  "divide-conquer"
];

const methodBodies = {
  "two-pointers": String.raw`    public int[] twoSumSorted(int[] nums, int target) {
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
    }`,
  "sliding-window": String.raw`    public int longestAtMostKDistinct(String s, int k) {
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
    }`,
  "prefix-sum": String.raw`    public int subarraySum(int[] nums, int target) {
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
    }`,
  "binary-search": String.raw`    public int lowerBound(int[] nums, int target) {
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
    }`,
  "binary-search-on-answer": String.raw`    public int minEatingSpeed(int[] piles, int hours) {
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
    }`,
  "kadanes-algorithm": String.raw`    public int maxSubArray(int[] nums) {
        int bestEndingHere = nums[0];
        int bestOverall = nums[0];
        for (int i = 1; i < nums.length; i++) {
            // Either extend the previous subarray or restart at i.
            bestEndingHere = Math.max(nums[i], bestEndingHere + nums[i]);
            bestOverall = Math.max(bestOverall, bestEndingHere);
        }
        return bestOverall;
    }`,
  "hashmap-frequency": String.raw`    public List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> groups = new HashMap<>();
        for (String word : words) {
            int[] freq = new int[26];
            for (char c : word.toCharArray()) freq[c - 'a']++;
            String key = Arrays.toString(freq);
            groups.computeIfAbsent(key, ignored -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(groups.values());
    }`,
  "stack-basic": String.raw`    public boolean isValid(String s) {
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
    }`,
  "monotonic-stack": String.raw`    public int[] dailyTemperatures(int[] temperatures) {
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
    }`,
  "monotonic-deque": String.raw`    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] answer = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.peekFirst() <= i - k) deque.pollFirst();
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();
            deque.offerLast(i);
            if (i >= k - 1) answer[i - k + 1] = nums[deque.peekFirst()];
        }
        return answer;
    }`,
  "recursion-backtracking": String.raw`    public List<List<Integer>> subsets(int[] nums) {
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
    }`,
  bfs: String.raw`    public int shortestPathBinaryMatrix(int[][] grid) {
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
    }`,
  "dfs-tree": String.raw`    private int diameter;

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
    }`,
  "dfs-graph": String.raw`    public int countComponents(int n, int[][] edges) {
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
    }`,
  "topological-sort": String.raw`    public boolean canFinish(int numCourses, int[][] prerequisites) {
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
    }`,
  "union-find": String.raw`    public int countComponents(int n, int[][] edges) {
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
    }`,
  heaps: String.raw`    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int value : nums) {
            minHeap.offer(value);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.peek();
    }`,
  "merge-intervals": String.raw`    public int[][] merge(int[][] intervals) {
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
    }`,
  "two-heap": String.raw`    private PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
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
    }`,
  "dp-1d": String.raw`    public int coinChange(int[] coins, int amount) {
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
    }`,
  "dp-2d-grid": String.raw`    public int uniquePathsWithObstacles(int[][] grid) {
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
    }`,
  "dp-strings": String.raw`    public int longestCommonSubsequence(String a, String b) {
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
    }`,
  "dp-knapsack": String.raw`    public boolean canPartition(int[] nums) {
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
    }`,
  "dp-trees": String.raw`    public int rob(TreeNode root) {
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
    }`,
  greedy: String.raw`    public boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            // The only state that matters is the farthest reachable index.
            farthest = Math.max(farthest, i + nums[i]);
            if (farthest >= nums.length - 1) return true;
        }
        return true;
    }`,
  tries: String.raw`    static class Trie {
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
    }`,
  "bit-manipulation": String.raw`    public int singleNumber(int[] nums) {
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
    }`,
  "fast-slow-pointers": String.raw`    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }`,
  "divide-conquer": String.raw`    public int maxSubArrayDivideAndConquer(int[] nums) {
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
    }`
};

const descriptionsMap = {
  "two-pointers": "Look for a sorted or sortable linear collection (array, string, list) where you need to search for a pair or triplet that satisfies a target criteria. It initializes two variables (pointers) at different boundaries (e.g., beginning and end) and moves them inward or forward based on a logical comparison. This narrows down the O(n^2) search space to O(n) by pruning invalid states using the collection's sorted property. A common mistake is forgetting to check boundary conditions (like left < right) before adjusting pointers, causing index-out-of-bounds errors on edge inputs.",
  "sliding-window": "Target subsegments of a sequential dataset (subarrays, substrings) where you need to find a contiguous range that maximizes, minimizes, or matches a specific condition. It maintains an active window between a left and right pointer, expanding the right boundary to include new elements and contracting the left boundary to discard elements when the condition is violated. This tracks dynamic bounds in O(n) time by reusing window calculations instead of starting from scratch. A common mistake is forgetting to update the auxiliary state (e.g., frequency map counts or sums) when contracting the left pointer.",
  "prefix-sum": "Look for problems asking for sum queries, counts, or frequencies of contiguous subarrays over multiple index ranges. It precomputes a cumulative sum array where prefix[i] = sum(0...i). This enables O(1) range sum evaluations via the formula sum(i...j) = prefix[j] - prefix[i-1], bypassing linear scans. A common mistake is forgetting to handle the zero-index base case (i = 0), which frequently causes off-by-one errors or negative index accesses.",
  "binary-search": "Finding the position of a specific target value or determining a boundary inside a sorted linear collection. It iteratively checks the midpoint of a search space, comparing it to the target and discarding the invalid half. This relies on the monotonic property of the dataset to achieve O(log n) time. A common mistake is using (left + right) / 2 which can cause integer overflow; use left + (right - left) / 2 instead.",
  "binary-search-on-answer": "Optimization prompts asking to find the \"minimum possible maximum value\" or \"maximum possible minimum value\" over a continuous range. It treats the range of possible answers as a monotonic search space (e.g., feasibility values) and runs a binary search. For each midpoint answer candidate, a helper validation function checks if it is achievable. A common mistake is choosing incorrect search space boundaries (low/high) that miss the optimal boundary or result in infinite loops.",
  "kadanes-algorithm": "Finding the maximum sum subarray of numbers containing both positive and negative values. It tracks the local maximum subarray ending at the current index and updates the global maximum. If the running local sum drops below zero, it resets the subarray start to the current element. A common mistake is resetting the running sum to zero instead of the current negative number when all elements in the input array are negative.",
  "hashmap-frequency": "Problems requiring constant-time lookups of frequencies, duplicate checks, or matching complements of values. It stores frequencies or indexes of visited elements in a hash map as it traverses the collection. This maps a brute force O(n^2) nested lookup to an O(n) single-pass lookup. A common mistake is updating the map values or state before executing the search condition check, leading to double-counting current items.",
  "stack-basic": "Structural nested patterns, bracket matching, string backspaces, or tracking chronological state history (LIFO). It uses a stack to store elements when traversing and retrieves them in reverse order. This allows delayed processing of elements until their closing counterpart or nested scope resolves. A common mistake is accessing the top element of the stack via .peek() or .pop() without validating that the stack is non-empty.",
  "monotonic-stack": "Prompts asking for the \"next greater\" or \"previous smaller\" element in a linear collection. It processes elements sequentially and maintains them in a strict sorted order (increasing or decreasing) inside a stack. It pops elements that violate the sorting invariant as new candidates arrive, resolving candidate relations in O(n) total time. A common mistake is forgetting to process remaining elements left in the stack after the main traversal loop finishes.",
  "monotonic-deque": "Finding the maximum or minimum value in a sliding window of a fixed size. It maintains indices in a double-ended queue where elements are kept in monotonic order. It removes older indices from the back if they are smaller than the incoming element, and drops expired indices from the front. A common mistake is storing element values instead of element indices in the deque, which makes it impossible to check if the front element has expired out of the window.",
  "recursion-backtracking": "Generating all permutations, combinations, subsets, or exploring all valid paths on a board. It recursively builds candidates step-by-step, validating partial choices. If a path violates the constraints, it backtracks by undoing the choice and trying another branch in the state space tree. A common mistake is failing to restore the shared state (unchoosing the choice) after returning from a recursive call, corrupting subsequent paths.",
  "bfs": "Finding the shortest path or minimum steps to reach a target in an unweighted graph or grid. It uses a queue to visit nodes level-by-level, starting from the source. It marks nodes as visited immediately upon enqueueing to avoid redundant cycles and infinite loops. A common mistake is not marking a node as visited at the time it is added to the queue, which causes duplicate enqueues and out-of-memory errors.",
  "dfs-tree": "Recursive aggregation, tree path summation, finding lowest common ancestors, or serialization of tree hierarchies. It recursively traverses child branches down to leaf nodes before returning state results back up to parent nodes. This uses call-stack frame history to compute subtree properties post-order. A common mistake is failing to specify correct base case returns for null leaf nodes, leading to NullPointerException crashes.",
  "dfs-graph": "Connected component tracking, cycle detection in undirected/directed graphs, or general connectivity traversal. It recursively follows edges from node to node, maintaining a set of visited node IDs. This tracks graph connectivity and avoids infinite loop cycles on cyclic graph networks. A common mistake is forgetting that standard recursion will fail with StackOverflowError on deep, linear graph topologies without increasing stack limits.",
  "topological-sort": "Dependency scheduling, course prerequisites, or establishing a linear order of tasks with dependent prerequisites. It orders vertices in a directed acyclic graph (DAG) by iteratively queueing nodes with zero in-degree (Kahn's Algorithm) and reducing child in-degrees. A mismatch between sorted nodes and total vertices indicates a dependency cycle. A common mistake is missing cycle check logic, which causes silent failures or infinite loops when input graphs contain circular dependencies.",
  "union-find": "Dynamic connectivity queries, component count tracking, or determining cycle presence in an undirected graph. It manages disjoint sets using a parent array and supports fast find and union operations. It uses path compression and union by rank to keep query times near-constant. A common mistake is implementing union by merging parent pointers directly without resolving the roots of both items first.",
  "heaps": "Finding the K-th largest/smallest elements, merging multiple sorted lists, or dynamic scheduling by priority. It maintains elements in a binary heap (priority queue), providing O(1) retrieval of the minimum or maximum element and O(log n) insertions. This scales sorting operations from O(n log n) down to O(n log k). A common mistake is instantiating a min-heap instead of a max-heap when trying to keep track of the smallest dynamic elements.",
  "merge-intervals": "Prompts involving calendar schedules, meeting room bookings, or processing overlapping numeric coordinate intervals. It sorts intervals by their start times and greedily processes them. If the start of the current interval overlaps with the end of the previous, it merges them by extending the end boundary. A common mistake is comparing the current interval with the initial sorted list instead of the last merged interval in the result collection.",
  "two-heap": "Dynamic median calculations or balancing subsets of values in a streaming data sequence. It splits elements into two priority queues: a max-heap for the lower half of data, and a min-heap for the upper half. It balances heap sizes to maintain median values at heap roots in O(1) peek time. A common mistake is failing to balance heap sizes after inserting an element, causing an offset and incorrect median calculations.",
  "dp-1d": "Maximum/minimum score calculations or counting ways to reach a target state along a linear structure with overlapping subproblems. It breaks the problem into subproblems and stores intermediate values in a 1D array. It resolves entries iteratively from base cases using a recurrence relation. A common mistake is misidentifying the base cases, which leads to index crashes or initialization errors.",
  "dp-2d-grid": "Finding pathways, minimum cost paths, or grid strategies in a 2D matrix layout. It computes values in a 2D array where each state dp[i][j] derives from adjacent cells (like top and left). It builds the solution row-by-row or column-by-column. A common mistake is accessing negative index values during boundary transitions (e.g., dp[i-1][j]) without adding boundary conditions.",
  "dp-strings": "Comparing, transforming, or finding matching subsets of characters between two input strings. It fills a 2D matrix where dp[i][j] maps the relationship between prefixes of both strings. It resolves transformations (e.g., edit distance) character-by-character. A common mistake is setting up dimensions incorrectly, such as matching string character indices i-1 and j-1 to dp[i][j] offset slots.",
  "dp-knapsack": "Selecting elements from a set of weights or values to sum up to a target capacity under binary choices. It models item inclusions/exclusions using states. For space optimization, it can run 1D array updates backwards to avoid double-counting. A common mistake is iterating the inner loop forward in a 1D optimization of 0/1 knapsack, which allows reuse of elements.",
  "dp-trees": "DP on tree structure — diameter, max path sum, house robber on trees. Each node returns a value to its parent, which combines it with values from other children. A common mistake is overlooking parent-child cycles in undirected graph representations, causing infinite call-stack recursion.",
  "greedy": "Scheduling, step optimizations, or maximum segment allocations where early decisions don't limit later choices. It makes the locally optimal choice at each step to reach a global optimum, without backtracking. A common mistake is applying greedy logic to problems that have overlapping subproblems and require search algorithms or dynamic programming.",
  "tries": "Fast string validation, prefix match queries, prefix wildcards, or spelling suggestions in a collection. It stores strings in a character-link tree node network. This reduces prefix lookups to O(m) where m is word length. A common mistake is failing to set leaf boolean tags to true when storing a string, causing subset checks to match incorrectly.",
  "bit-manipulation": "Fast status flag storage, binary calculations, power checks, or unique complement searches in a set. It performs operations using bitwise operators (&, |, ^, ~, <<, >>). A common mistake is overlooking operator precedence since arithmetic operators evaluate before bitwise operations; use parentheses.",
  "fast-slow-pointers": "Cycle presence checks or cycle start-index lookups in a linked list or cyclic index array. It moves a slow pointer (1 index step) and a fast pointer (2 index steps). If they meet, a cycle exists. A common mistake is accessing the next index of a fast pointer (fast.next.next) without validating that fast and fast.next are non-null.",
  "divide-conquer": "Finding midpoints to split problem workloads, sorting subsegments, or resolving cross-boundary subarray calculations. It recursively splits problem inputs into subsegments, solves them, and merges results. A common mistake is implementing inefficient merging logic, which raises overall complexity back to linear-style performance."
};
const descriptions = descriptionsMap;

const triggerMap = Object.fromEntries(patternSlugs.map((slug) => [
  slug,
  [
    `${patternNames[slug].toLowerCase()} signal`,
    "optimize repeated work",
    "maintain invariant",
    "return best valid state",
    "avoid nested brute force"
  ]
]));
Object.assign(triggerMap, {
  "two-pointers": ["sorted array pair", "palindrome check", "remove duplicates in-place", "left and right boundary", "triplet sum after sorting"],
  "sliding-window": ["longest substring", "at most k distinct", "minimum window", "contiguous subarray", "expand right shrink left"],
  "prefix-sum": ["subarray sum equals k", "range sum query", "continuous subarray", "sum divisible by k", "count previous cumulative state"],
  "binary-search": ["sorted input", "first occurrence", "last occurrence", "minimum index satisfying", "rotated sorted array"],
  "binary-search-on-answer": ["minimize maximum", "capacity within days", "smallest feasible value", "monotonic can function", "answer range not index range"],
  "hashmap-frequency": ["count occurrences", "same multiset", "anagram grouping", "seen before", "complement lookup"],
  "monotonic-stack": ["next greater element", "nearest smaller", "histogram rectangle", "temperature wait", "pop weaker candidates"],
  "monotonic-deque": ["sliding window maximum", "front expires", "maintain best candidate", "window min max", "indices in deque"],
  bfs: ["shortest unweighted path", "level order", "minimum steps", "multi-source spread", "queue by distance"],
  "topological-sort": ["course prerequisites", "dependency order", "directed acyclic graph", "indegree zero", "cycle prevents completion"],
  "union-find": ["connected components", "same group query", "redundant edge", "dynamic connectivity", "merge sets"],
  "dp-strings": ["two strings", "subsequence", "edit distance", "palindrome interval", "prefix lengths"],
  "dp-knapsack": ["target sum subset", "capacity", "choose each item once", "ways to form amount", "0/1 decision"],
  tries: ["prefix lookup", "dictionary words", "autocomplete", "startsWith", "word search pruning"],
  "fast-slow-pointers": ["linked list cycle", "middle node", "nth from end", "runner pointer", "cycle entry"]
});

const relatedMap = {
  "two-pointers": [11, 15, 125, 167, 283],
  "sliding-window": [3, 76, 424, 567, 904, 1004],
  "prefix-sum": [525, 560, 974, 1248, 930],
  "binary-search": [33, 34, 74, 153, 378],
  "binary-search-on-answer": [875, 1011, 410, 1231, 1482],
  "kadanes-algorithm": [53, 152, 121, 918, 1749],
  "hashmap-frequency": [1, 49, 217, 242, 347],
  "stack-basic": [20, 71, 150, 155, 224],
  "monotonic-stack": [42, 84, 739, 853, 901],
  "monotonic-deque": [239, 1438, 862, 1696, 1425],
  "recursion-backtracking": [39, 46, 78, 79, 90],
  bfs: [102, 127, 200, 994, 1091],
  "dfs-tree": [98, 100, 104, 124, 543],
  "dfs-graph": [133, 200, 417, 695, 934],
  "topological-sort": [207, 210, 269, 310, 444],
  "union-find": [128, 261, 684, 721, 947],
  heaps: [23, 215, 347, 378, 703],
  "merge-intervals": [56, 57, 435, 452, 986],
  "two-heap": [295, 480, 502, 857, 1825],
  "dp-1d": [70, 198, 213, 279, 322],
  "dp-2d-grid": [62, 64, 85, 221, 931],
  "dp-strings": [72, 97, 1143, 1312, 115],
  "dp-knapsack": [416, 494, 518, 1049, 474],
  "dp-trees": [337, 437, 543, 124, 968],
  greedy: [45, 55, 621, 763, 1235],
  tries: [208, 211, 212, 421, 648],
  "bit-manipulation": [136, 190, 191, 268, 338],
  "fast-slow-pointers": [19, 141, 142, 143, 876],
  "divide-conquer": [4, 23, 53, 105, 215]
};

const prereqMap = {
  "binary-search-on-answer": ["binary-search"],
  "monotonic-stack": ["stack-basic"],
  "monotonic-deque": ["sliding-window", "monotonic-stack"],
  "dfs-graph": ["dfs-tree"],
  "topological-sort": ["dfs-graph", "bfs"],
  "union-find": ["dfs-graph"],
  "two-heap": ["heaps"],
  "dp-2d-grid": ["dp-1d"],
  "dp-strings": ["dp-1d", "dp-2d-grid"],
  "dp-knapsack": ["dp-1d"],
  "dp-trees": ["dfs-tree", "dp-1d"],
  tries: ["hashmap-frequency"],
  "fast-slow-pointers": ["two-pointers"],
  "divide-conquer": ["recursion-backtracking"]
};

function jsString(value) {
  return JSON.stringify(value, null, 2).replace(/\n/g, "\n  ");
}

function patternTs() {
  const objects = patternSlugs.map((slug, index) => {
    const variants = [
      { name: `${patternNames[slug]} classic`, whenToUse: "Use when the direct signal appears exactly in the prompt.", keyDifference: "Keeps the base invariant visible." },
      { name: `${patternNames[slug]} with counting`, whenToUse: "Use when duplicates, multiplicity, or number of ways matter.", keyDifference: "Adds a frequency or DP count dimension." },
      { name: `${patternNames[slug]} optimized`, whenToUse: "Use when the input limit rules out the obvious nested loop.", keyDifference: "Compresses repeated work into one maintained state." }
    ];
    const mistakes = [
      { mistake: "Starting implementation before naming the invariant.", fix: "Write the invariant in one sentence and keep it beside the loop or recursion." },
      { mistake: "Updating state in an order that uses the current element twice.", fix: "Decide whether lookup happens before or after insertion and test the smallest duplicate case." },
      { mistake: "Ignoring boundary cases such as empty input, one element, or all equal values.", fix: "Dry run those three cases before submitting." },
      { mistake: "Using the right pattern but returning the wrong state boundary.", fix: "State whether the answer is current index, previous index, left boundary, or accumulated best." },
      { mistake: "Forgetting to justify complexity from movement or state count.", fix: "Explain how many times each pointer, node, edge, or DP cell is processed." }
    ];
    return `  {
    slug: ${JSON.stringify(slug)},
    name: ${JSON.stringify(patternNames[slug])},
    category: ${JSON.stringify(categories[slug])},
    description: ${JSON.stringify(descriptions[slug])},
    triggerConditions: ${jsString(triggerMap[slug])},
    cheatCode: ${JSON.stringify(`If the prompt says "${triggerMap[slug][0]}", map it to ${patternNames[slug]} and write the invariant before code.`)},
    coreInvariant: ${JSON.stringify(`At every step, ${patternNames[slug]} keeps only states that can still become the optimal valid answer.`)},
    javaTemplate: buildJavaTemplate(${JSON.stringify(patternNames[slug])}, String.raw\`${methodBodies[slug]}\`),
    timeComplexity: { notation: ${JSON.stringify(index >= 10 && index <= 11 ? "O(V + E)" : index >= 19 && index <= 23 ? "O(n * state)" : "O(n)")}, explanation: ${JSON.stringify("The template processes each primary element or state a bounded number of times; sorting or heap variants add the documented logarithmic factor when used.")} },
    spaceComplexity: { notation: ${JSON.stringify(index >= 19 && index <= 23 ? "O(state)" : "O(n)")}, explanation: ${JSON.stringify("Auxiliary storage holds the active window, stack, queue, map, recursion stack, heap, graph, or DP table required by the invariant.")} },
    variants: ${jsString(variants)},
    topMistakes: ${jsString(mistakes)},
    relatedProblems: ${jsString(relatedMap[slug])},
    prerequisitePatterns: ${jsString(prereqMap[slug] ?? [])},
    estimatedDaysToMaster: ${index < 10 ? 2 : index < 20 ? 3 : 4},
    orderInRoadmap: ${index + 1}
  }`;
  }).join(",\n");

  return `export type PatternCategory =
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
  return String.raw\`import java.util.*;

class Solution {
    // Pattern: \${title}
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
\${coreMethod}
}
\`;
}

export const PATTERNS: Pattern[] = [
${objects}
];

export const patterns = PATTERNS;
export const patternBySlug = Object.fromEntries(PATTERNS.map((pattern) => [pattern.slug, pattern])) as Record<string, Pattern>;
`;
}

const required = [1,2,3,11,15,19,20,21,23,33,34,39,42,45,46,48,49,53,55,56,57,62,70,72,76,78,84,85,98,100,101,102,104,105,121,124,125,127,128,133,138,141,143,146,153,200,206,207,208,213,215,217,226,230,235,236,238,239,242,268,279,287,295,297,300,309,312,322,338,347,378,380,416,424,435,437,494,518,525,543,560,567,572,621,647,684,695,721,739,743,763,787,853,875,876,904,934,983,994,1004,1011,1143,1235,1312,1335,1345,1438,1514];
const fillers = [4,5,10,17,22,24,25,31,35,36,40,51,54,64,73,74,75,79,91,94,96,103,108,110,112,114,116,122,129,139,140,150,152,155,167,169,190,191,198,199,210,211,212,224,227,240,261,269,283,289,301,329];
const problemIds = [...new Set([...required, ...fillers])].sort((a, b) => a - b);

const blind75 = new Set([1,3,11,15,20,21,23,33,39,42,49,53,55,56,57,62,70,72,76,78,79,84,98,100,102,104,105,121,124,125,127,128,133,139,141,143,152,153,190,191,198,200,206,207,208,211,212,213,215,217,226,230,235,236,238,239,242,268,269,295,297,300,322,338,347,371,416,417,424,435,572,647,684,695,721,739]);
const neetcode150 = new Set([...blind75, 2,4,5,17,19,22,25,36,40,45,46,48,54,64,73,74,75,85,91,94,96,101,103,108,110,112,114,116,122,129,138,146,150,155,167,199,210,224,227,240,261,279,287,312,329,380,494,518,543,560,567,621,743,763,787,853,875,876,904,981,994,1004,1011,1046,1049,1143]);
const indian = new Set([1,2,3,15,20,21,23,33,39,42,49,53,56,57,72,76,84,85,121,124,127,128,146,200,207,208,215,239,297,300,322,347,380,416,424,560,567,621,721,739,743,875,994,1011,1143,1235,1335,1438,1514]);

const idPatterns = {
  1: ["hashmap-frequency"], 2: ["fast-slow-pointers"], 3: ["sliding-window"], 4: ["divide-conquer", "binary-search"], 5: ["dp-strings"], 10: ["dp-strings"], 11: ["two-pointers"], 15: ["two-pointers"], 17: ["recursion-backtracking"], 19: ["fast-slow-pointers"], 20: ["stack-basic"], 21: ["fast-slow-pointers"], 22: ["recursion-backtracking"], 23: ["heaps", "divide-conquer"], 24: ["fast-slow-pointers"], 25: ["fast-slow-pointers", "recursion-backtracking"], 31: ["two-pointers"], 33: ["binary-search"], 34: ["binary-search"], 35: ["binary-search"], 36: ["hashmap-frequency"], 39: ["recursion-backtracking"], 40: ["recursion-backtracking"], 42: ["monotonic-stack", "two-pointers"], 45: ["greedy"], 46: ["recursion-backtracking"], 48: ["two-pointers"], 49: ["hashmap-frequency"], 51: ["recursion-backtracking"], 53: ["kadanes-algorithm"], 54: ["two-pointers"], 55: ["greedy"], 56: ["merge-intervals"], 57: ["merge-intervals"], 62: ["dp-2d-grid"], 64: ["dp-2d-grid"], 70: ["dp-1d"], 72: ["dp-strings"], 73: ["hashmap-frequency"], 74: ["binary-search"], 75: ["two-pointers"], 76: ["sliding-window"], 78: ["recursion-backtracking"], 79: ["recursion-backtracking", "dfs-graph"], 84: ["monotonic-stack"], 85: ["monotonic-stack", "dp-2d-grid"], 91: ["dp-1d"], 94: ["dfs-tree"], 96: ["dp-1d"], 98: ["dfs-tree"], 100: ["dfs-tree"], 101: ["dfs-tree"], 102: ["bfs"], 103: ["bfs"], 104: ["dfs-tree"], 105: ["dfs-tree", "divide-conquer"], 108: ["divide-conquer"], 110: ["dfs-tree"], 112: ["dfs-tree"], 114: ["dfs-tree"], 116: ["bfs"], 121: ["kadanes-algorithm"], 122: ["greedy"], 124: ["dfs-tree", "dp-trees"], 125: ["two-pointers"], 127: ["bfs"], 128: ["hashmap-frequency", "union-find"], 129: ["dfs-tree"], 133: ["dfs-graph", "bfs"], 138: ["hashmap-frequency"], 139: ["dp-strings"], 140: ["dp-strings", "recursion-backtracking"], 141: ["fast-slow-pointers"], 143: ["fast-slow-pointers"], 146: ["hashmap-frequency"], 150: ["stack-basic"], 152: ["kadanes-algorithm", "dp-1d"], 153: ["binary-search"], 155: ["stack-basic"], 167: ["two-pointers"], 169: ["greedy"], 190: ["bit-manipulation"], 191: ["bit-manipulation"], 198: ["dp-1d"], 199: ["bfs", "dfs-tree"], 200: ["dfs-graph", "bfs"], 206: ["fast-slow-pointers"], 207: ["topological-sort"], 208: ["tries"], 210: ["topological-sort"], 211: ["tries"], 212: ["tries", "recursion-backtracking"], 213: ["dp-1d"], 215: ["heaps"], 217: ["hashmap-frequency"], 224: ["stack-basic"], 226: ["dfs-tree"], 227: ["stack-basic"], 230: ["dfs-tree"], 235: ["dfs-tree"], 236: ["dfs-tree"], 238: ["prefix-sum"], 239: ["monotonic-deque"], 240: ["binary-search"], 242: ["hashmap-frequency"], 261: ["union-find"], 268: ["bit-manipulation"], 269: ["topological-sort"], 279: ["dp-1d"], 283: ["two-pointers"], 287: ["fast-slow-pointers", "binary-search"], 289: ["hashmap-frequency"], 295: ["two-heap"], 297: ["dfs-tree"], 300: ["dp-1d", "binary-search"], 301: ["recursion-backtracking"], 309: ["dp-1d"], 312: ["dp-2d-grid"], 322: ["dp-1d"], 329: ["dp-2d-grid", "dfs-graph"], 338: ["bit-manipulation"], 347: ["heaps", "hashmap-frequency"], 378: ["binary-search", "heaps"], 380: ["hashmap-frequency"], 416: ["dp-knapsack"], 424: ["sliding-window"], 435: ["merge-intervals", "greedy"], 437: ["dfs-tree", "prefix-sum"], 494: ["dp-knapsack"], 518: ["dp-knapsack"], 525: ["prefix-sum"], 543: ["dfs-tree"], 560: ["prefix-sum"], 567: ["sliding-window"], 572: ["dfs-tree"], 621: ["greedy", "heaps"], 647: ["dp-strings"], 684: ["union-find"], 695: ["dfs-graph"], 721: ["union-find"], 739: ["monotonic-stack"], 743: ["heaps", "bfs"], 763: ["greedy"], 787: ["bfs", "dp-1d"], 853: ["monotonic-stack"], 875: ["binary-search-on-answer"], 876: ["fast-slow-pointers"], 904: ["sliding-window"], 934: ["bfs", "dfs-graph"], 983: ["dp-1d"], 994: ["bfs"], 1004: ["sliding-window"], 1011: ["binary-search-on-answer"], 1143: ["dp-strings"], 1235: ["dp-1d", "binary-search"], 1312: ["dp-strings"], 1335: ["dp-2d-grid"], 1345: ["bfs"], 1438: ["monotonic-deque"], 1514: ["heaps", "dfs-graph"]
};

const companyCycle = {
  "hashmap-frequency": ["Amazon", "Meta", "Google"],
  "sliding-window": ["Meta", "Amazon", "Microsoft"],
  "two-pointers": ["Meta", "Google", "Amazon"],
  "binary-search": ["Google", "Amazon", "Microsoft"],
  "binary-search-on-answer": ["Google", "Flipkart", "Razorpay"],
  "dp-strings": ["Google", "Adobe", "Microsoft"],
  "dp-1d": ["Amazon", "Google", "Flipkart"],
  "dp-2d-grid": ["Google", "Microsoft", "Adobe"],
  "dp-knapsack": ["Google", "Adobe", "Amazon"],
  "dfs-tree": ["Microsoft", "Amazon", "Meta"],
  "dfs-graph": ["Google", "Razorpay", "Amazon"],
  bfs: ["Google", "Microsoft", "Amazon"],
  "topological-sort": ["Atlassian", "Google", "Razorpay"],
  "union-find": ["Google", "Amazon", "Flipkart"],
  heaps: ["Amazon", "Google", "Zepto"],
  "two-heap": ["Google", "Amazon", "Microsoft"],
  "monotonic-stack": ["Google", "Amazon", "Meta"],
  "monotonic-deque": ["Google", "Zepto", "Amazon"],
  "merge-intervals": ["Meta", "Amazon", "Microsoft"],
  greedy: ["Amazon", "Meta", "Zepto"],
  tries: ["Google", "Microsoft", "Adobe"],
  "bit-manipulation": ["Google", "Adobe", "Microsoft"],
  "fast-slow-pointers": ["Amazon", "Microsoft", "Meta"],
  "recursion-backtracking": ["Google", "Adobe", "Amazon"],
  "stack-basic": ["Amazon", "Microsoft", "Meta"],
  "prefix-sum": ["Meta", "Amazon", "Google"]
};

const freqByRank = (rank) => rank < 70 ? "Very High" : rank < 125 ? "High" : rank < 150 ? "Medium" : "Niche";
const weekByPattern = (slug) => ({
  "hashmap-frequency": 1, "two-pointers": 2, "sliding-window": 2, "prefix-sum": 3, "binary-search": 3, "binary-search-on-answer": 3,
  "stack-basic": 4, "monotonic-stack": 4, "monotonic-deque": 4, "fast-slow-pointers": 5, "dfs-tree": 6, bfs: 6, heaps: 7,
  "two-heap": 7, "dfs-graph": 9, "topological-sort": 10, "union-find": 10, "dp-1d": 11, "kadanes-algorithm": 11,
  "dp-2d-grid": 12, "dp-strings": 13, "merge-intervals": 13, greedy: 14, tries: 14, "bit-manipulation": 15,
  "dp-knapsack": 15, "dp-trees": 15, "divide-conquer": 15, "recursion-backtracking": 8
}[slug] ?? 8);

function problemsTs() {
  const objects = problemIds.map((id, index) => {
    const row = lcById.get(id);
    if (!row) throw new Error(`Missing LeetCode metadata for ${id}`);
    const patterns = idPatterns[id] ?? ["hashmap-frequency"];
    const category = categories[patterns[0]];
    const estimatedMinutes = row.difficulty === "Easy" ? 10 : row.difficulty === "Medium" ? 20 : 30;
    return `  {
    id: ${id},
    title: ${JSON.stringify(row.title)},
    slug: ${JSON.stringify(row.titleSlug)},
    difficulty: ${JSON.stringify(row.difficulty)},
    patterns: ${jsString(patterns)},
    frequency: ${JSON.stringify(freqByRank(index))},
    companies: ${jsString(companyCycle[patterns[0]] ?? ["Google", "Amazon", "Meta"])},
    isNeetCode150: ${neetcode150.has(id)},
    isBlind75: ${blind75.has(id)},
    isIndianUnicorn: ${indian.has(id)},
    weekInRoadmap: ${weekByPattern(patterns[0])},
    unlockHint: ${JSON.stringify(`Look for the ${patternNames[patterns[0]]} invariant before choosing data structures.`)},
    estimatedMinutes: ${estimatedMinutes},
    category: ${JSON.stringify(category)}
  }`;
  }).join(",\n");
  return `import type { PatternCategory } from "./patterns";

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
${objects}
];

export const problems = PROBLEMS;
export const problemById = Object.fromEntries(PROBLEMS.map((problem) => [problem.id, problem])) as Record<number, Problem>;
`;
}

const roadmapWeeks = [
  { week: 1, theme: "Week 1: Arrays & HashMaps - Foundation", topics: ["hashmap-frequency"], goal: "Build constant-time lookup reflexes and finish core array/hashmap warmups." },
  { week: 2, theme: "Week 2: Two Pointers & Sliding Window - Contiguous Reasoning", topics: ["two-pointers", "sliding-window"], goal: "Master pointer movement and window validity without brute force." },
  { week: 3, theme: "Week 3: Prefix Sum & Binary Search - State Compression", topics: ["prefix-sum", "binary-search", "binary-search-on-answer"], goal: "Recognize cumulative-state and monotonic-boundary problems quickly." },
  { week: 4, theme: "Week 4: Stack & Monotonic Stack - Candidate Elimination", topics: ["stack-basic", "monotonic-stack", "monotonic-deque"], goal: "Use stack order to resolve next/previous constraints in linear time." },
  { week: 5, theme: "Week 5: Linked Lists - Pointer Discipline", topics: ["fast-slow-pointers"], goal: "Handle list mutation, cycle detection, middle finding, and reorder flows safely." },
  { week: 6, theme: "Week 6: Trees BFS/DFS - Recursive Returns", topics: ["dfs-tree", "bfs"], goal: "Make every tree call return exactly what its parent needs." },
  { week: 7, theme: "Week 7: BST & Heaps - Ordered Data Access", topics: ["dfs-tree", "heaps", "two-heap"], goal: "Combine ordered traversal with priority queues for top-k and streaming problems." },
  { week: 8, theme: "Week 8: MOCK WEEK - Backtracking and Review", topics: ["recursion-backtracking"], goal: "Run timed mocks and patch recursion, duplicate handling, and communication gaps." },
  { week: 9, theme: "Week 9: Graphs BFS/DFS - Modeling", topics: ["bfs", "dfs-graph"], goal: "Convert grids, words, and objects into graph states with clean visited rules." },
  { week: 10, theme: "Week 10: Topo Sort & Union Find - Dependency Systems", topics: ["topological-sort", "union-find"], goal: "Separate directed dependency ordering from undirected connectivity." },
  { week: 11, theme: "Week 11: DP 1D & Kadane - Linear Decisions", topics: ["dp-1d", "kadanes-algorithm"], goal: "Name one-dimensional states and compress only after the recurrence is correct." },
  { week: 12, theme: "Week 12: DP 2D & Grid - Table Geometry", topics: ["dp-2d-grid"], goal: "Use table axes and base rows/columns to solve grid and matrix DP." },
  { week: 13, theme: "Week 13: DP Strings & Intervals - Prefix and Range States", topics: ["dp-strings", "merge-intervals"], goal: "Handle two-string tables and interval sorting without off-by-one drift." },
  { week: 14, theme: "Week 14: Greedy & Tries - Irreversible Choices", topics: ["greedy", "tries"], goal: "Prove local choices and use prefix trees for dictionary-heavy questions." },
  { week: 15, theme: "Week 15: Bit Manipulation, Math & Advanced - Final Gaps", topics: ["bit-manipulation", "dp-knapsack", "dp-trees", "divide-conquer"], goal: "Close specialist gaps that often decide senior screens." },
  { week: 16, theme: "Week 16: FINAL MOCK WEEK - Interview Simulation", topics: patternSlugs.slice(0, 8), goal: "Run full interview loops, redo misses, and lock a final revision queue." }
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
function roadmapTs() {
  const objects = roadmapWeeks.map((week) => {
    const ids = problemIds.filter((id) => {
      const patterns = idPatterns[id] ?? ["hashmap-frequency"];
      return week.topics.some((topic) => patterns.includes(topic)) || weekByPattern(patterns[0]) === week.week;
    }).slice(0, week.week === 16 ? 16 : 12);
    const daily = days.map((day, i) => ({
      day,
      focus: i < week.topics.length ? patternNames[week.topics[i]] : i === 5 ? "Timed mixed set" : "Review and redo misses",
      problemCount: i < 5 ? 3 : i === 5 ? 4 : 2,
      difficulty: i < 2 ? "2E + 1M" : i < 5 ? "1E + 2M" : i === 5 ? "3M + 1H" : "Redo misses"
    }));
    return `  {
    week: ${week.week},
    theme: ${JSON.stringify(week.theme)},
    topics: ${jsString(week.topics)},
    dailyBreakdown: ${jsString(daily)},
    weeklyGoal: ${JSON.stringify(week.goal)},
    problemIds: ${jsString(ids)},
    transitionReasoning: ${JSON.stringify(week.week === 1 ? "Start with arrays and maps because they are the base language of almost every interview problem." : `Week ${week.week} follows Week ${week.week - 1} by adding one new constraint model while reusing the previous week's implementation discipline.`)},
    commonMistakes: ${JSON.stringify("Rushing into code, losing the invariant during edge cases, and failing to redo missed problems within a week.")}
  }`;
  }).join(",\n");
  return `export type RoadmapWeek = {
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
${objects}
];

export const roadmap = ROADMAP_WEEKS;
`;
}

const companyData = {
  google: {
    name: "Google",
    interviewStyle: "Google coding interviews heavily reward optimization, clean state modeling, and proving why the chosen approach is correct. Expect ambiguous prompts, follow-ups that change constraints, and a high bar for edge-case reasoning.",
    patternEmphasis: ["binary-search-on-answer", "dfs-graph", "dp-strings", "heaps"],
    topProblems: [4, 127, 212, 295, 297, 300, 329, 743, 1143, 1514],
    roundStructure: "Usually recruiter screen, phone/virtual technical rounds, then onsite loops with 3-4 coding rounds and a Googliness/leadership round.",
    difficulty: "Extreme",
    avgRounds: 5
  },
  amazon: {
    name: "Amazon",
    interviewStyle: "Amazon mixes practical DSA with Leadership Principles, so tradeoffs and ownership language matter while coding. Problems skew toward arrays, trees, heaps, graphs, and operational edge cases that can be discussed through customer impact.",
    patternEmphasis: ["hashmap-frequency", "bfs", "heaps", "dp-1d"],
    topProblems: [1, 23, 49, 56, 121, 200, 215, 347, 621, 994],
    roundStructure: "Online assessment, one or two technical screens, then a loop with coding, design, and behavioral LP-heavy rounds.",
    difficulty: "Very High",
    avgRounds: 5
  },
  microsoft: {
    name: "Microsoft",
    interviewStyle: "Microsoft interviews often value clear fundamentals, maintainable code, and conversational problem solving. Tree, linked-list, DP, and design-flavored questions appear frequently, with follow-ups around API cleanliness and edge behavior.",
    patternEmphasis: ["dfs-tree", "fast-slow-pointers", "dp-strings", "stack-basic"],
    topProblems: [20, 21, 70, 98, 102, 146, 206, 236, 297, 1143],
    roundStructure: "Recruiter screen, technical phone or OA, then 3-5 onsite rounds including coding, design, and manager conversations.",
    difficulty: "High",
    avgRounds: 4
  },
  meta: {
    name: "Meta",
    interviewStyle: "Meta emphasizes fast execution on known medium patterns, especially arrays, strings, trees, and graphs. Interviewers expect concise clarification, immediate pattern recognition, and production-clean implementation under time pressure.",
    patternEmphasis: ["sliding-window", "two-pointers", "dfs-tree", "merge-intervals"],
    topProblems: [3, 15, 56, 76, 124, 125, 200, 238, 560, 680],
    roundStructure: "Recruiter screen, coding screen, then onsite loops with coding, behavioral, and system/product architecture depending on level.",
    difficulty: "Very High",
    avgRounds: 5
  },
  atlassian: {
    name: "Atlassian",
    interviewStyle: "Atlassian frequently blends DSA with practical product engineering, API design, and collaboration scenarios. Graph/dependency modeling, rate limits, and clean object boundaries show up more than puzzle-style tricks.",
    patternEmphasis: ["topological-sort", "hashmap-frequency", "bfs", "greedy"],
    topProblems: [146, 207, 210, 380, 621, 721, 743, 981, 994, 1235],
    roundStructure: "Online assessment or screen, coding, values interview, and system/design rounds tailored to product engineering.",
    difficulty: "High",
    avgRounds: 4
  },
  adobe: {
    name: "Adobe",
    interviewStyle: "Adobe interviews are fundamentals-heavy with strings, DP, trees, and backtracking appearing regularly. They reward careful implementation and ability to explain tradeoffs rather than only final complexity.",
    patternEmphasis: ["dp-strings", "recursion-backtracking", "tries", "bit-manipulation"],
    topProblems: [10, 39, 46, 72, 79, 91, 208, 212, 338, 1143],
    roundStructure: "OA or phone screen followed by multiple technical rounds and a hiring-manager discussion.",
    difficulty: "High",
    avgRounds: 4
  },
  razorpay: {
    name: "Razorpay",
    interviewStyle: "Razorpay is backend-heavy and often expects system design thinking even for intern or early-career loops. DSA questions tend to connect with scalable services: graphs, queues, rate limits, idempotency, and correctness under failure.",
    patternEmphasis: ["dfs-graph", "topological-sort", "heaps", "binary-search-on-answer"],
    topProblems: [127, 146, 207, 210, 215, 295, 743, 787, 994, 1514],
    roundStructure: "DSA/OA, backend coding or machine-coding, system design, and bar-raiser or manager rounds.",
    difficulty: "Very High",
    avgRounds: 5
  },
  flipkart: {
    name: "Flipkart",
    interviewStyle: "Flipkart interviews commonly stress algorithmic speed, machine-coding readiness, and design choices for commerce-scale systems. Binary search, DP, heaps, and graph modeling appear alongside practical backend discussions.",
    patternEmphasis: ["binary-search-on-answer", "dp-knapsack", "heaps", "union-find"],
    topProblems: [23, 56, 128, 215, 300, 322, 416, 721, 875, 1011],
    roundStructure: "OA or coding screen, DSA rounds, machine-coding/system-design round, and hiring-manager discussion.",
    difficulty: "Very High",
    avgRounds: 5
  },
  zepto: {
    name: "Zepto",
    interviewStyle: "Zepto has a fast-paced startup bar where candidates must code quickly and reason about product constraints. Expect DSA plus product thinking around dispatch, inventory, prioritization, and latency tradeoffs.",
    patternEmphasis: ["heaps", "monotonic-deque", "greedy", "sliding-window"],
    topProblems: [45, 55, 215, 239, 621, 763, 853, 904, 1438, 1235],
    roundStructure: "Fast coding screen, practical DSA/machine-coding, product or system discussion, and founder/manager-style culture round.",
    difficulty: "Very High",
    avgRounds: 4
  }
};

function companiesTs() {
  return `export type CompanyData = {
  name: string;
  interviewStyle: string;
  patternEmphasis: string[];
  topProblems: number[];
  roundStructure: string;
  difficulty: "High" | "Very High" | "Extreme";
  avgRounds: number;
};

export const COMPANY_DATA: Record<string, CompanyData> = ${JSON.stringify(companyData, null, 2)};

export const companySheets = Object.entries(COMPANY_DATA).map(([slug, data]) => ({ slug, ...data }));
`;
}

fs.writeFileSync(`${root}/data/patterns.ts`, patternTs());
fs.writeFileSync(`${root}/data/problems.ts`, problemsTs());
fs.writeFileSync(`${root}/data/roadmap.ts`, roadmapTs());
fs.writeFileSync(`${root}/data/companies.ts`, companiesTs());
console.log(`Generated ${patternSlugs.length} patterns, ${problemIds.length} problems, ${roadmapWeeks.length} weeks, ${Object.keys(companyData).length} companies.`);
