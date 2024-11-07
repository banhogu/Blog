'use client';
import Link from 'next/link';

export function A({ children, className = '', href, ...props }) {
  if (href[0] === '#') {
    return (
      <a
        href={href}
        className={`font-bold border-b text-sky-700 border-gray-300 transition-[border-color] hover:border-gray-800 dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link
        href={href}
        className={`font-bold border-b text-sky-700 border-gray-300 transition-[border-color] hover:border-gray-800 dark:text-white dark:border-gray-500 dark:hover:border-white ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }
}
