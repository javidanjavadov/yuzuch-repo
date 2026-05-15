import { CalendarClock, Star } from "lucide-react";

export function DoctorCard({
  name,
  specialty,
  availability,
}: {
  name: string;
  specialty: string;
  availability: string;
}) {
  return (
    <article className="rounded-[1.5rem] border border-white/60 bg-white p-6 shadow-[var(--shadow-medical)]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-primary">Top Specialist</p>
          <h3 className="mt-2 text-xl font-semibold text-primary-dark">
            {name}
          </h3>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
          <Star className="h-4 w-4 fill-current" />
          4.9
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600">{specialty}</p>
      <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
        <CalendarClock className="h-4 w-4 text-primary" />
        {availability}
      </div>
    </article>
  );
}
