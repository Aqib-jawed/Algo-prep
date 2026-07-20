"use client";

import { useState } from "react";
import type { VisualisationResponse } from "@/types/visualiser";

interface Props {
    optimalCode: string;
    codeWalkthrough: VisualisationResponse["codeWalkthrough"];
    complexity: VisualisationResponse["complexity"];
    currentStep: number; // 0-indexed, from parent
}

export function CodeWalkthrough({ optimalCode, codeWalkthrough, complexity, currentStep }: Props) {
    const [revealed, setRevealed] = useState(false);
    const activeStepNumber = currentStep + 1;

    return (
        <div
            style={{
                marginTop: 20,
                background: "#141414",
                border: "1px solid #2a2a2a",
                borderRadius: 12,
                padding: 20
            }}
        >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#f5f5f5" }}>
                    Now Write It Yourself — Optimal Java Solution
                </span>
                <div style={{ display: "flex", gap: 8, fontSize: 11 }}>
                    <Badge label={`Time ${complexity.time}`} />
                    <Badge label={`Space ${complexity.space}`} />
                </div>
            </div>

            <p style={{ fontSize: 12, color: "#737373", lineHeight: 1.6, marginBottom: 14 }}>{complexity.why}</p>

            {!revealed && (
                <div
                    style={{
                        border: "1px dashed #2a2a2a",
                        borderRadius: 10,
                        padding: "24px 16px",
                        textAlign: "center"
                    }}
                >
                    <p style={{ fontSize: 13, color: "#a3a3a3", marginBottom: 12 }}>
                        You just watched every iteration. Try writing the solution yourself before revealing it.
                    </p>
                    <button
                        type="button"
                        onClick={() => setRevealed(true)}
                        style={{
                            background: "#f97316",
                            color: "white",
                            border: "none",
                            borderRadius: 8,
                            padding: "8px 20px",
                            fontSize: 13,
                            fontWeight: 500,
                            cursor: "pointer"
                        }}
                    >
                        Reveal optimal code
                    </button>
                </div>
            )}

            {revealed && (
                <>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            marginTop: 4
                        }}
                    >
                        {codeWalkthrough.lines.map((entry, i) => {
                            const isLive = entry.relatedSteps?.includes(activeStepNumber) ?? false;
                            return (
                                <div
                                    key={i}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
                                        gap: 12,
                                        padding: "8px 10px",
                                        borderRadius: 8,
                                        background: isLive ? "#1a0a00" : "transparent",
                                        border: isLive ? "1px solid rgba(249,115,22,0.27)" : "1px solid transparent",
                                        transition: "all 0.15s ease"
                                    }}
                                    className="max-sm:!grid-cols-1"
                                >
                                    <code
                                        style={{
                                            fontFamily: "var(--font-jetbrains)",
                                            fontSize: 12.5,
                                            color: isLive ? "#f97316" : "#00b8a3",
                                            whiteSpace: "pre-wrap"
                                        }}
                                    >
                                        {entry.line}
                                    </code>
                                    <span style={{ fontSize: 12, color: isLive ? "#f5f5f5" : "#737373", lineHeight: 1.5 }}>
                                        {entry.explanation}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <details style={{ marginTop: 16 }}>
                        <summary style={{ fontSize: 12, color: "#525252", cursor: "pointer" }}>
                            View full solution as plain code
                        </summary>
                        <pre
                            style={{
                                marginTop: 10,
                                background: "#0d0d0d",
                                border: "1px solid #1c1c1c",
                                borderRadius: 8,
                                padding: 16,
                                fontSize: 12.5,
                                color: "#f5f5f5",
                                overflowX: "auto",
                                fontFamily: "var(--font-jetbrains)"
                            }}
                        >
                            {optimalCode}
                        </pre>
                    </details>
                </>
            )}
        </div>
    );
}

function Badge({ label }: { label: string }) {
    return (
        <span
            style={{
                background: "#041a0e",
                color: "#00b8a3",
                border: "1px solid rgba(0,184,163,0.13)",
                borderRadius: 6,
                padding: "3px 8px"
            }}
        >
            {label}
        </span>
    );
}