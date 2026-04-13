"use client";

import { useEffect } from "react";

export default function CopyCodeButton() {
  useEffect(() => {
    const pres = document.querySelectorAll("article pre");
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;
      const preEl = pre as HTMLElement;
      preEl.style.position = "relative";

      const btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.setAttribute("aria-label", "Copy code");
      btn.style.cssText = `
        position:absolute;top:0.6rem;right:0.6rem;
        display:inline-flex;align-items:center;gap:0.3rem;
        padding:0.25rem 0.6rem;border-radius:0.5rem;
        font-size:11px;font-family:ui-monospace,monospace;
        border:1px solid rgba(192,198,212,0.2);
        background:rgba(15,42,74,0.85);
        color:rgba(192,198,212,0.7);
        cursor:pointer;transition:all 0.15s;
        backdrop-filter:blur(8px);z-index:10;
      `;
      btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy`;

      btn.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        const text = code?.textContent ?? pre.textContent ?? "";
        try {
          await navigator.clipboard.writeText(text);
          btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Copied!`;
          btn.style.color = "#4ade80";
          btn.style.borderColor = "rgba(74,222,128,0.4)";
          setTimeout(() => {
            btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy`;
            btn.style.color = "rgba(192,198,212,0.7)";
            btn.style.borderColor = "rgba(192,198,212,0.2)";
          }, 2000);
        } catch {
          // clipboard unavailable
        }
      });

      preEl.appendChild(btn);
    });
  }, []);

  return null;
}
