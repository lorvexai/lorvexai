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
        background: "#081A31",
        primaryColor: "#102A46",
        primaryBorderColor: "#5EA8FF",
        primaryTextColor: "#E6ECF7",
        secondaryColor: "#12395B",
        secondaryBorderColor: "#7DD3FC",
        secondaryTextColor: "#D7E4F3",
        tertiaryColor: "#17324F",
        tertiaryBorderColor: "#8AB4F8",
        tertiaryTextColor: "#E6ECF7",
        lineColor: "#8CCBFF",
        textColor: "#E6ECF7",
        mainBkg: "#102A46",
        nodeBorder: "#5EA8FF",
        clusterBkg: "#0F2742",
        titleColor: "#E6ECF7",
        edgeLabelBackground: "#071426",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        fontSize: "14px"
      },
      flowchart: {
        curve: "linear",
        padding: 28,
        nodeSpacing: 54,
        rankSpacing: 72,
        htmlLabels: true
      },
      sequence: {
        actorFontSize: 14,
        noteFontSize: 13,
        messageFontSize: 13,
        actorMargin: 70,
        boxMargin: 12,
        diagramMarginX: 36,
        diagramMarginY: 24
      },
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
