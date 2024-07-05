import { create } from 'zustand';

interface useAiModalStoreType {
  open: boolean;
  /* eslint-disable no-unused-vars */
  setOpen: (payload: boolean) => void;
  content?: string;
  setContent: (payload: string) => void;

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
  setContent: (payload: string) =>
    set(() => ({
      content: payload,
    })),
  setModalType: (payload: string) =>
    set(() => ({
      modalType: payload,
    })),
}));
