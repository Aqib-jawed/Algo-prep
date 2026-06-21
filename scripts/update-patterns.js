const fs = require('fs');
let src = fs.readFileSync('./data/patterns.ts', 'utf8');

const updates = {
  'prefix-sum': [
    'Prefix sum precomputes cumulative totals so that any range sum query becomes O(1) instead of O(n). If a problem asks for the sum of a subarray many times, or asks whether a subarray sum equals a target, prefix sum is almost always the right tool.',
    `def prefix_sum(nums, queries):
    prefix = [0] * (len(nums) + 1)
    for i, n in enumerate(nums):
        prefix[i + 1] = prefix[i] + n
    return [prefix[r + 1] - prefix[l] for l, r in queries]`,
    `vector<int> prefixSum(vector<int>& nums, vector<pair<int,int>>& q) {
    int n = nums.size();
    vector<int> pre(n+1,0);
    for (int i=0;i<n;i++) pre[i+1]=pre[i]+nums[i];
    vector<int> res;
    for (auto& [l,r]:q) res.push_back(pre[r+1]-pre[l]);
    return res;
}`,
    `void prefixSum(int* nums, int n, int* out, int* ql, int* qr, int q) {
    int* pre = calloc(n+1,4);
    for (int i=0;i<n;i++) pre[i+1]=pre[i]+nums[i];
    for (int i=0;i<q;i++) out[i]=pre[qr[i]+1]-pre[ql[i]];
    free(pre);
}`,
    `function prefixSum(nums, queries) {
    const pre = new Array(nums.length+1).fill(0);
    for (let i=0;i<nums.length;i++) pre[i+1]=pre[i]+nums[i];
    return queries.map(([l,r])=>pre[r+1]-pre[l]);
}`
  ],
  'binary-search': [
    'Binary search eliminates half the search space on every step, giving O(log n) instead of O(n) for finding a target in a sorted collection. The key is identifying the monotonic property \u2014 what makes the left half invalid and the right half valid, or vice versa.',
    `def binary_search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target: return mid
        elif nums[mid] < target: left = mid + 1
        else: right = mid - 1
    return -1`,
    `int binarySearch(vector<int>& nums, int target) {
    int l=0, r=nums.size()-1;
    while (l<=r) {
        int mid=l+(r-l)/2;
        if (nums[mid]==target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`,
    `int binarySearch(int* nums, int n, int target) {
    int l=0,r=n-1;
    while (l<=r) {
        int mid=l+(r-l)/2;
        if (nums[mid]==target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`,
    `function binarySearch(nums, target) {
    let l=0, r=nums.length-1;
    while (l<=r) {
        const mid=l+Math.floor((r-l)/2);
        if (nums[mid]===target) return mid;
        else if (nums[mid]<target) l=mid+1;
        else r=mid-1;
    }
    return -1;
}`
  ],
  'binary-search-on-answer': [
    'Binary search on the answer space applies binary search not to the input array but to the range of possible answers. If you can write a function that checks "is answer X feasible?" in O(n), you can binary search over all possible answers in O(n log n).',
    `def bs_on_answer(nums, limit):
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
    `int bsOnAnswer(vector<int>& nums, int limit) {
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
    `int bsOnAnswer(int* nums, int n, int limit) {
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
    `function bsOnAnswer(nums, limit) {
    const ok=mid=>{
        let cnt=1,tot=0;
        for(const n of nums){if(tot+n>mid){cnt++;tot=0;}tot+=n;}
        return cnt<=limit;
    };
    let l=Math.max(...nums),r=nums.reduce((a,b)=>a+b,0);
    while(l<r){const m=l+Math.floor((r-l)/2);if(ok(m))r=m;else l=m+1;}
    return l;
}`
  ],
  'kadanes-algorithm': [
    "Kadane's algorithm finds the maximum subarray sum in O(n) by tracking a local maximum that resets to zero whenever it goes negative. It is the gateway to 1D DP \u2014 the recurrence dp[i] = max(nums[i], dp[i-1] + nums[i]) is the core idea behind most linear DP problems.",
    `def kadanes(nums):
    best=cur=nums[0]
    for n in nums[1:]:
        cur=max(n,cur+n)
        best=max(best,cur)
    return best`,
    `int kadanes(vector<int>& nums) {
    int best=nums[0],cur=nums[0];
    for(int i=1;i<(int)nums.size();i++){
        cur=max(nums[i],cur+nums[i]);
        best=max(best,cur);
    }
    return best;
}`,
    `int kadanes(int* nums, int n) {
    int best=nums[0],cur=nums[0];
    for(int i=1;i<n;i++){
        cur=nums[i]>cur+nums[i]?nums[i]:cur+nums[i];
        if(cur>best)best=cur;
    }
    return best;
}`,
    `function kadanes(nums) {
    let best=nums[0],cur=nums[0];
    for(let i=1;i<nums.length;i++){
        cur=Math.max(nums[i],cur+nums[i]);
        best=Math.max(best,cur);
    }
    return best;
}`
  ],
  'hashmap-frequency': [
    'HashMap frequency trading uses a hash map to count occurrences or store previously seen values, converting O(n\u00b2) lookup problems into O(n). The pattern is: iterate once, store in map, look up the complement or pair on each step.',
    `def two_sum(nums, target):
    seen={}
    for i,n in enumerate(nums):
        if target-n in seen: return [seen[target-n],i]
        seen[n]=i
    return []`,
    `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int,int> seen;
    for(int i=0;i<(int)nums.size();i++){
        int c=target-nums[i];
        if(seen.count(c)) return {seen[c],i};
        seen[nums[i]]=i;
    }
    return {};
}`,
    `void twoSum(int* nums, int n, int target, int* out) {
    for(int i=0;i<n;i++)
        for(int j=i+1;j<n;j++)
            if(nums[i]+nums[j]==target){out[0]=i;out[1]=j;return;}
}`,
    `function twoSum(nums, target) {
    const seen=new Map();
    for(let i=0;i<nums.length;i++){
        const c=target-nums[i];
        if(seen.has(c)) return [seen.get(c),i];
        seen.set(nums[i],i);
    }
    return [];
}`
  ],
  'stack-basic': [
    "A stack solves problems that require you to remember previous context and process it in reverse order (LIFO). Classic uses: matching brackets, evaluating expressions, and tracking the most recent valid state. If the problem involves 'undo' or 'most recent', think stack.",
    `def is_valid(s):
    stack=[]
    pairs={')':'(','}':'{',']':'['}
    for c in s:
        if c in '([{': stack.append(c)
        elif not stack or stack[-1]!=pairs[c]: return False
        else: stack.pop()
    return not stack`,
    `bool isValid(string s) {
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
    `bool isValid(char* s) {
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
    `function isValid(s) {
    const stack=[], pairs={')':'(','}':'{',']':'['};
    for(const c of s){
        if('([{'.includes(c)) stack.push(c);
        else if(!stack.length||stack[stack.length-1]!==pairs[c]) return false;
        else stack.pop();
    }
    return stack.length===0;
}`
  ],
  'monotonic-stack': [
    "A monotonic stack maintains elements in strictly increasing or decreasing order by popping elements that violate the order when a new element arrives. Use it for 'next greater element', 'previous smaller element', and histogram problems like Trapping Rain Water.",
    `def next_greater(nums):
    result=[-1]*len(nums)
    stack=[]
    for i in range(len(nums)):
        while stack and nums[stack[-1]]<nums[i]:
            result[stack.pop()]=nums[i]
        stack.append(i)
    return result`,
    `vector<int> nextGreater(vector<int>& nums) {
    int n=nums.size();
    vector<int> res(n,-1);
    stack<int> st;
    for(int i=0;i<n;i++){
        while(!st.empty()&&nums[st.top()]<nums[i]){res[st.top()]=nums[i];st.pop();}
        st.push(i);
    }
    return res;
}`,
    `void nextGreater(int* nums, int n, int* result) {
    int* st=malloc(n*4);int top=-1;
    for(int i=0;i<n;i++) result[i]=-1;
    for(int i=0;i<n;i++){
        while(top>=0&&nums[st[top]]<nums[i]) result[st[top--]]=nums[i];
        st[++top]=i;
    }
    free(st);
}`,
    `function nextGreater(nums) {
    const res=new Array(nums.length).fill(-1),st=[];
    for(let i=0;i<nums.length;i++){
        while(st.length&&nums[st[st.length-1]]<nums[i]) res[st.pop()]=nums[i];
        st.push(i);
    }
    return res;
}`
  ],
  'monotonic-deque': [
    'A monotonic deque extends the monotonic stack to a double-ended queue, enabling O(1) window maximum or minimum queries as the window slides. This is the pattern behind the Sliding Window Maximum problem and most range maximum queries.',
    `from collections import deque
def max_sliding_window(nums, k):
    dq=deque()
    res=[]
    for i in range(len(nums)):
        while dq and dq[0]<i-k+1: dq.popleft()
        while dq and nums[dq[-1]]<nums[i]: dq.pop()
        dq.append(i)
        if i>=k-1: res.append(nums[dq[0]])
    return res`,
    `vector<int> maxSlidingWindow(vector<int>& nums, int k) {
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
    `void maxSlidingWindow(int* nums, int n, int k, int* res, int* sz) {
    int* dq=malloc(n*4);int fr=0,bk=0;*sz=0;
    for(int i=0;i<n;i++){
        while(fr<bk&&dq[fr]<i-k+1) fr++;
        while(fr<bk&&nums[dq[bk-1]]<nums[i]) bk--;
        dq[bk++]=i;
        if(i>=k-1) res[(*sz)++]=nums[dq[fr]];
    }
    free(dq);
}`,
    `function maxSlidingWindow(nums, k) {
    const dq=[],res=[];
    for(let i=0;i<nums.length;i++){
        while(dq.length&&dq[0]<i-k+1) dq.shift();
        while(dq.length&&nums[dq[dq.length-1]]<nums[i]) dq.pop();
        dq.push(i);
        if(i>=k-1) res.push(nums[dq[0]]);
    }
    return res;
}`
  ],
  'recursion-backtracking': [
    'Backtracking explores all possible solutions by building them incrementally and abandoning a path the moment it becomes invalid. The template: choose, recurse, unchoose. Use it for permutations, combinations, subsets, and constraint-satisfaction problems like N-Queens.',
    `def subsets(nums):
    res=[]
    def bt(start,cur):
        res.append(list(cur))
        for i in range(start,len(nums)):
            cur.append(nums[i]);bt(i+1,cur);cur.pop()
    bt(0,[])
    return res`,
    `vector<vector<int>> subsets(vector<int>& nums) {
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
    `void subsets(int* nums, int n, int** out, int* sz) {
    *sz=1<<n;
    for(int mask=0;mask<*sz;mask++){
        int idx=0;
        for(int i=0;i<n;i++) if(mask&(1<<i)) out[mask][idx++]=nums[i];
    }
}`,
    `function subsets(nums) {
    const res=[];
    function bt(start,cur) {
        res.push([...cur]);
        for(let i=start;i<nums.length;i++){
            cur.push(nums[i]);bt(i+1,cur);cur.pop();
        }
    }
    bt(0,[]);
    return res;
}`
  ],
  'bfs': [
    'BFS explores a graph level by level using a queue, making it optimal for finding the shortest path in an unweighted graph. If a problem asks for minimum steps, minimum moves, or the nearest node satisfying a condition, BFS is almost always correct.',
    `from collections import deque
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
    `int bfs(unordered_map<int,vector<int>>& g, int s, int t) {
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
    `int bfs(int** g, int* sz, int s, int t, int n) {
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
    `function bfs(graph, start, target) {
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
}`
  ],
  'dfs-tree': [
    'DFS on trees uses recursion to visit every node exactly once, returning values up the call stack. The three traversal orders (preorder, inorder, postorder) each have specific use cases: inorder for BST, preorder for serialisation, postorder for subtree aggregation.',
    `def max_depth(root):
    if not root: return 0
    return 1+max(max_depth(root.left),max_depth(root.right))

def inorder(root,result=[]):
    if not root: return result
    inorder(root.left,result)
    result.append(root.val)
    inorder(root.right,result)
    return result`,
    `int maxDepth(TreeNode* root) {
    if(!root) return 0;
    return 1+max(maxDepth(root->left),maxDepth(root->right));
}
void inorder(TreeNode* root,vector<int>& res) {
    if(!root) return;
    inorder(root->left,res);res.push_back(root->val);inorder(root->right,res);
}`,
    `int maxDepth(struct TreeNode* root) {
    if(!root) return 0;
    int l=maxDepth(root->left),r=maxDepth(root->right);
    return 1+(l>r?l:r);
}`,
    `function maxDepth(root) {
    if(!root) return 0;
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
}
function inorder(root,res=[]) {
    if(!root) return res;
    inorder(root.left,res);res.push(root.val);inorder(root.right,res);
    return res;
}`
  ],
  'dfs-graph': [
    'DFS on graphs adds a visited set to tree DFS to handle cycles and disconnected components. Use it for connected components, cycle detection, path existence, and flood fill problems. Always initialise the visited set before the first DFS call.',
    `def count_components(n, edges):
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
    `int countComponents(int n, vector<vector<int>>& edges) {
    vector<vector<int>> g(n);
    for(auto& e:edges){g[e[0]].push_back(e[1]);g[e[1]].push_back(e[0]);}
    vector<bool> vis(n,false);
    function<void(int)> dfs=[&](int u){vis[u]=true;for(int v:g[u])if(!vis[v])dfs(v);};
    int cnt=0;
    for(int i=0;i<n;i++) if(!vis[i]){dfs(i);cnt++;}
    return cnt;
}`,
    `void dfs(int** g, int* sz, int* vis, int u) {
    vis[u]=1;
    for(int i=0;i<sz[u];i++) if(!vis[g[u][i]]) dfs(g,sz,vis,g[u][i]);
}
int countComponents(int n) {
    int vis[1000]={0},cnt=0;
    for(int i=0;i<n;i++) if(!vis[i]){dfs(NULL,NULL,vis,i);cnt++;}
    return cnt;
}`,
    `function countComponents(n, edges) {
    const g=Array.from({length:n},()=>[]);
    for(const [u,v] of edges){g[u].push(v);g[v].push(u);}
    const vis=new Set();
    const dfs=u=>{vis.add(u);for(const v of g[u])if(!vis.has(v))dfs(v);};
    let cnt=0;
    for(let i=0;i<n;i++) if(!vis.has(i)){dfs(i);cnt++;}
    return cnt;
}`
  ],
  'topological-sort': [
    "Topological sort orders nodes in a DAG such that every edge points from earlier to later. Use Kahn's algorithm (BFS with in-degree tracking) for most cases, or DFS with a finish stack. The canonical problem is Course Schedule \u2014 any dependency ordering problem fits.",
    `from collections import deque
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
    `vector<int> topoSort(int n, vector<vector<int>>& p) {
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
    `void topoSort(int n, int* result, int* sz) {
    int ind[200]={0};
    int q[200],fr=0,bk=0;*sz=0;
    for(int i=0;i<n;i++) if(ind[i]==0) q[bk++]=i;
    while(fr<bk) result[(*sz)++]=q[fr++];
}`,
    `function topoSort(n, prereqs) {
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
}`
  ],
  'union-find': [
    'Union Find (DSU) tracks which elements belong to the same connected component using a parent array with path compression and union by rank. Faster than BFS/DFS for repeated connectivity queries on a dynamic graph. Use it for Redundant Connection and Friend Circles.',
    `class UnionFind:
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
    `struct UF {
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
    `int par[10001],rnk[10001];
void init(int n){for(int i=0;i<n;i++){par[i]=i;rnk[i]=0;}}
int find(int x){return par[x]==x?x:(par[x]=find(par[x]));}
bool unite(int x,int y){
    int px=find(x),py=find(y);
    if(px==py)return false;
    if(rnk[px]<rnk[py]){int t=px;px=py;py=t;}
    par[py]=px;if(rnk[px]==rnk[py])rnk[px]++;
    return true;
}`,
    `class UnionFind {
    constructor(n){this.p=Array.from({length:n},(_,i)=>i);this.r=new Array(n).fill(0);}
    find(x){if(this.p[x]!==x)this.p[x]=this.find(this.p[x]);return this.p[x];}
    union(x,y){
        let px=this.find(x),py=this.find(y);
        if(px===py)return false;
        if(this.r[px]<this.r[py])[px,py]=[py,px];
        this.p[py]=px;if(this.r[px]===this.r[py])this.r[px]++;
        return true;
    }
}`
  ],
  'heaps': [
    "A heap (priority queue) gives O(log n) insert and O(1) peek at the min or max element. The canonical patterns: K-th largest element, merge K sorted lists, task scheduling, and the top-K frequency pattern. Java's PriorityQueue is a min-heap by default.",
    `import heapq
def kth_largest(nums,k):
    heap=[]
    for n in nums:
        heapq.heappush(heap,n)
        if len(heap)>k: heapq.heappop(heap)
    return heap[0]`,
    `int kthLargest(vector<int>& nums,int k){
    priority_queue<int,vector<int>,greater<int>> pq;
    for(int n:nums){pq.push(n);if((int)pq.size()>k)pq.pop();}
    return pq.top();
}`,
    `void heapify(int* h,int n,int i){
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
    `function kthLargest(nums,k){
    const heap=nums.slice(0,k).sort((a,b)=>a-b);
    for(let i=k;i<nums.length;i++){
        if(nums[i]>heap[0]){heap[0]=nums[i];heap.sort((a,b)=>a-b);}
    }
    return heap[0];
}`
  ],
  'merge-intervals': [
    "Merge intervals sorts intervals by start time and then greedily merges overlapping ones. The key condition: if the current interval's start <= previous interval's end, merge them. Used for meeting rooms, calendar conflicts, and CPU burst scheduling.",
    `def merge_intervals(intervals):
    intervals.sort(key=lambda x:x[0])
    merged=[intervals[0]]
    for s,e in intervals[1:]:
        if s<=merged[-1][1]: merged[-1][1]=max(merged[-1][1],e)
        else: merged.append([s,e])
    return merged`,
    `vector<vector<int>> merge(vector<vector<int>>& iv){
    sort(iv.begin(),iv.end());
    vector<vector<int>> res={iv[0]};
    for(int i=1;i<(int)iv.size();i++){
        if(iv[i][0]<=res.back()[1]) res.back()[1]=max(res.back()[1],iv[i][1]);
        else res.push_back(iv[i]);
    }
    return res;
}`,
    `void mergeIv(int** iv,int n,int** out,int* sz){
    // sort by start externally
    *sz=0;
    out[*sz][0]=iv[0][0];out[(*sz)++][1]=iv[0][1];
    for(int i=1;i<n;i++){
        if(iv[i][0]<=out[*sz-1][1]){if(iv[i][1]>out[*sz-1][1])out[*sz-1][1]=iv[i][1];}
        else{out[*sz][0]=iv[i][0];out[(*sz)++][1]=iv[i][1];}
    }
}`,
    `function merge(intervals){
    intervals.sort((a,b)=>a[0]-b[0]);
    const res=[intervals[0]];
    for(let i=1;i<intervals.length;i++){
        const [s,e]=intervals[i];
        if(s<=res[res.length-1][1]) res[res.length-1][1]=Math.max(res[res.length-1][1],e);
        else res.push([s,e]);
    }
    return res;
}`
  ],
  'two-heap': [
    'Two heap maintains a max-heap of the lower half and a min-heap of the upper half, balancing them after every insertion to keep the median accessible in O(1). Used for Find Median from Data Stream and Sliding Window Median.',
    `import heapq
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
    `class MedianFinder {
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
    `// Simplified sort-based median for C
double findMedian(int* nums, int n){
    // In production: maintain two heaps
    // Here: sort and pick middle
    return n%2 ? nums[n/2] : (nums[n/2-1]+nums[n/2])/2.0;
}`,
    `class MedianFinder {
    constructor(){this.lo=[];this.hi=[];}
    addNum(num){
        this.lo.push(num);this.lo.sort((a,b)=>b-a);
        this.hi.push(this.lo.shift());this.hi.sort((a,b)=>a-b);
        if(this.hi.length>this.lo.length){this.lo.unshift(this.hi.shift());this.lo.sort((a,b)=>b-a);}
    }
    findMedian(){
        return this.lo.length>this.hi.length?this.lo[0]:(this.lo[0]+this.hi[0])/2;
    }
}`
  ],
  'dp-1d': [
    '1D DP solves problems with optimal substructure where the answer at position i depends only on previous positions. The template: define dp[i], write the recurrence, initialise base cases. Classic problems: Fibonacci, Climbing Stairs, House Robber, Decode Ways.',
    `def house_robber(nums):
    if not nums: return 0
    if len(nums)==1: return nums[0]
    dp=[0]*len(nums)
    dp[0]=nums[0];dp[1]=max(nums[0],nums[1])
    for i in range(2,len(nums)):
        dp[i]=max(dp[i-1],dp[i-2]+nums[i])
    return dp[-1]`,
    `int houseRobber(vector<int>& nums){
    int n=nums.size();
    if(n==1) return nums[0];
    vector<int> dp(n);
    dp[0]=nums[0];dp[1]=max(nums[0],nums[1]);
    for(int i=2;i<n;i++) dp[i]=max(dp[i-1],dp[i-2]+nums[i]);
    return dp[n-1];
}`,
    `int houseRobber(int* nums,int n){
    if(n==1) return nums[0];
    int p2=nums[0],p1=nums[0]>nums[1]?nums[0]:nums[1];
    for(int i=2;i<n;i++){int c=p1>p2+nums[i]?p1:p2+nums[i];p2=p1;p1=c;}
    return p1;
}`,
    `function houseRobber(nums){
    if(nums.length===1) return nums[0];
    const dp=new Array(nums.length);
    dp[0]=nums[0];dp[1]=Math.max(nums[0],nums[1]);
    for(let i=2;i<nums.length;i++) dp[i]=Math.max(dp[i-1],dp[i-2]+nums[i]);
    return dp[nums.length-1];
}`
  ],
  'dp-2d-grid': [
    'Two-dimensional grid DP fills a matrix where dp[i][j] depends on dp[i-1][j] and dp[i][j-1]. Used for unique paths, minimum path sum, and edit distance. The key: define what dp[i][j] means, write the transition, and handle the first row and column as base cases.',
    `def unique_paths(m,n):
    dp=[[1]*n for _ in range(m)]
    for i in range(1,m):
        for j in range(1,n):
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
    return dp[m-1][n-1]`,
    `int uniquePaths(int m,int n){
    vector<vector<int>> dp(m,vector<int>(n,1));
    for(int i=1;i<m;i++)
        for(int j=1;j<n;j++)
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`,
    `int uniquePaths(int m,int n){
    int dp[200][200];
    for(int i=0;i<m;i++) for(int j=0;j<n;j++) dp[i][j]=1;
    for(int i=1;i<m;i++) for(int j=1;j<n;j++) dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`,
    `function uniquePaths(m,n){
    const dp=Array.from({length:m},()=>new Array(n).fill(1));
    for(let i=1;i<m;i++)
        for(let j=1;j<n;j++)
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
    return dp[m-1][n-1];
}`
  ],
  'dp-strings': [
    'String DP handles problems comparing or transforming two strings using a 2D table where dp[i][j] represents the answer for the first i characters of s1 and j characters of s2. Covers Longest Common Subsequence, Edit Distance, and Longest Palindromic Subsequence.',
    `def lcs(s1,s2):
    m,n=len(s1),len(s2)
    dp=[[0]*(n+1) for _ in range(m+1)]
    for i in range(1,m+1):
        for j in range(1,n+1):
            dp[i][j]=dp[i-1][j-1]+1 if s1[i-1]==s2[j-1] else max(dp[i-1][j],dp[i][j-1])
    return dp[m][n]`,
    `int lcs(string s1,string s2){
    int m=s1.size(),n=s2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`,
    `int lcs(char* s1,char* s2){
    int m=strlen(s1),n=strlen(s2);
    int dp[1001][1001]={0};
    for(int i=1;i<=m;i++)
        for(int j=1;j<=n;j++)
            dp[i][j]=s1[i-1]==s2[j-1]?dp[i-1][j-1]+1:(dp[i-1][j]>dp[i][j-1]?dp[i-1][j]:dp[i][j-1]);
    return dp[m][n];
}`,
    `function lcs(s1,s2){
    const m=s1.length,n=s2.length;
    const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
    for(let i=1;i<=m;i++)
        for(let j=1;j<=n;j++)
            dp[i][j]=s1[i-1]===s2[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);
    return dp[m][n];
}`
  ],
  'dp-knapsack': [
    'Knapsack DP decides whether to include or exclude each item to reach a target weight or value. 0/1 knapsack uses dp[i][w], unbounded allows reuse. Covers Coin Change, Subset Sum, Partition Equal Subset Sum \u2014 the most common "can we reach target?" pattern.',
    `def coin_change(coins,amount):
    dp=[float("inf")]*(amount+1)
    dp[0]=0
    for i in range(1,amount+1):
        for c in coins:
            if c<=i: dp[i]=min(dp[i],dp[i-c]+1)
    return dp[amount] if dp[amount]!=float("inf") else -1`,
    `int coinChange(vector<int>& coins,int amount){
    vector<int> dp(amount+1,INT_MAX);
    dp[0]=0;
    for(int i=1;i<=amount;i++)
        for(int c:coins)
            if(c<=i&&dp[i-c]!=INT_MAX) dp[i]=min(dp[i],dp[i-c]+1);
    return dp[amount]==INT_MAX?-1:dp[amount];
}`,
    `int coinChange(int* coins,int n,int amount){
    int* dp=malloc((amount+1)*4);
    for(int i=0;i<=amount;i++) dp[i]=amount+1;
    dp[0]=0;
    for(int i=1;i<=amount;i++)
        for(int j=0;j<n;j++)
            if(coins[j]<=i&&dp[i-coins[j]]+1<dp[i]) dp[i]=dp[i-coins[j]]+1;
    int r=dp[amount]>amount?-1:dp[amount];free(dp);return r;
}`,
    `function coinChange(coins,amount){
    const dp=new Array(amount+1).fill(Infinity);
    dp[0]=0;
    for(let i=1;i<=amount;i++)
        for(const c of coins)
            if(c<=i&&dp[i-c]+1<dp[i]) dp[i]=dp[i-c]+1;
    return dp[amount]===Infinity?-1:dp[amount];
}`
  ],
  'dp-trees': [
    'DP on trees computes answers for subtrees bottom-up using DFS. Each node returns a value to its parent, which combines it with values from other children. Covers Binary Tree Maximum Path Sum, Diameter of Binary Tree, and House Robber III.',
    `def max_path_sum(root):
    res=[float("-inf")]
    def dfs(node):
        if not node: return 0
        l=max(dfs(node.left),0)
        r=max(dfs(node.right),0)
        res[0]=max(res[0],node.val+l+r)
        return node.val+max(l,r)
    dfs(root)
    return res[0]`,
    `int maxPathSum(TreeNode* root){
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
    `int gMax;
int dfs(struct TreeNode* node){
    if(!node) return 0;
    int l=dfs(node->left),r=dfs(node->right);
    if(l<0)l=0;if(r<0)r=0;
    if(node->val+l+r>gMax) gMax=node->val+l+r;
    return node->val+(l>r?l:r);
}
int maxPathSum(struct TreeNode* root){gMax=INT_MIN;dfs(root);return gMax;}`,
    `function maxPathSum(root){
    let mx=-Infinity;
    function dfs(node){
        if(!node) return 0;
        const l=Math.max(dfs(node.left),0),r=Math.max(dfs(node.right),0);
        mx=Math.max(mx,node.val+l+r);
        return node.val+Math.max(l,r);
    }
    dfs(root);
    return mx;
}`
  ],
  'greedy': [
    'Greedy makes the locally optimal choice at each step and never backtracks. It only works when you can prove that local optimal leads to global optimal \u2014 usually via exchange argument. Classic problems: Activity Selection, Jump Game, Minimum Number of Arrows to Burst Balloons.',
    `def can_jump(nums):
    reach=0
    for i,n in enumerate(nums):
        if i>reach: return False
        reach=max(reach,i+n)
    return True`,
    `bool canJump(vector<int>& nums){
    int reach=0;
    for(int i=0;i<(int)nums.size();i++){
        if(i>reach) return false;
        reach=max(reach,i+nums[i]);
    }
    return true;
}`,
    `bool canJump(int* nums,int n){
    int reach=0;
    for(int i=0;i<n;i++){
        if(i>reach) return false;
        if(i+nums[i]>reach) reach=i+nums[i];
    }
    return true;
}`,
    `function canJump(nums){
    let reach=0;
    for(let i=0;i<nums.length;i++){
        if(i>reach) return false;
        reach=Math.max(reach,i+nums[i]);
    }
    return true;
}`
  ],
  'tries': [
    "A trie (prefix tree) stores strings character by character, enabling O(m) insert and search where m is the string length. Use it for prefix matching, autocomplete, word search in a grid, and problems asking 'does any word start with this prefix?'",
    `class Trie:
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
    `struct TN{TN* ch[26]={};bool end=false;};
struct Trie{
    TN* root=new TN();
    void insert(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])n->ch[c-'a']=new TN();n=n->ch[c-'a'];}n->end=true;}
    bool search(string w){auto n=root;for(char c:w){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return n->end;}
    bool startsWith(string p){auto n=root;for(char c:p){if(!n->ch[c-'a'])return false;n=n->ch[c-'a'];}return true;}
};`,
    `typedef struct TN{struct TN* ch[26];int end;}TN;
TN* newTN(){return calloc(1,sizeof(TN));}
void insert(TN* r,char* w){for(;*w;w++){int i=*w-'a';if(!r->ch[i])r->ch[i]=newTN();r=r->ch[i];}r->end=1;}
int search(TN* r,char* w){for(;*w;w++){int i=*w-'a';if(!r->ch[i])return 0;r=r->ch[i];}return r->end;}`,
    `class Trie{
    constructor(){this.ch={};this.end=false;}
    insert(w){let n=this;for(const c of w){if(!n.ch[c])n.ch[c]=new Trie();n=n.ch[c];}n.end=true;}
    search(w){let n=this;for(const c of w){if(!n.ch[c])return false;n=n.ch[c];}return n.end;}
    startsWith(p){let n=this;for(const c of p){if(!n.ch[c])return false;n=n.ch[c];}return true;}
}`
  ],
  'bit-manipulation': [
    'Bit manipulation uses bitwise operators (&, |, ^, <<, >>) to solve problems at the binary level, often achieving O(1) space and O(n) time solutions. The XOR trick (a^a=0, a^0=a) solves "find the single number" in O(1) space. Bit masking solves subset enumeration.',
    `def single_number(nums):
    res=0
    for n in nums: res^=n
    return res

def count_bits(n):
    count=0
    while n: count+=n&1;n>>=1
    return count`,
    `int singleNumber(vector<int>& nums){
    int r=0;for(int n:nums)r^=n;return r;
}
int countBits(int n){
    int c=0;while(n){c+=n&1;n>>=1;}return c;
}`,
    `int singleNumber(int* nums,int n){
    int r=0;for(int i=0;i<n;i++)r^=nums[i];return r;
}
int countBits(int n){
    int c=0;while(n){c+=n&1;n>>=1;}return c;
}`,
    `const singleNumber=nums=>nums.reduce((a,b)=>a^b,0);
function countBits(n){let c=0;while(n){c+=n&1;n>>=1;}return c;}`
  ],
  'fast-slow-pointers': [
    "Fast and slow pointers (Floyd's cycle detection) detects cycles in a linked list or array by moving one pointer twice as fast as the other. If they meet, there's a cycle. Extends to finding the start of the cycle and the middle of a linked list.",
    `def has_cycle(head):
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
    `bool hasCycle(ListNode* head){
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
    `bool hasCycle(struct ListNode* head){
    struct ListNode *s=head,*f=head;
    while(f&&f->next){
        s=s->next;f=f->next->next;
        if(s==f) return true;
    }
    return false;
}`,
    `function hasCycle(head){
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
}`
  ],
  'divide-conquer': [
    'Divide and conquer splits the problem into independent subproblems, solves them recursively, and combines the results. The template: split, recurse on each half, merge. Classic uses: merge sort, quick sort, and finding the maximum subarray with cross-boundary splits.',
    `def merge_sort(nums):
    if len(nums)<=1: return nums
    mid=len(nums)//2
    l,r=merge_sort(nums[:mid]),merge_sort(nums[mid:])
    res,i,j=[],0,0
    while i<len(l) and j<len(r):
        if l[i]<=r[j]: res.append(l[i]);i+=1
        else: res.append(r[j]);j+=1
    return res+l[i:]+r[j:]`,
    `void merge(vector<int>& a,int l,int m,int r){
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
    `void merge(int* a,int l,int m,int r){
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
    `function mergeSort(nums){
    if(nums.length<=1) return nums;
    const mid=Math.floor(nums.length/2);
    const l=mergeSort(nums.slice(0,mid)),r=mergeSort(nums.slice(mid));
    const res=[];let i=0,j=0;
    while(i<l.length&&j<r.length) res.push(l[i]<=r[j]?l[i++]:r[j++]);
    return res.concat(l.slice(i)).concat(r.slice(j));
}`
  ]
};

let count = 0;
for (const [slug, [desc, py, cpp, c, js]] of Object.entries(updates)) {
  const slugLine = `    slug: "${slug}",`;
  const slugIdx = src.indexOf(slugLine);
  if (slugIdx === -1) { console.log('MISSING SLUG:', slug); continue; }
  
  // Find and replace description - find it after slug
  const descStart = src.indexOf('    description: "', slugIdx);
  const nextSlug = src.indexOf('  {', slugIdx + 10);
  if (descStart === -1 || (nextSlug !== -1 && descStart > nextSlug)) { console.log('MISSING DESC:', slug); continue; }
  
  const descEnd = src.indexOf('",', descStart) + 2;
  src = src.substring(0, descStart) + `    description: "${desc}",` + src.substring(descEnd);
  
  // Now find timeComplexity after slug (re-search)
  const slugIdx2 = src.indexOf(slugLine);
  const tcLabel = '    timeComplexity:';
  const tcIdx = src.indexOf(tcLabel, slugIdx2);
  if (tcIdx === -1) { console.log('MISSING TC:', slug); continue; }
  
  // Check if already added
  const between = src.substring(slugIdx2, tcIdx);
  if (between.includes('pythonTemplate:')) { console.log('SKIP (already has):', slug); continue; }
  
  const templates = `    pythonTemplate: \`${py}\`,\n    cppTemplate: \`${cpp}\`,\n    cTemplate: \`${c}\`,\n    javascriptTemplate: \`${js}\`,\n    `;
  src = src.substring(0, tcIdx) + templates + src.substring(tcIdx);
  count++;
  console.log('DONE:', slug);
}

fs.writeFileSync('./data/patterns.ts', src, 'utf8');
console.log('\nTotal updated:', count);
