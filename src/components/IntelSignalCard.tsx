interface IntelSignalCardProps {
  date: string; source: string; name: string; role: string;
  summary: string; summary_en: string; url: string;
}

export default function IntelSignalCard({ date, source, name, role, summary, summary_en, url }: IntelSignalCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="std-card" style={{ flex: "0 0 var(--card-w)", minWidth: 0 }}>
      <div className="std-card-body">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="tag">{source}</span>
          <span className="meta">{date}</span>
        </div>

        <div style={{ marginBottom: 8 }}>
          <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: 4 }}>{name}</div>
          <div className="meta">{role}</div>
        </div>

        <div className="std-card-desc" style={{ display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {summary}
        </div>

        {summary_en && (
          <div style={{ marginTop: 8, fontSize: 11, lineHeight: 1.6, color: "var(--fg3)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {summary_en}
          </div>
        )}

        <div style={{ marginTop: 10, textAlign: "right", fontSize: 13, color: "var(--fg3)" }}>→</div>
      </div>
    </a>
  );
}
