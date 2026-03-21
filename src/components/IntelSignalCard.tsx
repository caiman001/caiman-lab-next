interface IntelSignalCardProps {
  date: string; source: string; name: string; role: string;
  summary: string; summary_en: string; url: string;
}
export default function IntelSignalCard({ date, source, name, role, summary, summary_en, url }: IntelSignalCardProps) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="signal-card">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <span className="tag">{source}</span>
        <span className="meta">{date}</span>
      </div>
      <div style={{ marginBottom: 14 }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.035em", lineHeight: 1.1, marginBottom: 5 }}>{name}</div>
        <div className="meta">{role}</div>
      </div>
      <div style={{ flex: 1, fontSize: 13, lineHeight: 1.72, color: "rgba(255,255,255,.55)", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{summary}</div>
      {summary_en && (
        <div style={{ marginTop: 10, fontSize: 11, lineHeight: 1.65, color: "rgba(255,255,255,.22)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{summary_en}</div>
      )}
      <div style={{ marginTop: 18, textAlign: "right", fontSize: 13, color: "rgba(255,255,255,.25)" }}>→</div>
    </a>
  );
}
