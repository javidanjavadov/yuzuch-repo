import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { SearchInput } from "@/components/forms/search-input";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { appRoutes } from "@/constants/routes";

export function HeroSection() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20">
      <Container>
        <div className="grid gap-10 rounded-[2rem] border border-white/70 bg-[linear-gradient(140deg,#06152b_0%,#0f3d69_45%,#12aeea_100%)] p-8 text-white shadow-[var(--shadow-medical-lg)] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Healthcare foundation
            </span>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Modern digital care infrastructure for patients, diagnostics, and
              specialists.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Yuzuch MediConnect+ is structured for appointments, laboratory
              workflows, specialist discovery, and future medical modules
              without rebuilding the frontend.
            </p>
            <div className="mt-8 max-w-xl">
              <SearchInput
                className="border-white/10 bg-white text-primary-dark"
                placeholder="Search doctor, specialty, service, or test..."
              />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={appRoutes.appointments}
                className={buttonStyles({
                  className: "bg-white text-primary-dark hover:bg-slate-100",
                  variant: "primary",
                })}
              >
                <span className="inline-flex items-center gap-2">
                  Book appointment
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
              <Link
                href={appRoutes.services}
                className={buttonStyles({
                  className: "bg-white/10 text-white hover:bg-white/15",
                  variant: "secondary",
                })}
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="grid gap-4 self-end">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <CalendarCheck2 className="h-5 w-5 text-primary" />
                <p className="font-semibold">Appointments flow</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Structured booking journeys, doctor slots, and patient account
                preparation.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <ScanSearch className="h-5 w-5 text-primary" />
                <p className="font-semibold">Diagnostics search</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/75">
                Reusable search, category cards, and responsive information
                architecture.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
