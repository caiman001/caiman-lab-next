interface SectionHeaderProps { eyebrow: string; title: string; description?: string; }

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 40, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
          {eyebrow}
        </div>
        <h2 style={{ fontFamily: "'Inter',ui-sans-serif,sans-serif", fontSize: "clamp(26px,3.5vw,38px)", fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1.05, margin: 0 }}>
          {title}
        </h2>
      </div>
      {description && (
        <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, textAlign: "right", flexShrink: 0, maxWidth: 260, margin: 0 }}>
          {description}
        </p>
      )}
    </div>
  );
}
