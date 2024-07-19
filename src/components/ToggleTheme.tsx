'use client';
import { themeEffect } from '@/utils/themeEffect';
import { MdOutlineWbSunny } from 'react-icons/md';
import { LuMoon } from 'react-icons/lu';
import { useCallback, useEffect, useState } from 'react';
import { useCurrentThemeStore } from '@/store/useTheme.store';

const ToggleTheme = () => {
  const { setCurentTheme } = useCurrentThemeStore();
  const [preference, setPreference] = useState<undefined | null | string>(undefined); //사용자의 테마 설정을 저장하는 상태
  const [currentTheme, setCurrentTheme] = useState<null | string>(null); //현재 적용된 테마
  const [isHovering, setIsHovering] = useState(false); //마우스가 올라갔니?
  const [isHoveringOverride, setIsHoveringOverride] = useState(false); //버튼 클릭 상태 저장

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
      {isHovering && (
        <span
          className={`
          text-[10px]
          text-gray-600
          font-bold
          mr-[-5px]

          dark:text-gray-300

          /* mobile */
          hidden

          md:inline
        `}
        >
          {preference === null ? 'System' : preference === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}

      <button
        aria-label="Toggle theme"
        className={`inline-flex ${
          isHovering && !isHoveringOverride ? 'bg-gray-200 dark:bg-[#313131]' : ''
        } active:bg-gray-300 transition-[background-color] dark:active:bg-[#242424] rounded-sm p-2 
        
        theme-system:!bg-inherit
        [&_.sun-icon]:hidden
        dark:[&_.moon-icon]:hidden
        dark:[&_.sun-icon]:inline
      }`}
        onClick={(ev) => {
          ev.preventDefault();
          setIsHoveringOverride(true);

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
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsHoveringOverride(false);
        }}
      >
        <span className="sun-icon">
          <MdOutlineWbSunny size={18} />
        </span>
        <span className="moon-icon">
          <LuMoon size={18} />
        </span>
      </button>
    </>
  );
};

export default ToggleTheme;
