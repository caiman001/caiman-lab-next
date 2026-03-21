import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import InvestClient from "@/components/InvestClient";
import CountdownSection from "@/components/CountdownSection";
import TravelMapClient from "@/components/TravelMapClient";
import IntelPicksCard from "@/components/IntelPicksCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import signalData from "../../public/data/signal-data.json";

const C: React.CSSProperties = { maxWidth: "var(--max)", margin: "0 auto", padding: "0 var(--px)" };

export default function Home() {
  return (
    <main>

      {/* ── Hero ── */}
      <section style={{ position: "relative", padding: "140px 0 120px", overflow: "hidden" }}>
        {/* Spotlight */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 60% 55% at 22% 42%, rgba(255,255,255,.04) 0%, transparent 68%)",
          pointerEvents: "none",
        }} />
        <div style={{ ...C, position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ marginBottom: 16 }}>
              <span className="eyebrow">设计师 · AI 原生 · 独立创作者</span>
            </div>
            <h1 style={{
              fontFamily: "Inter, ui-sans-serif, sans-serif",
              fontSize: "clamp(52px, 8vw, 104px)",
              fontWeight: 800, letterSpacing: "-.05em", lineHeight: .92,
              color: "#fff", marginBottom: 48,
            }}>
              CAIMAN<br />
              <span style={{ color: "rgba(255,255,255,.28)" }}>LAB</span>
            </h1>
            <div style={{
              display: "flex", gap: 24, alignItems: "center",
              paddingTop: 28, borderTop: "1px solid var(--border)",
            }}>
              {["UI / UX","品牌设计","AI 工具","前端开发","视觉叙事"].map((s, i) => (
                <span key={s} style={{ fontSize: 11, letterSpacing: ".04em", color: i === 0 ? "rgba(255,255,255,.7)" : "var(--muted)" }}>{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" style={{ padding: "96px 0" }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
              <p className="eyebrow">Work</p>
              <p style={{ fontSize: 12, color: "var(--muted)" }}>最新做的项目实验</p>
            </div>
          </FadeIn>
          {/* 2-col unequal grid like atom63 */}
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 12 }}>
            <FadeIn delay={1}>
              <WorkCard num="01 · BRAND / PRODUCT / AI" title="Spring OS" desc="为创意工具设计的视觉与交互语言。" tags={["Brand","Product","AI"]} />
            </FadeIn>
            <FadeIn delay={2}>
              <WorkCard num="02 · INTERFACE / MOTION / SYSTEMS" title="Studio Flow" desc="具有电影节奏感的 AI 工作空间。" tags={["Interface","Motion","Systems"]} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Intel ── */}
      <section id="intel" style={{ padding: "96px 0" }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
              <p className="eyebrow">Intel</p>
              <p style={{ fontSize: 12, color: "var(--muted)" }}>精选链接、视频与阅读材料</p>
            </div>
          </FadeIn>

          {/* Picks */}
          <FadeIn>
            <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14, opacity: .55 }}>Picks</p>
            <HorizontalScroll>
              <IntelPicksCard label="Video · YouTube" title="How to Use Claude Skills as a Designer" image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg" href="#" />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
            </HorizontalScroll>
          </FadeIn>

          {/* Signal */}
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 56, marginBottom: 0 }}>
              <p style={{ fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", opacity: .55 }}>Signal · 每日 AI 速讯</p>
              <p style={{ fontSize: 10, color: "var(--muted)", opacity: .35 }}>{signalData.length} entries</p>
            </div>
          </FadeIn>
          <FadeIn>
            {signalData.map((item, i) => (
              <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="signal-row">
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "-.01em", marginBottom: 3 }}>{item.name}</div>
                  <div style={{ fontSize: 10, color: "var(--muted)" }}>{item.role}</div>
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(232,232,232,.6)" }}>{item.summary}</div>
                <div style={{ fontSize: 12, lineHeight: 1.65, color: "rgba(232,232,232,.25)" }}>{item.summary_en}</div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "var(--muted)", opacity: .45, fontVariantNumeric: "tabular-nums", marginBottom: 6 }}>{item.date}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", opacity: .3 }}>→</div>
                </div>
              </a>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" style={{ padding: "96px 0" }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
              <p className="eyebrow">Design</p>
              <p style={{ fontSize: 12, color: "var(--muted)" }}>设计实验、参考资料与生产笔记</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: "40px 0", textAlign: "center" }}>
              <p style={{ fontSize: 12, color: "var(--muted)", opacity: .4, letterSpacing: ".04em" }}>内容整理中 · Coming Soon</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore ── */}
      <section id="explore" style={{ padding: "96px 0" }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
              <p className="eyebrow">Explore</p>
              <p style={{ fontSize: 12, color: "var(--muted)" }}>投资追踪、语言备考与旅行记录</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="explore-grid">
              <div className="explore-cell">
                <p className="eyebrow" style={{ marginBottom: 24 }}>Invest</p>
                <InvestClient />
              </div>
              <div className="explore-cell">
                <p className="eyebrow" style={{ marginBottom: 24 }}>English</p>
                <CountdownSection />
              </div>
            </div>
            <div className="explore-full">
              <p className="eyebrow" style={{ marginBottom: 24 }}>Travel</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                {[["12","城市"],["8","国家"],["10,740","km"],["TBD","下一站"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1, marginBottom: 6 }}>{v}</div>
                    <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
              <TravelMapClient />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div style={{ ...C, height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".06em" }}>© 2026 · CAIMAN.LAB</span>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="https://github.com/caiman001" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
