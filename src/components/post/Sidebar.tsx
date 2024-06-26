import { useHeadingsObserver } from '@/hooks/useHeadingObserver';
import { ParsedPost } from '@/models/parsedPost';
import Link from 'next/link';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';

interface SidebarType {
  parsedContent: ParsedPost[];
}

const Sidebar = ({ parsedContent }: SidebarType) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const activeHeading = useHeadingsObserver('h2');

  return (
    <>
      <div className="text-xs fixed ml-[700px] -mt-6">
        <div className="border-l border-gray-300 flex flex-col gap-1 py-4 px-4">
          <div className="font-bold text-lg text-gray-700 dark:text-gray-300">On This Page</div>
          <ul>
            {parsedContent.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`
                  ${
                    activeHeading[0] == item.link
                      ? 'text-pink-600'
                      : 'text-gray-500 dark:text-gray-300'
                  }
                  mt-2 text-xs font-semibold  `}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          onClick={handleClick}
          style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
          className=" mt-3 w-7 h-7 rounded-md cursor-pointer flex items-center justify-center "
        >
          <BiArrowToTop size={18} color="#989898" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
