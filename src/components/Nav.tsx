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
      padding: "8px var(--px)",
      background: scrolled ? "rgba(0,0,0,.5)" : "transparent",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      transition: "background .4s",
    }}>
      <div style={{ maxWidth: "var(--max)", margin: "0 auto" }}>
        <LiquidGlass
          cornerRadius={999}
          displacementScale={36}
          blurAmount={0.06}
          saturation={130}
          aberrationIntensity={1.2}
          elasticity={0.2}
          mode="standard"
          padding="0 20px"
          style={{ width: "100%" }}
        >
          <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", minWidth: 600 }}>
            <a href="/" style={{ fontFamily: "'Press Start 2P',monospace", fontSize: 10, color: "rgba(255,255,255,.85)", textDecoration: "none", letterSpacing: ".04em" }}>
              CAIMAN.LAB
            </a>
            <div style={{ display: "flex", gap: 4 }}>
              {LINKS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} style={{
                  fontSize: 13, textDecoration: "none", letterSpacing: ".02em",
                  padding: "6px 14px", borderRadius: 999,
                  color: active === id ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.4)",
                  background: active === id ? "rgba(255,255,255,.12)" : "transparent",
                  transition: "all .25s",
                }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </LiquidGlass>
      </div>
    </nav>
  );
}
