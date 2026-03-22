const PREVIEWS = [
  "linear-gradient(135deg, #FF6B35 0%, #FFA500 50%, #FF8C42 100%)",
  "linear-gradient(135deg, #FF7F50 0%, #FF6347 50%, #FF4500 100%)",
];

interface WorkCardProps { num: string; title: string; desc: string; tags: string[]; index?: number; }

export default function WorkCard({ num, title, desc, tags, index = 0 }: WorkCardProps) {
  return (
    <div className="std-card" style={{ flex: "0 0 var(--card-w)", minWidth: 0 }}>
      <div className="std-card-preview" style={{ background: PREVIEWS[index % PREVIEWS.length] }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div style={{ position: "absolute", bottom: 14, right: 18, fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.1)" }}>{title}</div>
      </div>
      <div className="std-card-body">
        <div className="std-card-label">{num}</div>
        <div className="std-card-title">{title}</div>
        <div className="std-card-desc">{desc}</div>
        <div className="std-card-tags">{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </div>
  );
}
