import { create } from 'zustand';
import { persist } from 'zustand/middleware';
/* eslint-disable no-unused-vars */

/**
 * 현재 테마를 관리하는 store입니다.
 */

interface currentThemeType {
  currentTheme: string;
  setCurentTheme: (payload: string) => void;
}

export const useCurrentThemeStore = create(
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
