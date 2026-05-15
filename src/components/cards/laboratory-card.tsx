import { FlaskConical, ShieldCheck } from "lucide-react";

export function LaboratoryCard({
  title,
  turnaround,
  price,
}: {
  title: string;
  turnaround: string;
  price: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-white/60 bg-white p-6 shadow-[var(--shadow-medical)]">
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <FlaskConical className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-primary-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
          Lab
        </span>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary-dark">{title}</h3>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
        <span>{turnaround}</span>
        <span className="font-semibold text-primary-dark">{price}</span>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm text-success">
        <ShieldCheck className="h-4 w-4" />
        Verified diagnostics workflow
      </div>
    </article>
  );
}
