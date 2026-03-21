"use client";

interface IntelSignalCardProps {
  date: string; source: string; name: string; role: string;
  summary: string; summary_en: string; url: string;
}

export default function IntelSignalCard({ date, source, name, role, summary, summary_en, url }: IntelSignalCardProps) {
  return (
    <a
      href={url} target="_blank" rel="noopener noreferrer"
      className="card flex-shrink-0 snap-start"
      style={{ flex: "0 0 calc(50% - 6px)", minWidth: 0, textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "20px 22px 22px" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
        e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
      }}
    >
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 999, border: "1px solid var(--border)", padding: "2px 10px", fontSize: 10, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--muted)" }}>{source}</span>
        <span style={{ fontSize: 10, letterSpacing: ".06em", color: "var(--muted)", opacity: 0.45 }}>{date}</span>
      </div>
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1.2, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 11, lineHeight: 1.4, color: "var(--muted)", marginBottom: 14 }}>{role}</div>
      <div style={{ flex: 1, fontSize: 13, lineHeight: 1.7, color: "rgba(232,232,232,.65)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{summary}</div>
      <div style={{ marginTop: 8, fontSize: 12, lineHeight: 1.6, color: "rgba(232,232,232,.35)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{summary_en}</div>
      <div style={{ marginTop: 16, textAlign: "right", fontSize: 12, color: "var(--muted)", opacity: 0.4 }}>→</div>
    </a>
  );
}
