import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { mainNavigation } from "@/constants/navigation";
import { appRoutes } from "@/constants/routes";
import { BranchSelector } from "./branch-selector";
import { SearchInput } from "@/components/forms/search-input";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center gap-4 py-4">
          <Link href={appRoutes.home} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-dark text-white shadow-[var(--shadow-medical)]">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <p className="font-sans text-lg font-semibold tracking-tight text-primary-dark">
                Yuzuch
              </p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                MediConnect+
              </p>
            </div>
          </Link>
          <div className="hidden min-w-0 flex-1 lg:block">
            <SearchInput placeholder="Search services, doctors, diagnostics..." />
          </div>
          <div className="hidden xl:block">
            <BranchSelector />
          </div>
          <nav className="hidden items-center gap-5 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-primary-dark"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={appRoutes.register}
              className={buttonStyles({ variant: "outline" })}
            >
              Register
            </Link>
            <Link
              href={appRoutes.login}
              className={buttonStyles({ variant: "primary" })}
            >
              Login
            </Link>
          </div>
          <div className="ml-auto lg:hidden">
            <MobileNav />
          </div>
        </div>
        <div className="pb-4 xl:hidden">
          <BranchSelector />
        </div>
      </Container>
    </header>
  );
}
