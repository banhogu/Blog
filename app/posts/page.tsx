import PostListLayout from '@/components/post/PostListLayout';
import { getPosts } from '@/utils/getPosts';
import React from 'react';

const PostsPage = () => {
  const posts = getPosts();
  return <PostListLayout posts={posts} />;
};

export default PostsPage;
