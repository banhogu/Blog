'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Progressbar = ({ title }: { title: string }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Update progress bar
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / height);
      });

      // Show or hide the menu based on scroll position
      setIsVisible(scrollTop > 230);
    };

    window.addEventListener('scroll', scroll);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div>
      {/* Menu*/}
      <div
        className={` border-b  border-gray-300 pt-[12.5px] pb-[8.5px] px-6 z-50 fixed top-0 left-0 right-0 hidden sm:flex justify-between items-center transition-transform duration-200 ease-in-out dark:border-none ${
          isVisible
            ? 'translate-y-0 backdrop-blur-sm bg-zinc-50/90 dark:bg-gray-800'
            : '-translate-y-full'
        }`}
      >
        {/* <Image src={'/images/about_me.png'} width={50} height={50} alt="" /> */}
        <p className="font-bold text-[16px]"># {title}</p>
        <div className="flex items-center gap-2">
          <Link
            id="aboutLink"
            href="/"
            className="text-md sm:text-[16px] text-gray-600 font-semibold inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-colors dark:text-gray-300"
          >
            Home
          </Link>
          <Link
            id="aboutLink"
            href="/posts"
            className="text-md sm:text-[16px] text-gray-600 font-semibold inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-colors dark:text-gray-300"
          >
            Posts
          </Link>

          <Link
            id="aboutLink"
            href="/projects"
            className="text-md sm:text-[16px] text-gray-600 font-semibold inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-colors dark:text-gray-300"
          >
            Project
          </Link>
        </div>
      </div>
      {/* Progress bar */}
      <div
        className="z-50 fixed top-0 left-0 right-0 h-[5px] rounded-lg bg-sky-800 dark:bg-gray-400"
        style={{ width: `${progress * 100}%` }}
      ></div>
    </div>
  );
};

export default Progressbar;
