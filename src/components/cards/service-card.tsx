import { Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils/cn";

export function ServiceCard({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group rounded-[1.5rem] border border-white/60 bg-white/90 p-6 shadow-[var(--shadow-medical)] transition hover:-translate-y-1 hover:border-primary/40",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Activity className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition group-hover:text-primary" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-primary-dark">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
