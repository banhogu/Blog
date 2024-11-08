'use client';
import React, { useEffect, useState } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface Share {
  title: string;
  description: string;
  image: string;
}

const Share = ({ title, description, image }: Share) => {
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.3.0/kakao.min.js';
    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      }
    };
  }, []);

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl: `${process.env.NEXT_PUBLIC_BASE_URL}${image}`,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '공유 하기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <>
      <div
        data-cy="ToTop-Btn"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={handleShareKakao}
        style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}
        className={`relative mt-3 w-[34px] h-[34px] rounded-md cursor-pointer flex items-center justify-center transition duration-100
            ${isHover ? 'bg-gray-200 dark:bg-gray-700' : ''}
            `}
      >
        <RiKakaoTalkFill size={21} className="text-sky-900 dark:text-white" />
      </div>
      {isHover && (
        <div className="text-sm bg-white text-zinc-600 font-semibold  py-2 px-3 flex items-center justify-center rounded-lg  absolute -bottom-10 shadow-lg left-[110px] dark:bg-gray-600 dark:text-white">
          공유하기
        </div>
      )}
    </>
  );
};

export default Share;
