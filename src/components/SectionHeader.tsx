interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-14 flex items-end justify-between gap-6">
      <div>
        <div
          className="mb-3.5 text-[11px] font-medium uppercase tracking-[.18em]"
          style={{ color: "var(--muted)" }}
        >
          {eyebrow}
        </div>
        <h2
          className="text-[clamp(30px,4vw,46px)] font-bold leading-[1.05]"
          style={{ letterSpacing: "-.02em", fontFamily: "'Cormorant Garamond','PingFang SC',sans-serif" }}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className="max-w-[300px] shrink-0 text-right text-sm leading-[1.7]"
          style={{ color: "var(--muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
