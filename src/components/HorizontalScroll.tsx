"use client";
import { useRef, useEffect, useState, type ReactNode } from "react";

export default function HorizontalScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbLeft, setThumbLeft] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  const updateThumb = () => {
    const el = ref.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const ratio = el.clientWidth / el.scrollWidth;
    const trackW = track.clientWidth;
    setThumbWidth(Math.max(32, trackW * ratio));
    setThumbLeft((el.scrollLeft / el.scrollWidth) * trackW);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    updateThumb();
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{
          display: "flex", flexWrap: "nowrap", gap: 12,
          overflowX: "auto", overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingBottom: 2,
        }}
      >
        {children}
      </div>
      {/* Scrollbar track */}
      <div
        ref={trackRef}
        style={{ marginTop: 12, height: 2, background: "rgba(255,255,255,.06)", borderRadius: 999, position: "relative", overflow: "hidden" }}
      >
        <div style={{
          position: "absolute", top: 0, height: "100%",
          left: thumbLeft, width: thumbWidth,
          background: "rgba(255,255,255,.22)", borderRadius: 999,
          transition: "left .1s linear, width .1s linear",
        }} />
      </div>
    </div>
  );
}
