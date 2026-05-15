"use client";

import { EmptyState } from "@/components/shared/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { useAuthStore } from "@/store/auth-store";

export default function ProfilePage() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <PageHeader
        eyebrow="Profile"
        title="Patient profile preparation"
        description="Protected account routes, persistent auth state, and future role-aware content are prepared."
      />
      <Section>
        <Container>
          {user ? (
            <div className="rounded-[1.5rem] border border-white/70 bg-white p-8 shadow-[var(--shadow-medical)]">
              <h2 className="text-2xl font-semibold text-primary-dark">
                {user.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{user.email}</p>
              <p className="mt-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary-dark">
                Role: {user.role}
              </p>
            </div>
          ) : (
            <EmptyState
              title="Profile is protected"
              description="Middleware and the auth store are prepared. Logging in populates the session demo state."
            />
          )}
        </Container>
      </Section>
    </>
  );
}
