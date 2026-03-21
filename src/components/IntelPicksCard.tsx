import ThumbGrid from "./ThumbGrid";

interface IntelPicksCardProps {
  label: string;
  title: string;
  image?: string;
  href?: string;
  placeholder?: boolean;
}

export default function IntelPicksCard({ label, title, image, href, placeholder }: IntelPicksCardProps) {
  const Tag = href ? "a" : "article";
  return (
    <Tag
      {...(href ? { href } : {})}
      className={`group flex-shrink-0 snap-start overflow-hidden rounded-[var(--radius)] border transition-all duration-200 ${placeholder ? "pointer-events-none opacity-[.18]" : ""}`}
      style={{
        background: "rgba(255,255,255,.018)",
        borderColor: "var(--border)",
        flex: "0 0 calc(50% - 6px)",
        minWidth: 0,
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        className="overflow-hidden"
        style={{ aspectRatio: "16/9", background: "#0e0e0e", borderBottom: "1px solid var(--border)" }}
      >
        {image ? (
          <img
            src={image}
            alt="thumbnail"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: "brightness(.75) saturate(.8)" }}
          />
        ) : (
          <ThumbGrid />
        )}
      </div>
      <div className="px-[18px] pb-5 pt-4">
        <div className="mb-2 text-[11px] uppercase tracking-[.1em]" style={{ color: "var(--muted)" }}>
          {label}
        </div>
        <div
          className="text-[15px] font-medium leading-[1.4]"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            opacity: placeholder ? 0.4 : 1,
          }}
        >
          {title}
        </div>
      </div>
    </Tag>
  );
}
