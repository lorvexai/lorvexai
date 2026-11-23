import Script from "next/script";
import { CF_ANALYTICS_TOKEN } from "@/utils/site";

/** Cookieless, privacy-friendly visitor analytics. Renders nothing until a token is set in utils/site.ts. */
export default function Analytics() {
  if (!CF_ANALYTICS_TOKEN) return null;
  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token: CF_ANALYTICS_TOKEN })}
    />
  );
}
