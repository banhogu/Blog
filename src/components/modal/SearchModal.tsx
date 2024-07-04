import useOnClickOutside from '@/hooks/useOnClickOutside';
import { Post } from '@/models/post';

import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';

interface SearchModalType {
  setSearchModalOpen: Dispatch<SetStateAction<boolean>>;
  posts: Post[];
}

const SearchModal = ({ setSearchModalOpen, posts }: SearchModalType) => {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useOnClickOutside(ref, () => setSearchModalOpen(false));

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-20 z-50 backdrop-blur-sm">
      <div ref={ref} className="w-[672px] mt-[120px] mx-auto bg-gray-50 px-6 py-4 rounded-md">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search Title..."
          className=" bg-gray-50 outline-none font-naverBold text-xl text-gray-800 w-full"
        />
      </div>
    </div>
  );
};

export default SearchModal;
