import { ServiceCard } from "@/components/cards/service-card";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const serviceItems = [
  {
    title: "Preventive Checkups",
    description:
      "Structured annual health packages with digital follow-up readiness.",
  },
  {
    title: "Diagnostics",
    description:
      "Imaging, diagnostics, and result routing prepared for backend integration.",
  },
  {
    title: "Specialist Consultations",
    description:
      "Scalable service cards for doctor-led care journeys and referrals.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Healthcare services foundation"
        description="A reusable service architecture for core medical offerings, healthcare packages, and specialist-led programs."
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item) => (
            <ServiceCard key={item.title} href="/services" {...item} />
          ))}
        </Container>
      </Section>
    </>
  );
}
