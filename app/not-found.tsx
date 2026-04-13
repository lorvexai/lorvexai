import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, BookOpen, Cpu } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section flex min-h-[70vh] items-center">
      <div className="mx-auto w-full max-w-3xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-secondary/70">
          This page doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary text-sm">
            <Home size={15} aria-hidden="true" />
            Back to Home
          </Link>
          <Link href="/blog" className="btn-outline text-sm">
            <BookOpen size={15} aria-hidden="true" />
            Read our Blog
          </Link>
          <Link href="/contact" className="btn-outline text-sm">
            <ArrowRight size={15} aria-hidden="true" />
            Contact Us
          </Link>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { href: "/services",     label: "Services",     desc: "AI consultancy and engineering" },
            { href: "/products",     label: "Products",     desc: "Enterprise AI products" },
            { href: "/capabilities", label: "Capabilities", desc: "Technical capabilities" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="glass card-hover rounded-2xl border border-secondary/15 p-5 text-left"
            >
              <p className="font-semibold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-secondary/60">{item.desc}</p>
              <p className="mt-3 flex items-center gap-1 text-xs text-primary">
                Visit <ArrowRight size={11} />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
