'use client';
import React from 'react';

import { FiGithub } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="p-6 pt-3 pb-7 flex text-[14px] text-center  dark:text-gray-400 text-gray-700 font-mono">
      <div className="grow font-naverBold text-left flex items-center gap-1 dark:text-gray-300">
        호진방 블로그
        <div className="flex items-center">
          (
          <div className="flex items-center gap-1">
            <FaInstagram size={14} />
            <Link
              target="_blank"
              href="https://www.instagram.com/banhogu"
              className="text-gray-600 dark:text-gray-300 underline"
            >
              banhogu
            </Link>
          </div>
          )
        </div>
      </div>
      <div className="flex font-naverBold items-center gap-1 ">
        <FiGithub size={14} />
        <Link
          target="_blank"
          href="https://github.com/banhogu/Blog"
          className="text-gray-600 dark:text-gray-300 underline"
        >
          Source
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
