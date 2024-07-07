'use client';
import React from 'react';
import { A } from '@/components/ui/a';
import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="p-6 pt-3 pb-7 flex text-[14.5px] text-center  dark:text-gray-400 text-gray-500 font-mono">
      <div className="grow text-left flex items-center gap-1">
        호진방 블로그
        <div className="flex items-center">
          (
          <div className="flex items-center gap-1">
            <FaInstagram size={14} />
            <A target="_blank" href="https://www.instagram.com/banhogu">
              banhogu
            </A>
          </div>
          )
        </div>
      </div>
      <div className="flex items-center gap-1">
        <FiGithub size={14} />
        <A target="_blank" href="https://github.com/banghogu/Blog">
          Source
        </A>
      </div>
    </footer>
  );
};

export default Footer;
