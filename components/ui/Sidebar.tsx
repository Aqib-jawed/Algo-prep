"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed bottom-0 left-0 top-16 z-30 hidden w-64 border-r border-border bg-base px-3 py-5 lg:block">
      <div className="mb-6 px-3">
        <div className="label">Navigation</div>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-r-card border-l-2 border-transparent px-3 py-2.5 text-sm text-secondary transition-colors hover:border-[rgba(249,115,22,0.35)] hover:bg-elevated hover:text-primary",
                active && "border-accent bg-surface text-accent"
              )}
            >
              <Icon size={17} />
              <span className="flex items-center gap-1.5">
                {item.label}
                {"isNew" in item && item.isNew && (
                  <span
                    style={{
                      fontSize: 9,
                      background: "#1a0a00",
                      color: "#f97316",
                      borderRadius: 4,
                      padding: "1px 5px",
                      marginLeft: 2
                    }}
                  >
                    NEW
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-8 rounded-card border border-border bg-surface p-4">
        <p className="label">Tonight&apos;s rule</p>
        <p className="mt-2 text-sm text-secondary">One pattern, five problems, one clean postmortem.</p>
      </div>
    </aside>
  );
}
