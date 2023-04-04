import { create } from "zustand";

const useHiddenItemStore = create((set) => ({
  hiddenItems: [],
  currentHiddenItems: 0,
  maxHiddenItems: 0,
  addHiddenItem: (hiddenItemObject) => {
    set((state) => {
      const hiddenItemExists = state.hiddenItems.find(
        (item) => item.no === hiddenItemObject.no
      );

      if (hiddenItemExists) {
        return state;
      } else {
        return {
          hiddenItems: [...state.hiddenItems, hiddenItemObject],
          currentHiddenItems: state.hiddenItems.length + 1,
        };
      }
    });
  },
  setMaxHiddenItem: (noOfItem) => set({ maxHiddenItems: noOfItem }),
  clearHiddenItem: () => {
    set({ maxHiddenItems: 0 });
    set({ currentHiddenItems: 0 });
    set({ hiddenItems: [] });
  },
}));

export default useHiddenItemStore;
