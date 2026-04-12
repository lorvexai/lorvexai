import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

const navColumns = [
  {
    heading: "Solutions",
    links: [
      { href: "/services",     label: "Services"     },
      { href: "/products",     label: "Products"     },
      { href: "/capabilities", label: "Capabilities" }
    ]
  },
  {
    heading: "Insights",
    links: [
      { href: "/blog",     label: "Blog"     },
      { href: "/research", label: "Research" }
    ]
  },
  {
    heading: "Company",
    links: [
      { href: "/about",   label: "About"   },
      { href: "/contact", label: "Contact" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Image
              src={logoSrc}
              alt="LorvexAI"
              width={168}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary/60">
              Agentic AI systems, enterprise RAG governance, and LLM engineering
              for Finance, Banking, and NHS operations.
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
              <a
                href="mailto:hello@lorvex.ai"
                className="inline-flex items-center gap-2 text-sm text-secondary/65 transition hover:text-primary"
              >
                <Mail size={15} aria-hidden="true" />
                hello@lorvex.ai
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {navColumns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary/45">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary/65 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-secondary/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-secondary/40">
            &copy; {new Date().getFullYear()} LorvexAI Technologies Ltd. All rights reserved.
          </p>
          <p className="text-xs text-secondary/30">
            Registered in England &amp; Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
