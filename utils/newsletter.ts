import fs from "fs";
import path from "path";

export type Source = { label: string; url: string };
export type Item = { region: string; title: string; body: string; why: string; sources: Source[] };
export type Section = { id: string; title: string; items: Item[] };
export type Issue = {
  number: number;
  slug: string;
  date: string;
  status: "preview" | "published";
  title: string;
  summary: string;
  headline: { region: string; title: string; body: string[]; why: string; sources: Source[] };
  sections: Section[];
  takeaways: string[];
  related?: { label: string; href: string }[];
};

const dir = path.join(process.cwd(), "content", "newsletter");

export function getIssues(): Issue[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as Issue)
    .sort((a, b) => b.number - a.number);
}

export function getIssue(slug: string): Issue | undefined {
  return getIssues().find((i) => i.slug === slug);
}

export function formatIssueDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
