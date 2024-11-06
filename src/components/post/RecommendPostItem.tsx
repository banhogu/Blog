'use client';
import { getTag } from '@/utils/getTag';
import Image from 'next/image';
import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

interface items {
  id: string;
  tag: string;
  title: string;
  date: string;
  img: string;
}

const RecommendPostItem = ({ id, tag, title, date, img }: items) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/${tag}/${id}`)}
      className="flex flex-col flex-1 justify-center group cursor-pointer rounded-lg border shadow-sm p-5"
    >
      {' '}
      {/* group 클래스 유지 */}
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={img}
          alt=""
          fill // fill 속성을 사용하여 부모 요소를 가득 채우게 함
          className=" object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" // 이미지 크기 조절
          loading="lazy"
        />
      </div>
      <div className="w-full h-[1.5px] bg-gray-200" />
      <div className="mt-4  max-w-max text-sky-900 text-[14px] flex items-center py-[1.5px] px-[4px] bg-gray-200 font-bold rounded-md dark:text-white dark:bg-gray-800">
        {getTag(tag)}
      </div>
      <p className="line-clamp-2 overflow-hidden mt-[6px] min-h-[50px] max-h-[50px] font-bold text-zinc-800 text-[15.5px] dark:text-gray-300 group-hover:underline">
        {' '}
        {/* group-hover 사용 */}
        {title}
      </p>
      <p className="font-semibold text-gray-500 text-[13.5px] dark:text-gray-300">
        {format(new Date(date), 'yyyy.MM.dd')}
      </p>
    </div>
  );
};

export default RecommendPostItem;
