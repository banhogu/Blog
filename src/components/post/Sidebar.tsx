import { ParsedPost } from '@/models/parsedPost';
import Link from 'next/link';
import React from 'react';

interface SidebarType {
  parsedContent: ParsedPost[];
}

const Sidebar = ({ parsedContent }: SidebarType) => {
  return (
    <>
      <div className="text-xs fixed ml-[690px] -mt-20">
        <div className="border-l border-gray-300 flex flex-col gap-1 py-4 px-4">
          <div className="font-extrabold text-lg text-gray-700">On This Page</div>
          <ul>
            {parsedContent.map((item) => {
              return (
                <li key={item.link} className="mt-2 text-xs font-semibold text-gray-500">
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
