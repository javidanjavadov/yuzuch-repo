export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-border bg-white/80 p-8 text-center shadow-[var(--shadow-medical)]">
      <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
