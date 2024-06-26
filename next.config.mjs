import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import postsData from './src/database/posts.json' assert { type: 'json' };

//MDX 설정 및 라이브러리 연결
const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, [remarkMdxFrontmatter, { name: 'metadata' }]],
    rehypePlugins: [rehypePrettyCode],
  },
});

export default withMDX({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },

  //id로 넘어올 때 년도 붙어서 redirect 함수
  redirects() {
    const posts = postsData.posts;
    const redirectPosts = posts.map((post) => ({
      source: `/${post.id}`, // "id": "test1",
      destination: `/${post.tag.split('.')[0]}/${post.id}`, // "tag": "study",
      permanent: true,
    }));

    return [...redirectPosts];
  },
});
