'use client';
import React from 'react';
import { A } from '@/components/ui/a';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="p-6 pt-3 pb-7 flex text-[14px] text-center  dark:text-gray-400 text-gray-700 font-mono">
      <div className="grow font-semibold text-left flex items-center gap-1 dark:text-gray-300">
        호진방 블로그
        <div className="flex items-center">
          (
          <div className="flex items-center gap-1">
            <FaInstagram size={14} />
            <A target="_blank" href="https://www.instagram.com/banhogu" className="font-bold">
              banhogu
            </A>
          </div>
          )
        </div>
      </div>
      <div className="flex items-center gap-1">
        <FiGithub size={14} />
        <A target="_blank" href="https://github.com/banghogu/Blog" className="font-bold">
          Source
        </A>
      </div>
    </footer>
  );
};

export default Footer;
