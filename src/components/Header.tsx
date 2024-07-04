'use client';
import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';
import ToggleTheme from './ToggleTheme';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';
import SearchModal from './modal/SearchModal';
import { Post } from '@/models/post';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

interface HeaderType {
  posts: Post[];
}

const Header = ({ posts }: HeaderType) => {
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  useEffect(() => {
    if (searchModalOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [searchModalOpen]);

  return (
    <>
      <header className="flex mt-2 mb-5 md:mb-10 items-center relative">
        <Logo />

        <nav className="font-naverSemi text-xs grow justify-end items-center flex gap-1 md:gap-3">
          <ToggleTheme />
          <div
            onClick={() => setSearchModalOpen(true)}
            className="cursor-pointer hover:bg-gray-200 dark:hover:bg-[#313131] p-2"
          >
            <IoIosSearch size={22} />
          </div>
          <Link
            id="aboutLink"
            href="/about"
            className="text-sm inline-flex hover:bg-gray-200 dark:hover:bg-[#313131] active:bg-gray-300 dark:active:bg-[#242424] rounded-sm p-2 transition-[background-color]"
          >
            About
          </Link>
        </nav>
      </header>
      {searchModalOpen && <SearchModal posts={posts} setSearchModalOpen={setSearchModalOpen} />}
    </>
  );
};

export default Header;
