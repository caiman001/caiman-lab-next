"use client";
import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps { children: ReactNode; delay?: number; }

export default function FadeIn({ children, delay }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.07, rootMargin: "0px 0px -24px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} data-fade="" {...(delay ? { "data-delay": String(delay) } : {})}>
      {children}
    </div>
  );
}
