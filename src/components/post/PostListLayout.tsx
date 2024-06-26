'use client';
import { Post } from '@/models/post';
import { Suspense, useState } from 'react';
import PostList from './PostList';
import { DivideOption } from '@/models/divideoption';

interface PostListLayoutType {
  posts: Post[];
}

const PostListLayout = ({ posts }: PostListLayoutType) => {
  const [divide, setDivide] = useState<DivideOption>(['tag', '전체']);

  const divideOptions: DivideOption[1][] = ['전체', '학습', '기술', '생각', '경험'];

  const clickBtn = () => {
    setDivide((prevDivide) => {
      const currentIndex = divideOptions.indexOf(prevDivide[1]);
      const nextIndex = (currentIndex + 1) % divideOptions.length;
      return ['tag', divideOptions[nextIndex]];
    });
  };

  return (
    <Suspense fallback={null}>
      <main className="max-w-2xl m-auto mb-10 font-mono text-sm">
        <header className="flex items-center text-sm text-gray-600 dark:text-gray-300">
          <button
            onClick={clickBtn}
            className={`font-semibold flex mr-2 items-center justify-center w-12 h-9 text-left text-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222]`}
          >
            {divide[1] === '전체' ? 'tag' : `${divide[1]}`}
          </button>
          <span className="pl-2 grow font-semibold">title</span>
        </header>

        <PostList posts={posts} divide={divide} />
      </main>
    </Suspense>
  );
};

export default PostListLayout;
