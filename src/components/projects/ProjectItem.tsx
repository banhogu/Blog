import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiNotionLine } from 'react-icons/ri';
import { IoIosLink } from 'react-icons/io';
import Image from 'next/image';

interface ProjectItem {
  title: string;
  description: string;
  github?: string;
  notion?: string;
  link?: string;
  date: string;
  img: string;
  imgSize: number[];
}

const ProjectItem = ({
  title,
  description,
  github,
  notion,
  link,
  date,
  img,
  imgSize,
}: ProjectItem) => {
  return (
    <div className="flex flex-col rounded-md border shadow-sm p-5 gap-1">
      <div className="flex justify-between items-center">
        <div className="font-bold text-gray-800 text-[15px] sm:text-[17.5px] dark:text-gray-300">
          {title}
        </div>
        <div className="flex gap-[6px] sm:gap-2 items-center">
          {github ? (
            <Link href={github} target="_blank">
              <FiGithub className="text-[15px] sm:text-[17px]" />
            </Link>
          ) : null}

          {notion ? (
            <Link href={notion} target="_blank">
              <RiNotionLine className="text-[15px] sm:text-[17px]" />
            </Link>
          ) : null}

          {link ? (
            <Link href={link} target="_blank">
              <IoIosLink className="text-[15px] text-blue-600 dark:text-gray-300 sm:text-[17px]" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="font-medium text-gray-500 text-[12px] sm:text-[14px]  dark:text-gray-300">
        {description}
      </div>
      <div className="font-medium text-gray-500 text-[11px] sm:text-[13px]  dark:text-gray-300">
        {date}
      </div>
      <div className="flex items-center justify-center mt-5">
        <Image
          src={img}
          alt="spoting"
          width={imgSize[0]}
          height={imgSize[1]}
          className="rounded-md"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
