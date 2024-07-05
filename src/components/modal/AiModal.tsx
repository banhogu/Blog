'use client';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import { useAiModalStore } from '@/store/useAiModal.store';
import React, { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { ChatCompletionMessageParam } from 'openai/resources/index';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Message, { MessageType } from './Message';

const AiModal = () => {
  const { content, setOpen } = useAiModalStore();

  const [messageParams, setMessageParams] = useState<ChatCompletionMessageParam[]>([]);

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
        content: `${content.content} 해당 글을 요약해줘`,
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

  const messageProps = useMemo(() => {
    return messageParams
      .slice(1, messageParams.length)
      .filter((param): param is MessageType => param.role === 'assistant' || param.role === 'user');
  }, [messageParams]);

  return (
    <div className="fixed inset-0 bg-gray-400 bg-opacity-30 z-50 flex justify-center items-start">
      <div
        ref={ref}
        className="w-[680px] min-h-[500px] max-h-[800px] overflow-y-auto mx-auto mt-[150px] bg-gray-50 px-2 py-4 rounded-xl shadow-xl "
      >
        <div className="overflow-y-auto max-h-[600px]">
          {messageProps.map((props, i) => (
            <Message {...props} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiModal;
