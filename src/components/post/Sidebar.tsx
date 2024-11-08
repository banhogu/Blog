import type { Post } from '@/models/post';
import type { ParsedPost } from '@/models/parsedPost';

import React from 'react';
import { useHeadingsObserver } from '@/hooks/useHeadingObserver';
import Link from 'next/link';
import SideTheme from './SideTheme';
import AiBot from './AiBot';
import ToTop from './ToTop';
import Share from './Share';
import { useGetFirstImage } from '@/hooks/useGetFirstImage';

interface SidebarType {
  parsedContent: ParsedPost[];
  post: Post;
}

const Sidebar = ({ parsedContent, post }: SidebarType) => {
  if (parsedContent.length === 0) {
    return null;
  }

  console.log(post);

  const activeHeading = useHeadingsObserver('h2');
  const firstImage = useGetFirstImage(post.content);

  return (
    <>
      <div className="text-xs fixed ml-[750px] top-[25%]">
        <div className="border-l border-gray-300 flex flex-col gap-1 py-4 px-3">
          <div className="font-bold text-[19px] text-sky-950 dark:text-gray-300">On This Page</div>
          <ul className="mt-2">
            {parsedContent.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`
                  ${
                    activeHeading[0] == item.link
                      ? 'text-sky-700 font-extrabold bg-zinc-100 dark:bg-gray-900'
                      : 'text-gray-500 dark:text-gray-300 font-semibold'
                  }
                  mt-1 px-3 text-[13.5px] py-2`}
                >
                  <Link href={item.link}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-[8px]">
          <ToTop />

          <AiBot post={post} />

          <SideTheme />

          <Share title={post.title} description={post.description} image={firstImage} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
