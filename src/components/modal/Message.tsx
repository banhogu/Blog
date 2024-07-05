import React from 'react';

export interface MessageType {
  content: string;
  role: 'user' | 'assistant';
}

const Message = ({ content, role }: MessageType) => {
  return (
    <div
      className={`
          ${role === 'user' ? 'bg-white' : 'bg-gray-100'}
          p-4 lg:p-6`}
      data-cy={`message-${role}`}
    >
      <div className=" mx-auto flex items-start gap-3 lg:gap-4">
        <div className="flex flex-col items-start">
          <div className="whitespace-pre-wrap">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
