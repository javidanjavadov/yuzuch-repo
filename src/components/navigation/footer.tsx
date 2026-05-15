import Link from "next/link";
import { Globe, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { footerLinks } from "@/constants/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-primary-dark/10 bg-primary-dark text-white"
    >
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary/80">
              <ShieldCheck className="h-4 w-4" />
              Yuzuch Healthcare
            </div>
            <h2 className="mt-5 max-w-md text-3xl font-semibold leading-tight">
              Built for dependable care journeys and scalable healthcare
              operations.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
              MediConnect+ provides the frontend foundation for appointments,
              diagnostics, laboratory services, and patient account workflows.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Quick Links
            </h3>
            <div className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              Contact
            </h3>
            <div className="mt-5 space-y-4 text-sm text-white/80">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                {siteConfig.supportPhone}
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                25 Medical Plaza, New York, NY
              </p>
              <p>{siteConfig.supportEmail}</p>
            </div>
            <div className="mt-6 flex gap-3">
              <Link href={siteConfig.socialLinks.facebook} aria-label="Website">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href={siteConfig.socialLinks.instagram} aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.socialLinks.linkedin}
                aria-label="Support hub"
              >
                <ShieldCheck className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          © 2026 Yuzuch. Privacy Policy, Terms of Service, and healthcare
          compliance pages ready for expansion.
        </div>
      </Container>
    </footer>
  );
}
