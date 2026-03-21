"use client";
import ThumbGrid from "./ThumbGrid";

interface WorkCardProps { num: string; title: string; desc: string; tags: string[]; }

export default function WorkCard({ num, title, desc, tags }: WorkCardProps) {
  return (
    <a
      className="card block no-underline"
      style={{ color: "inherit", textDecoration: "none" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
        e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
      }}
    >
      {/* Thumb */}
      <div style={{
        height: 220,
        background: "linear-gradient(135deg,#0e0e0e 0%,#161618 100%)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <ThumbGrid label={title} />
      </div>
      {/* Body */}
      <div style={{ padding: "24px 26px 26px" }}>
        <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 12, letterSpacing: ".06em" }}>{num}</div>
        <h3 style={{ fontFamily: "'Inter',ui-sans-serif,sans-serif", fontSize: 20, fontWeight: 700, letterSpacing: "-.03em", marginBottom: 8 }}>{title}</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.65 }}>{desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 18 }}>
          {tags.map(t => (
            <span key={t} style={{ border: "1px solid var(--border)", borderRadius: 999, padding: "3px 10px", fontSize: 11, color: "var(--muted)" }}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
