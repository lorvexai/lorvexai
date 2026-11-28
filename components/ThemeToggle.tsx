"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function systemTheme(): Theme {
  try {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

function currentTheme(): Theme {
  const set = document.documentElement.getAttribute("data-theme");
  return set === "dark" || set === "light" ? set : systemTheme();
}

/** Light/dark switch. Follows the system until the visitor picks a theme; the pick is remembered on this device. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
    let mq: MediaQueryList | null = null;
    const onSystemChange = () => {
      // Only follow the system while the visitor has not chosen a theme.
      if (!document.documentElement.getAttribute("data-theme")) setTheme(systemTheme());
    };
    try {
      mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", onSystemChange);
    } catch {
      /* older browsers: ignore */
    }
    return () => mq?.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next: Theme = (theme ?? currentTheme()) === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked: the choice still applies for this page view */
    }
    setTheme(next);
  }

  const label = theme === "dark" ? "Switch to light theme" : theme === "light" ? "Switch to dark theme" : "Switch colour theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-secondary/25 text-secondary/85 transition hover:border-primary/50 hover:text-heading"
    >
      {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  );
}
