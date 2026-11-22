import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { REPO } from "@/utils/book-data";
import { BOOK_KINDLE_URL, BOOK_PAPERBACK_URL } from "@/utils/site";

export const metadata: Metadata = {
  title: "Sample chapter: AI Agents for Risk and Compliance Workflows | LorvexAI",
  description:
    "A preview of Chapter 3 of AI for Financial Risk, Compliance and Regulatory Reporting: how to build agents that act, escalate to humans and leave an audit trail a regulator can read.",
  alternates: { canonical: "/books/sample-chapter" },
  openGraph: {
    title: "Chapter 3 preview: AI Agents for Risk and Compliance Workflows",
    description: "Agents that act, escalate to humans and leave an audit trail a regulator can read.",
    url: "/books/sample-chapter",
    type: "article"
  }
};

const LEANPUB = "https://leanpub.com/aibankingriskplatform";
const CH = `${REPO}/tree/main/chapter-03-ai-agents`;
const FILE = (f: string) => `${REPO}/blob/main/chapter-03-ai-agents/${f}`;

const LEARN = [
  "Tell a model call from an agent loop, and know when an agent is the wrong choice.",
  "Build a ReAct agent with a typed tool registry, a hard cost budget and a queryable audit trail.",
  "Put a human-oversight checkpoint into the graph as a routing rule, not a setting.",
  "Classify every banking tool by what it can break, and guard it accordingly.",
  "Defend an agent against prompt injection, tool-call hijacking and runaway cost.",
  "Evaluate a non-deterministic agent with golden trajectories and a regression gate."
];

const LAYERS = [
  ["Orchestrator", "The reasoning loop. It decides the next step but never calls an external system itself."],
  ["Skills and tools", "Single-purpose wrappers, each with one input schema and one output schema. Skills bundle tools into reusable, separately validated capabilities."],
  ["Knowledge", "Regulation, precedents and market data that are too large or change too often for a prompt. Updated and validated on their own schedule."],
  ["Memory and state", "Fast working memory for the current run and durable episodic memory for the record. The graph checkpoint lives here too."],
  ["Audit and governance", "Every tool call, model response and routing decision is written to an event log with its own retention policy."]
];

const NOT_AGENTS = [
  ["Deterministic workflows", "If every step is known in advance, an ordinary pipeline is cheaper, faster and easier to audit."],
  ["Latency-sensitive paths", "Agent loops take seconds per step. A response needed in milliseconds is one model call with structured output."],
  ["Single-step audit decisions", "When the question is “exactly what did the model do?”, one logged prompt and response is cleaner than a multi-step trace."]
];

const TOOLS = [
  ["READ", "No side effects, cacheable", "None"],
  ["WRITE-CONFIRM", "Side effects, reversible", "Human approval above a set threshold"],
  ["EXTERNAL-API", "Rate-limited, variable latency", "Rate limit and cached fallback"],
  ["T24-INTEGRATION", "Core-banking reads and writes", "Idempotency key on every write"]
];

const SECURITY = [
  ["1", "Input sanitisation", "Clean retrieved content before it reaches the agent."],
  ["2", "Tool-call validation", "Check every generated call against the registry and schema before it runs."],
  ["3", "Result schema enforcement", "Validate every tool output before it becomes an observation."],
  ["4", "Sandboxing", "Restrict each agent to its registered tool set."]
];

const TAKEAWAYS = [
  "Budget every run. A cost cap, a tool-call cap and a circuit breaker are the single control that would have stopped the overnight incident early.",
  "Make human oversight structural. Large exposure, low confidence or a covenant breach routes to a person, and the model cannot talk its way past it.",
  "Classify tools before you register them. An unclassified tool does not get to run.",
  "Assume partial compromise. Layer the defences so an attacker has to beat all four at once.",
  "Evaluate trajectories, not just answers. A regression gate decides what ships when a prompt or model changes."
];

const CODE = [
  ["Pipeline topology and guardrails", "credit_agent/agentic_ai_patterns.py"],
  ["LangGraph credit decision state machine", "credit_agent/langgraph_agent.py"],
  ["Agent evaluation framework", "credit_agent/agent_evaluation.py"],
  ["MCP server catalogue", "credit_agent/mcp_servers.py"],
  ["Tool definitions and registry", "credit_agent/tools.py"],
  ["Memory architecture", "credit_agent/memory.py"]
];

function Buy() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href={BOOK_PAPERBACK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary min-h-11 text-sm">
        Paperback
      </a>
      <a href={BOOK_KINDLE_URL} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-11 text-sm">
        Kindle
      </a>
      <a href={LEANPUB} target="_blank" rel="noopener noreferrer" className="btn-outline min-h-11 text-sm">
        Leanpub (ebook)
      </a>
    </div>
  );
}

export default function SampleChapterPage() {
  return (
    <section className="section pt-14 md:pt-20">
      <div className="mx-auto w-full max-w-3xl px-6">
        <Link href="/books" className="inline-flex items-center gap-2 text-sm text-primary hover:text-heading">
          <ArrowLeft size={14} aria-hidden="true" />
          Back to the book
        </Link>

        <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-primary">Chapter 3 preview</p>
        <h1 className="mt-2 text-4xl font-semibold leading-tight text-heading">AI Agents for Risk and Compliance Workflows</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary/85">
          Chapter 3 is where the book moves from models that answer to agents that act. It builds the Credit Decision Agent for
          the fictional Avon &amp; Wessex Bank, and shows the controls that let a regulated firm trust something that makes
          its own next move.
        </p>
        <p className="mt-3 text-sm text-secondary/70">
          This is a preview that summarises the chapter. The full text, figures and worked examples are in the book.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-heading">What you will learn</h2>
        <ul className="mt-4 space-y-3 text-base text-secondary/85">
          {LEARN.map((l) => (
            <li key={l} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {l}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-semibold text-heading">The £840 night</h2>
        <div className="card-glow mt-4 rounded-xl p-6">
          <p className="text-base leading-relaxed text-secondary/85">
            The chapter opens with a war story. An overnight credit agent hit a timeout from the core banking system and
            started retrying. It made 340 calls over six hours and ran up £840 in API cost before an engineer noticed at 3am
            and killed it.
          </p>
          <p className="mt-3 text-base leading-relaxed text-secondary/85">
            The cause was ordinary: no budget per run, no back-off on tool calls and no cost alerting. The fix was a mandatory
            run budget on every agent, exponential back-off, and a circuit breaker that trips when a run costs three times the
            rolling average. The rest of the chapter builds on that lesson: governance is part of the design, not an
            afterthought.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-heading">A five-layer architecture</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          The chapter separates how an agent reasons (ReAct, plan-and-execute, reflexion) from how it is built. For regulated
          deployment it uses five layers, each testable and replaceable on its own.
        </p>
        <ol className="mt-5 space-y-3">
          {LAYERS.map(([name, text], i) => (
            <li key={name} className="card-glow flex gap-4 rounded-xl p-4">
              <span className="font-mono text-sm text-primary">0{i + 1}</span>
              <p className="text-base leading-relaxed text-secondary/85">
                <strong className="text-heading">{name}.</strong> {text}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-base leading-relaxed text-secondary/85">
          The payoff is regulatory as well as technical. When a policy threshold changes, only the one tool that uses it needs
          retesting, not the whole agent.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-heading">When not to use an agent</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          Agents add cost, latency and audit complexity, so the chapter is clear about where they do not belong.
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {NOT_AGENTS.map(([t, d]) => (
            <div key={t} className="card-glow rounded-xl p-4">
              <h3 className="text-base font-semibold text-heading">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/80">{d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-heading">The Credit Decision Agent</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          The main build is a four-agent pipeline in LangGraph. A document agent extracts the financials, an analysis agent
          computes ratios and checks policy, an RWA agent applies the Basel III IRB formula, and a decision agent assembles the
          credit memo. Each stage has a defined scope, logged tool calls and a structured output contract.
        </p>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          Three triggers send a case to a human reviewer no matter what the model thinks, and they are hard-coded rather than
          configurable:
        </p>
        <ul className="mt-4 space-y-3 text-base text-secondary/85">
          {["Exposure above £500,000.", "Model confidence below 0.80.", "Any covenant breach."].map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-base leading-relaxed text-secondary/85">
          Escalation is non-blocking, so the agent keeps working other cases while a reviewer decides. Every override is logged
          with who, when and why, which is the evidence trail EU AI Act Article 14 asks for.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-heading">Four kinds of tool</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          Every tool an agent can call is classed by what it can break, and the class sets the guardrails.
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-secondary/15">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-primary/5 text-heading">
              <tr>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Nature</th>
                <th className="px-4 py-3 font-semibold">Control</th>
              </tr>
            </thead>
            <tbody className="text-secondary/85">
              {TOOLS.map(([a, b, c]) => (
                <tr key={a} className="border-t border-secondary/10">
                  <td className="px-4 py-3 font-mono text-primary">{a}</td>
                  <td className="px-4 py-3">{b}</td>
                  <td className="px-4 py-3">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-12 text-2xl font-semibold text-heading">Security: defence in depth</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          A model that gives a wrong answer is a model risk event. An agent that acts on a manipulated input is a security
          incident. Every document the agent reads is a possible injection route, so the chapter builds four layers and
          assumes any one of them can fail.
        </p>
        <ol className="mt-5 grid gap-4 md:grid-cols-2">
          {SECURITY.map(([n, t, d]) => (
            <li key={n} className="card-glow rounded-xl p-4">
              <p className="font-mono text-xs text-primary">Layer {n}</p>
              <h3 className="mt-1 text-base font-semibold text-heading">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary/80">{d}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 text-2xl font-semibold text-heading">Evaluating something non-deterministic</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          The last technical section moves from checking one run to measuring behaviour across many. Each scenario is a golden
          trajectory, a human-validated sequence of tool calls. A scorer replays runs against it, a second model from a
          different provider judges free-text outputs, and a regression gate promotes a prompt or model change only if it meets
          the reliability targets. A miss counts as a model risk event, not a bug to patch quietly.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-heading">Key takeaways</h2>
        <ul className="mt-4 space-y-3 text-base text-secondary/85">
          {TAKEAWAYS.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-semibold text-heading">Run the code</h2>
        <p className="mt-3 text-base leading-relaxed text-secondary/85">
          Every build in the chapter has a tested Python implementation in the companion repository, with exercises and
          solutions.
        </p>
        <ul className="mt-5 divide-y divide-secondary/10 rounded-xl border border-secondary/15">
          {CODE.map(([label, file]) => (
            <li key={file}>
              <a
                href={FILE(file)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-4 py-3 text-sm hover:bg-primary/5"
              >
                <span className="text-heading">{label}</span>
                <span className="hidden font-mono text-xs text-primary sm:inline">{file}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={CH} target="_blank" rel="noopener noreferrer" className="btn-outline mt-5 min-h-11 text-sm">
          <Github size={14} aria-hidden="true" />
          Open the Chapter 3 folder
        </a>

        <div className="card-glow mt-14 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-heading">Read the full chapter</h2>
          <p className="mt-3 text-base leading-relaxed text-secondary/85">
            Chapter 3 runs to more than fifty pages, with the figures, worked examples and exercises. It is one of sixteen.
          </p>
          <div className="mt-5">
            <Buy />
          </div>
          <Link href="/books" className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:text-heading">
            See all 16 chapters
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <p className="mt-10 text-xs text-secondary/70">
          Avon and Wessex Bank plc is fictional. This content is educational and is not legal or regulatory advice.
        </p>
      </div>
    </section>
  );
}
