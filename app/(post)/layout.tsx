import Writer from '@/components/common/Writer';
import { PostHeader } from '@/components/post/PostHeader';
import RecommendPost from '@/components/post/RecommendPost';
import { getPosts } from '@/utils/getPosts';
import dynamic from 'next/dynamic';

const Giscus = dynamic(() => import('@/components/post/Giscus'), { ssr: false });

export default async function Layout({ children }) {
  const posts = getPosts();

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      <PostHeader posts={posts} />
      {children}
      <Writer />
      <RecommendPost posts={posts} />
      <Giscus />
    </article>
  );
}
