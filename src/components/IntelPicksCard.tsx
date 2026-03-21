"use client";

interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  const Tag = href ? "a" : "article";
  return (
    <Tag
      {...(href ? { href } : {})}
      style={{
        flex: "0 0 calc(50% - 6px)", minWidth: 0, display: "block",
        textDecoration: "none", color: "inherit",
        background: "#111", borderRadius: 12, overflow: "hidden",
        opacity: placeholder ? 0.18 : 1,
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
        cursor: placeholder ? "default" : "pointer",
      }}
      onMouseEnter={placeholder ? undefined : e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 56px rgba(0,0,0,.8)";
      }}
      onMouseLeave={placeholder ? undefined : e => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.boxShadow = "";
      }}
    >
      {/* Cover */}
      <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#0c0c0c" }}>
        {image
          ? <img src={image} alt="thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(.7) saturate(.7)" }} />
          : <div style={{
              width: "100%", height: "100%",
              backgroundImage: "linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)",
              backgroundSize: "32px 32px",
            }} />
        }
      </div>
      {/* Info */}
      <div style={{ padding: "16px 18px 20px" }}>
        <div style={{ fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, letterSpacing: "-.01em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title}</div>
      </div>
    </Tag>
  );
}
