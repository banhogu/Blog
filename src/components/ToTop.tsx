import React from 'react';
import { BiSolidToTop } from 'react-icons/bi';

const ToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className="sm:hidden ml-[310px] text-sm font-bold cursor-pointer fixed bottom-[30px] z-50 flex items-center justify-center w-10 h-10 rounded-full bg-white text-black shadow-2xl"
      onClick={handleClick}
      style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
    >
      <BiSolidToTop size={22} color="#4d4d4d" />
    </div>
  );
};

export default ToTop;
