"use client";
import { useEffect, useState } from "react";
const TARGET = new Date("2026-06-14T00:00:00+08:00").getTime();
const START  = new Date("2026-01-01T00:00:00+08:00").getTime();
function pad(n: number) { return String(n).padStart(2, "0"); }

export default function CountdownSection() {
  const [diff, setDiff] = useState(TARGET - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(TARGET - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  const progress = Math.min(1, Math.max(0, (Date.now() - START) / (TARGET - START)));

  return (
    <div>
      {/* Digits */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 24 }}>
        {[{ v: d, u: "DAYS" }, { v: h, u: "HRS" }, { v: m, u: "MIN" }, { v: s, u: "SEC" }].map((item, i) => (
          <div key={item.u} style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
            {i > 0 && <span className="cd-sep">:</span>}
            <div style={{ textAlign: "center" }}>
              <div className="cd-num">{pad(item.v)}</div>
              <div className="cd-unit">{item.u}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Progress */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span className="meta">2026.01.01</span>
          <span className="meta">目标 2026.06.14</span>
        </div>
        <div style={{ height: 2, background: "rgba(255,255,255,.07)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(progress * 100).toFixed(1)}%`, background: "rgba(255,255,255,.35)", borderRadius: 999, transition: "width 1s linear" }} />
        </div>
        <div style={{ marginTop: 8, textAlign: "right" }}>
          <span className="meta">{(progress * 100).toFixed(1)}% 完成</span>
        </div>
      </div>
    </div>
  );
}
