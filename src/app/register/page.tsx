import { RegisterForm } from "@/components/shared/register-form";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function RegisterPage() {
  return (
    <>
      <PageHeader
        eyebrow="Register"
        title="Patient registration preparation"
        description="Registration, client-side validation, and future onboarding hooks are ready for backend wiring."
      />
      <Section>
        <Container className="max-w-2xl">
          <div className="rounded-[1.5rem] border border-white/70 bg-white p-8 shadow-[var(--shadow-medical)]">
            <RegisterForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
