"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";

const links = [
  { href: "/books", label: "Books" },
  { href: "/articles", label: "Articles" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" }
];


export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6">
      <div className="glass mx-auto w-full max-w-6xl rounded-2xl px-5 py-2.5 shadow-lg shadow-black/10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-heading" aria-label="LorvexAI home">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-10 rounded-full px-3 py-2 text-sm transition ${
                    active ? "bg-primary/15 text-heading ring-1 ring-primary/30" : "text-secondary/80 hover:bg-secondary/10 hover:text-heading"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <nav className="mt-3 grid grid-cols-4 gap-1.5 pb-1 lg:hidden" aria-label="Mobile navigation">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={
                  active
                    ? "inline-flex min-h-11 items-center justify-center rounded-full border border-primary/45 bg-primary/20 px-2 text-sm font-semibold text-heading"
                    : "inline-flex min-h-11 items-center justify-center rounded-full border border-secondary/35 bg-background/30 px-2 text-sm text-secondary/85"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
