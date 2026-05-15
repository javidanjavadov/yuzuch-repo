import { appRoutes } from "./routes";

export const mainNavigation = [
  { label: "Home", href: appRoutes.home },
  { label: "Services", href: appRoutes.services },
  { label: "Laboratory", href: appRoutes.laboratory },
  { label: "Doctors", href: appRoutes.doctors },
  { label: "Appointments", href: appRoutes.appointments },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const footerLinks = [
  { label: "Patient Portal", href: appRoutes.profile },
  { label: "Basket", href: appRoutes.basket },
  { label: "Login", href: appRoutes.login },
  { label: "Register", href: appRoutes.register },
] as const;
