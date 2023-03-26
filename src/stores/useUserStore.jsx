import { create } from "zustand";
import { persist } from "zustand/middleware";

let userStore = (set) => ({
  user: {},
  isLogin: false,
  setUser: (userData) => set({ user: userData }),
  setIsLogin: (loginStatus) => set({ isLogin: loginStatus }),
  logOut: () => {
    set({ user: {} });
    set({ isLogin: false });
  },
});

userStore = persist(userStore, { name: "user" });
const useUserStore = create(userStore);

export default useUserStore;
