"use client";

import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Search"
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
      <input
        id="global-search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-10 w-full rounded-card border border-border bg-surface pl-9 pr-3 text-sm text-primary outline-none transition-colors placeholder:text-muted focus:border-accent/60"
      />
    </label>
  );
}
