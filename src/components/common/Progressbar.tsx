'use client';
import React, { useEffect, useRef, useState } from 'react';

const Progressbar = () => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const scroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        setProgress(scrollTop / height);
      });
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
    <div
      className="z-[50] fixed top-0 left-0 right-0 h-[5px] rounded-lg bg-sky-800 dark:bg-gray-300"
      style={{ width: `${progress * 100}%` }}
    ></div>
  );
};

export default Progressbar;
