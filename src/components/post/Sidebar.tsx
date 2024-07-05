import { useHeadingsObserver } from '@/hooks/useHeadingObserver';
import { ParsedPost } from '@/models/parsedPost';
import Link from 'next/link';
import React from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import SideTheme from './SideTheme';
import AiBot from './AiBot';
import ToTop from './ToTop';

interface SidebarType {
  parsedContent: ParsedPost[];
}

const Sidebar = ({ parsedContent }: SidebarType) => {
  const activeHeading = useHeadingsObserver('h2');

  return (
    <>
      <div className="text-xs fixed ml-[700px] -mt-6">
        <div className="border-l border-gray-300 flex flex-col gap-1 py-4 px-4">
          <div className="font-naverBold text-lg text-gray-700 dark:text-gray-300">
            On This Page
          </div>
          <ul>
            {parsedContent.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`
                  ${
                    activeHeading[0] == item.link
                      ? 'text-pink-600 font-naverBold'
                      : 'text-gray-500 dark:text-gray-300 font-naverSemi'
                  }
                  mt-2 text-xs  `}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-[8px]">
          <ToTop />

          <AiBot />

          <SideTheme />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
