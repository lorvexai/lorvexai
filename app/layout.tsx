import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorvexai.com";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const socialImageUrl = `${normalizedSiteUrl}/og-image.png`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(`${normalizedSiteUrl}/`),
  title: "LorvexAI - Controlled AI Architecture, Books and Research",
  description:
    "Independent books, research, technical guides, and reference architectures for controlled AI systems in finance, risk, compliance, healthcare operations, and enterprise automation.",
  keywords: [
    "Controlled AI Architecture",
    "AI Governance Education",
    "Enterprise RAG Patterns",
    "AI Books and Research",
    "Finance Risk Technology",
    "Healthcare Operations Research"
  ],
  authors: [{ name: "LorvexAI Editorial Team" }],
  icons: {
    icon: "/lorvex_icon.png",
    apple: "/lorvex_icon.png"
  },
  openGraph: {
    title: "LorvexAI - Controlled AI Architecture, Books and Research",
    description:
      "Independent books, research, technical guides, and reference architectures for controlled AI systems in regulated environments.",
    url: siteUrl,
    siteName: "LorvexAI",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "LorvexAI"
      }
    ],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LorvexAI | Controlled AI Architecture",
    description:
      "Books, research, technical guides, and reference architectures for controlled AI systems.",
    images: [socialImageUrl]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body className="relative pb-20 md:pb-0">
        <Header />
        <main>{children}</main>
        <MobileStickyCTA />
        <Footer />
      </body>
    </html>
  );
}
