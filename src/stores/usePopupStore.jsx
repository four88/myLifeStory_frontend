import { create } from "zustand";

// this store use for controls popup open popup
// popupGetItem : for open popup when user get chapter
// popupBag: for open bag when user click on menu

const usePopupStore = create((set) => ({
  popupGetChapter: false,
  popupBag: false,
  chapterRead: {},
  chapter: {},
  popupGetHiddenItem: false,
  hiddenItemRead: {},
  hiddenItem: {},
  setPopupGetChapter: (isOpen) => set({ popupGetChapter: isOpen }),
  setPopupBag: (isOpen) => set({ popupBag: isOpen }),
  setPopupGetHiddenItem: (isOpen) => set({ popupGetHiddenItem: isOpen }),
  setChapter: (newChapter) => set({ chapter: newChapter }),
  setChapterRead: (newChapter) => set({ chapterRead: newChapter }),
  setHiddenItem: (newItem) => set({ hiddenItem: newItem }),
  setHiddenItemRead: (newItem) => set({ hiddenItemRead: newItem }),
}));

export default usePopupStore;
