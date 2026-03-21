"use client";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { obs.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      padding: "10px var(--px)",
      background: scrolled ? "rgba(0,0,0,.72)" : "transparent",
      backdropFilter: scrolled ? "blur(32px) saturate(1.6)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(32px) saturate(1.6)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,.08)" : "1px solid transparent",
      transition: "background .4s, border-color .4s, backdrop-filter .4s",
    }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto", height: 44, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <a href="/" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 10, color: "rgba(255,255,255,.85)", textDecoration: "none", letterSpacing: ".04em" }}>
          CAIMAN.LAB
        </a>
        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} style={{
              fontSize: 13, textDecoration: "none", letterSpacing: ".02em",
              padding: "6px 14px", borderRadius: 999,
              color: active === id ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.38)",
              background: active === id ? "rgba(255,255,255,.1)" : "transparent",
              backdropFilter: active === id ? "blur(8px)" : "none",
              border: active === id ? "1px solid rgba(255,255,255,.14)" : "1px solid transparent",
              transition: "all .25s",
            }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
