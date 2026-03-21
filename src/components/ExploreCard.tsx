"use client";
import type { ReactNode } from "react";

interface ExploreCardProps { id?: string; eyebrow: string; title: string; children?: ReactNode; }

export default function ExploreCard({ id, eyebrow, title, children }: ExploreCardProps) {
  return (
    <div
      id={id}
      className="explore-sub"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
        e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
      }}
    >
      <div style={{ marginBottom: 22 }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{eyebrow}</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.03em", marginTop: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}
