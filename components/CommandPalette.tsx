"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Beaker, BookOpen, Command, FileText, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";

export type CommandItem = {
  href: string;
  title: string;
  description: string;
  type: "Article" | "Research" | "Lab" | "Book" | "Page";
  keywords?: string;
};

const iconByType = { Article: FileText, Research: BookOpen, Lab: Beaker, Book: BookOpen, Page: ArrowUpRight };

export default function CommandPalette({ items }: { items: CommandItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => { setOpen(false); setQuery(""); }, [pathname]);
  useEffect(() => { if (open) window.setTimeout(() => inputRef.current?.focus(), 40); }, [open]);

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return items.slice(0, 8);
    return items.filter((item) => `${item.title} ${item.description} ${item.type} ${item.keywords ?? ""}`.toLowerCase().includes(value)).slice(0, 10);
  }, [items, query]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className="fixed bottom-5 right-5 z-40 flex min-h-12 items-center gap-3 rounded-full border border-cyan-200/25 bg-[#071a2d]/95 px-4 text-sm font-semibold text-white shadow-2xl shadow-black/40 backdrop-blur transition hover:border-cyan-200/55 md:bottom-7 md:right-7" aria-label="Open research search">
        <Search size={17} className="text-cyan-200" /><span className="hidden sm:inline">Explore research</span><span className="hidden items-center gap-0.5 rounded border border-secondary/20 px-1.5 py-0.5 font-mono text-[10px] text-secondary/50 md:flex"><Command size={10} />K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center bg-[#03101d]/80 px-4 pt-[10vh] backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Search LorvexAI">
          <button className="absolute inset-0 cursor-default" type="button" onClick={() => setOpen(false)} aria-label="Close search" />
          <div className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-cyan-200/20 bg-[#071a2d] shadow-2xl shadow-black/60">
            <div className="flex items-center gap-3 border-b border-secondary/10 px-5">
              <Search size={19} className="shrink-0 text-cyan-200" />
              <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search governance, model risk, agents, ECB..." className="min-h-16 flex-1 bg-transparent text-base text-white outline-none placeholder:text-secondary/40" />
              <button type="button" onClick={() => setOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/15 text-secondary/60 hover:text-white" aria-label="Close"><X size={16} /></button>
            </div>
            <div className="max-h-[62vh] overflow-y-auto p-3">
              {results.length ? results.map((item) => {
                const Icon = iconByType[item.type];
                return <Link key={`${item.type}-${item.href}`} href={item.href} className="group flex items-start gap-4 rounded-2xl p-4 transition hover:bg-cyan-200/8"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-secondary/15 bg-background/35 text-cyan-200"><Icon size={17} /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><p className="truncate font-semibold text-white">{item.title}</p><span className="rounded-full border border-secondary/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-secondary/45">{item.type}</span></div><p className="mt-1 line-clamp-2 text-sm leading-relaxed text-secondary/65">{item.description}</p></div><ArrowUpRight size={15} className="mt-2 shrink-0 text-secondary/30 transition group-hover:text-primary" /></Link>;
              }) : <div className="px-5 py-12 text-center"><p className="font-semibold text-white">No research found</p><p className="mt-2 text-sm text-secondary/60">Try a topic, regulator, technology, or industry.</p></div>}
            </div>
            <div className="flex items-center justify-between border-t border-secondary/10 px-5 py-3 font-mono text-[10px] text-secondary/40"><span>{results.length} result{results.length === 1 ? "" : "s"}</span><span>ESC to close</span></div>
          </div>
        </div>
      )}
    </>
  );
}
