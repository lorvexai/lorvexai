const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "blog");
const outputPath = path.join(process.cwd(), "public", "content-index.json");

const MAX_CHUNK_CHARS = 900;

function cleanText(raw) {
  return raw
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_`|]/g, " ")
    .replace(/---+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function chunkSection(text) {
  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    chunks.push(remaining.slice(0, MAX_CHUNK_CHARS).trim());
    remaining = remaining.slice(MAX_CHUNK_CHARS);
  }
  return chunks.filter((c) => c.length > 40);
}

function buildBlogChunks() {
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
  const chunks = [];

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, file);
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
    if (data.hidden) continue;

    const title = data.title || slug;
    const href = `/blog/${slug}`;
    const sections = content.split(/\n##\s+/);

    sections.forEach((section, index) => {
      const heading = index === 0 ? "Introduction" : section.split("\n")[0].trim();
      const body = index === 0 ? section : section.split("\n").slice(1).join("\n");
      const cleaned = cleanText(body);
      chunkSection(cleaned).forEach((text) => {
        chunks.push({ slug, title, href, heading, text });
      });
    });
  }

  return chunks;
}

function buildBlueprintChunks() {
  return [
    {
      slug: "regulatory-intelligence",
      title: "Regulatory Intelligence Blueprint",
      href: "/blueprints",
      heading: "Regulatory Intelligence Blueprint",
      text: "An educational reference architecture for turning public regulatory text into structured obligation candidates, control-mapping drafts, and evidence-pack templates for internal review. Human validation required before use. No legal, regulatory, or compliance advice."
    },
    {
      slug: "treasury-sentinel",
      title: "Treasury Sentinel Blueprint",
      href: "/blueprints",
      heading: "Treasury Sentinel Blueprint",
      text: "A finance-operations reference blueprint for liquidity monitoring, cash-flow anomaly detection, scenario analysis, and ALCO-style draft reporting. Educational discussion only, not autonomous treasury decision-making. Synthetic demo data only."
    }
  ];
}

function main() {
  const index = [...buildBlogChunks(), ...buildBlueprintChunks()];
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(index), "utf8");
  console.log(`Wrote ${index.length} chunks to ${path.relative(process.cwd(), outputPath)}`);
}

main();
