export type CalendarEntry = {
  date: string; // display
  sort: string; // ISO for ordering
  area: string;
  text: string;
  note?: string;
  source: { label: string; url: string };
};

export const CALENDAR_REVIEWED = "28 November 2026";

export const CALENDAR: CalendarEntry[] = [
  {
    date: "2 December 2026", sort: "2026-12-02", area: "EU AI Act",
    text: "New Article 5 prohibition on AI that generates non-consensual intimate content or child sexual abuse material applies, and the grace period for Article 50(2) marking of AI-generated content ends for systems already on the market.",
    source: { label: "AKOS: key dates", url: "https://www.akos-rs.si/en/umetna-inteligenca/explore/frequently-asked-questions-and-answers/digital-omnibus-on-artificial-intelligence" }
  },
  {
    date: "1 January 2027", sort: "2027-01-01", area: "US, Colorado",
    text: "SB 26-189 on automated decision-making technology takes effect.",
    note: "One law-firm note says pending litigation could delay it.",
    source: { label: "Holland & Knight", url: "https://www.hklaw.com/en/insights/publications/2026/05/colorado-governor-signs-sb-189" }
  },
  {
    date: "About 18 January 2027", sort: "2027-01-18", area: "US, FinCEN",
    text: "Comments due on the proposed customer due diligence rule, 60 days after Federal Register publication.",
    note: "Calculated from a scheduled publication date of 19 November 2026. Check the Federal Register notice for the exact deadline.",
    source: { label: "Federal Register public inspection", url: "https://public-inspection.federalregister.gov/2026-23614.pdf" }
  },
  {
    date: "18 February 2027", sort: "2027-02-18", area: "UK, PRA",
    text: "Responses due on CP16/26, proposed changes to the PRA's O-SII buffer statement of policy.",
    source: { label: "Bank of England: CP16/26", url: "https://www.bankofengland.co.uk/prudential-regulation/publication/2026/november/clarifying-the-pra-approach-to-the-implementation-of-the-o-sii-buffer-consultation-paper" }
  },
  {
    date: "26 February 2027", sort: "2027-02-26", area: "UK, PRA, FCA and Bank of England",
    text: "Joint consultation on cyber risk and resilience management (CP17/26, GC26/9) closes.",
    source: { label: "Bank of England: CP17/26", url: "https://www.bankofengland.co.uk/prudential-regulation/publication/2026/november/cyber-risk-and-resilience-management-consultation-paper" }
  },
  {
    date: "First half of 2027", sort: "2027-06-30", area: "UK, FCA",
    text: "Final cyber risk and resilience guidance expected, as a joint PRA and Bank of England supervisory statement and FCA finalised guidance.",
    source: { label: "FCA: GC26/9", url: "https://www.fca.org.uk/publications/guidance-consultations/gc26-9-cyber-risk-resilience-management" }
  },
  {
    date: "2 December 2027", sort: "2027-12-02", area: "EU AI Act",
    text: "Obligations for high-risk AI systems listed in Annex III apply.",
    source: { label: "AKOS: key dates", url: "https://www.akos-rs.si/en/umetna-inteligenca/explore/frequently-asked-questions-and-answers/digital-omnibus-on-artificial-intelligence" }
  },
  {
    date: "2 August 2028", sort: "2028-08-02", area: "EU AI Act",
    text: "Obligations for high-risk AI systems covered by the sectoral legislation in Annex I apply.",
    source: { label: "AKOS: key dates", url: "https://www.akos-rs.si/en/umetna-inteligenca/explore/frequently-asked-questions-and-answers/digital-omnibus-on-artificial-intelligence" }
  }
];
