'use client';
import type { Post } from '@/models/post';
import type { Option } from '@/models/options';

import { Suspense, useMemo, useState } from 'react';
import PostList from './PostList';
import { getTag } from '@/utils/getTag';

interface PostListLayoutType {
  posts: Post[];
}

const PostListLayout = ({ posts }: PostListLayoutType) => {
  const [divide, setDivide] = useState<Option>(['tag', '전체']);

  const divideOptions: Option[1][] = ['전체', '기술', '경험', '학습', '생각'];

  const clickBtn = () => {
    setDivide((prevDivide) => {
      const currentIndex = divideOptions.indexOf(prevDivide[1]);
      const nextIndex = (currentIndex + 1) % divideOptions.length;
      return ['tag', divideOptions[nextIndex]];
    });
  };

  const dividedPosts = useMemo(() => {
    const [_, tag] = divide;
    return tag === '전체' ? posts : posts.filter((post) => getTag(post.tag) === tag);
  }, [posts, divide]);

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 pt-6 ">
        <header className="flex justify-between text-[16px] text-gray-800 dark:text-gray-300">
          <div className="flex items-center text-[16.5px]">
            <button
              onClick={clickBtn}
              className={`text-sky-950 font-extrabold flex mr-2 items-center justify-center w-12 h-9 text-left  dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222]`}
            >
              {divide[1] === '전체' ? 'tag' : `${divide[1]}`}
            </button>
            <span className=" pl-2 grow font-bold">title</span>
          </div>
          <div className="text-[15.5px] flex items-center font-semibold">
            {dividedPosts?.length} posts
            <span className="pl-3">{divide[1] === '전체' ? '4 tags' : ``}</span>
          </div>
        </header>

        <PostList posts={posts} divide={divide} />
      </main>
    </Suspense>
  );
};

export default PostListLayout;
