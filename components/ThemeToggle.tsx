"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme") as Theme | null;
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      // Dark is the default ground; only an explicit OS light preference switches it.
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      setTheme(prefersLight ? "light" : "dark");
    }
  }, []);

  function choose(next: Theme) {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  if (!theme) return null;

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full border border-secondary/25 p-0.5 font-mono text-[10px] uppercase tracking-[0.12em]">
      {(["light", "dark"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => choose(option)}
          aria-pressed={theme === option}
          className={`rounded-full px-2.5 py-1 transition ${
            theme === option
              ? "bg-primary/20 text-heading"
              : "text-secondary/55 hover:text-secondary/85"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
