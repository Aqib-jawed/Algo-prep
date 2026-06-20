"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PROBLEMS } from "@/data/problems";
import { useProgressStore } from "@/store/useProgressStore";

export function ProgressChart() {
  const solvedProblems = useProgressStore((state) => state.solvedProblems);
  const data = ["Easy", "Medium", "Hard"].map((difficulty) => {
    const total = PROBLEMS.filter((problem) => problem.difficulty === difficulty).length;
    const solved = PROBLEMS.filter((problem) => problem.difficulty === difficulty && solvedProblems.includes(problem.id)).length;
    return { difficulty, solved, remaining: total - solved };
  });

  return (
    <section className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-[0]">Difficulty Progress</h2>
        <span className="label">Solved vs remaining</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#2a2a2a" vertical={false} />
            <XAxis dataKey="difficulty" stroke="#a3a3a3" tickLine={false} axisLine={false} />
            <YAxis stroke="#a3a3a3" tickLine={false} axisLine={false} />
            <Tooltip cursor={{ fill: "#1c1c1c" }} contentStyle={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8, color: "#f5f5f5" }} />
            <Bar dataKey="solved" stackId="a" fill="#f97316" radius={[4, 4, 0, 0]} />
            <Bar dataKey="remaining" stackId="a" fill="#2a2a2a" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
