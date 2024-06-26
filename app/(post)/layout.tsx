import Giscus from '@/components/post/Giscus';
import { PostHeader } from '@/components/post/PostHeader';
import { getPosts } from '@/utils/getPosts';

export default async function Layout({ children }) {
  const posts = getPosts();

  return (
    <article className="mb-10 text-gray-800 dark:text-gray-300">
      <PostHeader posts={posts} />

      {children}
    </article>
  );
}
