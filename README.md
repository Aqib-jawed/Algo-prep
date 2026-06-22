<div align="center">

<img src="https://algo-prep-chi.vercel.app/favicon.ico" width="72" height="72" alt="Algo Prep logo" />

# Algo Prep

**Pattern-first DSA interview preparation — engineered for FAANG and top-tier startups.**

[![Live](https://img.shields.io/badge/Live-algo--prep--chi.vercel.app-f97316?style=flat-square&logo=vercel&logoColor=white)](https://algo-prep-chi.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-00b8a3?style=flat-square)](LICENSE)

<br />

> *Not another problem grinder. A structured operating system for cracking interviews by mastering patterns — not memorising solutions.*

<br />

![Dashboard Preview](https://algo-prep-chi.vercel.app/preview.png)

</div>

---

## What this is

Most candidates fail interviews not because they haven't solved enough problems but because they solved problems randomly. Algo Prep is built on a different philosophy — **pattern recognition first, problem volume second.**

The site teaches 25 core algorithm patterns. Once you can identify a pattern within 60 seconds of reading a problem, the implementation becomes mechanical. That is the skill that separates candidates who clear FAANG from those who don't.

**Who it's for:**
- Final-year CS undergrads targeting SDE/SWE internships and full-time roles
- Students targeting FAANG (Google, Amazon, Meta, Microsoft), YC-backed startups, and Indian unicorns (Razorpay, Zepto, Groww, Flipkart, CRED)
- Engineers who want a structured prep system, not a random problem queue

**What makes it different:**

| Other prep sites | Algo Prep |
|---|---|
| Random problem lists | 16-week roadmap with daily breakdowns |
| No explanation of *why* a pattern works | Cheatcode + Core invariant per pattern |
| One language (Python) | Templates in Java, Python, C++, C, JavaScript |
| No progress intelligence | Readiness score, pattern mastery radar, streak engine |
| Static content | AI-powered Algorithm Visualiser (Groq API) |
| Paid wall on best content | 100% free — every template, every problem, every tool |

---

## Feature surface

### 8 pages, 0 locked content

```
/               Dashboard      — personal command centre
/roadmap        Roadmap        — 16-week structured plan
/patterns       Patterns       — 25+ pattern library
/patterns/slug  Pattern detail — deep dive per pattern
/problems       Problems       — 160 curated LC problems
/strategy       Strategy       — FAANG prep operating system
/interview      Interview      — company-specific analysis
/progress       Progress       — telemetry and export
/visualise      Visualiser     — AI-powered step-by-step execution
/login          Auth           — Google OAuth + email/password
/account        Account        — profile, sync, delete
```

### Dashboard `/`

The dashboard is a personal command centre that updates in real time from your solving activity.

- **Personalised greeting** — time-aware (morning/afternoon/evening/night) + your name from session
- **4 live stat cards** — problems solved, patterns mastered, current streak, days until target
- **Today's Focus** — 3 recommended unsolved problems from your current week, prioritised by frequency
- **Pattern radar chart** — 8-axis Recharts RadarChart showing strength across all pattern categories
- **16-week roadmap progress** — one progress bar per week with solved/total counts
- **Recently solved** — last 5 solved problems with timestamps
- **Interview countdown** — if target date is set, shows days remaining and suggested daily pace

### Roadmap `/roadmap`

The 16-week plan is researched from public prep journeys of engineers at Google, Amazon, Microsoft, Meta, Razorpay, and similar companies. Every week has a reason for its position.

- **Week tab navigation** — sticky tabs for all 16 weeks, mock weeks (8 and 16) flagged
- **Week cards** — for each week: theme headline, daily breakdown table (Mon–Sun), weekly goal, transition reasoning ("why this week follows the previous"), and common mistakes specific to that week's material
- **Topic dependency graph** — SVG diagram with 29 pattern nodes, edges showing prerequisites, colour-coded by category, click any node to go to that pattern's page
- **Activity heatmap** — GitHub-style 52-week heatmap, colour intensity from your daily solve log
- **"Start This Week" button** — sets current week in store and filters Problems page to that week

Week sequence rationale:
```
W1  Arrays + HashMaps       — base data structure language
W2  Two Pointers + Sliding Window — contiguous reasoning
W3  Prefix Sum + Binary Search — state compression
W4  Stack + Monotonic Stack — candidate elimination
W5  Linked Lists            — pointer discipline
W6  Trees BFS/DFS           — recursive returns
W7  BST + Heaps             — ordered data access
W8  MOCK WEEK               — backtracking + review
W9  Graphs BFS/DFS          — state modeling
W10 Topo Sort + Union Find  — dependency systems
W11 DP 1D + Kadane          — linear decisions
W12 DP 2D + Grid            — table geometry
W13 DP Strings + Intervals  — prefix and range states
W14 Greedy + Tries          — irreversible choices
W15 Bit Manipulation + Math — final gaps
W16 FINAL MOCK WEEK         — interview simulation
```

### Patterns `/patterns` + `/patterns/[slug]`

The pattern library is the core of the site. 25+ patterns, each with a complete 7-section breakdown.

**Pattern index:**
- 3-column card grid (responsive)
- Search (debounced 200ms) + category filter (8 categories)
- Each card shows: mastery % ring, problem count, category badge, description
- Sort by: recommended order (default), mastery %, problem count

**Each pattern deep-dive contains:**

| Section | What it contains |
|---|---|
| **Overview** | Name, category, 2-3 sentence description, estimated days to master |
| **Cheatcode** | The 1–2 line recognition heuristic. Memorable, specific, not vague |
| **Core invariant** | Single sentence: what must always be true inside your data structure |
| **Code template** | Complete working template in **5 languages** — Java, Python, C++, C, JavaScript |
| **Complexity** | Time + space in Big-O with plain English explanation |
| **Variants** | 2–3 named variants (fixed vs variable window, BFS vs DFS, etc.) |
| **Top 5 mistakes** | Mistake in red → Fix in green. Specific, not generic |

**Language selector** — 5-pill toggle persisted to localStorage. Switching language instantly swaps the syntax-highlighted code block (Shiki, per-language theme).

**Problems in this pattern** — filtered problem table showing only this pattern's problems, with solved tracking.

### Problems `/problems`

160 curated problems, pattern-tagged and frequency-analysed.

**Filter bar (sticky):**
```
Search   — title, company, hint (debounced 200ms)
Pattern  — multi-select (all 29 slugs)
Difficulty — Easy / Medium / Hard
Status   — All / Solved / Unsolved / Starred
Frequency — Very High / High / Medium / Niche
Company  — 9 companies
Quick    — NeetCode 150 | Blind 75 | Indian Unicorns toggles
Sort     — by number / frequency / difficulty
```

**Problem row columns:**
- Solved checkbox (orange fill animation on check)
- LC number → links to `leetcode.com/problems/[slug]/`
- Problem name (clickable, opens LC in new tab + starts solve timer)
- Pattern tag(s) with category colour
- Difficulty badge (Easy #00b8a3 / Medium #ffc01e / Hard #ff375f)
- Frequency bar (visual) + label
- Company badges (top 3)
- Star toggle
- Hint icon — click reveals unlock hint without spoiling the algorithm

**Solve timer:** Activates when you open a problem. Floating bottom bar shows elapsed time, problem name, estimated time, Mark Solved button, and hint reveal. On mark solved: logs time to store, updates solve time stats.

**Keyboard shortcuts:**
```
J / K        — navigate rows down / up
S            — toggle solved on focused row
F            — toggle starred
/ or Ctrl+K  — focus search
G+P          — go to /problems
G+T          — go to /patterns
G+R          — go to /roadmap
?            — open shortcuts modal
```

### Strategy `/strategy`

A long-form, evidence-based guide built from the public prep journeys of engineers now at FAANG.

- **8-item accordion** — each insight from NeetCode, Clement Mihailescu, Sean Prashad, and aggregated Blind/Reddit patterns. Expanded items show 4-6 specific, actionable bullets (not generic advice)
- **Pattern mastery sequence** — 25-node interactive horizontal timeline. Click any node to see transition reasoning (why this pattern comes after the previous), what it unlocks, and how long it takes
- **Interview round analysis** — table mapping round type (OA / first technical / onsite coding / final onsite) to dominant patterns and approximate frequency %
- **4 mock interview cards** — Pramp (free), Interviewing.io (paid), self-mock protocol with scoring rubric
- **Mental models flowchart** — interactive SVG decision tree (15 nodes) for approaching unseen problems. Click any node to see the pattern and link to its page

### Interview Frequency `/interview`

Company-specific intelligence and pattern frequency analysis.

**Overview tab:**
- Pattern frequency bar chart (Recharts HorizontalBar, sorted by % of interviews)
- Top 50 most repeated questions with difficulty, pattern, company, frequency, and unlock hints
- Hidden gems — 15 underrated problems that appear frequently but rarely appear on prep lists
- MVP prep lists — 3 expandable cards: 3 weeks (40 problems) / 6 weeks (80) / 12 weeks (130)

**Company tabs (9 companies):**
```
Google · Amazon · Microsoft · Meta · Atlassian · Razorpay · Startups
```
Each tab shows: interview style notes, pattern emphasis pills, top 10 confirmed problems, round structure description, difficulty rating.

### Progress `/progress`

Full telemetry on your prep.

- **Contribution heatmap** — 52-week GitHub-style grid, colour intensity from daily solve log
- **Streak engine** — consecutive day counter, streak messages that change by milestone
- **Weekly goal** — configurable target (default 15/week), inline edit, progress bar
- **Interview countdown** — date picker, days remaining, suggested daily problem target
- **Readiness score** — 0–100 composite: 40% problems solved, 30% patterns completed, 20% streak, 10% medium+hard ratio. Labels: Beginner / Building / Interview Ready / FAANG Ready
- **Pattern mastery breakdown** — 29 progress bars, sorted by lowest mastery (surfaces weak areas)
- **Difficulty donut** — Recharts PieChart (Easy/Medium/Hard counts)
- **Solve time stats** — average solve time per difficulty from timer logs
- **Notion export** — downloads a formatted Markdown report with stats, pattern mastery table, and solved problem list

### Algorithm Visualiser `/visualise`

Enter any LeetCode problem and watch the algorithm execute step by step.

**How it works:**
1. User enters problem name + sample input (and optionally selects a pattern)
2. POST to `/api/visualise` sends data to Groq API (llama-3.3-70b-versatile)
3. Groq returns structured JSON with step-by-step algorithm trace (response_format: json_object — no markdown, guaranteed valid JSON)
4. Page renders each step using pattern-specific renderer components
5. User steps through manually or auto-plays at 0.5×/1×/2× speed

**10 quick-select problems** for instant demo (Two Sum, Valid Parentheses, Maximum Subarray, etc.)

**Renderers per data structure:**
```
array / two-pointer  → ArrayRenderer  (cells + pointer arrows + index labels)
sliding-window       → ArrayRenderer  (+ dashed window overlay)
hashmap              → ArrayRenderer  + HashmapRenderer (side by side)
stack                → StackRenderer  (vertical LIFO)
tree                 → TreeRenderer   (SVG, BFS layout, click to highlight)
queue / default      → ArrayRenderer
```

**Controls:**
- ⏮ ⏪ ▶/⏸ ⏩ ⏭ navigation buttons
- Progress bar (updates per step)
- Step scrubber (pill row, click any step to jump)
- Keyboard: Arrow keys to step, Space to play/pause
- Speed selector: 0.5× / 1× / 2×

**Response time:** 1–2 seconds (Groq is 3–5× faster than OpenAI for structured JSON tasks)

---

## System design

### Architecture overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser                               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  Next.js 14  │  │   Zustand    │  │   localStorage   │  │
│  │  App Router  │  │   (client    │  │   (progress      │  │
│  │  (RSC + CC)  │  │    state)    │  │    persistence)  │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────────────┘  │
└─────────┼─────────────────┼───────────────────────────────┘
          │                 │
          ▼                 ▼
┌─────────────────────────────────────────────────────────────┐
│                     Next.js API Routes                       │
│  /api/auth/[...nextauth]   — NextAuth handlers               │
│  /api/auth/register        — bcrypt registration             │
│  /api/visualise            — Groq API proxy                  │
│  /api/user/tier            — subscription check              │
│  /api/user/delete          — account deletion                │
└──────────┬──────────────────────────────────────────────────┘
           │
     ┌─────┴──────────────────────┐
     │                            │
     ▼                            ▼
┌──────────────┐        ┌─────────────────────┐
│  Supabase    │        │      Groq API        │
│  PostgreSQL  │        │  llama-3.3-70b-      │
│              │        │  versatile           │
│  User        │        │  (json_object mode)  │
│  Account     │        │  response: 1–2s      │
│  Session     │        └─────────────────────┘
└──────────────┘
```

### Data flow — Algorithm Visualiser

```
User input
    │
    ▼
POST /api/visualise
    │
    ├─ Look up pattern from /data/patterns.ts
    │  (adds cheatCode + coreInvariant to Groq system prompt)
    │
    ▼
Groq API (llama-3.3-70b-versatile)
    │  system: "return only JSON, no markdown"
    │  response_format: { type: "json_object" }
    │  temperature: 0.1
    │  max_tokens: 4096
    │
    ▼
JSON: { problemTitle, pattern, steps[], finalAnswer }
    │
    ▼
Client: steps array → renderDS(step)
    │
    ├─ 'array'          → <ArrayRenderer cells pointers />
    ├─ 'sliding-window' → <ArrayRenderer cells pointers windowStart windowEnd />
    ├─ 'hashmap'        → <ArrayRenderer /> + <HashmapRenderer />
    ├─ 'stack'          → <StackRenderer items />
    ├─ 'tree'           → <TreeRenderer nodes /> (SVG, BFS layout)
    └─ default          → <ArrayRenderer />
```

### Data flow — Progress tracking

```
User action (click solved checkbox)
    │
    ▼
markSolved(problemId) — Zustand action
    │
    ├─ Add to solvedProblems[]
    ├─ Increment dailyLog[today]
    ├─ Update streak (compare lastActiveDate to yesterday)
    ├─ Set lastActiveDate = today
    └─ Check milestone (10/25/50/100/150/160)
        │
        └─ If milestone hit → set pendingMilestone
            │
            └─ MilestoneWatcher (client, in layout) → showToast()

All state persisted via Zustand persist middleware
→ localStorage key: "dsa-prep-v1"
→ JSON serialisation (Set → Array for serialisability)
```

### Static data architecture

No database reads for content. All pattern, problem, roadmap, and company data is static TypeScript.

```
/data
  patterns.ts     — 29 Pattern objects
  problems.ts     — 160 Problem objects
  roadmap.ts      — 16 RoadmapWeek objects
  companies.ts    — 9 CompanyData objects

→ Imported at build time (Next.js static generation)
→ generateStaticParams() pre-renders all /patterns/[slug] pages at build
→ Zero runtime DB reads for content pages
→ Full Lighthouse score: 95+ (content is static HTML)
```

---

## Code architecture

```
algo-prep/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout — fonts, SessionProvider, ThemeProvider
│   ├── page.tsx                  # Dashboard (server component)
│   ├── roadmap/page.tsx          # 16-week roadmap
│   ├── patterns/
│   │   ├── page.tsx              # Pattern index
│   │   └── [slug]/page.tsx       # Pattern detail (generateStaticParams)
│   ├── problems/page.tsx         # Problem sheet
│   ├── strategy/page.tsx         # Strategy guide
│   ├── interview/page.tsx        # Interview analysis
│   ├── progress/page.tsx         # Progress tracker
│   ├── visualise/page.tsx        # Algorithm visualiser
│   ├── login/
│   │   ├── page.tsx              # Server: check session → redirect
│   │   └── AuthForm.tsx          # Client: tabbed login/register
│   ├── account/page.tsx          # Account management
│   ├── guide/page.tsx            # How to use guide
│   └── api/
│       ├── auth/
│       │   ├── [...nextauth]/route.ts
│       │   └── register/route.ts # bcrypt registration
│       ├── visualise/route.ts    # Groq API proxy
│       └── user/
│           ├── tier/route.ts
│           └── delete/route.ts
│
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx            # Auth state, avatar, theme toggle
│   │   ├── Sidebar.tsx           # Navigation with NEW badges
│   │   ├── ThemeToggle.tsx       # Dark/light, persisted to localStorage
│   │   ├── KeyboardShortcuts.tsx # Global hotkeys + modal + hint bar
│   │   ├── Toast.tsx             # Notification system (context + reducer)
│   │   ├── CodeBlock.tsx         # Shiki syntax highlighting
│   │   ├── DifficultyBadge.tsx
│   │   ├── PatternTag.tsx
│   │   ├── ProgressRing.tsx      # SVG circular ring
│   │   └── SearchBar.tsx         # Debounced 200ms
│   ├── patterns/
│   │   ├── PatternCard.tsx
│   │   ├── JavaTemplate.tsx      # Code display (now: LanguageTemplate)
│   │   ├── CheatCode.tsx         # Amber-bordered cheatcode card
│   │   └── LanguageSelector.tsx  # 5-language pill toggle
│   ├── problems/
│   │   ├── ProblemTable.tsx      # Main table with filters
│   │   ├── ProblemRow.tsx        # Individual row
│   │   └── SolveTimer.tsx        # Bottom bar timer
│   ├── roadmap/
│   │   ├── WeekCard.tsx
│   │   └── TopicNode.tsx
│   ├── progress/
│   │   ├── HeatmapCalendar.tsx   # 52-week GitHub-style grid
│   │   ├── StatsPanel.tsx
│   │   └── ReadinessCard.tsx     # Composite 0-100 score
│   └── visualiser/
│       ├── ArrayRenderer.tsx     # Array cells + pointer arrows
│       ├── StackRenderer.tsx     # Vertical LIFO stack
│       ├── HashmapRenderer.tsx   # Key-value table
│       ├── TreeRenderer.tsx      # SVG BFS-layout binary tree
│       └── StepExplanation.tsx   # Step title, explanation, code, result
│
├── data/                         # Static typed content (no DB reads)
│   ├── patterns.ts               # 29 Pattern objects with 5-language templates
│   ├── problems.ts               # 160 Problem objects (NeetCode 150 + Blind 75 + extras)
│   ├── roadmap.ts                # 16 RoadmapWeek objects
│   └── companies.ts             # 9 CompanyData objects
│
├── store/
│   └── useProgressStore.ts       # Zustand store, persisted to localStorage
│
├── lib/
│   ├── db.ts                     # Prisma client singleton
│   ├── auth.ts                   # getSession, requireAuth, getSessionWithTier
│   ├── subscription.ts           # getUserTier (always "free" — no paywall)
│   ├── recommendations.ts        # getRecommendedProblems, getDailyChallenge, getReadinessScore
│   ├── search.ts                 # searchProblems (scored, ranked), useDebounceSearch
│   └── export.ts                 # exportProgressToMarkdown, triggerDownload
│
├── types/
│   └── visualiser.ts             # DataStructure, VisualisationStep, VisualisationResponse
│
├── hooks/
│   └── useGate.ts                # Tier gate hook (always returns allowed=true)
│
├── prisma/
│   └── schema.prisma             # User, Account, Session models
│
└── auth.ts                       # NextAuth v5 root config
```

---

## Tech stack

### Core

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 14, App Router | RSC for static content, seamless API routes |
| Language | TypeScript 5 | Full type safety across data, components, and API |
| Styling | Tailwind CSS v3 | Dark-mode utilities, responsive grid, zero runtime |
| State | Zustand + persist | Minimal API, localStorage serialisation, no Provider hell |
| Auth | NextAuth.js v5 | Google OAuth + Credentials in one config |
| ORM | Prisma + Supabase | Type-safe DB access, free tier, no self-hosting |
| AI | Groq API (llama-3.3-70b-versatile) | 1–2s responses, json_object mode, free tier |

### UI

| Layer | Technology | Why |
|---|---|---|
| Icons | Tabler Icons | 5800+ outline icons, consistent 24px grid |
| Charts | Recharts | Radar, bar, pie — SSR-compatible, declarative |
| Code highlighting | Shiki | Server-side, zero FOUC, per-language themes |
| Fonts | Source Sans 3 (UI) + JetBrains Mono (code) | Loaded via next/font, zero layout shift |
| Animations | Framer Motion | Page transitions, milestone confetti, spring checkboxes |

### Design system

```
Background hierarchy:
  #0d0d0d   — page background
  #141414   — card/surface
  #1c1c1c   — hover states, elevated

Accent:
  #f97316   — primary CTA, solved checkmarks, active nav, pointers

Difficulty colours:
  #00b8a3   — Easy (teal)
  #ffc01e   — Medium (amber)
  #ff375f   — Hard (red-pink)

Text:
  #f5f5f5   — primary
  #a3a3a3   — secondary
  #525252   — muted

Pattern category colours (8 categories):
  Arrays/Hash  #3b82f6   Trees/Graphs #10b981
  Pointers     #8b5cf6   DP           #f59e0b
  Greedy       #ec4899   Stack/Queue  #06b6d4
  Binary Search #6366f1  Math/Bits    #84cc16

Typography:
  Source Sans 3 — display, body, labels
  JetBrains Mono — code, keys, monospace values

Borders: 1px solid #2a2a2a (standard), #1c1c1c (subtle)
Radius: 8px (buttons, inputs), 12px (cards), 20px (pills)
Transitions: 150ms ease — all interactive elements
```

---

## Getting started

### Prerequisites

- Node.js 18+
- A [Supabase](https://supabase.com) project (free tier)
- A [Groq](https://console.groq.com) API key (free, 14,400 req/day)
- Google OAuth credentials — [console.cloud.google.com](https://console.cloud.google.com)
- GitHub OAuth credentials — [github.com/settings/developers](https://github.com/settings/developers)

### Installation

```bash
# Clone
git clone https://github.com/Aqib-jawed/algo-prep
cd algo-prep

# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
```

### Environment variables

```env
# Database (Supabase connection string)
DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET=""                      # openssl rand -base64 32

# Google OAuth (console.cloud.google.com)
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# GitHub OAuth (github.com/settings/developers)
GITHUB_ID=""
GITHUB_SECRET=""

# Groq API (console.groq.com — free tier)
GROQ_API_KEY="gsk_..."

# Public (safe to expose)
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Database setup

```bash
# Push schema to Supabase
npx prisma generate
npx prisma db push

# Verify tables created: User, Account, Session
```

### Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables
vercel env add GROQ_API_KEY
vercel env add DATABASE_URL
# ... (add all variables from .env.local)

# Deploy to production
vercel --prod
```

Or connect the GitHub repository to Vercel directly — push to `main` triggers automatic deployment. Zero config required.

### Environment for production

Change `NEXTAUTH_URL` to your production domain:
```env
NEXTAUTH_URL="https://algo-prep-chi.vercel.app"
NEXT_PUBLIC_SITE_URL="https://algo-prep-chi.vercel.app"
```

Add production OAuth redirect URIs:
- Google: `https://algo-prep-chi.vercel.app/api/auth/callback/google`
- GitHub: `https://algo-prep-chi.vercel.app/api/auth/callback/github`

---

## Scripts

```bash
npm run dev          # development server (localhost:3000)
npm run build        # production build
npm run start        # production server
npm run lint         # ESLint
npm run type-check   # tsc --noEmit (no emit, just types)
npm run clean        # rm -rf .next
```

---

## Performance

| Metric | Target | Strategy |
|---|---|---|
| Lighthouse | 95+ all categories | Static content, next/font, image opt |
| FCP | < 1.2s | RSC for content pages, no client waterfalls |
| Bundle (initial JS) | < 200KB | Dynamic imports for Recharts and Framer Motion |
| Pattern pages | Static HTML | `generateStaticParams` pre-renders all 29 slugs |
| Problems page | Client-side filter | 160 objects in memory, no network on filter |
| Visualiser API | 1–2s | Groq inference speed vs Claude 5–8s |
| Auth session | JWT strategy | No DB read per request for credentials users |

---

## Roadmap

The following features are planned or in progress:

- [ ] **Problem notes** — personal annotations per problem, stored in Zustand
- [ ] **Pattern flashcard quiz** — Anki-style spaced repetition for pattern recognition
- [ ] **Timed practice mode** — 30/45/60 min sessions with session summary
- [ ] **Video solution links** — NeetCode YouTube links per problem (static URL pattern)
- [ ] **Code scratchpad** — Monaco Editor for drafting before submitting to LC
- [ ] **Shareable progress page** — public `/u/[username]` with stats and radar chart
- [ ] **WhatsApp daily problem** — one problem per day via Twilio WhatsApp API
- [ ] **OA tracker (crowdsourced)** — community-reported online assessment calendar
- [ ] **College placement portal** — B2B dashboard for placement cells
- [ ] **Problem discussion comments** — flat comment threads per pattern (Supabase-backed)

---

## Contributing

Contributions are welcome. For significant changes, open an issue first to discuss what you'd like to change.

```bash
# Fork and clone
git clone https://github.com/[your-username]/algo-prep

# Create a branch
git checkout -b feature/your-feature-name

# Make changes, then
npm run type-check
npm run lint
npm run build

# Submit a pull request
```

**Areas where contributions are most valuable:**
- Adding unlock hints for problems that have generic ones
- Writing week-specific `commonMistakes` for roadmap weeks
- Adding company-specific problem data (Razorpay, Zepto, Groww)
- Translating templates to additional languages

---

## Structure of a Pattern object

```typescript
type Pattern = {
  slug: string                   // "sliding-window"
  name: string                   // "Sliding Window"
  category: PatternCategory      // one of 8 categories
  description: string            // 2-3 accurate sentences
  triggerConditions: string[]    // 4-5 problem statement triggers
  cheatCode: string              // 1-2 line recognition heuristic
  coreInvariant: string          // single sentence
  javaTemplate: string           // complete working Java code
  pythonTemplate: string         // complete working Python code
  cppTemplate: string            // complete working C++ code
  cTemplate: string              // complete working C code
  javascriptTemplate: string     // complete working JavaScript code
  timeComplexity: { notation: string; explanation: string }
  spaceComplexity: { notation: string; explanation: string }
  variants: { name: string; whenToUse: string; keyDifference: string }[]
  topMistakes: { mistake: string; fix: string }[]  // exactly 5
  relatedProblems: number[]      // LC problem IDs
  prerequisitePatterns: string[] // slugs
  estimatedDaysToMaster: number
  orderInRoadmap: number         // 1-29, the learning sequence
}
```

---

## License

[MIT](LICENSE) — free to use, modify, and distribute.

---

<div align="center">

Built by [Aqib Jawed](https://github.com/Aqib-jawed) · Final year CS, GITAM University Visakhapatnam

*If this helped your prep, leave a ⭐ — it keeps the project maintained.*

[![GitHub Stars](https://img.shields.io/github/stars/Aqib-jawed/algo-prep?style=flat-square&color=f97316)](https://github.com/Aqib-jawed/algo-prep/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Aqib-jawed/algo-prep?style=flat-square&color=00b8a3)](https://github.com/Aqib-jawed/algo-prep/network)

</div>
