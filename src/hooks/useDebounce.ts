import { useEffect, useState } from 'react';

/**
 * 글 검색 모달에서 타이핑 할 때마다 이벤트가 발생하는 문제를 해결
 * 기본값 0.8초 설정한 지정 시간 후에 입력 이벤트 발생
 */

function useDebounce<T = any>(value: T, delay = 800) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, value]);

  return debouncedValue;
}

export default useDebounce;
