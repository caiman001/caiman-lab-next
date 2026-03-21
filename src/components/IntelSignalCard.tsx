"use client";

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
      className="card group flex-shrink-0 snap-start flex flex-col justify-between no-underline"
      style={{
        flex: "0 0 calc(50% - 6px)",
        minWidth: 0,
        textDecoration: "none",
        color: "inherit",
        background: "rgba(255,255,255,.015)",
        borderColor: "var(--border)",
        borderRadius: "var(--radius)",
        border: "1px solid var(--border)",
        padding: "20px 22px 22px",
        overflow: "hidden",
        position: "relative",
        transition: "border-color .2s, transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, background .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.025)";
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.015)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
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
        className="flex-1 text-[13px] leading-[1.7]"
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
      <div className="mt-4 text-right text-xs" style={{ color: "var(--muted)", opacity: 0.4 }}>
        →
      </div>
    </a>
  );
}
