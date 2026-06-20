import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import LegalDisclaimerBanner from "@/components/LegalDisclaimerBanner";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

const footerLinks = [
  { href: "/books", label: "Books" },
  { href: "/research", label: "Research" },
  { href: "/products", label: "Reference Blueprints" },
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
      <div className="border-b border-secondary/10 bg-primary/8 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">Explore controlled AI research with clear boundaries.</p>
            <p className="mt-1 text-sm text-secondary/60">
              Read books, research notes, and educational reference blueprints by Sreedhara Reddy Kotha.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link href="/books" className="btn-primary text-sm">
              Explore Books
            </Link>
            <Link href="/research" className="btn-outline text-sm">
              Read Research
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Image src={logoSrc} alt="LorvexAI" width={168} height={40} className="h-9 w-auto" />
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-secondary/65">
              <strong className="text-white">LorvexAI</strong>
              <br />
              A personal AI education, publishing, and research website by Sreedhara Reddy Kotha.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-secondary/45">
              LorvexAI does not offer consulting, advisory services, client delivery, product implementation, or system development for others.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://linkedin.com/company/lorvexai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-secondary/65 transition hover:text-primary"
              >
                <Linkedin size={15} aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={12} className="opacity-60" aria-hidden="true" />
              </a>
              <a href="mailto:[INSERT CONTACT EMAIL]" className="inline-flex items-center gap-2 text-sm text-secondary/65 transition hover:text-primary">
                <Mail size={15} aria-hidden="true" />
                [INSERT CONTACT EMAIL]
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/45">
              Site links
            </p>
            <nav className="grid grid-cols-2 gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-secondary/65 transition hover:text-white">
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
          <p className="text-xs text-secondary/40">
            &copy; {new Date().getFullYear()} Sreedhara Reddy Kotha. All rights reserved.
          </p>
          <p className="text-xs text-secondary/30">Educational content only. No professional advice.</p>
        </div>
      </div>
    </footer>
  );
}
