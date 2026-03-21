"use client";

import { useRef, useEffect, type ReactNode } from "react";

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden pb-0.5"
      style={{
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        maskImage:
          "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)",
      }}
    >
      {children}
    </div>
  );
}
