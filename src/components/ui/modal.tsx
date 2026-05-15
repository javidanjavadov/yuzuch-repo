"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import { IconButton } from "./button";

export function Modal({
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
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark/55 p-4">
      <div className="w-full max-w-lg rounded-[1.5rem] bg-white p-6 shadow-[var(--shadow-medical-lg)]">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-primary-dark">{title}</h2>
          <IconButton aria-label="Close modal" onClick={onClose}>
            <X className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
