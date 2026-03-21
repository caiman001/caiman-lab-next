interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  if (placeholder) {
    return (
      <div className="std-card std-card-ph" style={{ flex: "0 0 240px", minWidth: 0 }}>
        <div className="std-card-ph-inner">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>Coming Soon</span>
        </div>
      </div>
    );
  }
  const Tag = href ? "a" : "div" as "a" | "div";
  return (
    <Tag {...(href ? { href } : {})} className="std-card" style={{ flex: "0 0 240px", minWidth: 0 }}>
      <div className="std-card-preview">
        {image
          ? <img src={image} alt={title} />
          : <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#0f0c29,#1a1a2e)" }} />
        }
      </div>
      <div className="std-card-body">
        <div className="std-card-label">{label}</div>
        <div className="std-card-title">{title}</div>
      </div>
    </Tag>
  );
}
