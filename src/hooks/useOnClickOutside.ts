import { RefObject, useEffect } from 'react';

/**
 * 모달이 렌더링 될 시 모달 이외 바깥 영영 클릭 시 지정한 handler 함수가 실행됩니다.
 * useModalStore의 setModalType false로 지정하고 있습니다.
 */

export default function useOnClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  /* eslint-disable no-unused-vars */
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}
