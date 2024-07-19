'use client';
import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiNotionLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10">
      {/* 프로젝트1 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-bold text-gray-800 text-[15px] sm:text-[19px] dark:text-gray-300">
            Offispace
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link
              href={
                'https://radical-chatter-f1a.notion.site/Offispace-a8fcd1169ad64f0085508fa8c334f655'
              }
              target="_blank"
            >
              <RiNotionLine className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-semibold text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직장인들을 위한 거점공유 오피스
        </div>
        <div className="font-normal text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.04 ~ 2024.06
        </div>
        <div className="flex items-center justify-center mt-3">
          <Image
            src={'/images/projects/offispace.png'}
            alt="offispace"
            width={150}
            height={71}
            className="rounded-md"
          />
        </div>
      </div>
      {/* 프로젝트2 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-bold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
            호진방 블로그
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banghogu/Blog'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-semibold text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직접 개발하고 운영하는 나만의 기술 블로그
        </div>
        <div className="font-normal text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.06 ~
        </div>
        <div className="flex items-center justify-center mt-3 pr-3">
          <Image
            src={'/images/projects/blog.png'}
            alt="offispace"
            width={300}
            height={150}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[19px] dark:text-gray-300">
            Offispace
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link
              href={
                'https://radical-chatter-f1a.notion.site/Offispace-a8fcd1169ad64f0085508fa8c334f655'
              }
              target="_blank"
            >
              <RiNotionLine className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-semibold text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직장인들을 위한 거점공유 오피스
        </div>
        <div className="font-normal text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.04 ~ 2024.06
        </div>
        <div className="flex items-center justify-center mt-3">
          <Image
            src={'/images/projects/offispace.png'}
            alt="offispace"
            width={150}
            height={71}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[19px] dark:text-gray-300">
            Offispace
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link
              href={
                'https://radical-chatter-f1a.notion.site/Offispace-a8fcd1169ad64f0085508fa8c334f655'
              }
              target="_blank"
            >
              <RiNotionLine className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://github.com/banghogu/Offispace-Project'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-semibold text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직장인들을 위한 거점공유 오피스
        </div>
        <div className="font-normal text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.04 ~ 2024.06
        </div>
        <div className="flex items-center justify-center mt-3">
          <Image
            src={'/images/projects/offispace.png'}
            alt="offispace"
            width={150}
            height={71}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
