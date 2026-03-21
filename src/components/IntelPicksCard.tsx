interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}
export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  const Tag = (href && !placeholder ? "a" : "div") as "a" | "div";
  return (
    <Tag {...(href && !placeholder ? { href } : {})} className="picks-card" style={{ opacity: placeholder ? 0.12 : 1, pointerEvents: placeholder ? "none" : undefined }}>
      <div className="picks-card-cover">
        {image ? <img src={image} alt={title} /> : <div className="picks-card-cover-ph" />}
      </div>
      <div className="picks-card-body">
        <div className="label" style={{ marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, letterSpacing: "-.01em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title}</div>
      </div>
    </Tag>
  );
}
