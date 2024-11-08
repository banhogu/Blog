import { useEffect, useRef, useState } from 'react';

/**
 * 글 상세 페이지 사이드바에서 뷰포트에 들어오는 헤딩을 강조하는데 사용되는 observer 함수
 */

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');

  useEffect(() => {
    const scrollMarginOption = { rootMargin: '-32px' };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
          setTempId('');
        } else {
          setActiveIdList((prev) => {
            if (prev.length === 1) setTempId(targetId);
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, scrollMarginOption);

    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [query]);

  return [...activeIdList, tempId];
};
