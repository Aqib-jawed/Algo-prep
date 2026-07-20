"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ProgrammingLanguage } from "@/types/interview";
import { PageSkeleton } from "@/components/ui/PageSkeleton";

// Dynamic import with SSR disabled to ensure lazy loading on client side
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <PageSkeleton />,
});

interface CodeEditorProps {
  language: ProgrammingLanguage;
  value: string;
  onChange: (value: string) => void;
  fontSize: number;
  theme: "vs-dark" | "light";
  readOnly?: boolean;
}

export function CodeEditor({
  language,
  value,
  onChange,
  fontSize,
  theme,
  readOnly = false,
}: CodeEditorProps) {
  const [editorTheme, setEditorTheme] = useState("vs-dark");

  useEffect(() => {
    // Monaco has standard themes: 'vs-dark' and 'light'
    setEditorTheme(theme === "vs-dark" ? "vs-dark" : "light");
  }, [theme]);

  // Map our types to Monaco-supported languages
  const getMonacoLanguage = (lang: ProgrammingLanguage): string => {
    if (lang === "cpp") return "cpp";
    if (lang === "c") return "c";
    return lang;
  };

  const handleEditorChange = (val: string | undefined) => {
    if (val !== undefined) {
      onChange(val);
    }
  };

  return (
    <div className="flex-1 w-full relative min-h-[480px] border border-border bg-base overflow-hidden rounded-b-lg">
      <MonacoEditor
        height="100%"
        width="100%"
        language={getMonacoLanguage(language)}
        value={value}
        onChange={handleEditorChange}
        theme={editorTheme}
        options={{
          fontSize,
          readOnly,
          minimap: { enabled: false },
          wordWrap: "on",
          lineNumbers: "on",
          automaticLayout: true,
          bracketPairColorization: { enabled: true },
          formatOnPaste: true,
          formatOnType: true,
        }}
      />
    </div>
  );
}
