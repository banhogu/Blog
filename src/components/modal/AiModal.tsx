'use client';
import { useAiModalStore } from '@/store/useAiModal.store';
import React from 'react';

const AiModal = () => {
  const { content } = useAiModalStore();
  return <div className="fixed inset-0 bg-white">{content}</div>;
};

export default AiModal;
