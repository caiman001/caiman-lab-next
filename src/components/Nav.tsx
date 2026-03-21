"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), { ssr: false });

const LINKS = [
  { id: "work",    label: "Work"    },
  { id: "intel",   label: "Intel"   },
  { id: "design",  label: "Design"  },
  { id: "explore", label: "Explore" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="nav-wrap" aria-label="Primary navigation">
      <LiquidGlass
        style={{ width: "max-content" }}
        cornerRadius={999}
        displacementScale={32}
        blurAmount={0.05}
        saturation={130}
        aberrationIntensity={1.0}
        elasticity={0.2}
        mode="standard"
        padding="0 4px"
      >
        <nav className="nav-shell">
          <a href="/" className="nav-brand">
            CAIMAN.LAB
          </a>

          {/* Separator */}
          <div style={{
            width: 1,
            height: 14,
            background: "rgba(255,255,255,.12)",
            margin: "0 4px",
            flexShrink: 0,
          }} />

          <div className="nav-links">
            {LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${active === id ? " is-active" : ""}`}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </LiquidGlass>
    </div>
  );
}
