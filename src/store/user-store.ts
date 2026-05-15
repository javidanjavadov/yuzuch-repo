"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserProfile } from "@/types/auth";
import { storageKeys } from "@/utils/storage";

type UserStore = {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
    }),
    {
      name: storageKeys.user,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
