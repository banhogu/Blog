'use client';
import { Post } from '@/models/post';
import { useAiModalStore } from '@/store/useAiModal.store';
import React, { useEffect, useState } from 'react';
import { LiaRobotSolid } from 'react-icons/lia';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

interface AiBot {
  post: Post;
}

const AiBot = ({ post }) => {
  const { setContent, setOpen, setModalType, open } = useAiModalStore();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (open) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  }, [open]);

  return (
    <>
      <div
        onClick={() => {
          setOpen(true);
          setContent(post);
          setModalType('chatbot');
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
        className={`relative mt-3 w-8 h-8 rounded-md cursor-pointer flex items-center justify-center transition duration-100
        ${isHover ? 'bg-gray-200 dark:bg-gray-700' : ''}
        `}
      >
        <LiaRobotSolid size={22} className="text-gray-600 dark:text-white" />
      </div>
      {isHover && (
        <div className="bg-white text-zinc-600 font-naverBold  py-2 px-3 flex items-center justify-center rounded-lg  absolute -bottom-10 shadow-lg left-[26px] dark:bg-gray-600 dark:text-white">
          AI 요약
        </div>
      )}
    </>
  );
};

export default AiBot;
