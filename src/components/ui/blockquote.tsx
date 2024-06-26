'use client';
import type { ReactNode } from 'react';

export function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-medium rounded-md my-5 text-gray-800 pl-3 border-l-[2px] py-1 px-4 border-black bg-my-gray dark:bg-gray-800 dark:border-gray-800 dark:text-gray-300">
      {children}
    </blockquote>
  );
}
