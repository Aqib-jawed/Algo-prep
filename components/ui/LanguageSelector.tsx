"use client";

const LANGUAGES = [
  { id: "java",       label: "Java" },
  { id: "python",     label: "Python" },
  { id: "cpp",        label: "C++" },
  { id: "c",          label: "C" },
  { id: "javascript", label: "JavaScript" },
] as const;

export type Language = (typeof LANGUAGES)[number]["id"];

export function LanguageSelector({
  value,
  onChange,
}: {
  value: Language;
  onChange: (lang: Language) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-card border border-border bg-surface p-1">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.id}
          onClick={() => onChange(lang.id)}
          className="rounded px-3 py-1 text-xs font-medium transition-all"
          style={{
            background: value === lang.id ? "var(--accent)" : "transparent",
            color: value === lang.id ? "#fff" : "var(--text-muted)",
            fontFamily: "var(--font-jetbrains), monospace",
          }}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
