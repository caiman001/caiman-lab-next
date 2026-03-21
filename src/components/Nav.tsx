"use client";

const links = [
  { href: "#work", label: "Work" },
  { href: "#intel", label: "Intel" },
  { href: "#design", label: "Design" },
  { href: "#explore", label: "Explore" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-8 py-3">
      <div
        className="mx-auto flex h-12 max-w-[calc(var(--max)-64px)] items-center justify-between rounded-[10px] border px-6"
        style={{
          background: "rgba(8,8,8,.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderColor: "var(--border)",
        }}
      >
        <a
          href="#"
          className="text-[13px] font-extrabold tracking-[.08em]"
          style={{
            fontFamily: "'Cormorant Garamond','PingFang SC',sans-serif",
            color: "var(--fg)",
            textDecoration: "none",
          }}
        >
          CAIMAN.LAB
        </a>
        <nav className="flex gap-0.5">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="nav-link rounded-md px-3 py-1.5 text-[13px] transition-colors hover:bg-white/5"
      style={{ color: "var(--muted)", textDecoration: "none" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
    >
      {label}
    </a>
  );
}
