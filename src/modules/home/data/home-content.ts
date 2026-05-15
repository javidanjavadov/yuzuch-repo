import {
  Activity,
  Microscope,
  ShieldPlus,
  UserRoundSearch,
} from "lucide-react";

export const homeCategories = [
  {
    title: "Laboratory",
    description: "Routine panels, bloodwork, and advanced diagnostic pathways.",
    href: "/laboratory",
  },
  {
    title: "Doctors",
    description:
      "Book expert consultations by specialty, location, and availability.",
    href: "/doctors",
  },
  {
    title: "Diagnostics",
    description:
      "Coordinate imaging, test interpretation, and follow-up actions.",
    href: "/services",
  },
  {
    title: "Checkups",
    description: "Bundle preventive exams into structured healthcare packages.",
    href: "/appointments",
  },
];

export const featuredServices = [
  {
    title: "Executive Health Screening",
    description: "Comprehensive diagnostics workflow with specialist review.",
    href: "/services",
  },
  {
    title: "Cardiology Assessment",
    description: "Fast-track ECG, imaging, and doctor follow-up planning.",
    href: "/services",
  },
  {
    title: "Women’s Preventive Care",
    description:
      "Integrated consultations, diagnostics, and lab package support.",
    href: "/services",
  },
];

export const featuredDoctors = [
  {
    name: "Dr. Amelia Chen",
    specialty: "Internal Medicine and Preventive Care",
    availability: "Next opening: Today at 4:30 PM",
  },
  {
    name: "Dr. Mateo Alvarez",
    specialty: "Cardiology and Diagnostic Pathways",
    availability: "Next opening: Tomorrow at 9:00 AM",
  },
  {
    name: "Dr. Sofia Bennett",
    specialty: "Endocrinology and Longitudinal Care",
    availability: "Next opening: Monday at 10:15 AM",
  },
];

export const laboratoryHighlights = [
  {
    title: "Full Blood Count",
    turnaround: "Same day results",
    price: "$28",
  },
  {
    title: "Comprehensive Metabolic Panel",
    turnaround: "24 hour turnaround",
    price: "$42",
  },
  {
    title: "Thyroid Function Package",
    turnaround: "48 hour turnaround",
    price: "$55",
  },
];

export const foundationFeatures = [
  {
    title: "Scalable Frontend Architecture",
    description:
      "Reusable routes, modules, and layouts tailored for phased healthcare growth.",
    icon: Activity,
  },
  {
    title: "Laboratory-Ready UX",
    description:
      "Search, cards, and appointment flows prepared for diagnostics use cases.",
    icon: Microscope,
  },
  {
    title: "Protected Patient Journeys",
    description:
      "Prepared auth state, token handling, and protected route middleware.",
    icon: ShieldPlus,
  },
  {
    title: "Doctor Discovery Foundation",
    description:
      "Flexible specialist presentation with future filtering and booking hooks.",
    icon: UserRoundSearch,
  },
];
