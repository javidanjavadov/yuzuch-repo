"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { mainNavigation } from "@/constants/navigation";
import { appRoutes } from "@/constants/routes";
import { Drawer } from "@/components/ui/drawer";
import { IconButton, buttonStyles } from "@/components/ui/button";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        className="lg:hidden"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" />
      </IconButton>
      <Drawer isOpen={open} title="Navigation" onClose={() => setOpen(false)}>
        <nav className="space-y-3">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl bg-surface px-4 py-3 text-sm font-medium text-primary-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={appRoutes.login}
          onClick={() => setOpen(false)}
          className={buttonStyles({
            className: "mt-6 w-full",
            variant: "primary",
          })}
        >
          Login / Register
        </Link>
      </Drawer>
    </>
  );
}
