import { create } from "zustand";
import { persist } from "zustand/middleware";

let avatarStore = (set) => ({
  avatar: {},
  setAvatar: (avatarData) => set({ avatar: avatarData }),
  logOutAvatar: () => {
    set({ avatar: {} });
  },
});

avatarStore = persist(avatarStore, { name: "avatar" });
const useAvatarStore = create(avatarStore);

export default useAvatarStore;
