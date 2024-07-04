'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const About = () => {
  return (
    <div className="flex gap-5 items-center my-12 pt-6">
      <div>
        <Image width={80} height={80} src="/images/me.jpeg" alt="me" className="rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <div className="font-bold text-gray-800 text-lg">HJ Bang</div>
          <div className="font-normal text-gray-600 text-sm">
            안녕하세요 배움을 나누며 함께 전진하는 신입 개발자 방호진입니다.
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={'https://github.com/banghogu'} target="_blank" title="github">
            <FaGithub size={26} className="text-gray-800" />
          </Link>
          <Link href={'mailto: devbang5674@gmail.com'} target="_blank">
            <IoMdMail size={26} className="text-gray-800" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
