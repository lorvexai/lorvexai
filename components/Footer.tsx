import Logo from "@/components/Logo";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";

// Books, Newsletter and About live in the header, and the full disclaimer is linked
// from the notice below, so the footer keeps only what the header does not.
const legalLinks = [
  { href: "/disclaimers", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <Logo />
            <p className="text-sm text-secondary/80">
              Books and a weekly briefing on controlled AI, model risk and financial regulation.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/sreekotha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary/80 transition hover:text-primary"
            >
              <Linkedin size={15} aria-hidden="true" />
              LinkedIn
              <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm text-secondary/80 transition hover:text-primary"
            >
              <Mail size={15} aria-hidden="true" />
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <LegalDisclaimerBanner />
        </div>
      </div>

      <div className="border-t border-secondary/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-secondary/70">
            &copy; {new Date().getFullYear()} Sreedhara Reddy Kotha. All rights reserved.
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-1">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-secondary/80 transition hover:text-heading">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
