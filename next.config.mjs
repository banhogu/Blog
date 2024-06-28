import createMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

import postsData from './src/database/posts.json' assert { type: 'json' };

//MDX 설정 및 라이브러리 연결
const withMDX = createMDX({
  //remarkGfm: GitHub Markdown을 지원
  //remarkFrontmatter: Frontmatter 구문을 파싱
  //remarkMdxFrontmatter: Frontmatter 데이터를 MDX 컴포넌트의 메타데이터로 사용
  //rehypePrettyCode: 코드 블럭을 예쁘게 렌더링
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, [remarkMdxFrontmatter, { name: 'metadata' }]],
    rehypePlugins: [rehypePrettyCode],
  },
});

export default withMDX({
  //mdx -> html 변환
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  swcMinify: true, //swcMinify: SWC를 사용한 코드 압축 활성화.
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
