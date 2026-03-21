import { Card, CardContent } from "@/components/ui/card";

interface IntelSignalCardProps {
  date: string;
  source: string;
  name: string;
  role: string;
  summary: string;
  summary_en: string;
  url: string;
}

export default function IntelSignalCard({ date, source, name, role, summary, summary_en, url }: IntelSignalCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="signal-card-wrapper group flex-shrink-0 snap-start no-underline"
      style={{ flex: "0 0 calc(50% - 6px)", minWidth: 0, textDecoration: "none", color: "inherit" }}
    >
      <Card
        className="card-root flex h-full flex-col justify-between overflow-hidden border transition-all duration-200"
        style={{
          background: "rgba(255,255,255,.015)",
          borderColor: "var(--border)",
          borderRadius: "var(--radius)",
          padding: "20px 22px 22px",
        }}
      >
        <CardContent className="flex flex-col p-0">
          {/* Source + Date row */}
          <div className="mb-4 flex items-center justify-between">
            <span
              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[.12em]"
              style={{ color: "var(--muted)", borderColor: "var(--border)" }}
            >
              {source}
            </span>
            <span className="text-[10px] tracking-[.06em]" style={{ color: "var(--muted)", opacity: 0.45 }}>
              {date}
            </span>
          </div>

          {/* Name + Role */}
          <div className="mb-1 text-lg font-bold" style={{ letterSpacing: "-.03em", lineHeight: 1.2 }}>
            {name}
          </div>
          <div className="mb-3.5 text-[11px] leading-[1.4]" style={{ color: "var(--muted)" }}>
            {role}
          </div>

          {/* Summary - Chinese primary */}
          <div
            className="flex-1 text-[13px] leading-[1.7] transition-colors duration-200 group-hover:text-[rgba(232,232,232,.85)]"
            style={{
              color: "rgba(232,232,232,.65)",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {summary}
          </div>

          {/* Summary - English secondary */}
          <div
            className="mt-2 text-[12px] leading-[1.6]"
            style={{
              color: "rgba(232,232,232,.35)",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {summary_en}
          </div>

          {/* Arrow */}
          <div
            className="mt-4 text-right text-xs transition-opacity duration-200 group-hover:opacity-80"
            style={{ color: "var(--muted)", opacity: 0.4 }}
          >
            →
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
