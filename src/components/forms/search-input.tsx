import { Search } from "lucide-react";
import { cn } from "@/utils/cn";
import { InputHTMLAttributes } from "react";

export function SearchInput({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={cn(
        "flex h-13 items-center gap-3 rounded-[1rem] border border-white/70 bg-white px-4 shadow-[var(--shadow-medical)]",
        className,
      )}
    >
      <Search className="h-4 w-4 text-primary" />
      <input
        className="h-full w-full bg-transparent text-sm text-primary-dark outline-none placeholder:text-slate-400"
        {...props}
      />
    </div>
  );
}
