import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const logoSrc = `${basePath}/Logo.png`.replace("//", "/");

export default function Footer() {
  return (
    <footer className="border-t border-secondary/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={logoSrc}
            alt="LorvexAI"
            width={168}
            height={40}
            className="h-9 w-auto"
          />
          <p className="text-sm text-secondary/70">LorveAI Technologies Ltd</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-secondary/70">
          <Link href="/services" className="hover:text-white">
            Solutions
          </Link>
          <Link href="/blog" className="hover:text-white">
            Insights
          </Link>
          <Link href="/about" className="hover:text-white">
            Company
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-xs text-secondary/50">
          (c) {new Date().getFullYear()} LorveAI Technologies Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
