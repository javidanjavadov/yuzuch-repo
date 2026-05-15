import { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-16 lg:py-24", className)}>
      {children}
    </section>
  );
}
