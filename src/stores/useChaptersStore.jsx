import { create } from "zustand";

const useChaptersStore = create((set) => ({
  chapters: [],
  currentChapter: 0,
  maxChapter: 0,
  addChapter: (chapterObject) => {
    set((state) => {
      const chapterExists = state.chapters.find(
        (chapter) => chapter._id === chapterObject._id
      );

      if (chapterExists) {
        return state;
      } else {
        return {
          chapters: [...state.chapters, chapterObject],
          currentChapter: state.chapters.length + 1,
        };
      }
    });
  },
  setMaxChapter: (noOfChapter) => set({ maxChapter: noOfChapter }),
  clearChapter: () => {
    set({ maxChapter: 0 });
    set({ currentChapter: 0 });
    set({ chapters: [] });
  },
}));

export default useChaptersStore;
