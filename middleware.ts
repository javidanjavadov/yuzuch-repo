import { NextRequest, NextResponse } from "next/server";
import { protectedRoutes } from "@/constants/routes";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("mediconnect_session")?.value;
  const pathname = request.nextUrl.pathname;
  const requiresAuth = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (requiresAuth && sessionCookie !== "active") {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/basket/:path*"],
};
