import { UserPropType } from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = (set: any) => ({
  user: null,

  authenticateUser: (user: UserPropType | null) => {
    set({ user });
  },
});

const paginationStore = (set: any) => ({
  page: 1,
  setPage: (count: number) => {
    set({ page: count });
  },
});

export const useAuthStore = create(
  persist(devtools(userStore), {
    name: "_user",
  })
);

export const usePagination = create(devtools(paginationStore));
