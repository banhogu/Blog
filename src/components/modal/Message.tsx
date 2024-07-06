import { LiaRobotSolid } from 'react-icons/lia';
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
          <LiaRobotSolid size={40} />
          <div className="font-semibold text-sm">호진봇</div>
        </div>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: formattedContent }}
        className="whitespace-pre-wrap font-naverSemi ml-3 text-zinc-800  text-sm rounded-r-3xl bg-gray-100 p-4 rounded-bl-3xl shadow-lg"
      />
    </div>
  );
};

export default Message;
