"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";

type Source = { href: string; title: string };
type Turn = { question: string; answer: string; sources: Source[]; streaming?: boolean };

export default function AskPanel({ compact = false }: { compact?: boolean }) {
  const [question, setQuestion] = useState("");
  const [turns, setTurns] = useState<Turn[]>([]);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  function appendToLastTurn(text: string) {
    setTurns((t) => {
      if (t.length === 0) return t;
      const copy = [...t];
      const last = copy[copy.length - 1];
      copy[copy.length - 1] = { ...last, answer: last.answer + text };
      return copy;
    });
  }

  function finishLastTurn() {
    setTurns((t) => {
      if (t.length === 0) return t;
      const copy = [...t];
      copy[copy.length - 1] = { ...copy[copy.length - 1], streaming: false };
      return copy;
    });
  }

  async function ask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = question.trim();
    if (!q || status === "loading") return;

    setStatus("loading");
    setQuestion("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ question: q })
      });

      const contentType = res.headers.get("content-type") || "";

      if (contentType.includes("text/event-stream") && res.body) {
        const sourcesHeader = res.headers.get("x-ask-sources");
        let sources: Source[] = [];
        if (sourcesHeader) {
          try {
            sources = JSON.parse(decodeURIComponent(sourcesHeader));
          } catch {
            sources = [];
          }
        }

        setTurns((t) => [...t, { question: q, answer: "", sources, streaming: true }]);
        setStatus("idle");

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            const dataLine = part.split("\n").find((line) => line.startsWith("data:"));
            if (!dataLine) continue;
            const payload = dataLine.slice(5).trim();
            if (payload === "[DONE]") continue;
            try {
              const parsed = JSON.parse(payload);
              if (typeof parsed.response === "string" && parsed.response) {
                appendToLastTurn(parsed.response);
              }
            } catch {
              // ignore a malformed chunk boundary
            }
          }
        }

        finishLastTurn();
      } else {
        const data = await res.json();
        setTurns((t) => [...t, { question: q, answer: data.answer, sources: data.sources || [] }]);
        setStatus("idle");
      }
    } catch {
      setTurns((t) => [
        ...t,
        { question: q, answer: "Something went wrong reaching the archive — try again in a moment.", sources: [] }
      ]);
      setStatus("idle");
    }
  }

  return (
    <div className={`corner-ticks border border-secondary/15 bg-panel/75 ${compact ? "p-4" : "p-6 md:p-8"}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Ask — Fig. 02</p>
      <p className="mt-2 text-sm leading-relaxed text-secondary/70">
        Answers are generated only from what I've actually written below — not general knowledge.
      </p>

      <div className={`mt-5 space-y-5 overflow-y-auto pr-1 ${compact ? "max-h-64" : "max-h-[28rem]"}`}>
        {turns.length === 0 && (
          <p className="text-sm text-secondary/45">
            Try: &ldquo;How should model risk tiering work for AI?&rdquo;
          </p>
        )}
        {turns.map((turn, i) => (
          <div key={i} className="space-y-2">
            <p className="font-mono text-xs text-primary">&gt; {turn.question}</p>
            <p className="font-serif text-[15px] leading-relaxed text-secondary/90">
              {turn.answer}
              {turn.streaming && <span className="ml-0.5 animate-pulse text-primary">▍</span>}
            </p>
            {turn.sources.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {turn.sources.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-full border border-secondary/25 bg-background/40 px-2.5 py-1 text-[10px] font-mono text-secondary/60 transition hover:border-primary/45 hover:text-primary"
                  >
                    Source: {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {status === "loading" && (
          <p className="flex items-center gap-2 font-mono text-xs text-secondary/50">
            <Loader2 size={12} className="motion-safe:animate-spin" aria-hidden="true" />
            searching the archive…
          </p>
        )}
      </div>

      <form onSubmit={ask} className="mt-5 flex items-center gap-2 border-t border-secondary/15 pt-4">
        <span className="font-mono text-primary" aria-hidden="true">&gt;</span>
        <label htmlFor={compact ? "ask-input-compact" : "ask-input"} className="sr-only">
          Ask a question about the writing on this site
        </label>
        <input
          id={compact ? "ask-input-compact" : "ask-input"}
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          placeholder="Ask about model risk, governance, audit..."
          className="flex-1 bg-transparent font-mono text-sm text-heading outline-none placeholder:text-secondary/35"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary min-h-9 px-3 py-1.5 text-xs disabled:cursor-wait disabled:opacity-50"
          aria-label="Ask"
        >
          <ArrowRight size={14} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
