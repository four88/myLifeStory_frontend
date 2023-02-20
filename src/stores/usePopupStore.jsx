import { create } from "zustand";

// this store use for controls popup open popup
// popupGetItem : for open popup when user get chapter
// popupBag: for open bag when user click on menu

const usePopupStore = create((set) => ({
  popupGetChapter: false,
  popupBag: false,
  chapterRead: {},
  chapter: {},
  setPopupGetChapter: (isOpen) => set({ popupGetChapter: isOpen }),
  setPopupBag: (isOpen) => set({ popupBag: isOpen }),
  setChapter: (newChapter) => set({ chapter: newChapter }),
  setChapterRead: (newChapter) => set({ chapterRead: newChapter }),
}));

export default usePopupStore;
