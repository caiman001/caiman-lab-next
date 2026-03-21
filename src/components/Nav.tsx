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
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      borderBottom: "1px solid rgba(255,255,255,.06)",
      background: "rgba(8,8,8,.92)",
      backdropFilter: "blur(20px)",
    }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "0 var(--px)", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 10, color: "var(--fg)", textDecoration: "none", letterSpacing: ".04em", opacity: .9 }}>
          CAIMAN.LAB
        </a>
        <div style={{ display: "flex", gap: 32 }}>
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} style={{
              fontSize: 12, textDecoration: "none", letterSpacing: ".04em",
              color: active === id ? "var(--fg)" : "var(--muted)",
              transition: "color .2s",
            }}>{label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
