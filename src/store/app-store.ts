"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { storageKeys } from "@/utils/storage";

type AppStore = {
  selectedLanguage: string;
  selectedBranch: string;
  theme: "light";
  setLanguage: (selectedLanguage: string) => void;
  setBranch: (selectedBranch: string) => void;
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      selectedLanguage: "en",
      selectedBranch: "Downtown Clinic",
      theme: "light",
      setLanguage: (selectedLanguage) => set({ selectedLanguage }),
      setBranch: (selectedBranch) => set({ selectedBranch }),
    }),
    {
      name: storageKeys.app,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
