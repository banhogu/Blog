'use client';
import { useAiModalStore } from '@/store/useAiModal.store';
import React from 'react';
import AiModal from '../modal/AiModal';
import { createPortal } from 'react-dom';

const ModalProvider = () => {
  const { open, modalType } = useAiModalStore();
  const $portalRoot = typeof window !== 'undefined' ? document.getElementById('root-portal') : null;

  if ($portalRoot == null) {
    return null;
  }
  return createPortal(<div>{open && modalType === 'chatbot' && <AiModal />}</div>, $portalRoot);
};

export default ModalProvider;
