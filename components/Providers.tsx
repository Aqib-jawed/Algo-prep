"use client";

import { SessionProvider } from 'next-auth/react';
import { ProgressSync } from '@/components/progress/ProgressSync';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ProgressSync />
      {children}
    </SessionProvider>
  );
}