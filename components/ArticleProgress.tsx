"use client";

import { useEffect, useState } from "react";

export default function ArticleProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function update() {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance <= 0 ? 0 : Math.min(100, (window.scrollY / distance) * 100));
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return <div className="fixed inset-x-0 top-[72px] z-40 h-0.5 bg-transparent" aria-hidden="true"><div className="h-full bg-gradient-to-r from-cyan-300 via-primary to-emerald-300 transition-[width] duration-100" style={{ width: `${progress}%` }} /></div>;
}
