"use client";

import { motion } from "framer-motion";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }} className="space-y-6">
      {children}
    </motion.div>
  );
}
