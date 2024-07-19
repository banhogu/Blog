'use client';
import { useModalStore } from '@/store/useModal.store';
import React from 'react';
import AiModal from '../modal/AiModal';
import { createPortal } from 'react-dom';
import SearchModal from '../modal/SearchModal';

const ModalProvider = () => {
  const { open, modalType } = useModalStore();
  const $portalRoot = typeof window !== 'undefined' ? document.getElementById('root-portal') : null;

  if ($portalRoot == null) {
    return null;
  }
  return createPortal(
    <div>
      {open && modalType === 'chatbot' && <AiModal />}
      {open && modalType === 'search' && <SearchModal />}
    </div>,
    $portalRoot
  );
};

export default ModalProvider;
