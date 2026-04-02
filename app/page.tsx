import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { getAllPosts } from "@/utils/posts";
import { ArrowRight, ShieldCheck, Workflow, Database, Cpu } from "lucide-react";
import LiveAgentTrace from "@/components/LiveAgentTrace";
import TechnicalInsightsHeader from "@/components/TechnicalInsightsHeader";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const sectors = ["Finance", "Healthcare", "NHS", "Enterprise"];

  return (
    <>
      <section className="section pb-10 pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass grid gap-8 rounded-3xl border border-primary/30 p-7 md:grid-cols-[1.15fr_0.85fr] md:p-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                LorvexAI Control Plane
              </p>
              <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                Operationalizing Agentic AI for Enterprise Scale.
              </h1>
              <p className="mt-5 max-w-2xl text-secondary/85">
                We engineer agentic AI systems, enterprise RAG governance layers, and
                LLM engineering platforms for banking, healthcare, and NHS operations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary min-h-11 text-sm">
                  Request an Agentic Audit
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link href="/products" className="btn-outline min-h-11 text-sm">
                  Explore Products
                </Link>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Workflow, label: "Agentic AI Systems" },
                  { icon: Database, label: "Enterprise RAG Governance" },
                  { icon: Cpu, label: "LLM Engineering for Banking" },
                  { icon: ShieldCheck, label: "NHS AI Triage Blueprint" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex min-h-11 items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm text-secondary"
                  >
                    <item.icon size={16} className="text-primary" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <LiveAgentTrace />
          </div>
        </div>
      </section>

      <section className="section py-8 md:py-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-secondary/70">
              Who We Help
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {sectors.map((area) => (
                <span
                  key={area}
                  className="min-h-11 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm font-medium text-secondary"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Solutions"
        title="Enterprise solutions with operational depth"
        description="A grouped solution model spanning services, products, and delivery capabilities."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Services"
            description="AI strategy, LLM engineering, and governance implementation."
            bullets={[
              "Agentic operating model",
              "Enterprise RAG controls",
              "Execution roadmap by business unit"
            ]}
          />
          <ServiceCard
            title="Products"
            description="Regulatory Intelligence Platform, NHS Flow Optimizer, and Treasury Sentinel."
            bullets={[
              "Production-ready architecture",
              "Integrated data connectors",
              "Audit-ready outputs"
            ]}
          />
          <ServiceCard
            title="Capabilities"
            description="Capability map for planning, deployment, and governed AI scaling."
            bullets={[
              "Planner -> Tool -> Verifier patterns",
              "Evaluation harnesses",
              "Risk and monitoring controls"
            ]}
          />
        </div>
        <div className="mt-6">
          <Link href="/services" className="btn-outline min-h-11 text-sm">
            Explore Solutions Architecture
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Insights"
        title="Technical authority built through operational insights"
        description="Blueprint-grade content for enterprise architects, risk leaders, and AI product teams."
      >
        <TechnicalInsightsHeader
          eyebrow="Technical Guides"
          title="From architecture patterns to implementation runbooks"
          description="Each insight maps business problems to production system design, with explicit governance controls and conversion-focused next actions."
          takeaways={[
            "Agentic AI Systems: planner-tool-verifier orchestration patterns",
            "LLM Engineering for Banking: grounded retrieval with compliance checks",
            "NHS AI Triage Blueprint: safety-first escalation and evidence loops"
          ]}
          ctaLabel="Browse Technical Insights"
          ctaHref="/blog"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </Section>

      <Section title="Ready to operationalize enterprise AI?" description="">
        <CTA />
      </Section>
    </>
  );
}

