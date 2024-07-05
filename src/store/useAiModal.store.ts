import { create } from 'zustand';

interface useAiModalStoreType {
  open: boolean;
  /* eslint-disable no-unused-vars */
  setOpen: (payload: boolean) => void;
  content: string;
  setContent: (payload: string) => void;
}

export const useAiModalStore = create<useAiModalStoreType>((set) => ({
  open: false,
  content: '',
  setOpen: (payload: boolean) =>
    set(() => ({
      open: payload,
    })),
  setContent: (payload: string) =>
    set(() => ({
      content: payload,
    })),
}));
