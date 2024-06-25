import { Post } from '@/models/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postRoot = join(process.cwd(), 'app/(post)'); // Users/banghojin/Desktop/blog/blog/app/(post) 형식으로 변환

export const getPostBySlug = (slug: string): Post => {
  const [tag, id] = slug.split('/'); //[ 'think/why-i-use-next' ] 형태로 받은 데이터를 태그, id로 가져와서
  const fullPath = join(postRoot, `${slug}/page.mdx`); // '/Users/banghojin/Desktop/blog/blog/app/(post)/think/why-i-use-next/page.mdx' 형태로 변환
  const fileContents = fs.readFileSync(fullPath, 'utf8'); // 해당 파일을 읽고
  const { data, content } = matter(fileContents); //data = --- --- 안에 있는 데이터들, content는 md 코드

  return {
    id,
    tag,
    slug,
    content,
    title: data.title,
    description: data.description,
    postTag: data.postTag,
  };
};

export const getPosts = () => {
  const dirs = fs.readdirSync(postRoot, { recursive: true }); // postRoot안에 있는 모든 루트 파일트리를 가져와서 ['etc',study,layout.tsx ...]
  const paths = dirs.map((path) => path);
  const slugs = paths.filter((path) => path.split('/').length === 2); //[ 'think/why-i-use-next' ] 해당 형태로 변환
  const posts = slugs.map(getPostBySlug);

  return posts;
};
