"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LiquidGlass = dynamic(() => import("liquid-glass-react"), { ssr: false });

const LINKS = [
  { id: "work", label: "Work" },
  { id: "intel", label: "Intel" },
  { id: "design", label: "Design" },
  { id: "explore", label: "Explore" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a href="/" className="nav-brand nav-brand-floating">CAIMAN.LAB</a>
      <div className="nav-wrap" aria-label="Primary">
        <LiquidGlass
          style={{ width: "max-content" }}
          cornerRadius={999}
          displacementScale={36}
          blurAmount={0.06}
          saturation={135}
          aberrationIntensity={1.2}
          elasticity={0.22}
          mode="standard"
          padding="0 6px"
        >
          <nav className="nav-shell">
            <div className="nav-links">
              {LINKS.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={`nav-link ${active === id ? "is-active" : ""}`}>
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </LiquidGlass>
      </div>
    </>
  );
}
