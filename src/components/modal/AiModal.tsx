import { useAiModalStore } from '@/store/useAiModal.store';
import React from 'react';

const AiModal = () => {
  const { content } = useAiModalStore();
  return <div>{content}</div>;
};

export default AiModal;
