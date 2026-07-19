"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const writingLinks = [
  { href: "/blog", label: "Articles", description: "Essays, explainers, and technical notes" },
  { href: "/topics", label: "Topics", description: "Browse the research library by theme" },
  { href: "/blueprints", label: "Blueprints", description: "Reference architectures and diagrams" },
  { href: "/books#reviews", label: "Book reviews", description: "Reading notes through a practitioner lens" }
];

const primaryLinks = [
  { href: "/lab", label: "Lab" },
  { href: "/research", label: "Research" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const writingActive = ["/blog", "/topics", "/blueprints"].some((path) => pathname.startsWith(path));

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[72px] w-full max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center text-white" aria-label="LorvexAI home">
          <Image src={logoSrc} alt="LorvexAI" width={220} height={54} priority className="h-9 w-auto md:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <div className="group relative">
            <Link
              href="/blog"
              className={`flex min-h-11 items-center gap-1 rounded-full px-4 py-2 text-sm transition ${
                writingActive ? "bg-primary/15 text-white" : "text-secondary/80 hover:text-white"
              }`}
            >
              Writing
              <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="rounded-2xl border border-secondary/15 bg-[#091c32]/98 p-2 shadow-2xl shadow-black/40">
                {writingLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 transition hover:bg-primary/10">
                    <span className="block text-sm font-semibold text-white">{item.label}</span>
                    <span className="mt-0.5 block text-xs text-secondary/65">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {primaryLinks.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`min-h-11 rounded-full px-4 py-2.5 text-sm transition ${
                  active ? "bg-primary/15 text-white" : "text-secondary/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#subscribe" className="btn-primary hidden min-h-11 px-5 py-2.5 text-sm sm:inline-flex">
            Subscribe
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-secondary/25 text-white transition hover:border-primary/50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav id="mobile-menu" className="border-t border-secondary/10 bg-[#091c32] px-6 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid w-full max-w-6xl gap-1">
            <p className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">Writing</p>
            {writingLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm text-secondary/85 transition hover:bg-primary/10 hover:text-white">
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-secondary/10" />
            {primaryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-sm text-secondary/85 transition hover:bg-primary/10 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/#subscribe" className="btn-primary mt-3 min-h-11 text-sm sm:hidden">
              Subscribe to new research
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
