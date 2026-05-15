import { DoctorCard } from "@/components/cards/doctor-card";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const doctors = [
  {
    name: "Dr. Amelia Chen",
    specialty: "Internal Medicine and Preventive Care",
    availability: "Available today",
  },
  {
    name: "Dr. Mateo Alvarez",
    specialty: "Cardiology and Diagnostic Pathways",
    availability: "Available tomorrow",
  },
  {
    name: "Dr. Sofia Bennett",
    specialty: "Endocrinology and Longitudinal Care",
    availability: "Available Monday",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Doctors"
        title="Doctor listing foundation"
        description="Prepared specialist cards, responsive grids, and route patterns for provider profiles and booking flows."
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </Container>
      </Section>
    </>
  );
}
