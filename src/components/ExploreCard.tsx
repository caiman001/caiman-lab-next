"use client";

import type { ReactNode } from "react";

interface ExploreCardProps {
  id?: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}

export default function ExploreCard({ id, eyebrow, title, children }: ExploreCardProps) {
  return (
    <div
      id={id}
      className="card relative overflow-hidden rounded-[var(--radius)] border p-7"
      style={{
        borderColor: "var(--border)",
        background: "rgba(255,255,255,.018)",
        transition: "border-color .2s, transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, background .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.025)";
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.018)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="mb-5">
        <div className="mb-2 text-[11px] font-medium uppercase tracking-[.18em]" style={{ color: "var(--muted)" }}>
          {eyebrow}
        </div>
        <h3 className="text-xl font-bold" style={{ letterSpacing: "-.03em" }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}
