import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextInput({
  label,
  error,
  className,
  ...props
}: TextInputProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-primary-dark">{label}</span>
      <input
        className={cn(
          "h-12 w-full rounded-[1rem] border border-border bg-white px-4 text-sm text-primary-dark outline-none transition placeholder:text-slate-400 focus:border-primary",
          error && "border-red-400",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-red-500">{error}</span> : null}
    </label>
  );
}
