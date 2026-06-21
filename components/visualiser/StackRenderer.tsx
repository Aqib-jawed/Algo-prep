"use client";

import type { StackItem } from "@/types/visualiser";

type Props = {
  items: StackItem[];
};

const MAX_VISIBLE = 8;

export function StackRenderer({ items }: Props) {
  const visible = items.length > MAX_VISIBLE ? items.slice(-MAX_VISIBLE) : items;
  const hiddenCount = items.length - visible.length;

  return (
    <div style={{ position: "relative", minWidth: 220 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          gap: 4,
          minHeight: 120,
          justifyContent: "flex-end"
        }}
      >
        {hiddenCount > 0 && (
          <div style={{ fontSize: 11, color: "#525252", marginBottom: 4 }}>… {hiddenCount} more below</div>
        )}

        {visible.map((item, index) => {
          const isTop = index === visible.length - 1;
          const highlighted = item.highlight;

          return (
            <div key={index} style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
              {isTop && (
                <span
                  style={{
                    position: "absolute",
                    right: -48,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 11,
                    color: "#525252"
                  }}
                >
                  TOP →
                </span>
              )}
              <div
                style={{
                  width: 200,
                  height: 44,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  flexShrink: 0,
                  transition: "all 0.25s ease",
                  background: highlighted ? "#1a0a00" : "#141414",
                  border: highlighted ? "1.5px solid #f97316" : "1px solid #2a2a2a",
                  color: highlighted ? "#f97316" : "#f5f5f5"
                }}
              >
                {item.value}
              </div>
            </div>
          );
        })}

        {items.length === 0 && (
          <div
            style={{
              width: 200,
              height: 44,
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              color: "#525252",
              border: "1px dashed #2a2a2a"
            }}
          >
            empty
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div style={{ textAlign: "center", fontSize: 11, color: "#525252", marginTop: 8 }}>BOTTOM</div>
      )}
    </div>
  );
}
