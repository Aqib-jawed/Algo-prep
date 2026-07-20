"use client";

import React from "react";
import { Award, Clock, Flame, BarChart2 } from "lucide-react";

export interface StatItem {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon: React.ComponentType<any>;
}

export function InterviewStats() {
  const stats: StatItem[] = [
    {
      label: "Completed Interviews",
      value: "12",
      change: "+3 this week",
      isPositive: true,
      icon: Award,
    },
    {
      label: "Average Score",
      value: "78%",
      change: "+4% vs average",
      isPositive: true,
      icon: BarChart2,
    },
    {
      label: "Time Spent",
      value: "5.4 hrs",
      change: "45 mins avg per round",
      isPositive: true,
      icon: Clock,
    },
    {
      label: "Current Streak",
      value: "5 days",
      change: "Keep it up!",
      isPositive: true,
      icon: Flame,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="card p-5 transition-all hover:border-accent/40">
            <div className="flex items-center justify-between">
              <span className="text-sm text-secondary font-medium">{stat.label}</span>
              <div className="rounded-lg bg-elevated p-2 text-accent">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-4">
              <span className="text-2xl font-bold tracking-tight text-primary">
                {stat.value}
              </span>
              {stat.change && (
                <p className="mt-1 text-xs text-secondary">
                  <span className={stat.isPositive ? "text-accent font-medium" : "text-muted"}>
                    {stat.change}
                  </span>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
