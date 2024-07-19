import { Post } from '@/models/post';
import { create } from 'zustand';

interface useModalStoreType {
  open: boolean;
  /* eslint-disable no-unused-vars */
  setOpen: (payload: boolean) => void;
  content?: Post;
  setContent: (payload: Post) => void;
  allPost?: Post[];
  setAllPost: (payload: Post[]) => void;

  modalType: string;
  setModalType: (payload: string) => void;
}

export const useModalStore = create<useModalStoreType>((set) => ({
  open: false,
  content: null,
  modalType: '',
  allPost: null,
  setOpen: (payload: boolean) =>
    set(() => ({
      open: payload,
    })),
  setContent: (payload: Post) =>
    set(() => ({
      content: payload,
    })),
  setAllPost: (payload: Post[]) =>
    set(() => ({
      allPost: payload,
    })),
  setModalType: (payload: string) =>
    set(() => ({
      modalType: payload,
    })),
}));
