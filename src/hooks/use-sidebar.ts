"use client";

import { useAppStore } from "@/store/app-store";

export function useSidebar() {
  const isSidebarOpen = useAppStore((state) => state.isSidebarOpen);
  const openSidebar = useAppStore((state) => state.openSidebar);
  const closeSidebar = useAppStore((state) => state.closeSidebar);
  const toggleSidebar = useAppStore((state) => state.toggleSidebar);

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
}
