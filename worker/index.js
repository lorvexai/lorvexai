const MODEL = "@cf/ibm-granite/granite-4.0-h-micro";
const TOP_K = 5;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/ask") {
      if (request.method !== "POST") {
        return json({ error: "POST only" }, 405);
      }
      return handleAsk(request, env);
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleAsk(request, env) {
  let question;
  try {
    const body = await request.json();
    question = typeof body.question === "string" ? body.question.trim() : "";
  } catch {
    return json({ answer: "Something went wrong reading that question — try again.", sources: [] }, 400);
  }

  if (!question) {
    return json({ answer: "Ask me something about the writing on this site.", sources: [] }, 400);
  }

  try {
    const indexRes = await env.ASSETS.fetch(new URL("/content-index.json", request.url));
    const chunks = await indexRes.json();
    const scored = scoreChunks(chunks, question).filter((c) => c.score > 0);
    const top = scored.slice(0, TOP_K);

    if (top.length === 0) {
      return json({
        answer:
          "I couldn't find anything in my writing that covers that. Try browsing the writing directly, or ask about AI governance, model risk, audit readiness, or financial regulation.",
        sources: []
      });
    }

    const context = top
      .map((c, i) => `[${i + 1}] (${c.title} — ${c.heading})\n${c.text}`)
      .join("\n\n");

    const systemPrompt = `You are a research assistant answering questions strictly from the excerpts below, taken from Sreedhara Reddy Kotha's own writing on AI governance, model risk, and financial regulation. Answer only using these excerpts — do not use outside knowledge. If the excerpts don't cover the question, say so plainly and suggest browsing the writing directly rather than guessing. Cite the excerpt numbers you drew from inline, like [1].\n\nExcerpts:\n${context}`;

    const aiResponse = await env.AI.run(MODEL, {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: question }
      ]
    });

    const answer =
      (typeof aiResponse?.response === "string" && aiResponse.response.trim()) ||
      "I couldn't generate an answer just now — please try again in a moment.";

    return json({ answer, sources: uniqueSources(top) });
  } catch (err) {
    return json({
      answer:
        "I've either hit today's free answer limit or something went wrong on my end — try again tomorrow, or browse the writing directly.",
      sources: []
    });
  }
}

const STOPWORDS = new Set([
  "the", "and", "for", "are", "but", "not", "you", "your", "what", "when", "where", "which",
  "who", "how", "why", "should", "would", "could", "can", "does", "do", "did", "with", "about",
  "this", "that", "these", "those", "have", "has", "had", "was", "were", "will", "shall", "its",
  "into", "onto", "than", "then", "them", "they", "our", "out", "all", "any", "some", "get", "got"
]);

function scoreChunks(chunks, question) {
  const terms = (question.toLowerCase().match(/[a-z0-9]+/g) || []).filter(
    (t) => t.length >= 3 && !STOPWORDS.has(t)
  );
  if (terms.length === 0) return [];
  return chunks.map((chunk) => {
    const haystack = `${chunk.title} ${chunk.heading} ${chunk.text}`.toLowerCase();
    let score = 0;
    for (const term of terms) {
      score += haystack.split(term).length - 1;
    }
    return { ...chunk, score };
  }).sort((a, b) => b.score - a.score);
}

function uniqueSources(top) {
  const seen = new Map();
  for (const c of top) {
    if (!seen.has(c.href)) seen.set(c.href, c.title);
  }
  return [...seen.entries()].map(([href, title]) => ({ href, title }));
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
}
