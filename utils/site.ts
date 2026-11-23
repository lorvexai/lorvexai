// Your newsletter subscribe page (Substack, Beehiiv, Buttondown...). Set it here, or via the
// NEXT_PUBLIC_NEWSLETTER_URL build variable. If empty, sign-up points to the contact page.
export const NEWSLETTER_URL: string = process.env.NEXT_PUBLIC_NEWSLETTER_URL || "https://lorvexai.substack.com/subscribe";
export const NEWSLETTER_NAME = "RegAI Brief";
export const BOOK_PAPERBACK_URL = "https://www.amazon.co.uk/dp/B0HBR8JG9V";
export const BOOK_KINDLE_URL = "https://www.amazon.co.uk/dp/B0HD2KSJJB";

// Cloudflare Web Analytics (cookieless). Paste the site token from Cloudflare dashboard > Analytics & Logs > Web Analytics,
// or set NEXT_PUBLIC_CF_ANALYTICS_TOKEN at build time. While empty, no analytics script is loaded.
export const CF_ANALYTICS_TOKEN: string = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN || "";
