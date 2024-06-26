'use client';
import { withHeadingId } from './utils';

export function H2({ children }) {
  const parsedId = children
    .replace('# ', '')
    .replace('#', '')
    .replace(/[\[\]:!@#$/%^&*()+=,.]/g, '')
    .replace(/ /g, '-')
    .toLowerCase()
    .replace('?', '');
  return (
    <h2
      id={parsedId}
      className="pl-2 flex items-center group font-bold my-8 relative text-[24px] bg-my-strong-gray py-2 dark:text-white dark:bg-gray-800"
    >
      {withHeadingId(children)}
    </h2>
  );
}
