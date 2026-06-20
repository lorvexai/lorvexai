"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/research", label: "Research" },
  { href: "/platform", label: "Architecture" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/10 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-6xl px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 text-white" aria-label="LorvexAI home">
            <Image
              src={logoSrc}
              alt="LorvexAI"
              width={220}
              height={54}
              priority
              className="h-9 w-auto md:h-10"
            />
            <span className="hidden text-xs font-medium text-secondary/70 xl:inline">
              Personal research by Sreedhara Reddy Kotha
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-10 rounded-full px-3 py-2 text-sm transition ${
                    active ? "bg-primary/16 text-white" : "text-secondary/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/books" className="btn-primary min-h-10 px-5 py-2.5 text-sm">
            Explore Books
          </Link>
        </div>

        <nav className="hide-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Mobile navigation">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={`mobile-${item.href}`}
                href={item.href}
                className={
                  active
                    ? "whitespace-nowrap rounded-full border border-primary/45 bg-primary/20 px-3 py-2 text-xs font-semibold text-white"
                    : "whitespace-nowrap rounded-full border border-secondary/35 bg-background/30 px-3 py-2 text-xs text-secondary/85"
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
