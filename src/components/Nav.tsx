"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), { ssr: false });

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
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 14, left: "50%", transform: "translateX(-50%)",
      zIndex: 100, pointerEvents: "none",
    }}>
      <div style={{ pointerEvents: "auto" }}>
        <LiquidGlass
          cornerRadius={999}
          displacementScale={40}
          blurAmount={0.07}
          saturation={140}
          aberrationIntensity={1.4}
          elasticity={0.25}
          mode="standard"
          padding="0 4px"
        >
          <div style={{ height: 42, display: "flex", alignItems: "center", padding: "0 10px", gap: 0 }}>
            <a href="/" style={{
              fontFamily: "'Press Start 2P',monospace", fontSize: 8,
              color: "rgba(255,255,255,.8)", textDecoration: "none",
              letterSpacing: ".04em", paddingRight: 16, marginRight: 6,
              borderRight: "1px solid rgba(255,255,255,.1)", whiteSpace: "nowrap",
            }}>
              CAIMAN.LAB
            </a>
            {LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} style={{
                fontSize: 12, textDecoration: "none", letterSpacing: ".02em",
                padding: "5px 12px", borderRadius: 999,
                color: active === id ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.42)",
                background: active === id ? "rgba(255,255,255,.12)" : "transparent",
                transition: "all .25s", whiteSpace: "nowrap",
              }}>
                {label}
              </a>
            ))}
          </div>
        </LiquidGlass>
      </div>
    </nav>
  );
}
