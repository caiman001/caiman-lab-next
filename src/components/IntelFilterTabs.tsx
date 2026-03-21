"use client";

import { useState } from "react";

const filters = [
  { key: "all", label: "全部" },
  { key: "youtube", label: "YouTube" },
  { key: "x", label: "X" },
  { key: "newsletter", label: "Newsletter" },
  { key: "podcast", label: "Podcast" },
  { key: "video", label: "Video" },
];

export default function IntelFilterTabs() {
  const [active, setActive] = useState("all");

  return (
    <div className="mb-5 flex flex-wrap gap-2">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => setActive(f.key)}
          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] transition-all duration-200"
          style={{
            borderColor: active === f.key ? "rgba(255,255,255,.25)" : "var(--border)",
            color: active === f.key ? "var(--fg)" : "var(--muted)",
            background: active === f.key ? "rgba(255,255,255,.04)" : "transparent",
            fontFamily: "'Inter',sans-serif",
            cursor: "pointer",
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
