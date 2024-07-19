'use client';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useModalStore } from '@/store/useModal.store';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import type { ChatCompletionMessageParam } from 'openai/resources/index';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Message, { MessageType } from './Message';
import Image from 'next/image';
import { LiaRobotSolid } from 'react-icons/lia';

const AiModal = () => {
  const { content, setOpen } = useModalStore();

  const [messageParams, setMessageParams] = useState<ChatCompletionMessageParam[]>([]);
  const [dotCount, setDotCount] = useState(1);

  const { mutate, isPending } = useMutation<
    ChatCompletionMessageParam[],
    unknown,
    ChatCompletionMessageParam[]
  >({
    mutationFn: async (messages) => {
      const res = await axios.post('/api/chatbot', {
        messages,
      });

      return res.data.messages;
    },
    onSuccess: (data) => {
      setMessageParams(data);
    },
  });

  const ref = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    const firstMessage = [
      {
        content: `${content.content} 
        너가 요약해야 할 글이야. system 메세지에 요구한대로 작성해줘
        `,
        role: 'user' as const,
      },
    ];
    mutate(firstMessage);
  }, [content.content, mutate]);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messageParams]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const messageProps = useMemo(() => {
    return messageParams
      .slice(1, messageParams.length)
      .filter((param): param is MessageType => param.role === 'assistant');
  }, [messageParams]);

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 z-50 flex justify-center items-start">
      <div
        data-cy="AiModal"
        ref={ref}
        className="border-[0.3px] border-gray-500 absolute top-1/2 transform -translate-y-1/2 w-[720px] min-h-[600px] max-h-[700px] overflow-y-auto mx-auto bg-gray-50 pb-4 rounded-xl shadow-lg custom-scrollbar2"
      >
        <div className="w-full h-9 bg-gray-900 px-3 py-3 flex items-center gap-2">
          <div
            onClick={() => setOpen(false)}
            className="w-[14px] h-[14px] flex items-center justify-center cursor-pointer rounded-full bg-red-500 hover-button"
          ></div>
          <div className="w-[14px] h-[14px] flex items-center justify-center cursor-pointer rounded-full bg-yellow-500 "></div>
          <div className="w-[14px] h-[14px] flex items-center justify-center cursor-pointer rounded-full bg-green-500 "></div>
        </div>
        <div className="mx-6 mt-4 items-end flex flex-col gap-2">
          <div className="flex items-center">
            <Image
              src="/images/aboutProfile.svg"
              width={55}
              height={55}
              alt="me"
              className="rounded-full"
              priority
            />
          </div>
          <div className="mr-3 text-zinc-800 font-naverSemi text-[15px] rounded-l-3xl bg-gray-100 p-4 rounded-br-3xl shadow-lg">
            <p>안녕하세요. 방호진 블로그에 오신것을 환영합니다. 글이 많이 길었죠? </p>
            <p>금방 요약해서 보여드릴게요 잠시만 기다려주세요~</p>
          </div>
        </div>

        {isPending && (
          <div className="mx-6 mt-5 items-start flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center gap-1">
                <LiaRobotSolid size={40} color="black" />
                <div className="text-zinc-800 font-bold text-[15px]">호진봇</div>
              </div>
            </div>
            <div className="font-naverSemi ml-3 text-zinc-800  text-[15px] rounded-r-3xl bg-gray-100 p-4 rounded-bl-3xl shadow-lg">
              {`요약중 ${' . '.repeat(dotCount)}`}
            </div>
          </div>
        )}

        <div className=" max-h-[600px] mx-4">
          {messageProps.map((props, i) => (
            <Message {...props} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiModal;
