'use client';
import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiNotionLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 pb-10">
      {/* 프로젝트1 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[19px] dark:text-gray-300">
            Offispace
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banhogu/Offispace-Project'} target="_blank">
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
            <Link href={'https://4busak.vercel.app'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-medium text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직장인들을 위한 거점공유 오피스
        </div>
        <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.04 ~ 2024.06
        </div>
        <div className="flex items-center justify-center mt-5">
          <Image
            src={'/images/projects/offispace.png'}
            alt="offispace"
            width={130}
            height={51}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
      {/* 프로젝트2 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
            호진방 블로그
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banhogu/Blog'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-medium text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직접 개발하고 운영하는 나만의 기술 블로그
        </div>
        <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.06 ~
        </div>
        <div className="flex items-center justify-center mt-3 pr-3">
          <Image
            src={'/images/projects/blog.png'}
            alt="offispace"
            width={300}
            height={150}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
      {/* 프로젝트3 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
            휴방
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banhogu/HyuBang-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link
              href={'https://radical-chatter-f1a.notion.site/2579e48e7de4462fb461a4c3fb69df29'}
              target="_blank"
            >
              <RiNotionLine className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://fast-campus-mini-project.vercel.app'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-medium text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          국내 숙소를 조회하고 예약할 수 있는 플랫폼
        </div>
        <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.03 ~ 2024.04
        </div>
        <div className="flex items-center justify-center mt-3 pr-3">
          <Image
            src={'/images/projects/hyubang.png'}
            alt="offispace"
            width={380}
            height={300}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
      {/* 프로젝트4 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
            4UTeamIntranet
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banhogu/4UTeamIntranet-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link
              href={
                'https://radical-chatter-f1a.notion.site/4UTeamIntranet-481a886c5ad3418db34f1fffa4c46e24'
              }
              target="_blank"
            >
              <RiNotionLine className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://test--4uteam.netlify.app/'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-medium text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          직원들을 위한 급여 및 업무 관리 플랫폼
        </div>
        <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.03 ~ 2024.04
        </div>
        <div className="flex items-center justify-center mt-3 pr-3">
          <Image
            src={'/images/projects/foruteam.png'}
            alt="offispace"
            width={320}
            height={80}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
      {/* 프로젝트5 */}
      <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
            FourUnity
          </div>
          <div className="flex gap-[1px] sm:gap-2 items-center">
            <Link href={'https://github.com/banhogu/FourUnity-Project'} target="_blank">
              <FiGithub className="text-[14px] sm:text-[17px]" />
            </Link>
            <Link href={'https://fourunity.netlify.app'} target="_blank">
              <IoIosLink className="text-[14px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          </div>
        </div>
        <div className="font-medium text-gray-500 text-[12px] sm:text-[15px]  dark:text-gray-300">
          가상기업의 직원들을 위한 인트라넷 페이지
        </div>
        <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
          2024.01 ~ 2024.02
        </div>
        <div className="flex items-center justify-center mt-3 pr-3">
          <Image
            src={'/images/projects/forunity.png'}
            alt="offispace"
            width={320}
            height={80}
            className="rounded-md"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
