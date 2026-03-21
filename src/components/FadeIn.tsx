"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps { children: ReactNode; delay?: number; }

export default function FadeIn({ children, delay }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.05, rootMargin: "0px 0px -16px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (!mounted) {
    // SSR: render children fully visible, no animation
    return <div>{children}</div>;
  }

  return (
    <div ref={ref} data-fade="" {...(delay ? { "data-delay": String(delay) } : {})}>
      {children}
    </div>
  );
}
