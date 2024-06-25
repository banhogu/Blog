'use client';
import { withHeadingId } from './utils';

export function H2({ children }) {
  return (
    <h2 className=" flex items-center group font-bold text-xl my-8 relative text-[24px] bg-my-gray py-2 dark:text-white dark:bg-gray-800">
      {withHeadingId(children)}
    </h2>
  );
}
