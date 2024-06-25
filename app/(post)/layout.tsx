import { getPosts } from '@/utils/getPosts';
import { Metadata } from 'next';

// import { PostHeader } from '@/components/post-header';

export const revalidate = 60;

export default async function Layout({ children }) {
  const posts = getPosts();

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      {/* <PostHeader posts={posts} /> */}

      {children}
    </article>
  );
}
