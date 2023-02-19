import { create } from "zustand";

// this store use for controls popup open popup

const usePopupStore = create((set) => ({
  popup: false,
  chapter: {},
  setPopup: (isOpen) => set({ popup: isOpen }),
  setChapter: (newChapter) => set({ chapter: newChapter }),
}));

export default usePopupStore;
