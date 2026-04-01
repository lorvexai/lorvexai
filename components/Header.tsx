"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const groups = [
  {
    label: "Solutions",
    links: [
      { href: "/services", label: "Services" },
      { href: "/products", label: "Products" },
      { href: "/capabilities", label: "Capabilities" }
    ]
  },
  {
    label: "Insights",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/research", label: "Research" },
      { href: "/blog", label: "Technical Guides" }
    ]
  },
  {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" }
    ]
  }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-secondary/15 bg-background/90 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-white">
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-primary/40 bg-primary/10">
              <Image
                src="/lorvex_icon.png"
                alt="Lorvex AI"
                width={28}
                height={28}
                priority
              />
            </span>
            <span className="text-lg font-semibold">Lorvex AI</span>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="/"
              className={`min-h-11 rounded-full px-4 py-2 text-sm transition ${
                pathname === "/" ? "text-white" : "text-secondary/80 hover:text-white"
              }`}
            >
              Home
            </Link>
            {groups.map((group) => (
              <div key={group.label} className="group relative">
                <button
                  type="button"
                  className="inline-flex min-h-11 items-center gap-1 rounded-full px-4 py-2 text-sm text-secondary/80 transition hover:text-white"
                  aria-haspopup="true"
                >
                  {group.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
                <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-secondary/20 bg-background/95 p-3 opacity-0 shadow-2xl backdrop-blur transition group-hover:pointer-events-auto group-hover:opacity-100">
                  {group.links.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={`${group.label}-${item.href}-${item.label}`}
                        href={item.href}
                        className={`mb-1 block min-h-11 rounded-xl px-3 py-2 text-sm transition last:mb-0 ${
                          active
                            ? "bg-primary/20 text-white"
                            : "text-secondary/80 hover:bg-primary/10 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
          <Link href="/contact" className="btn-outline min-h-11 text-sm">
            Start a Project
          </Link>
        </div>
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 md:hidden">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "whitespace-nowrap rounded-full border border-primary/45 bg-primary/20 px-3 py-2 text-xs font-semibold text-white"
                : "whitespace-nowrap rounded-full border border-secondary/35 bg-background/30 px-3 py-2 text-xs text-secondary/85"
            }
          >
            Home
          </Link>
          {groups.flatMap((group) =>
            group.links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={`mobile-${group.label}-${item.href}-${item.label}`}
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
            })
          )}
        </nav>
      </div>
    </header>
  );
}
