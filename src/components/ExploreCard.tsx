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
      className="relative overflow-hidden rounded-[var(--radius)] border p-7"
      style={{ borderColor: "var(--border)" }}
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
