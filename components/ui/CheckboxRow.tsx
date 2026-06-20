"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CheckboxRow({
  checked,
  onChange,
  label,
  className
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={cn("inline-flex items-center gap-2 text-sm text-secondary", className)}
      aria-pressed={checked}
    >
      <span
        className={cn(
          "flex h-5 w-5 items-center justify-center rounded border transition-colors",
          checked ? "border-accent bg-accent text-black" : "border-border bg-surface"
        )}
      >
        {checked && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ type: "spring", duration: 0.3 }}>
            <Check size={14} strokeWidth={3} />
          </motion.span>
        )}
      </span>
      {label && <span>{label}</span>}
    </button>
  );
}
