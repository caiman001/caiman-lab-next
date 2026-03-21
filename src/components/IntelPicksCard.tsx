import CardPlaceholder from "./CardPlaceholder";

interface IntelPicksCardProps {
  label: string; title: string; image?: string; href?: string; placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  if (placeholder) return <CardPlaceholder />;
  const Tag = href ? "a" : "div" as "a" | "div";
  return (
    <Tag {...(href ? { href } : {})} className="std-card" style={{ flex: "0 0 var(--card-w)", minWidth: 0 }}>
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
