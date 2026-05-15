"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { IconButton } from "./button";

export function Drawer({
  isOpen,
  title,
  children,
  onClose,
}: {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        className={`absolute inset-0 bg-primary-dark/40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white p-6 shadow-[var(--shadow-medical-lg)] transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-primary-dark">{title}</h2>
          <IconButton aria-label="Close drawer" onClick={onClose}>
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="mt-6">{children}</div>
      </aside>
    </div>
  );
}
