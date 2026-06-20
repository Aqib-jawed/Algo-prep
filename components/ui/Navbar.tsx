"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Code2, Menu } from "lucide-react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const initials = session?.user?.name?.charAt(0)?.toUpperCase() ?? session?.user?.email?.charAt(0)?.toUpperCase() ?? "?";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-base/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-card border border-border bg-surface text-accent">
            <Code2 size={18} />
          </span>
          <span>
            <span className="block text-md font-semibold leading-5 tracking-[0]">Algo Prep</span>
            <span className="label hidden sm:block">DSA interview war room</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 rounded-card px-3 py-2 text-sm text-secondary transition-colors hover:bg-elevated hover:text-primary",
                  active && "bg-accent-dim text-accent"
                )}
              >
                <Icon size={15} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-shortcuts"))}
            className="flex h-9 w-9 items-center justify-center rounded-card border border-border bg-surface font-mono text-sm text-secondary hover:text-primary"
            aria-label="Keyboard shortcuts"
          >
            ?
          </button>
          <button
            aria-label="Open navigation"
            className="flex h-9 w-9 items-center justify-center rounded-card border border-border bg-surface text-secondary lg:hidden"
          >
            <Menu size={18} />
          </button>

          {/* Auth section */}
          {!session?.user ? (
            <Link
              href="/login"
              style={{ color: "#a3a3a3", fontSize: 13, padding: "4px 8px", textDecoration: "none" }}
            >
              Sign in
            </Link>
          ) : (
            <div ref={dropRef} style={{ position: "relative" }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? "Profile"}
                    width={28}
                    height={28}
                    style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", border: "1px solid #2a2a2a" }}
                  />
                ) : (
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1c1c1c", display: "flex", alignItems: "center", justifyContent: "center", color: "#f97316", fontSize: 12, fontWeight: 500 }}>
                    {initials}
                  </div>
                )}
              </button>
              {dropdownOpen && (
                <div style={{ position: "absolute", right: 0, top: 36, background: "#141414", border: "1px solid #2a2a2a", borderRadius: 8, minWidth: 150, zIndex: 50, overflow: "hidden" }}>
                  <Link href="/account" onClick={() => setDropdownOpen(false)}
                    style={{ display: "block", padding: "10px 14px", fontSize: 13, color: "#e5e5e5", textDecoration: "none", borderBottom: "1px solid #2a2a2a" }}>
                    Account
                  </Link>
                  <button onClick={() => { setDropdownOpen(false); signOut() }}
                    style={{ display: "block", width: "100%", padding: "10px 14px", fontSize: 13, color: "#ff375f", background: "none", border: "none", textAlign: "left", cursor: "pointer" }}>
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
