"use client";

import React, { useEffect } from "react";
import { useEditorStore } from "@/store/useEditorStore";
import { EditorToolbar } from "./EditorToolbar";
import { CodeEditor } from "./CodeEditor";
import { ProgrammingLanguage } from "@/types/interview";
import { STARTER_TEMPLATES } from "@/data/interview/starterTemplates";

interface EditorControlsProps {
  initialLanguage: ProgrammingLanguage;
}

export function EditorControls({ initialLanguage }: EditorControlsProps) {
  const {
    language,
    codes,
    theme,
    fontSize,
    isFullscreen,
    setCode,
    setLanguage,
    setTheme,
    setFontSize,
    toggleFullscreen,
    resetCode,
  } = useEditorStore();

  // Set language from session configuration on first mount
  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage, setLanguage]);

  const activeCode = codes[language] || STARTER_TEMPLATES[language] || "";

  const handleCodeChange = (newVal: string) => {
    setCode(language, newVal);
  };

  const handleReset = () => {
    resetCode(language);
  };

  return (
    <div className={`flex flex-col bg-[#0d0d0d] overflow-hidden rounded-lg font-mono transition-all ${
      isFullscreen ? "fixed inset-0 z-50 h-screen w-screen p-4 bg-base" : "h-full"
    }`}>
      <EditorToolbar
        language={language}
        onLanguageChange={setLanguage}
        onReset={handleReset}
        theme={theme}
        onThemeChange={setTheme}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        isFullscreen={isFullscreen}
        onFullscreenToggle={toggleFullscreen}
      />
      <CodeEditor
        language={language}
        value={activeCode}
        onChange={handleCodeChange}
        fontSize={fontSize}
        theme={theme}
      />
    </div>
  );
}
export type { ProgrammingLanguage };
