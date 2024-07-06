'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const About = () => {
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isMailHover, setIsMailHover] = useState(false);

  return (
    <div className="flex gap-5 items-center my-12 py-6">
      <div>
        <Image width={80} height={80} src="/images/me.jpeg" alt="me" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="font-bold text-gray-800 text-lg dark:text-gray-300">HJ Bang</div>
          <div className="font-naverSemi text-gray-600 text-[13px] dark:text-gray-300">
            안녕하세요 배움을 나누며 함께 전진하는 신입 개발자 방호진입니다.
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            data-cy="github-icon"
            onMouseEnter={() => setIsGithubHover(true)}
            onMouseLeave={() => {
              setIsGithubHover(false);
            }}
            className="relative transition duration-100 hover:bg-zinc-400 px-1 py-1 rounded-lg"
            href={'https://github.com/banghogu'}
            target="_blank"
          >
            <FaGithub size={26} className="text-gray-800 dark:text-gray-300" />
            {isGithubHover && (
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[13px] shadow-lg absolute -bottom-9 -left-2">
                Github
              </div>
            )}
          </Link>

          <Link
            onMouseEnter={() => setIsMailHover(true)}
            onMouseLeave={() => {
              setIsMailHover(false);
            }}
            className="relative transition duration-100 hover:bg-zinc-400 px-1 py-1 rounded-lg"
            href={'mailto: devbang5674@gmail.com'}
            target="_blank"
          >
            <IoMdMail size={26} className="text-gray-800 dark:text-gray-300" />
            {isMailHover && (
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[13px] shadow-lg absolute -bottom-9 -left-[6px]">
                Gmail
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
