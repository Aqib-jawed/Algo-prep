"use client";

import type { VisualisationStep } from "@/types/visualiser";

type Props = {
  step: VisualisationStep;
  stepNum: number;
  totalSteps: number;
  patternName?: string;
};

export function StepExplanation({ step, stepNum, totalSteps, patternName }: Props) {
  return (
    <div
      style={{
        background: "#141414",
        border: "1px solid #2a2a2a",
        borderRadius: 10,
        padding: "16px 20px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: "#525252", marginBottom: 4 }}>
            Step {stepNum} of {totalSteps}
          </div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#f5f5f5" }}>{step.title}</div>
        </div>
        {patternName && (
          <span
            style={{
              background: "#1a0a00",
              color: "#f97316",
              border: "1px solid rgba(249,115,22,0.27)",
              borderRadius: 20,
              padding: "3px 10px",
              fontSize: 11,
              whiteSpace: "nowrap",
              flexShrink: 0
            }}
          >
            {patternName}
          </span>
        )}
      </div>

      <p style={{ fontSize: 13, color: "#a3a3a3", lineHeight: 1.65, marginTop: 10 }}>{step.explanation}</p>

      {step.result && (
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#525252" }}>Current answer:</span>
          <span
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: 13,
              color: "#00b8a3",
              background: "#041a0e",
              border: "1px solid rgba(0,184,163,0.13)",
              borderRadius: 6,
              padding: "2px 8px"
            }}
          >
            {step.result}
          </span>
        </div>
      )}

      {step.code && (
        <div
          style={{
            background: "#0a0a0a",
            border: "1px solid #1c1c1c",
            borderRadius: 6,
            padding: "8px 12px",
            marginTop: 10
          }}
        >
          <div style={{ fontSize: 10, color: "#525252", marginBottom: 4 }}>Executing:</div>
          <pre
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: 12,
              color: "#AFA9EC",
              lineHeight: 1.6,
              margin: 0,
              whiteSpace: "pre-wrap"
            }}
          >
            {step.code}
          </pre>
        </div>
      )}
    </div>
  );
}
