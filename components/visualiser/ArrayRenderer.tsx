"use client";

import type { ArrayCell, PointerState } from "@/types/visualiser";

const CELL_SIZE = 52;
const CELL_GAP = 6;
const CELL_STEP = CELL_SIZE + CELL_GAP;

function cellStyle(highlight?: ArrayCell["highlight"]) {
  switch (highlight) {
    case "active":
      return { border: "2px solid #f97316", background: "#1a0a00", color: "#f97316" };
    case "window":
      return { border: "2px solid #00b8a3", background: "#041a0e", color: "#f5f5f5" };
    case "match":
      return { border: "2px solid #AFA9EC", background: "#100d20", color: "#AFA9EC" };
    case "result":
      return { border: "2px solid #00b8a3", background: "rgba(0,184,163,0.12)", color: "#00b8a3" };
    case "visited":
      return { border: "1px solid #2a2a2a", background: "#0d0d0d", color: "#525252" };
    default:
      return { border: "1px solid #2a2a2a", background: "#141414", color: "#f5f5f5" };
  }
}

type Props = {
  cells: ArrayCell[];
  pointers?: PointerState[];
  windowStart?: number;
  windowEnd?: number;
};

export function ArrayRenderer({ cells, pointers, windowStart, windowEnd }: Props) {
  const hasWindow = windowStart !== undefined && windowEnd !== undefined;

  return (
    <div style={{ overflowX: "auto", paddingBottom: 8 }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: CELL_GAP,
          overflowX: "auto",
          padding: "8px 0 56px 4px"
        }}
      >
        {hasWindow && (
          <div
            style={{
              position: "absolute",
              pointerEvents: "none",
              left: windowStart! * CELL_STEP,
              width: (windowEnd! - windowStart! + 1) * CELL_STEP - CELL_GAP,
              top: -4,
              bottom: -4,
              border: "1.5px dashed #00b8a3",
              borderRadius: 10,
              background: "rgba(0,184,163,0.04)"
            }}
          />
        )}

        {cells.map((cell, index) => {
          const style = cellStyle(cell.highlight);
          return (
            <div
              key={index}
              style={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                borderRadius: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.3s ease",
                position: "relative",
                ...style
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 500 }}>{cell.value}</span>
              {cell.label && (
                <span style={{ fontSize: 10, color: "#a3a3a3", marginTop: 2 }}>{cell.label}</span>
              )}
              <span
                style={{
                  fontSize: 10,
                  color: "#525252",
                  position: "absolute",
                  bottom: -18,
                  left: 0,
                  right: 0,
                  textAlign: "center"
                }}
              >
                {index}
              </span>
            </div>
          );
        })}

        {pointers?.map((pointer) => (
          <div
            key={`${pointer.name}-${pointer.index}`}
            style={{
              position: "absolute",
              bottom: -44,
              left: pointer.index * CELL_STEP + 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <span style={{ fontSize: 14, color: pointer.color, lineHeight: 1 }}>▲</span>
            <span style={{ fontSize: 10, color: pointer.color, marginTop: 2 }}>{pointer.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
