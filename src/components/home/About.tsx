'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoDocument } from 'react-icons/io5';
import { SiAboutdotme } from 'react-icons/si';

const About = () => {
  const [isGithubHover, setIsGithubHover] = useState(false);
  const [isMailHover, setIsMailHover] = useState(false);
  const [isResumeHover, setIsResumeHover] = useState(false);
  const [isAboutHover, setIsAboutHover] = useState(false);

  return (
    <div className="flex gap-5 items-center my-12 py-6 px-3 ">
      <div>
        <Image
          width={90}
          height={90}
          src="/images/about_me.jpeg"
          alt="me"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="font-naverBold text-gray-800 text-[20px] dark:text-gray-300">HJ Bang</div>
          <div className="font-naverSemi text-gray-600 text-[14.5px] dark:text-gray-300">
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
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[14px] shadow-lg absolute -bottom-9 -left-2">
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
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[14px] shadow-lg absolute -bottom-9 -left-[6px]">
                Gmail
              </div>
            )}
          </Link>
          <Link
            onMouseEnter={() => setIsResumeHover(true)}
            onMouseLeave={() => {
              setIsResumeHover(false);
            }}
            className="relative transition duration-100 hover:bg-zinc-400 px-1 py-1 rounded-lg"
            href={'mailto: devbang5674@gmail.com'}
            target="_blank"
          >
            <IoDocument size={25} className="text-gray-800 dark:text-gray-300" />
            {isResumeHover && (
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[14px] shadow-lg absolute -bottom-9 -left-[14px]">
                Resume
              </div>
            )}
          </Link>
          <Link
            onMouseEnter={() => setIsAboutHover(true)}
            onMouseLeave={() => {
              setIsAboutHover(false);
            }}
            className="relative transition duration-100 hover:bg-zinc-400 px-1 py-1 rounded-lg"
            href={'/about'}
          >
            <SiAboutdotme size={29} className="text-gray-800 dark:text-gray-300" />
            {isAboutHover && (
              <div className="px-[6px] py-1 bg-white font-naverSemi text-[14px] shadow-lg absolute -bottom-9 -left-[8px]">
                About
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
