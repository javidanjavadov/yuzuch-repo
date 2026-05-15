import {
  CalendarClock,
  CheckCircle2,
  LayoutDashboard,
  TimerReset,
} from "lucide-react";
import { FeatureCard } from "@/components/cards/feature-card";
import { PageHeader } from "@/components/ui/page-header";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const appointmentFeatures = [
  {
    title: "Booking pipeline",
    description:
      "Prepared entry points for time slots, provider selection, and confirmations.",
    icon: <CalendarClock className="h-5 w-5" />,
  },
  {
    title: "Status visibility",
    description:
      "Ready for upcoming, completed, cancelled, and follow-up appointment states.",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
  {
    title: "Patient dashboard handoff",
    description:
      "Appointment data architecture aligns with future profile and history modules.",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Reschedule workflow",
    description:
      "Foundation supports future cancellation and rescheduling behavior cleanly.",
    icon: <TimerReset className="h-5 w-5" />,
  },
];

export default function AppointmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appointments"
        title="Appointment journey foundation"
        description="A scalable base for bookings, status updates, and appointment lifecycle integrations."
      />
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {appointmentFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </Container>
      </Section>
    </>
  );
}
