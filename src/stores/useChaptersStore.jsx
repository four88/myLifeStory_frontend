import { create } from "zustand";

const useChaptersStore = create((set) => ({
  chapters: [],
  currentChapter: 0,
  maxChapter: 0,
  addChapter: (chapterObject) => {
    set((state) => ({
      chapters: [...state.chapters, chapterObject],
      currentChapter: state.currentChapter + 1,
    }));
  },
  setMaxChapter: (noOfChapter) => set({ maxChapter: noOfChapter }),
}));

export default useChaptersStore;
