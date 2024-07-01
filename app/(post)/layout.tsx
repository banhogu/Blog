import { PostHeader } from '@/components/post/PostHeader';
import { getPosts } from '@/utils/getPosts';
import dynamic from 'next/dynamic';

const Giscus = dynamic(() => import('@/components/post/Giscus'), { ssr: false });

export default async function Layout({ children }) {
  const posts = getPosts();

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      <PostHeader posts={posts} />
      {children}
      <div className="h-8 w-full" />
      <Giscus />
    </article>
  );
}
