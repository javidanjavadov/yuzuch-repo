"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { TabItem } from "@/types/ui";

export function Tabs({ items }: { items: TabItem[] }) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className="rounded-[1.5rem] border border-border bg-white p-4 shadow-[var(--shadow-medical)]">
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              activeTab === item.id
                ? "bg-primary text-white"
                : "bg-surface text-slate-600 hover:text-primary-dark",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="pt-4">
        {items.find((item) => item.id === activeTab)?.content}
      </div>
    </div>
  );
}
