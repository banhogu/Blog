'use client';
import { Post } from '@/models/post';
import { getRecommend } from '@/utils/getRecommend';
import { useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';
import RecommendPostItem from './RecommendPostItem';

interface PostHeaderType {
  posts: Post[];
}

const RecommendPost = ({ posts }: PostHeaderType) => {
  const segments = useSelectedLayoutSegments(); // think/why-i-use-next 으로 왔을 때 ["think" , "why-i-use-next"] 형식
  const post = posts.find((post) => post.id === segments[segments.length - 1]); //해당 글 가져오기 받은 post는 배열이라서 find씀

  if (post == null) return <></>;

  const RecommendPosts = getRecommend(post.tag);

  return (
    <div className="mt-4 pt-10 pb-10 flex items-center justify-between gap-5">
      {RecommendPosts.map((item) => (
        <RecommendPostItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default RecommendPost;