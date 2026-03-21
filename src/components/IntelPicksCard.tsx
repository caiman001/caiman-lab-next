interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}
export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  if (placeholder) {
    return (
      <div className="picks-card card-placeholder" style={{ flex: "0 0 320px" }}>
        <div className="card-placeholder-inner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>Coming Soon</span>
        </div>
      </div>
    );
  }
  const Tag = href ? "a" : "div" as "a" | "div";
  return (
    <Tag {...(href ? { href } : {})} className="picks-card">
      <div className="picks-card-cover">
        {image ? <img src={image} alt={title} /> : (
          <div style={{
            width: "100%", height: "100%",
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "28px 28px", background: "linear-gradient(135deg,#0f0c29,#1a1a2e)",
          }} />
        )}
      </div>
      <div className="picks-card-body">
        <div className="label" style={{ marginBottom: 8 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, letterSpacing: "-.01em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{title}</div>
      </div>
    </Tag>
  );
}
