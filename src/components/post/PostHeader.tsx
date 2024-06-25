'use client';
import { Post } from '@/models/post';
import { getTag } from '@/utils/getTag';
import { useSelectedLayoutSegments } from 'next/navigation';

interface PostHeaderType {
  posts: Post[];
}

export function PostHeader({ posts }: PostHeaderType) {
  const segments = useSelectedLayoutSegments(); // think/why-i-use-next 으로 왔을 때 ["think" , "why-i-use-next"] 형식
  const post = posts.find((post) => post.id === segments[segments.length - 1]); //해당 글 가져오기 받은 post는 배열이라서 find씀

  if (post == null) return <></>;

  return (
    <div className="pt-3 pb-8">
      <div
        className="max-w-max flex items-center py-1 px-2 bg-gray-200 font-semibold rounded-md mb-2"
        suppressHydrationWarning={true}
      >
        {getTag(post.tag)}
      </div>
      <h1 className=" text-2xl font-bold dark:text-gray-100">{post.title}</h1>
    </div>
  );
}
