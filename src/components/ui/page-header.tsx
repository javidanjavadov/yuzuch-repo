import { ReactNode } from "react";
import { Container } from "./container";

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <Container className="pt-10">
      <div className="rounded-[1.5rem] border border-white/70 bg-white/80 p-8 shadow-[var(--shadow-medical)] backdrop-blur">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold text-primary-dark sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-base leading-7 text-slate-600">
              {description}
            </p>
          </div>
          {actions}
        </div>
      </div>
    </Container>
  );
}
