import { LoginForm } from "@/components/shared/login-form";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function LoginPage() {
  return (
    <>
      <PageHeader
        eyebrow="Login"
        title="Authentication entry point"
        description="Login, OTP verification, token storage, and protected route preparation are structured for backend integration."
      />
      <Section>
        <Container className="max-w-2xl">
          <div className="rounded-[1.5rem] border border-white/70 bg-white p-8 shadow-[var(--shadow-medical)]">
            <LoginForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
