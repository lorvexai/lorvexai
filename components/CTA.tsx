import Link from "next/link";

export default function CTA() {
  return (
    <div className="glass rounded-3xl px-8 py-10 text-center md:px-14">
      <h3 className="text-2xl font-semibold text-white md:text-3xl">
        Build your next intelligent system with LorvexAI
      </h3>
      <p className="mt-3 text-secondary/80">
        Partner with our team to architect, deploy, and govern enterprise-grade
        AI platforms.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link href="/contact" className="btn-primary">
          Book a Strategy Call
        </Link>
        <Link href="/services" className="btn-outline">
          Explore Services
        </Link>
      </div>
    </div>
  );
}

