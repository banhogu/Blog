import type { ParsedPost } from '@/models/parsedPost';

/**
 * 사이드바 글 섹션 누를 시 해당 섹션으로 이동하기 위한 제목 -> href 포맷팅 함수
 */
export const parseContent = (content: string): ParsedPost[] => {
  const regex = /^(##) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace('##', ''),
      link:
        '#' +
        heading
          .replace('# ', '')
          .replace('#', '')
          .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
          .replace(/ /g, '-')
          .toLowerCase()
          .replace('?', ''),
    })) || []
  );
};
