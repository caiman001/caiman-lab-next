"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "work",    label: "Work" },
  { id: "intel",   label: "Intel" },
  { id: "design",  label: "Design" },
  { id: "explore", label: "Explore" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav style={{ position: "sticky", top: 12, zIndex: 100, padding: "0 32px" }}>
      <div style={{
        maxWidth: "1080px", margin: "0 auto",
        height: 48, display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,8,8,.88)", backdropFilter: "blur(20px)",
        border: "1px solid var(--border)", borderRadius: "var(--radius)",
        padding: "0 20px",
      }}>
        <a href="/" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 11, color: "var(--fg)", textDecoration: "none", letterSpacing: ".04em" }}>
          CAIMAN.LAB
        </a>
        <div style={{ display: "flex", gap: 4 }}>
          {LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontSize: 13,
                padding: "5px 12px",
                borderRadius: 6,
                textDecoration: "none",
                transition: "color .2s, background .2s",
                color: active === id ? "var(--fg)" : "var(--muted)",
                background: active === id ? "rgba(255,255,255,.06)" : "transparent",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
