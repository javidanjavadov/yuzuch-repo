"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthSession, UserProfile } from "@/types/auth";
import { storageKeys } from "@/utils/storage";
import { syncSessionCookie } from "@/utils/session-cookie";

type AuthStore = AuthSession & {
  setSession: (session: {
    accessToken: string;
    refreshToken: string;
    user: UserProfile;
  }) => void;
  clearSession: () => void;
};

const initialState: AuthSession = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isAuthenticated: false,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initialState,
      setSession: ({ accessToken, refreshToken, user }) => {
        if (typeof window !== "undefined") {
          window.localStorage.setItem("mediconnect_token", accessToken);
        }

        syncSessionCookie(true);
        set({ accessToken, refreshToken, user, isAuthenticated: true });
      },
      clearSession: () => {
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("mediconnect_token");
        }

        syncSessionCookie(false);
        set(initialState);
      },
    }),
    {
      name: storageKeys.auth,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ accessToken, refreshToken, user, isAuthenticated }) => ({
        accessToken,
        refreshToken,
        user,
        isAuthenticated,
      }),
    },
  ),
);
