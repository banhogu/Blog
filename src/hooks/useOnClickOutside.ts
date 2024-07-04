import { RefObject, useEffect } from 'react';

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
