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
        data-cy="ToTop-Btn"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={handleClick}
        style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
        className={`relative mt-3 w-[34px] h-[34px] rounded-md cursor-pointer flex items-center justify-center transition duration-100
        ${isHover ? 'bg-gray-200 dark:bg-gray-700' : ''}
        `}
      >
        <BiArrowToTop size={24} className="text-sky-900 dark:text-white" />
      </div>
      {isHover && (
        <div className="text-sm text-zinc-600 font-semibold  py-2 px-3 flex items-center justify-center rounded-lg  absolute -bottom-10 -left-[12px] shadow-lg bg-white dark:bg-gray-600 dark:text-white">
          To Top
        </div>
      )}
    </>
  );
};

export default ToTop;
