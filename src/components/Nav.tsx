"use client";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "intel", label: "Intel" },
  { id: "design", label: "Design" },
  { id: "explore", label: "Explore" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav className="nav" style={{ borderBottomColor: scrolled ? "rgba(255,255,255,.07)" : "transparent" }}>
      <div className="nav-inner">
        <a href="/" style={{
          fontFamily: "'Press Start 2P',monospace", fontSize: 10,
          color: "var(--fg)", textDecoration: "none", letterSpacing: ".04em", opacity: .85,
        }}>
          CAIMAN.LAB
        </a>
        <div style={{ display: "flex", gap: 28 }}>
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} style={{
              fontSize: 12, textDecoration: "none", letterSpacing: ".03em",
              color: active === id ? "var(--fg)" : "var(--fg3)",
              transition: "color .2s",
            }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
