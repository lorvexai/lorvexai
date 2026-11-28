export type RadarStatus = "Now" | "Building" | "Watch";
export type RadarItem = {
  status: RadarStatus;
  title: string;
  summary: string;
  sources: { label: string; url: string }[];
};

export const RADAR_REVIEWED = "28 November 2026";

export const RADAR: RadarItem[] = [
  {
    status: "Now",
    title: "Tokenised deposits between large banks",
    summary:
      "DBS and Kinexys by J.P. Morgan launched 24/7 US dollar tokenised deposit transfers between the US and Singapore for institutional clients on 16 November 2026. The deposits remain bank liabilities.",
    sources: [
      { label: "The Block", url: "https://theblock.co/news/business/2026-11-16-dbs-jpmorgan-launch-tokenized-deposit-transfers-440854" },
      { label: "Stablecoin Insider", url: "https://stablecoininsider.org/dbs-kinexys-tokenized-deposit-transfers/" }
    ]
  },
  {
    status: "Now",
    title: "Sound practices for responsible AI adoption (FSB)",
    summary:
      "The Financial Stability Board has finalised sound practices to help financial institutions adopt AI responsibly. They are guidance, not rules, and a useful checklist for a governance review.",
    sources: [{ label: "FSB: AI and stablecoins work", url: "https://www.fsb.org/2026/10/fsb-chair-sets-out-fsb-work-on-ai-and-stablecoins/" }]
  },
  {
    status: "Now",
    title: "Model risk principles applied to AI (PRA SS1/23)",
    summary:
      "The PRA's five model risk principles have applied since 17 May 2024, initially to firms with internal model approval. Treat AI and RAG systems as models within this framework.",
    sources: [{ label: "PRA SS1/23", url: "https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks-ss" }]
  },
  {
    status: "Building",
    title: "Cyber resilience expectations, including AI",
    summary:
      "The PRA, FCA and Bank of England consulted on cyber risk and resilience management on 19 November 2026, with non-binding effective practices on AI and quantum. The consultation closes on 26 February 2027.",
    sources: [{ label: "Bank of England: CP17/26", url: "https://www.bankofengland.co.uk/prudential-regulation/publication/2026/november/cyber-risk-and-resilience-management-consultation-paper" }]
  },
  {
    status: "Building",
    title: "EU AI Act high-risk readiness",
    summary:
      "The Digital Omnibus moved Annex III high-risk obligations to 2 December 2027 and Annex I obligations to 2 August 2028. Inventory and classification work still pays off now.",
    sources: [{ label: "AKOS: key dates", url: "https://www.akos-rs.si/en/umetna-inteligenca/explore/frequently-asked-questions-and-answers/digital-omnibus-on-artificial-intelligence" }]
  },
  {
    status: "Building",
    title: "US automated decision-making rules",
    summary:
      "Colorado's SB 26-189 replaces its 2024 AI Act and is scheduled to take effect on 1 January 2027, covering automated decisions in areas such as lending. One law-firm note flags possible delay from litigation.",
    sources: [
      { label: "Holland & Knight", url: "https://www.hklaw.com/en/insights/publications/2026/05/colorado-governor-signs-sb-189" },
      { label: "Colorado Attorney General", url: "https://coag.gov/resources/ai/" }
    ]
  },
  {
    status: "Watch",
    title: "Quantum risk and cryptography",
    summary:
      "UK regulators published non-binding effective practices on quantum computing risk alongside the cyber consultation. Worth a conversation with your security team about data with a long confidentiality life.",
    sources: [{ label: "Bank of England news", url: "https://www.bankofengland.co.uk/news/2026/november/cyber-resilience-guidance-consultation-and-ai-and-quantum-effective-practices" }]
  },
  {
    status: "Watch",
    title: "AI and fraud, and AI operational resilience",
    summary:
      "At its 16 to 17 November plenary the FSB discussed possible further work on operational resilience and the link between AI and fraud.",
    sources: [{ label: "FSB: priorities for 2027", url: "https://www.fsb.org/2026/11/fsb-sets-out-its-priorities-for-2027/" }]
  },
  {
    status: "Watch",
    title: "US bank capital rules",
    summary:
      "The final Basel III capital rule was submitted for White House review in November 2026. There is no published timeline for completing the review.",
    sources: [{ label: "reginfo.gov review listing (record fields may not display)", url: "https://www.reginfo.gov/public/do/eoDetails?rrid=1599615" }]
  }
];
