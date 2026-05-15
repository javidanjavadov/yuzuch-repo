import { LaboratoryCard } from "@/components/cards/laboratory-card";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const tests = [
  { title: "Vitamin Panel", turnaround: "24 hours", price: "$35" },
  { title: "Hormonal Screening", turnaround: "48 hours", price: "$62" },
  { title: "Inflammation Markers", turnaround: "24 hours", price: "$44" },
];

export default function LaboratoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Laboratory"
        title="Laboratory discovery and diagnostics base"
        description="Cards, route structure, and content patterns are ready for richer laboratory catalogs, reports, and filtering."
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {tests.map((test) => (
            <LaboratoryCard key={test.title} {...test} />
          ))}
        </Container>
      </Section>
    </>
  );
}
