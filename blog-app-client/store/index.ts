import { UserPropType } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set: any) => ({
  user: null,

  authenticateUser: (user: UserPropType | null) => {
    set({ user });
  },
});

export const useAuthStore = create(
  persist(devtools(userStore), {
    name: "_tysfjj",
  })
);
