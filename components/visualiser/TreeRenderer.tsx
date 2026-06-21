"use client";

import { useMemo } from "react";
import type { TreeNode } from "@/types/visualiser";

const CANVAS_WIDTH = 400;
const LEVEL_HEIGHT = 80;
const NODE_RADIUS = 24;

type LayoutNode = {
  id: string;
  value: string | number;
  highlight?: TreeNode["highlight"];
  x: number;
  y: number;
};

type Props = {
  nodes: TreeNode[];
};

function buildLayout(nodes: TreeNode[]): { layout: LayoutNode[]; height: number } {
  if (nodes.length === 0) return { layout: [], height: 140 };

  const byId = new Map(nodes.map((n) => [n.id, n]));
  const childIds = new Set<string>();
  nodes.forEach((n) => {
    if (n.left) childIds.add(n.left);
    if (n.right) childIds.add(n.right);
  });

  const root = nodes.find((n) => !childIds.has(n.id));
  if (!root) return { layout: [], height: 140 };

  type LevelEntry = { id: string; level: number; pos: number };
  const levels: LevelEntry[] = [];
  const queue: { id: string; level: number }[] = [{ id: root.id, level: 0 }];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const { id, level } = queue.shift()!;
    if (visited.has(id)) continue;
    visited.add(id);

    const node = byId.get(id);
    if (!node) continue;

    levels.push({ id, level, pos: 0 });

    if (node.left && byId.has(node.left)) queue.push({ id: node.left, level: level + 1 });
    if (node.right && byId.has(node.right)) queue.push({ id: node.right, level: level + 1 });
  }

  const maxLevel = Math.max(...levels.map((l) => l.level));
  const byLevel = new Map<number, string[]>();
  levels.forEach(({ id, level }) => {
    if (!byLevel.has(level)) byLevel.set(level, []);
    byLevel.get(level)!.push(id);
  });

  const positions = new Map<string, { x: number; y: number }>();
  for (let level = 0; level <= maxLevel; level++) {
    const ids = byLevel.get(level) ?? [];
    const count = ids.length;
    ids.forEach((id, index) => {
      const x = count === 1 ? CANVAS_WIDTH / 2 : ((index + 1) / (count + 1)) * CANVAS_WIDTH;
      const y = level * LEVEL_HEIGHT + 40;
      positions.set(id, { x, y });
    });
  }

  const layout: LayoutNode[] = nodes
    .filter((n) => positions.has(n.id))
    .map((n) => {
      const pos = positions.get(n.id)!;
      return { id: n.id, value: n.value, highlight: n.highlight, x: pos.x, y: pos.y };
    });

  const height = (maxLevel + 1) * LEVEL_HEIGHT + 60;
  return { layout, height };
}

function nodeColors(highlight?: TreeNode["highlight"]) {
  switch (highlight) {
    case "active":
      return { fill: "#1a0a00", stroke: "#f97316", strokeWidth: 2, text: "#f97316", opacity: 1 };
    case "visited":
      return { fill: "#0d0d0d", stroke: "#525252", strokeWidth: 1, text: "#525252", opacity: 0.7 };
    case "result":
      return { fill: "#041a0e", stroke: "#00b8a3", strokeWidth: 2, text: "#00b8a3", opacity: 1 };
    default:
      return { fill: "#141414", stroke: "#2a2a2a", strokeWidth: 1, text: "#f5f5f5", opacity: 1 };
  }
}

export function TreeRenderer({ nodes }: Props) {
  const { layout, height, edges } = useMemo(() => {
    const { layout: laidOut, height: h } = buildLayout(nodes);
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const edgeList: { x1: number; y1: number; x2: number; y2: number }[] = [];

    laidOut.forEach((node) => {
      const raw = byId.get(node.id);
      if (!raw) return;
      [raw.left, raw.right].forEach((childId) => {
        if (!childId) return;
        const child = laidOut.find((n) => n.id === childId);
        if (child) {
          edgeList.push({
            x1: node.x,
            y1: node.y + NODE_RADIUS,
            x2: child.x,
            y2: child.y - NODE_RADIUS
          });
        }
      });
    });

    return { layout: laidOut, height: h, edges: edgeList };
  }, [nodes]);

  if (nodes.length === 0 || layout.length === 0) {
    return (
      <svg width="100%" viewBox={`0 0 ${CANVAS_WIDTH} 140`}>
        <text x={CANVAS_WIDTH / 2} y={70} textAnchor="middle" fill="#525252" fontSize={14}>
          No tree data
        </text>
      </svg>
    );
  }

  return (
    <svg width="100%" viewBox={`0 0 ${CANVAS_WIDTH} ${height}`}>
      <defs>
        <marker id="arr-tree" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#2a2a2a" />
        </marker>
      </defs>

      {edges.map((edge, i) => (
        <line
          key={i}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          stroke="#2a2a2a"
          strokeWidth={1}
          markerEnd="url(#arr-tree)"
        />
      ))}

      {layout.map((node) => {
        const colors = nodeColors(node.highlight);
        return (
          <g key={node.id} opacity={colors.opacity}>
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE_RADIUS}
              fill={colors.fill}
              stroke={colors.stroke}
              strokeWidth={colors.strokeWidth}
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill={colors.text}
              fontSize={13}
            >
              {node.value}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
