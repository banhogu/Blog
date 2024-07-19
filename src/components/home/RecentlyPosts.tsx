'use client';
import { Post } from '@/models/post';
import React, { useMemo } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

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
      <div className="px-3 font-bold text-[17.5px] text-zinc-800 dark:text-gray-300">
        Recently Posts
      </div>
      <ul className="px-3 mt-4 ">
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
                  <p className="font-bold text-[15px]">{item.title}</p>
                  <p className="font-semibold text-[13.5px]">#{item.subTitle}</p>
                  <p className="font-semibold text-gray-500 text-[13px]">
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
