interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  const Tag = (href && !placeholder ? "a" : "div") as "a" | "div";
  return (
    <Tag
      {...(href && !placeholder ? { href } : {})}
      className="picks-card"
      style={{ opacity: placeholder ? 0.15 : 1, pointerEvents: placeholder ? "none" : undefined }}
    >
      <div className="picks-card-cover">
        {image
          ? <img src={image} alt={title} />
          : <div style={{
              width: "100%", height: "100%",
              backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
            }} />
        }
      </div>
      <div className="picks-card-body">
        <div className="label" style={{ marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, letterSpacing: "-.01em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title}</div>
      </div>
    </Tag>
  );
}
