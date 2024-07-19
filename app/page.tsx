import About from '@/components/home/About';
import RecentlyPosts from '@/components/home/RecentlyPosts';
import PostListLayout from '@/components/post/PostListLayout';
import { getPosts } from '@/utils/getPosts';
import React from 'react';

const HomePage = () => {
  const posts = getPosts();

  return (
    <div>
      <About />
      <RecentlyPosts posts={posts} />
    </div>
  );
};

export default HomePage;
