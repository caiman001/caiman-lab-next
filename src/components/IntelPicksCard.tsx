"use client";
import ThumbGrid from "./ThumbGrid";

interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  const Tag = href ? "a" : "article";
  const trackMouse = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
  };
  return (
    <Tag
      {...(href ? { href } : {})}
      className={`card content-card flex-shrink-0 snap-start${placeholder ? " pointer-events-none" : ""}`}
      style={{
        flex: "0 0 calc(50% - 6px)",
        minWidth: 0,
        textDecoration: "none",
        color: "inherit",
        display: "block",
        opacity: placeholder ? 0.18 : 1,
      }}
      onMouseMove={trackMouse}
    >
      {/* Cover */}
      <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#0e0e0e", borderBottom: "1px solid var(--border)" }}>
        {image
          ? <img src={image} alt="thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(.75) saturate(.8)", transition: "transform .8s cubic-bezier(.16,1,.3,1)" }} />
          : <ThumbGrid />
        }
      </div>
      {/* Foot */}
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", opacity: placeholder ? 0.4 : 1 }}>{title}</div>
      </div>
    </Tag>
  );
}
