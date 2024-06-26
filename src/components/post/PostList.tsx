import { DivideOption } from '@/models/divideoption';
import { Post } from '@/models/post';
import { getTag } from '@/utils/getTag';
import Link from 'next/link';
import React, { useMemo } from 'react';

type PostListType = {
  posts: Post[];
  divide: DivideOption;
};

const PostList = ({ posts, divide }: PostListType) => {
  const dividedPosts = useMemo(() => {
    const [_, tag] = divide;
    return tag === '전체' ? posts : posts.filter((post) => getTag(post.tag) === tag);
  }, [posts, divide]);

  return (
    <ul>
      {dividedPosts.map((post: Post, i: number) => {
        const isFirst = i === 0;
        const isLast = i === dividedPosts.length - 1;

        return (
          <li key={post.slug}>
            <Link href={post.slug}>
              <div
                className={`flex items-center py-3 transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
         ${!isFirst ? 'border-t-0' : ''}
         ${isLast ? 'border-b-0' : ''}`}
              >
                <div className="w-12"></div>
                <div className="flex-1 dark:text-gray-100">{post.title}</div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
