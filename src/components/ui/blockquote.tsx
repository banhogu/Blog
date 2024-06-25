'use client';
import type { ReactNode } from 'react';

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="rounded-lg my-5 text-gray-800 pl-3 border-l-[4px] py-1 px-1 border-gray-400 bg-gray-100 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-300">
      {children}
    </blockquote>
  );
}
