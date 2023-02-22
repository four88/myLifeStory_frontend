import { create } from "zustand";

const usePreviewStore = create((set) => ({
  item: {},
  status: "",
  setPreviewItem: (itemObject, statusItem) => {
    set({ item: itemObject });
    set({ status: statusItem });
  },
}));

export default usePreviewStore;
