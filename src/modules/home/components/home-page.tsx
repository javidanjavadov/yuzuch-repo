import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/cards/service-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { DoctorCard } from "@/components/cards/doctor-card";
import { LaboratoryCard } from "@/components/cards/laboratory-card";
import { HeroSection } from "./hero-section";
import {
  featuredDoctors,
  featuredServices,
  foundationFeatures,
  homeCategories,
  laboratoryHighlights,
} from "../data/home-content";
import { PrimaryButton } from "@/components/ui/button";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Section>
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Core Categories
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-primary-dark">
                Healthcare blocks built for fast expansion.
              </h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {homeCategories.map((item) => (
              <ServiceCard
                key={item.title}
                className="relative overflow-hidden"
                href={item.href}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </Section>
      <Section id="about" className="pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {foundationFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={<Icon className="h-5 w-5" />}
                />
              );
            })}
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Featured Services
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-primary-dark">
                Popular packages and diagnostic pathways.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Reusable card patterns for services, offers, packages, and
                future medical commerce use cases.
              </p>
            </div>
            <div className="grid gap-5">
              {featuredServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  href={service.href}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid gap-5">
              {featuredDoctors.map((doctor) => (
                <DoctorCard key={doctor.name} {...doctor} />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                Top Doctors
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-primary-dark">
                Specialist discovery that scales with your provider network.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Doctor listing cards, profile routes, and booking entry points
                are ready for backend-powered filtering and richer provider
                data.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {laboratoryHighlights.map((item) => (
              <LaboratoryCard key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-10 rounded-[2rem] border border-primary/10 bg-white p-8 shadow-[var(--shadow-medical)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              Ready For Etap 2
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-primary-dark">
              The homepage foundation is in place with strong reusable blocks
              for richer UX work.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Continue with detailed homepage UI, stronger search interactions,
              service blocks, and more advanced medical content without
              revisiting the core structure.
            </p>
            <PrimaryButton className="mt-6">
              Continue to core UI phase
            </PrimaryButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
