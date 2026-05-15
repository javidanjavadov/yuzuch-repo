"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { storageKeys } from "@/utils/storage";

export type BasketItem = {
  id: string;
  title: string;
  category: string;
  price: string;
};

type BasketStore = {
  items: BasketItem[];
  addItem: (item: BasketItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

export const useBasketStore = create<BasketStore>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: state.items.some((existing) => existing.id === item.id)
            ? state.items
            : [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clear: () => set({ items: [] }),
    }),
    {
      name: storageKeys.basket,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
