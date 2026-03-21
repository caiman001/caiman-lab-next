const PREVIEWS = [
  "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
  "linear-gradient(135deg, #0d0d0d 0%, #1a0a2e 50%, #0d1b2a 100%)",
];

interface WorkCardProps { num: string; title: string; desc: string; tags: string[]; index?: number; }

export default function WorkCard({ num, title, desc, tags, index = 0 }: WorkCardProps) {
  return (
    <div className="work-card">
      <div className="work-card-preview" style={{ background: PREVIEWS[index % PREVIEWS.length] }}>
        <div className="work-card-preview-inner">
          {/* Subtle geometric accent */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
          <div style={{
            position: "absolute", bottom: 20, right: 24,
            fontFamily: "Inter,sans-serif", fontSize: 9, letterSpacing: ".2em",
            textTransform: "uppercase", color: "rgba(255,255,255,.12)",
          }}>{title}</div>
        </div>
      </div>
      <div className="work-card-body">
        <div className="work-card-num">{num}</div>
        <div className="work-card-title">{title}</div>
        <div className="work-card-desc">{desc}</div>
        <div className="work-card-tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
    </div>
  );
}
