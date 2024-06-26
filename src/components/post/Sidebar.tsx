import { ParsedPost } from '@/models/parsedPost';
import Link from 'next/link';
import React from 'react';

interface SidebarType {
  parsedContent: ParsedPost[];
}

const Sidebar = ({ parsedContent }: SidebarType) => {
  return (
    <ul className="text-xs">
      {parsedContent.map((item) => {
        return (
          <li key={item.link}>
            <Link href={item.link}>{item.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
