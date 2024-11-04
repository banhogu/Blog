'use client';
import { Caption } from './caption';

export const Snippet = ({ children, scroll = true, caption = null }) => (
  <div className="rounded-b-md ">
    <pre
      className={`
      rounded-md
      -mt-[4px]
      p-4
      text-sm
      bg-[#222] text-white
      dark:bg-[#222] dark:text-gray-300

      ${scroll ? 'overflow-x-scroll' : 'whitespace-pre-wrap break-all overflow-x-scroll'}
    `}
    >
      <code>{children}</code>
    </pre>

    {caption != null ? <Caption>{caption}</Caption> : null}
  </div>
);
