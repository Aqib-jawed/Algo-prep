"use client";

import type { TraceTable } from "@/types/visualiser";

interface Props {
    table: TraceTable;
    currentStep: number; // stepNumber - 1, i.e. currentStep index from the parent page
    onRowClick?: (relatedStep: number) => void;
}

export function IterationTable({ table, currentStep, onRowClick }: Props) {
    const activeStepNumber = currentStep + 1;

    return (
        <div
            style={{
                marginTop: 20,
                background: "#141414",
                border: "1px solid #2a2a2a",
                borderRadius: 12,
                overflow: "hidden"
            }}
        >
            <div
                style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #2a2a2a",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#f5f5f5"
                }}
            >
                Trace Table — every iteration, every variable
            </div>

            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                        <tr>
                            <th style={headerCellStyle}>#</th>
                            {table.columns.map((col) => (
                                <th key={col} style={headerCellStyle}>
                                    {col}
                                </th>
                            ))}
                            <th style={headerCellStyle}>Why</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.rows.map((row) => {
                            const active = row.relatedStep === activeStepNumber;
                            return (
                                <tr
                                    key={row.iteration}
                                    onClick={() => onRowClick?.(row.relatedStep)}
                                    style={{
                                        background: active ? "#1a0a00" : "transparent",
                                        cursor: onRowClick ? "pointer" : "default",
                                        transition: "background 0.15s ease"
                                    }}
                                >
                                    <td style={{ ...cellStyle, color: active ? "#f97316" : "#525252", fontWeight: 500 }}>
                                        {row.iteration}
                                    </td>
                                    {table.columns.map((col) => (
                                        <td
                                            key={col}
                                            style={{
                                                ...cellStyle,
                                                color: active ? "#f5f5f5" : "#a3a3a3",
                                                fontFamily: "var(--font-jetbrains)"
                                            }}
                                        >
                                            {row.values[col] ?? "—"}
                                        </td>
                                    ))}
                                    <td
                                        style={{
                                            ...cellStyle,
                                            color: active ? "#f5f5f5" : "#737373",
                                            maxWidth: 320,
                                            whiteSpace: "normal",
                                            lineHeight: 1.5
                                        }}
                                    >
                                        {row.why}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const headerCellStyle: React.CSSProperties = {
    textAlign: "left",
    padding: "8px 14px",
    fontSize: 11,
    color: "#525252",
    fontWeight: 500,
    borderBottom: "1px solid #2a2a2a",
    whiteSpace: "nowrap"
};

const cellStyle: React.CSSProperties = {
    padding: "8px 14px",
    borderBottom: "1px solid #1c1c1c",
    whiteSpace: "nowrap"
};