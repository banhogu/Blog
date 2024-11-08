import { BsRobot } from 'react-icons/bs';
import React from 'react';

export interface MessageType {
  content: string;
  role: 'user' | 'assistant';
}

const Message = ({ content, role }: MessageType) => {
  const linkify = (text: string) => {
    const urlPattern =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(urlPattern, (url) => {
      return `<a href="${url}" class="text-blue-500 underline" target="_blank">${url}</a>`;
    });
  };
  const formattedContent = linkify(content);
  return (
    <div className="mx-6 mt-5 items-start flex flex-col gap-2">
      <div className="flex items-center">
        <div className="flex items-center gap-1">
          <div className="shadow-lg bg-gray-50 rounded-full flex items-center justify-center p-1">
            <BsRobot size={40} color="black" />
          </div>

          <div className="font-semibold text-[15px] text-zinc-800">호진봇</div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: formattedContent }}
        className="whitespace-pre-wrap font-semibold ml-3 text-zinc-800  text-[15px] rounded-r-3xl bg-gray-100 p-4 rounded-bl-3xl shadow-lg"
      />
    </div>
  );
};

export default Message;
