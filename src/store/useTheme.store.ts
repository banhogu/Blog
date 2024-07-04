import { create } from 'zustand';
import { persist } from 'zustand/middleware';
/* eslint-disable no-unused-vars */

interface currentThemeType {
  currentTheme: string;
  setCurentTheme: (payload: string) => void;
}

export const useCurrentTalkStore = create(
  persist<currentThemeType>(
    (set) => ({
      currentTheme: typeof window !== 'undefined' ? localStorage.getItem('theme') || '' : '',
      setCurentTheme: (payload: string) =>
        set(() => ({
          currentTheme: payload,
        })),
    }),
    {
      name: 'current-Theme',
    }
  )
);
