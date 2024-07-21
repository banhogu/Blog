'use client';
import { Post } from '@/models/post';
import React, { useMemo } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { getTag } from '@/utils/getTag';

interface RecentlyPostsType {
  posts: Post[];
}

const RecentlyPosts = (posts: RecentlyPostsType) => {
  const sortedPosts = useMemo(() => {
    return posts.posts
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [posts]);

  return (
    <div>
      <div className="px-3 font-bold text-[19px] text-zinc-800 dark:text-gray-300">
        Recently Posts
      </div>
      <ul className="px-3 mt-3 mb-6">
        {sortedPosts.map((item, i) => {
          const isLast = i === sortedPosts.length - 1;
          return (
            <li key={i} className="text-zinc-700 dark:text-gray-300">
              <Link href={item.slug}>
                <div
                  className={` py-[12px] border-b border-gray-200 flex flex-col gap-[2px] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222]
                 ${isLast ? 'border-b-0' : ''}
                `}
                >
                  <div className=" text-[12px] max-w-max flex items-center py-[1.5px] px-[4px] bg-gray-200 font-bold rounded-md dark:text-white dark:bg-gray-800">
                    {getTag(item.tag)}
                  </div>
                  <p className="font-bold text-zinc-800 text-[15.5px] dark:text-gray-300">
                    {item.title}
                  </p>
                  <p className="font-semibold text-[14px]"># {item.subTitle}</p>
                  <p className="mt-1 font-semibold text-gray-500 text-[13.5px] dark:text-gray-300">
                    {format(new Date(item.date), 'yyyy.MM.dd')}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentlyPosts;
