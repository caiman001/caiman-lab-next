"use client";

interface WorkCardProps { num: string; title: string; desc: string; tags: string[]; }

export default function WorkCard({ num, title, desc, tags }: WorkCardProps) {
  return (
    <a
      style={{
        display: "block", textDecoration: "none", color: "inherit",
        background: "#111", borderRadius: 12, overflow: "hidden",
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 64px rgba(0,0,0,.8)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Preview area */}
      <div style={{
        height: 200, background: "#0c0c0c",
        backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
        backgroundSize: "40px 40px",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.06)", fontFamily: "Inter,sans-serif" }}>{title}</span>
      </div>
      {/* Info */}
      <div style={{ padding: "20px 22px 22px" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,.25)", letterSpacing: ".08em", marginBottom: 10 }}>{num}</div>
        <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.025em", marginBottom: 8, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", lineHeight: 1.6, marginBottom: 16 }}>{desc}</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {tags.map(t => (
            <span key={t} style={{ fontSize: 10, letterSpacing: ".05em", color: "rgba(255,255,255,.3)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 999, padding: "3px 9px" }}>{t}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
