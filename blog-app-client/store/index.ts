import { CourseType } from "@/types";
import { create } from "zustand";
// import { devtools, persist } from "zustand/middleware";

const store = (set: any) => ({
  editProps: null as null | CourseType,
  setEditData: (editProps: CourseType | null) => {
    set({ editProps });
  },
});

export const useStore = create(store);
