'use client';
import { themeEffect } from '@/utils/themeEffect';
import { MdOutlineWbSunny } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';
import { useCallback, useEffect, useState } from 'react';
import { useCurrentThemeStore } from '@/store/useTheme.store';

const SideTheme = () => {
  const { setCurentTheme } = useCurrentThemeStore();
  const [preference, setPreference] = useState<undefined | null | string>(undefined); //사용자의 테마 설정을 저장하는 상태
  const [currentTheme, setCurrentTheme] = useState<null | string>(null); //현재 적용된 테마

  const onMediaChange = useCallback(() => {
    const current = themeEffect();
    setCurrentTheme(current);
  }, []);

  useEffect(() => {
    setPreference(localStorage.getItem('theme')); // localStorage에 저장된 테마
    const current = themeEffect(); //현재 적용된 테마를 확인하고 currentTheme 상태에 저장
    setCurrentTheme(current);

    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)'); //dark mode가 변경될 때 onMediaChange 함수를 호출
    matchMedia.addEventListener('change', onMediaChange);
    return () => matchMedia.removeEventListener('change', onMediaChange);
  }, [onMediaChange]);

  const onStorageChange = useCallback(
    (event: StorageEvent) => {
      if (event.key === 'theme') setPreference(event.newValue);
    },
    [setPreference]
  );

  useEffect(() => {
    setCurrentTheme(themeEffect());
  }, [preference]);

  useEffect(() => {
    window.addEventListener('storage', onStorageChange);
    return () => window.removeEventListener('storage', onStorageChange);
  });
  return (
    <>
      <button
        aria-label="Toggle theme"
        style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
        className={`mt-3 w-7 h-7 rounded-md cursor-pointer flex items-center justify-center transition-[background-color] p-2 
        [&_.sun-icon]:hidden
        dark:[&_.moon-icon]:hidden
        dark:[&_.sun-icon]:inline
      }`}
        onClick={(ev) => {
          ev.preventDefault();

          let newPreference: string | null = currentTheme === 'dark' ? 'light' : 'dark';
          const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
          if (preference !== null && systemTheme === currentTheme) {
            newPreference = null;
            localStorage.removeItem('theme');
          } else {
            localStorage.setItem('theme', newPreference);
          }
          setCurentTheme(newPreference);
          setPreference(newPreference);
        }}
      >
        <span className="sun-icon">
          <MdOutlineWbSunny size={18} color="#989898" />
        </span>
        <span className="moon-icon">
          <LuMoon size={18} color="#989898" />
        </span>
      </button>
    </>
  );
};

export default SideTheme;
