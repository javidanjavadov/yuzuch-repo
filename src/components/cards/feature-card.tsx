import { ReactNode } from "react";

export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-[1.5rem] border border-primary/10 bg-white/85 p-6 shadow-[var(--shadow-medical)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary-dark">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}
