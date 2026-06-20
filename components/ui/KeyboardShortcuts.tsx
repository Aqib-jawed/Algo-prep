"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useProgressStore } from "@/store/useProgressStore";

function focusRow(delta: number) {
  const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-row-index]"));
  if (!rows.length) return;
  const active = document.activeElement as HTMLElement | null;
  const current = active?.dataset.rowIndex ? Number(active.dataset.rowIndex) : -1;
  const next = Math.max(0, Math.min(rows.length - 1, current + delta));
  rows[next]?.focus();
}

export function useKeyboardNavigation() {
  const markSolved = useProgressStore((state) => state.markSolved);
  const unmarkSolved = useProgressStore((state) => state.unmarkSolved);
  const toggleStarred = useProgressStore((state) => state.toggleStarred);
  const solvedProblems = useProgressStore((state) => state.solvedProblems);

  return {
    toggleFocusedSolved() {
      const row = document.activeElement as HTMLElement | null;
      const id = Number(row?.dataset.problemId);
      if (!id) return;
      if (solvedProblems.includes(id)) unmarkSolved(id);
      else markSolved(id);
    },
    toggleFocusedStarred() {
      const row = document.activeElement as HTMLElement | null;
      const id = Number(row?.dataset.problemId);
      if (id) toggleStarred(id);
    }
  };
}

const groups = [
  ["Navigation", [["G R", "Roadmap"], ["G P", "Problems"], ["G T", "Patterns"], ["G I", "Interview"]]],
  ["Problems", [["J/K", "Move rows"], ["S", "Toggle solved"], ["F", "Toggle star"]]],
  ["Search", [["/", "Focus search"], ["Ctrl K", "Focus search"]]],
  ["General", [["?", "Open help"], ["Esc", "Close or blur"]]]
];

export default function KeyboardShortcuts({ showButton = true }: { showButton?: boolean }) {
  const [open, setOpen] = useState(false);
  const [gPressedAt, setGPressedAt] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const keyboard = useKeyboardNavigation();

  useEffect(() => {
    const openShortcutModal = () => setOpen(true);
    window.addEventListener("open-shortcuts", openShortcutModal);
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement;
      const typing = ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName);
      if ((event.key === "/" || (event.ctrlKey && event.key.toLowerCase() === "k")) && !typing) {
        event.preventDefault();
        const input = document.querySelector<HTMLInputElement>("#global-search");
        input?.focus();
        input?.select();
        return;
      }
      if (event.key === "Escape") {
        setOpen(false);
        if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
        window.dispatchEvent(new CustomEvent("close-hints"));
        return;
      }
      if (typing) return;
      if (event.key === "?") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key.toLowerCase() === "j") focusRow(1);
      if (event.key.toLowerCase() === "k") focusRow(-1);
      if (event.key.toLowerCase() === "s") keyboard.toggleFocusedSolved();
      if (event.key.toLowerCase() === "f") keyboard.toggleFocusedStarred();
      if (event.key.toLowerCase() === "g") setGPressedAt(Date.now());
      if (Date.now() - gPressedAt < 500) {
        const key = event.key.toLowerCase();
        if (key === "r") router.push("/roadmap");
        if (key === "p") router.push("/problems");
        if (key === "t") router.push("/patterns");
        if (key === "i") router.push("/interview");
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-shortcuts", openShortcutModal);
    };
  }, [gPressedAt, keyboard, router]);

  const hint = pathname.startsWith("/problems")
    ? "J/K navigate · S solved · F star · / search · ? help"
    : pathname.startsWith("/patterns")
      ? "/ search · ? help"
      : "G+P problems · G+T patterns · G+R roadmap · ? help";

  return (
    <>
      {showButton && (
        <button onClick={() => setOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-card border border-border bg-surface font-mono text-sm text-secondary hover:text-primary" aria-label="Keyboard shortcuts">
          ?
        </button>
      )}
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-[480px] rounded-card border border-border bg-surface p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-md font-medium tracking-[0]">Keyboard shortcuts</h2>
              <button onClick={() => setOpen(false)} className="text-secondary hover:text-primary"><X size={18} /></button>
            </div>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {groups.map(([group, rows]) => (
                <div key={group as string}>
                  <p className="label">{group as string}</p>
                  <div className="mt-2 space-y-2">
                    {(rows as string[][]).map(([keys, description]) => (
                      <div key={keys} className="flex items-center justify-between gap-3 text-sm text-secondary">
                        <kbd className="rounded border border-border bg-elevated px-1.5 py-0.5 font-mono text-xs text-primary">{keys}</kbd>
                        <span>{description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <footer className="sticky bottom-0 z-30 -mx-4 mt-8 flex h-7 items-center border-t border-border bg-base px-4 font-mono text-xs text-muted md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
        {hint}
      </footer>
    </>
  );
}
