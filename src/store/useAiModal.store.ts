import { Post } from '@/models/post';
import { create } from 'zustand';

interface useAiModalStoreType {
  open: boolean;
  /* eslint-disable no-unused-vars */
  setOpen: (payload: boolean) => void;
  content?: Post;
  setContent: (payload: Post) => void;

  modalType: string;
  setModalType: (payload: string) => void;
}

export const useAiModalStore = create<useAiModalStoreType>((set) => ({
  open: false,
  content: null,
  modalType: '',
  setOpen: (payload: boolean) =>
    set(() => ({
      open: payload,
    })),
  setContent: (payload: Post) =>
    set(() => ({
      content: payload,
    })),
  setModalType: (payload: string) =>
    set(() => ({
      modalType: payload,
    })),
}));
