'use client';

import { createContext, useContext } from 'react';
import type { SharedContent } from '@/lib/types';

const Ctx = createContext<SharedContent | null>(null);

export function ContentProvider({ value, children }: { value: SharedContent; children: React.ReactNode }) {
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useContent(): SharedContent {
  const v = useContext(Ctx);
  if (!v) throw new Error('useContent must be used inside <ContentProvider>');
  return v;
}
