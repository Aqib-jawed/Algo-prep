"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({ code, language = "java" }: { code: string; language?: string }) {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    async function highlight() {
      try {
        const { codeToHtml } = await import("shiki");
        const rendered = await codeToHtml(code.trim(), {
          lang: language,
          theme: "github-dark",
          transformers: [
            {
              pre(node) {
                node.properties.style = "background:#0a0a0a";
              },
              line(node, line) {
                node.properties.class = "line";
                node.children.unshift({
                  type: "element",
                  tagName: "span",
                  properties: { class: "mr-4 inline-block w-6 select-none text-right text-[#525252]" },
                  children: [{ type: "text", value: String(line) }]
                });
              }
            }
          ]
        });
        if (active) setHtml(rendered);
      } catch (error) {
        console.warn("Shiki syntax highlighter chunk error, using fallback formatter:", error);
      }
    }
    highlight();
    return () => {
      active = false;
    };
  }, [code, language]);

  async function copy() {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  const escapeHtml = (str: string) =>
    str.replace(/[&<>]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char] || char));

  const formattedFallback = code
    .trim()
    .split("\n")
    .map(
      (line, idx) =>
        `<span class="line flex"><span class="mr-4 inline-block w-6 shrink-0 select-none text-right text-[#525252]">${
          idx + 1
        }</span><span>${escapeHtml(line)}</span></span>`
    )
    .join("\n");

  return (
    <div className="relative overflow-hidden rounded-card border border-border bg-[#0a0a0a]">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 flex h-8 items-center gap-1 rounded border border-border bg-surface px-2 text-xs text-secondary transition-colors hover:border-accent/50 hover:text-primary"
      >
        {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
      <div
        className="overflow-x-auto p-4 pr-20 font-mono text-sm leading-6"
        dangerouslySetInnerHTML={{
          __html: html || `<pre style="background:#0a0a0a;margin:0;"><code>${formattedFallback}</code></pre>`
        }}
      />
    </div>
  );
}

