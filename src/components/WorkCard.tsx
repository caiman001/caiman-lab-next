"use client";

import ThumbGrid from "./ThumbGrid";

interface WorkCardProps {
  num: string;
  title: string;
  desc: string;
  tags: string[];
}

export default function WorkCard({ num, title, desc, tags }: WorkCardProps) {
  return (
    <a
      className="card group block overflow-hidden rounded-[var(--radius)] border text-inherit no-underline"
      style={{
        background: "rgba(255,255,255,.018)",
        borderColor: "var(--border)",
        transition: "border-color .2s, transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, background .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.025)";
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,.018)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="relative flex h-[220px] items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg,#0e0e0e 0%,#161618 100%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <ThumbGrid />
      </div>
      <div className="px-[26px] pb-[26px] pt-6">
        <div className="mb-3 text-[11px] tracking-[.06em]" style={{ color: "var(--muted)" }}>
          {num}
        </div>
        <h3
          className="mb-2 text-2xl font-bold"
          style={{ fontFamily: "'Cormorant Garamond','PingFang SC',sans-serif", letterSpacing: "-.04em" }}
        >
          {title}
        </h3>
        <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>
          {desc}
        </p>
        <div className="mt-[18px] flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border px-2.5 py-0.5 text-[11px]"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
