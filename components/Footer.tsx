import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

const footerLinks = [
  { href: "/books", label: "Books" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/disclaimers", label: "Disclaimers" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Image src={logoSrc} alt="LorvexAI" width={168} height={40} className="h-9 w-auto" />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary/75">
              <strong className="text-heading">LorvexAI</strong>
              <br />
              Books and a weekly briefing on controlled AI, model risk and financial regulation.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/sreekotha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary/75 transition hover:text-primary"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
              </a>
              <a
                href="mailto:lorvexai@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-secondary/75 transition hover:text-primary"
              >
                <Mail size={15} aria-hidden="true" />
                lorvexai@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-secondary/70">
              Site links
            </p>
            <nav className="grid grid-cols-2 gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-secondary/75 transition hover:text-heading">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10">
          <LegalDisclaimerBanner />
        </div>
      </div>

      <div className="border-t border-secondary/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-secondary/70">
            &copy; {new Date().getFullYear()} Sreedhara Reddy Kotha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
