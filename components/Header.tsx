"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Writing" },
  { href: "/blueprints", label: "Blueprints" },
  { href: "/books", label: "Books" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/about", label: "About" }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6">
      <div className="glass mx-auto w-full max-w-6xl rounded-2xl px-5 py-2.5 shadow-lg shadow-black/10">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-heading" aria-label="LorvexAI home">
            <Image
              src={logoSrc}
              alt="LorvexAI"
              width={220}
              height={54}
              priority
              className="h-9 w-auto rounded-md md:h-10"
            />
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
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>

        <nav className="hide-scrollbar mt-3 flex items-center gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Mobile navigation">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={
                  active
                    ? "whitespace-nowrap rounded-full border border-primary/45 bg-primary/20 px-3 py-2 text-xs font-semibold text-heading"
                    : "whitespace-nowrap rounded-full border border-secondary/35 bg-background/30 px-3 py-2 text-xs text-secondary/85"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <div className="ml-1 shrink-0">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
