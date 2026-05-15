export const appRoutes = {
  home: "/",
  services: "/services",
  laboratory: "/laboratory",
  doctors: "/doctors",
  appointments: "/appointments",
  basket: "/basket",
  profile: "/profile",
  login: "/login",
  register: "/register",
} as const;

export const protectedRoutes = [appRoutes.profile, appRoutes.basket];
