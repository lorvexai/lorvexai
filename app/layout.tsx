import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandPalette, { type CommandItem } from "@/components/CommandPalette";
import { getAllPosts } from "@/utils/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lorvexai.com";
const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const socialImageUrl = `${normalizedSiteUrl}/og-image.png`;

const commandItems: CommandItem[] = [
  { href: "/lab", title: "Interactive Architecture Lab", description: "Configure a controlled AI system and watch its controls change.", type: "Lab", keywords: "interactive autonomy human review risk" },
  { href: "/research", title: "Research Library", description: "Research papers, technical guides, and architecture notes.", type: "Research" },
  { href: "/blueprints", title: "Reference Blueprints", description: "Controlled AI architecture across finance, healthcare, and enterprise.", type: "Research" },
  { href: "/books", title: "Books and Reading Notes", description: "Long-form publications and practitioner book reviews.", type: "Book" },
  { href: "/about", title: "About Sreedhara Reddy Kotha", description: "Author background, experience, and the purpose of LorvexAI.", type: "Page" },
  ...getAllPosts().map((post) => ({ href: `/blog/${post.slug}`, title: post.title, description: post.excerpt, type: "Article" as const, keywords: post.tags.join(" ") }))
];

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
  authors: [{ name: "Sreedhara Reddy Kotha", url: "/about" }],
  creator: "Sreedhara Reddy Kotha",
  publisher: "LorvexAI",
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
      <body className="relative">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <CommandPalette items={commandItems} />
        <Footer />
      </body>
    </html>
  );
}
