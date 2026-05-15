const SESSION_COOKIE = "mediconnect_session";

export function syncSessionCookie(hasSession: boolean) {
  if (typeof document === "undefined") {
    return;
  }

  if (hasSession) {
    document.cookie = `${SESSION_COOKIE}=active; path=/; max-age=86400; samesite=lax`;
    return;
  }

  document.cookie = `${SESSION_COOKIE}=; path=/; max-age=0; samesite=lax`;
}
