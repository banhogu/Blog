'use client';
import React, { useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';

const ToTop = () => {
  const [isHover, setIsHover] = useState(false);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={handleClick}
        style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
        className={`relative mt-3 w-8 h-8 rounded-md cursor-pointer flex items-center justify-center transition duration-100
        ${isHover ? 'bg-gray-200 dark:bg-gray-700' : ''}
        `}
      >
        <BiArrowToTop size={18} className="text-gray-600 dark:text-white" />
      </div>
      {isHover && (
        <div className="text-zinc-600 font-naverBold  py-2 px-3 flex items-center justify-center rounded-lg  absolute -bottom-10 -left-[14px] shadow-lg bg-white dark:bg-gray-600 dark:text-white">
          To Top
        </div>
      )}
    </>
  );
};

export default ToTop;
