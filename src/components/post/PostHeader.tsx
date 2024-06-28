'use client';
import { Post } from '@/models/post';
import { getTag } from '@/utils/getTag';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';
import ToTop from '../ToTop';
import Progressbar from '../Progressbar';
import { parseContent } from '@/utils/parseContent';
import Sidebar from './Sidebar';

interface PostHeaderType {
  posts: Post[];
}

export function PostHeader({ posts }: PostHeaderType) {
  const [showToTop, setShowToTop] = useState(false);
  const segments = useSelectedLayoutSegments(); // think/why-i-use-next 으로 왔을 때 ["think" , "why-i-use-next"] 형식
  console.log(segments);
  const post = posts.find((post) => post.id === segments[segments.length - 1]); //해당 글 가져오기 받은 post는 배열이라서 find씀

  if (post == null) return <></>;

  const parsedContent = parseContent(post.content);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="pt-3 pb-8">
        <div
          className="max-w-max flex items-center py-1 px-2 bg-gray-200 font-naverBold rounded-md mb-2 dark:text-white dark:bg-gray-800"
          suppressHydrationWarning={true}
        >
          {getTag(post.tag)}
        </div>
        <h1 className=" text-2xl font-naverBold dark:text-gray-100">{post.title}</h1>
      </div>
      {showToTop && <ToTop />}
      <Sidebar parsedContent={parsedContent} />
      <Progressbar />
    </>
  );
}
