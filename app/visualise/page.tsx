"use client";
import { IterationTable } from "@/components/visualiser/IterationTable";
import { CodeWalkthrough } from "@/components/visualiser/CodeWalkthrough";
import { useState, useEffect, useCallback, useRef } from "react";
import { AlertCircle, Play } from "lucide-react";
import { ArrayRenderer } from "@/components/visualiser/ArrayRenderer";
import { StackRenderer } from "@/components/visualiser/StackRenderer";
import { HashmapRenderer } from "@/components/visualiser/HashmapRenderer";
import { TreeRenderer } from "@/components/visualiser/TreeRenderer";
import { StepExplanation } from "@/components/visualiser/StepExplanation";
import { PATTERNS } from "@/data/patterns";
import type { VisualisationResponse, VisualisationStep } from "@/types/visualiser";

const QUICK_PROBLEMS = [
  { title: "Two Sum", input: "nums = [2,7,11,15], target = 9", slug: "hashmap-frequency" },
  { title: "Best Time to Buy and Sell Stock", input: "prices = [7,1,5,3,6,4]", slug: "kadanes-algorithm" },
  { title: "Longest Substring Without Repeating Characters", input: 's = "abcabcbb"', slug: "sliding-window" },
  { title: "Valid Parentheses", input: 's = "()[]{}"', slug: "stack-basic" },
  { title: "Maximum Subarray", input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", slug: "kadanes-algorithm" },
  { title: "Move Zeroes", input: "nums = [0,1,0,3,12]", slug: "two-pointers" },
  { title: "Container With Most Water", input: "height = [1,8,6,2,5,4,8,3,7]", slug: "two-pointers" },
  { title: "3Sum", input: "nums = [-1,0,1,2,-1,-4]", slug: "two-pointers" },
  { title: "Binary Tree Inorder Traversal", input: "root = [1,null,2,3]", slug: "dfs-tree" },
  {
    title: "Min Stack",
    input: "ops = [push(5),push(3),getMin,push(7),getMin,pop,getMin]",
    slug: "stack-basic"
  }
];

export default function VisualisePage() {
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [patternSlug, setPatternSlug] = useState("");
  const [userInput, setUserInput] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [result, setResult] = useState<VisualisationResponse | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [playSpeed, setPlaySpeed] = useState(1500);

  const activePillRef = useRef<HTMLButtonElement>(null);

  const handleVisualise = useCallback(async () => {
    if (!problemTitle.trim() || !userInput.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    setCurrentStep(0);
    setIsPlaying(false);
    try {
      const res = await fetch("/api/visualise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemTitle, problemDescription, userInput, patternSlug })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Something went wrong.");
        return;
      }
      setResult(data);
      setCurrentStep(0);
    } catch {
      setError("Network error. Check your connection.");
    } finally {
      setLoading(false);
    }
  }, [problemTitle, problemDescription, userInput, patternSlug]);

  function selectQuickProblem(p: (typeof QUICK_PROBLEMS)[0]) {
    setProblemTitle(p.title);
    setUserInput(p.input);
    setPatternSlug(p.slug);
    setResult(null);
    setError("");
    setCurrentStep(0);
    setIsPlaying(false);
  }

  useEffect(() => {
    if (!isPlaying || !result) return;
    const steps = result.steps;
    const id = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, playSpeed);
    return () => clearInterval(id);
  }, [isPlaying, playSpeed, result]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleVisualise();
      }
      if (result && !loading) {
        if (e.key === "ArrowRight") setCurrentStep((p) => Math.min(p + 1, result.steps.length - 1));
        if (e.key === "ArrowLeft") setCurrentStep((p) => Math.max(p - 1, 0));
        if (e.key === " ") {
          e.preventDefault();
          setIsPlaying((p) => !p);
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [result, loading, handleVisualise]);

  useEffect(() => {
    activePillRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }, [currentStep]);

  function renderDS(step: VisualisationStep) {
    switch (step.dataStructure) {
      case "array":
        return <ArrayRenderer cells={step.array ?? []} pointers={step.pointers} />;
      case "two-pointer":
        return <ArrayRenderer cells={step.array ?? []} pointers={step.pointers} />;
      case "sliding-window":
        return (
          <ArrayRenderer
            cells={step.array ?? []}
            pointers={step.pointers}
            windowStart={step.windowStart}
            windowEnd={step.windowEnd}
          />
        );
      case "stack":
        return <StackRenderer items={step.stack ?? []} />;
      case "hashmap":
        return (
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start" }}>
            <ArrayRenderer cells={step.array ?? []} pointers={step.pointers} />
            <HashmapRenderer entries={step.hashmap ?? []} />
          </div>
        );
      case "tree":
        return <TreeRenderer nodes={step.treeNodes ?? []} />;
      case "queue":
        return <ArrayRenderer cells={step.array ?? []} pointers={step.pointers} />;
      default:
        return <ArrayRenderer cells={step.array ?? []} pointers={step.pointers} />;
    }
  }

  const canSubmit = problemTitle.trim() && userInput.trim() && !loading;
  const progressPct =
    result && result.steps.length > 1 ? (currentStep / (result.steps.length - 1)) * 100 : result ? 100 : 0;

  const inputStyle: React.CSSProperties = {
    background: "#0d0d0d",
    border: "1px solid #2a2a2a",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: "#f5f5f5",
    width: "100%",
    outline: "none"
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d0d0d", padding: "24px 20px", maxWidth: 900, margin: "0 auto" }}>
      <header>
        <h1 style={{ fontSize: 24, fontWeight: 500, color: "#f5f5f5" }}>Algorithm Visualiser</h1>
        <p style={{ fontSize: 14, color: "#a3a3a3", marginTop: 4 }}>
          Enter any LeetCode problem and watch the algorithm execute step by step.
        </p>
        <p style={{ fontSize: 11, color: "#525252", marginTop: 6 }}>
          Ctrl+Enter to visualise · Arrow keys to step · Space to play/pause
        </p>
      </header>

      {/* Input card */}
      <div
        style={{
          background: "#141414",
          border: "1px solid #2a2a2a",
          borderRadius: 12,
          padding: 24,
          marginTop: 20
        }}
      >
        <div>
          <div style={{ fontSize: 12, color: "#525252", marginBottom: 8 }}>Try a problem:</div>
          <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {QUICK_PROBLEMS.map((p) => {
              const active = problemTitle === p.title;
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => selectQuickProblem(p)}
                  style={{
                    border: active ? "1px solid #f97316" : "1px solid #2a2a2a",
                    background: active ? "#1a0a00" : "#0d0d0d",
                    borderRadius: 20,
                    padding: "5px 14px",
                    fontSize: 12,
                    color: active ? "#f97316" : "#a3a3a3",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all 0.15s ease",
                    flexShrink: 0
                  }}
                >
                  {p.title}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ height: 1, background: "#1c1c1c", margin: "16px 0" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
            gap: 12
          }}
          className="max-sm:!grid-cols-1"
        >
          <input
            type="text"
            placeholder="e.g. Two Sum or LC #1"
            value={problemTitle}
            onChange={(e) => setProblemTitle(e.target.value)}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#f97316")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          />
          <select
            value={patternSlug}
            onChange={(e) => setPatternSlug(e.target.value)}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => (e.target.style.borderColor = "#f97316")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          >
            <option value="">Auto-detect pattern</option>
            {PATTERNS.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <label style={{ fontSize: 12, color: "#a3a3a3" }}>Input</label>
            <span style={{ fontSize: 11, color: "#525252" }}>Use LeetCode&apos;s example format</span>
          </div>
          <textarea
            rows={2}
            placeholder="e.g. nums = [2,7,11,15], target = 9"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ ...inputStyle, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "#f97316")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          />
        </div>

        <button
          type="button"
          onClick={() => setShowDescription((s) => !s)}
          style={{
            marginTop: 12,
            fontSize: 12,
            color: "#525252",
            cursor: "pointer",
            background: "none",
            border: "none",
            padding: 0
          }}
        >
          {showDescription ? "− Hide problem description" : "＋ Add problem description for better accuracy"}
        </button>
        {showDescription && (
          <textarea
            rows={3}
            placeholder="Paste the problem statement here..."
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            style={{ ...inputStyle, marginTop: 8, resize: "vertical" }}
            onFocus={(e) => (e.target.style.borderColor = "#f97316")}
            onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
          />
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 16
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#525252",
              border: "1px solid #2a2a2a",
              borderRadius: 4,
              padding: "2px 7px",
              fontFamily: "var(--font-jetbrains)"
            }}
          >
            Ctrl+Enter
          </span>
          <button
            type="button"
            onClick={handleVisualise}
            disabled={!canSubmit}
            style={{
              background: "#f97316",
              color: "white",
              border: "none",
              borderRadius: 8,
              padding: "11px 28px",
              fontSize: 14,
              fontWeight: 500,
              cursor: canSubmit ? "pointer" : "not-allowed",
              opacity: canSubmit ? 1 : 0.5,
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    width: 14,
                    height: 14,
                    border: "2px solid white",
                    borderTopColor: "transparent",
                    borderRadius: "50%",
                    animation: "spin 0.8s linear infinite"
                  }}
                />
                Generating...
              </>
            ) : (
              "Visualise"
            )}
          </button>
        </div>
      </div>

      {error && (
        <div
          style={{
            marginTop: 16,
            background: "#1a0505",
            border: "1px solid rgba(255,55,95,0.27)",
            borderRadius: 10,
            padding: "12px 16px",
            display: "flex",
            alignItems: "center",
            gap: 10
          }}
        >
          <AlertCircle size={16} color="#ff375f" />
          <span style={{ fontSize: 13, color: "#ff375f" }}>{error}</span>
          <button
            type="button"
            onClick={() => setError("")}
            style={{
              marginLeft: "auto",
              fontSize: 12,
              color: "#f97316",
              cursor: "pointer",
              background: "none",
              border: "none"
            }}
          >
            Try again
          </button>
        </div>
      )}

      {loading && (
        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ height: 88, background: "#141414", borderRadius: 10, animation: "pulse 1.5s ease-in-out infinite" }} />
          <div style={{ height: 100, background: "#141414", borderRadius: 10, animation: "pulse 1.5s ease-in-out infinite" }} />
          <div style={{ height: 48, background: "#141414", borderRadius: 10, animation: "pulse 1.5s ease-in-out infinite" }} />
        </div>
      )}

      {result && !loading && (
        <div style={{ marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 8,
              marginBottom: 12
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 16, fontWeight: 500, color: "#f5f5f5" }}>{result.problemTitle}</span>
              <span
                style={{
                  fontSize: 11,
                  background: "#1a0a00",
                  color: "#f97316",
                  border: "1px solid rgba(249,115,22,0.27)",
                  borderRadius: 20,
                  padding: "3px 10px"
                }}
              >
                {result.pattern}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 12, color: "#525252" }}>Final answer:</span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 14,
                  color: "#00b8a3",
                  background: "#041a0e",
                  border: "1px solid rgba(0,184,163,0.13)",
                  borderRadius: 6,
                  padding: "3px 10px"
                }}
              >
                {result.finalAnswer}
              </span>
            </div>
          </div>

          <StepExplanation
            step={result.steps[currentStep]}
            stepNum={currentStep + 1}
            totalSteps={result.steps.length}
            patternName={result.pattern}
          />

          <div
            key={currentStep}
            style={{
              marginTop: 12,
              background: "#0d0d0d",
              border: "1px solid #1c1c1c",
              borderRadius: 10,
              padding: "24px 20px",
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflowX: "auto",
              animation: "fadeIn 0.2s ease"
            }}
          >
            {renderDS(result.steps[currentStep])}
          </div>

          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <NavButton disabled={currentStep === 0} onClick={() => setCurrentStep(0)} label="⏮" />
            <NavButton disabled={currentStep === 0} onClick={() => setCurrentStep((p) => Math.max(p - 1, 0))} label="⏪" />
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              disabled={currentStep === result.steps.length - 1 && !isPlaying}
              style={{
                width: 90,
                height: 38,
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border: isPlaying ? "1px solid #2a2a2a" : "none",
                background: isPlaying ? "#1c1c1c" : "#f97316",
                color: isPlaying ? "#f5f5f5" : "white",
                opacity: currentStep === result.steps.length - 1 && !isPlaying ? 0.3 : 1
              }}
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            <NavButton
              disabled={currentStep === result.steps.length - 1}
              onClick={() => setCurrentStep((p) => Math.min(p + 1, result.steps.length - 1))}
              label="⏩"
            />
            <NavButton
              disabled={currentStep === result.steps.length - 1}
              onClick={() => setCurrentStep(result.steps.length - 1)}
              label="⏭"
            />

            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 11, color: "#525252" }}>Speed</span>
              {(
                [
                  { label: "0.5×", ms: 3000 },
                  { label: "1×", ms: 1500 },
                  { label: "2×", ms: 750 }
                ] as const
              ).map(({ label, ms }) => {
                const active = playSpeed === ms;
                return (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setPlaySpeed(ms)}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 20,
                      fontSize: 12,
                      cursor: "pointer",
                      background: active ? "#f97316" : "#0d0d0d",
                      color: active ? "white" : "#525252",
                      border: active ? "1px solid #f97316" : "1px solid #2a2a2a"
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: 3,
              background: "#1c1c1c",
              borderRadius: 2,
              marginTop: 10,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#f97316",
                borderRadius: 2,
                width: `${progressPct}%`,
                transition: "width 300ms ease"
              }}
            />
          </div>

          <div style={{ marginTop: 10, display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}>
            {result.steps.map((_, i) => {
              const active = i === currentStep;
              return (
                <button
                  key={i}
                  ref={active ? activePillRef : undefined}
                  type="button"
                  onClick={() => setCurrentStep(i)}
                  style={{
                    padding: "3px 9px",
                    borderRadius: 20,
                    fontSize: 11,
                    cursor: "pointer",
                    flexShrink: 0,
                    background: active ? "#f97316" : "#0d0d0d",
                    color: active ? "white" : "#525252",
                    border: active ? "1px solid #f97316" : "1px solid #2a2a2a"
                  }}
                >
                  S{i + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {!result && !loading && !error && (
        <div
          style={{
            marginTop: 60,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12
          }}
        >
          <Play size={48} color="#2a2a2a" />
          <p style={{ fontSize: 18, fontWeight: 500, color: "#2a2a2a" }}>Visualise any LeetCode problem</p>
          <p style={{ fontSize: 14, color: "#525252" }}>
            Enter a problem name and input above, or pick a quick example.
          </p>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

function NavButton({ disabled, onClick, label }: { disabled: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        width: 36,
        height: 36,
        background: "#141414",
        border: "1px solid #2a2a2a",
        borderRadius: 8,
        fontSize: 14,
        color: "#a3a3a3",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.3 : 1
      }}
    >
      {label}
    </button>
  );
}
