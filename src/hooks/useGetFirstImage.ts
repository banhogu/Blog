'use client';
import { useState, useEffect } from 'react';

export function useGetFirstImage(content: string): string {
  const [firstImage, setFirstImage] = useState('/images/opengraph-image.png');

  useEffect(() => {
    const markdownImageMatch = content.match(/!\[.*?\]\((\/[^)]+)\)/);

    if (markdownImageMatch && markdownImageMatch[1]) {
      setFirstImage(markdownImageMatch[1]);
    }
  }, [content]);

  return firstImage;
}
