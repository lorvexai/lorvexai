import type { PostMeta } from "@/utils/posts";

// One taxonomy for the whole site: every article belongs to exactly one topic.
export const TOPICS = ["All", "Governance", "Audit", "Model Risk", "Regulation", "Technology", "Finance", "Healthcare", "Enterprise"] as const;
export type Topic = (typeof TOPICS)[number];
export type RealTopic = Exclude<Topic, "All">;

export const topicBySlug: Record<string, RealTopic> = {
  "ai-agents-in-banking-operations":          "Finance",
  "ai-native-treasury-control-tower":         "Finance",
  "ai-in-financial-risk-management":          "Finance",
  "nhs-ai-triage-without-harm":               "Healthcare",
  "nhs-waiting-lists-to-smart-pathways":      "Healthcare",
  "enterprise-rag-architectures":             "Technology",
  "end-to-end-ai-risk-platform-architecture": "Technology",
  "the-rise-of-agentic-ai":                   "Technology",
  "agentic-ai-design-patterns":               "Technology",
  "ai-workflows-for-regulated-enterprises":   "Enterprise",
  "production-rag-beyond-the-basics":         "Technology",
  "llm-evaluation-in-production":             "Enterprise",
  "guardrails-for-enterprise-ai":             "Enterprise",
  "fine-tuning-vs-rag-vs-prompting":          "Technology",
  "enterprise-llm-chat-interfaces":           "Enterprise",
  "ai-prompt-and-workflow-templates":         "Enterprise",
  "ai-strategy-and-governance-for-regulated-financial-institutions": "Governance",
  "ai-audit-readiness-evidence-controls-logs-human-oversight": "Audit",
  "model-risk-management-for-ai-pra-ss1-23-us-supervisory-guidance": "Model Risk",
  "ecb-ai-supervision-governance-genai-prudential-risk": "Regulation",
  "sec-and-ai-ai-washing-predictive-analytics-conflicts-disclosure-risk": "Regulation",
  "ai-model-inventory-and-tiering-for-banks": "Model Risk",
  "board-reporting-for-ai-risk-and-model-risk-committees": "Governance"
};

export const topicAccent: Record<RealTopic, string> = {
  Governance:   "border-cyan-400/30 text-cyan-300",
  Audit:        "border-emerald-400/30 text-emerald-300",
  "Model Risk": "border-orange-400/30 text-orange-300",
  Regulation:   "border-rose-400/30 text-rose-300",
  Technology:   "border-blue-400/30 text-blue-300",
  Finance:      "border-orange-400/30 text-orange-300",
  Healthcare:   "border-emerald-400/30 text-emerald-300",
  Enterprise:   "border-violet-400/30 text-violet-300"
};

export function getTopic(post: Pick<PostMeta, "slug">): RealTopic {
  return topicBySlug[post.slug] ?? "Technology";
}

export function countByTopic(posts: PostMeta[]) {
  const counts = {} as Record<RealTopic, number>;
  for (const t of TOPICS) if (t !== "All") counts[t] = 0;
  posts.forEach((p) => {
    counts[getTopic(p)] += 1;
  });
  return counts;
}
