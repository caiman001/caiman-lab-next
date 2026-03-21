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
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Countdown digits */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
        {[{ v: d, u: "DAYS" }, { v: h, u: "HRS" }, { v: m, u: "MIN" }, { v: s, u: "SEC" }].map((item, i) => (
          <div key={item.u} style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
            {i > 0 && <span className="cd-sep">:</span>}
            <div style={{ textAlign: "center" }}>
              <div className="cd-num" style={{ color: "var(--fg)" }}>{pad(item.v)}</div>
              <div className="cd-unit-label" style={{ fontSize: 7 }}>{item.u}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", marginBottom: 8 }}>
          <span>2026.01.01</span><span>目标 2026.06.14</span>
        </div>
        <div style={{ height: 3, background: "rgba(255,255,255,.06)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(progress * 100).toFixed(1)}%`, background: "linear-gradient(90deg,rgb(6,182,212),rgba(6,182,212,.4))", borderRadius: 999, transition: "width 1s linear" }} />
        </div>
        <div style={{ marginTop: 8, fontSize: 11, color: "var(--muted)", textAlign: "right" }}>{(progress * 100).toFixed(1)}% 完成</div>
      </div>
    </div>
  );
}
