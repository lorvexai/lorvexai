import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

// Books, Newsletter and About live in the header, and the full disclaimer is linked
// from the notice below, so the footer keeps only what the header does not.
const legalLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Image src={logoSrc} alt="LorvexAI" width={168} height={40} className="h-9 w-auto" />
            <p className="mt-3 text-sm leading-relaxed text-secondary/80">
              Books and a weekly briefing on controlled AI, model risk and financial regulation.
            </p>
          </div>
          <div className="flex flex-col gap-3">
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
            <a
              href="mailto:lorvexai@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-secondary/80 transition hover:text-primary"
            >
              <Mail size={15} aria-hidden="true" />
              lorvexai@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-secondary/10 pt-5">
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
