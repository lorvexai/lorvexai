"use client";

import { useEffect } from "react";
import mermaid from "mermaid";

export default function MermaidRenderer({
  refreshKey
}: {
  refreshKey?: string;
}) {
  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const cssVar = (name: string, fallback: string) => root.getPropertyValue(name).trim() || fallback;
    const cssVarRgb = (name: string, fallback: string) => {
      const triple = root.getPropertyValue(name).trim();
      return triple ? `rgb(${triple})` : fallback;
    };
    const isDark = cssVar("color-scheme", "dark").includes("dark");

    const panel = cssVarRgb("--color-panel-rgb", isDark ? "#12315A" : "#FFFFFF");
    const panel2 = cssVarRgb("--color-panel-2-rgb", isDark ? "#13294B" : "#E8EDF1");
    const stroke = cssVar("--mermaid-stroke", isDark ? "#DCEAF2" : "#0E2338");
    const edge = cssVar("--mermaid-edge", isDark ? "#B8863A" : "#8A611F");
    const heading = cssVarRgb("--color-heading-rgb", isDark ? "#E9EEF5" : "#0E2338");
    const labelBg = cssVar("--mermaid-label-bg", isDark ? "#0A1D34" : "#F1F4F6");
    const background = cssVarRgb("--color-background-rgb", isDark ? "#0B2038" : "#F1F4F6");

    mermaid.initialize({
      startOnLoad: false,
      theme: "base",
      securityLevel: "loose",
      themeVariables: {
        darkMode: isDark,
        background,
        primaryColor: panel,
        primaryBorderColor: stroke,
        primaryTextColor: heading,
        secondaryColor: panel2,
        secondaryBorderColor: stroke,
        secondaryTextColor: heading,
        tertiaryColor: panel2,
        tertiaryBorderColor: stroke,
        tertiaryTextColor: heading,
        lineColor: edge,
        textColor: heading,
        mainBkg: panel,
        nodeBorder: stroke,
        clusterBkg: panel2,
        titleColor: heading,
        edgeLabelBackground: labelBg,
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
