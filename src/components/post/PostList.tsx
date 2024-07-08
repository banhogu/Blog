import { Option } from '@/models/options';
import { Post } from '@/models/post';
import { getTag } from '@/utils/getTag';
import Link from 'next/link';
import React, { useMemo } from 'react';

type PostListType = {
  posts: Post[];
  divide: Option;
};

const PostList = ({ posts, divide }: PostListType) => {
  const tagOrder = ['tech', 'experience', 'study', 'think'];

  const dividedPosts = useMemo(() => {
    const [_, tag] = divide;
    const filteredPosts = tag === '전체' ? posts : posts.filter((post) => getTag(post.tag) === tag);
    return filteredPosts.sort((a, b) => tagOrder.indexOf(a.tag) - tagOrder.indexOf(b.tag));
  }, [posts, divide]);

  const seenTags = new Set();

  return (
    <ul>
      {dividedPosts.map((post: Post, i: number) => {
        const isFirstOfTag = !seenTags.has(post.tag);
        if (isFirstOfTag) {
          seenTags.add(post.tag);
        }

        const isFirst = i === 0;
        const isLast = i === dividedPosts.length - 1;

        return (
          <li key={post.slug}>
            <Link href={post.slug}>
              <div
                className={`font-naverNormal flex items-center py-3 transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
         ${!isFirst ? 'border-t-0' : ''}
         ${isLast ? 'border-b-0' : ''}`}
              >
                <div className="w-12 flex items-center justify-center mr-4 font-naverBold">
                  {isFirstOfTag && divide[1] == '전체' && getTag(post.tag)}
                </div>
                <div className="flex-1 dark:text-gray-100 flex flex-col">
                  <div className=" text-[15.5px] font-naverSemi">{post.title}</div>
                  <div className="mt-[2px] text-[13px]"># {post.subTitle}</div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;
