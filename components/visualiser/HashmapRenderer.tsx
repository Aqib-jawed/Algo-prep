"use client";

import type { HashmapEntry } from "@/types/visualiser";

type Props = {
  entries: HashmapEntry[];
};

export function HashmapRenderer({ entries }: Props) {
  if (entries.length === 0) {
    return (
      <div
        style={{
          minWidth: 180,
          maxWidth: 320,
          border: "1px solid #2a2a2a",
          borderRadius: 10,
          overflow: "hidden"
        }}
      >
        <div style={{ textAlign: "center", fontSize: 16, color: "#2a2a2a", padding: 24 }}>{"{ }"}</div>
      </div>
    );
  }

  return (
    <div
      style={{
        minWidth: 180,
        maxWidth: 320,
        border: "1px solid #2a2a2a",
        borderRadius: 10,
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "flex",
          background: "#0d0d0d",
          padding: "8px 14px",
          gap: 20
        }}
      >
        <span style={{ fontSize: 11, color: "#525252", fontWeight: 500, textTransform: "uppercase", flex: 1 }}>
          key
        </span>
        <span style={{ fontSize: 11, color: "#525252", fontWeight: 500, textTransform: "uppercase", flex: 1 }}>
          value
        </span>
      </div>

      {entries.map((entry, index) => (
        <div
          key={`${entry.key}-${index}`}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 14px",
            borderTop: "1px solid #1c1c1c",
            gap: 16,
            transition: "background 0.2s",
            background: entry.highlight ? "#1a0a00" : "transparent"
          }}
        >
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13, color: "#f97316", flex: 1 }}>
            {entry.key}
          </span>
          <span style={{ fontSize: 13, color: "#2a2a2a" }}>→</span>
          <span style={{ fontFamily: "var(--font-jetbrains)", fontSize: 13, color: "#f5f5f5", flex: 1 }}>
            {entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}
