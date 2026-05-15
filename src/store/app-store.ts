"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { storageKeys } from "@/utils/storage";

type AppStore = {
  selectedLanguage: string;
  selectedBranch: string;
  theme: "light";
  isSidebarOpen: boolean;
  setLanguage: (selectedLanguage: string) => void;
  setBranch: (selectedBranch: string) => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      selectedLanguage: "en",
      selectedBranch: "Downtown Clinic",
      theme: "light",
      isSidebarOpen: false,
      setLanguage: (selectedLanguage) => set({ selectedLanguage }),
      setBranch: (selectedBranch) => set({ selectedBranch }),
      openSidebar: () => set({ isSidebarOpen: true }),
      closeSidebar: () => set({ isSidebarOpen: false }),
      toggleSidebar: () =>
        set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
    }),
    {
      name: storageKeys.app,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
