"use client";

import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidRenderer({
  refreshKey
}: {
  refreshKey?: string;
}) {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      securityLevel: "loose",
      themeVariables: {
        darkMode: true,
        background: "#0B1F3A",
        primaryColor: "#1D4C8F",
        primaryBorderColor: "#2F80ED",
        primaryTextColor: "#E6ECF7",
        secondaryColor: "#0F2A4A",
        secondaryBorderColor: "#56A3FF",
        secondaryTextColor: "#C0C6D4",
        tertiaryColor: "#13294B",
        tertiaryBorderColor: "#2F80ED",
        tertiaryTextColor: "#E6ECF7",
        lineColor: "#56A3FF",
        textColor: "#E6ECF7",
        mainBkg: "#0F2A4A",
        nodeBorder: "#2F80ED",
        clusterBkg: "#13294B",
        titleColor: "#E6ECF7",
        edgeLabelBackground: "#0B1F3A",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        fontSize: "15px"
      },
      flowchart: { curve: "basis", padding: 20 },
      sequence: { actorFontSize: 14, noteFontSize: 13, messageFontSize: 14 },
      gantt: { fontSize: 14 }
    });

    const codeBlocks = document.querySelectorAll("pre > code.language-mermaid");

    codeBlocks.forEach((codeBlock) => {
      const pre = codeBlock.parentElement;
      if (!pre) return;

      if (pre.dataset.mermaidProcessed === "true") return;
      pre.dataset.mermaidProcessed = "true";

      const chartSource = codeBlock.textContent ?? "";
      const container = document.createElement("div");
      container.className = "mermaid";
      container.textContent = chartSource;

      pre.replaceWith(container);
    });

    mermaid.run({ querySelector: ".mermaid" }).catch(() => {
      // Keep the page usable even if one diagram fails to parse.
    });
  }, [refreshKey]);

  return null;
}
