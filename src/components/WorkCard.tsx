interface WorkCardProps { num: string; title: string; desc: string; tags: string[]; }

export default function WorkCard({ num, title, desc, tags }: WorkCardProps) {
  return (
    <div className="work-card">
      <div className="work-card-preview">
        <div className="work-card-preview-grid">
          <span style={{ fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.05)", fontFamily: "Inter,sans-serif" }}>{title}</span>
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
