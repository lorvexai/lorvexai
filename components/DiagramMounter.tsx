"use client";

import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import ApproachComparisonDiagram from "@/components/diagrams/ApproachComparisonDiagram";
import WorkflowPatternGallery from "@/components/diagrams/WorkflowPatternGallery";

const REGISTRY: Record<string, React.ComponentType> = {
  "approach-comparison": ApproachComparisonDiagram,
  "workflow-pattern-gallery": WorkflowPatternGallery
};

export default function DiagramMounter() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-diagram]").forEach((el) => {
      const key = el.dataset.diagram;
      if (!key || el.dataset.mounted === "true") return;
      const Component = REGISTRY[key];
      if (!Component) return;
      el.dataset.mounted = "true";
      createRoot(el).render(<Component />);
    });
  }, []);

  return null;
}
