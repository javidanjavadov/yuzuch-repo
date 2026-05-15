"use client";

import { ChangeEvent } from "react";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useAppStore } from "@/store/app-store";

export function BranchSelector() {
  const selectedBranch = useAppStore((state) => state.selectedBranch);
  const setBranch = useAppStore((state) => state.setBranch);

  return (
    <label className="relative block">
      <span className="sr-only">Select branch</span>
      <select
        value={selectedBranch}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setBranch(event.target.value)
        }
        className="h-11 appearance-none rounded-full border border-border bg-white px-4 pr-10 text-sm text-primary-dark shadow-[var(--shadow-medical)] outline-none focus:border-primary"
      >
        {siteConfig.branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
    </label>
  );
}
