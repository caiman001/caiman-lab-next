export default function ThumbGrid({ label }: { label?: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{
        background: "#0b0b0b",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {label && (
        <span
          className="relative z-[1] text-[10px] uppercase tracking-[.2em]"
          style={{ color: "rgba(255,255,255,.08)", fontFamily: "'Inter',sans-serif" }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
