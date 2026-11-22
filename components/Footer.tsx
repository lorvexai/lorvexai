import Link from "next/link";

const links = [
  { href: "/contact", label: "Contact" },
  { href: "/disclaimers", label: "Disclaimer" },
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" }
];

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10 bg-background/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-secondary/70">
          &copy; {new Date().getFullYear()} Sreedhara Reddy Kotha. All rights reserved.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-1">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-secondary/80 transition hover:text-heading">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
