import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import InvestClient from "@/components/InvestClient";
import CountdownSection from "@/components/CountdownSection";
import TravelMapClient from "@/components/TravelMapClient";
import IntelPicksCard from "@/components/IntelPicksCard";
import IntelSignalCard from "@/components/IntelSignalCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import signalData from "../../public/data/signal-data.json";

const C: React.CSSProperties = { maxWidth: "var(--max)", margin: "0 auto", padding: "0 var(--px)" };

function SectionHead({ label, desc }: { label: string; desc: string }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
      <span className="label">{label}</span>
      <span className="meta">{desc}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ position: "relative" }}>

      {/* ── Ambient background glows ── */}
      <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", left: "-5%", width: "55vw", height: "55vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(100,100,200,.09) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "35%", right: "-10%", width: "45vw", height: "45vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(80,60,160,.06) 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "25%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(60,80,140,.05) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      {/* ── Hero ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "160px 0 130px" }}>
        <div style={C}>
          <FadeIn>
            <div style={{ marginBottom: 20 }}>
              <span className="label">设计师 · AI 原生 · 独立创作者</span>
            </div>
            <h1 style={{
              fontFamily: "Inter, ui-sans-serif, sans-serif",
              fontSize: "clamp(56px, 9vw, 112px)",
              fontWeight: 800, letterSpacing: "-.055em", lineHeight: .9,
              color: "rgba(255,255,255,.92)", marginBottom: 52,
            }}>
              CAIMAN<br />
              <span style={{ color: "rgba(255,255,255,.18)", WebkitTextStroke: "1px rgba(255,255,255,.14)" }}>LAB</span>
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,.08)" }}>
              {["UI / UX","品牌设计","AI 工具","前端开发","视觉叙事"].map((s, i) => (
                <span key={s} className="tag" style={{ color: i === 0 ? "rgba(255,255,255,.75)" : undefined }}>{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <SectionHead label="Work" desc="最新做的项目实验" />
          </FadeIn>
          {/* Equal 2-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <FadeIn delay={1}><WorkCard num="01 · BRAND / PRODUCT / AI" title="Spring OS" desc="为创意工具设计的视觉与交互语言。" tags={["Brand","Product","AI"]} /></FadeIn>
            <FadeIn delay={2}><WorkCard num="02 · INTERFACE / MOTION / SYSTEMS" title="Studio Flow" desc="具有电影节奏感的 AI 工作空间。" tags={["Interface","Motion","Systems"]} /></FadeIn>
          </div>
        </div>
      </section>

      {/* ── Intel ── */}
      <section id="intel" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>👀</span>
                <span className="label">Intel</span>
              </div>
              <span className="meta">精选链接、视频与阅读材料</span>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="label" style={{ marginBottom: 16, opacity: .6 }}>Picks</p>
            <HorizontalScroll>
              <IntelPicksCard label="Video · YouTube" title="How to Use Claude Skills as a Designer" image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg" href="#" />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
            </HorizontalScroll>
          </FadeIn>

          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 64, marginBottom: 16 }}>
              <p className="label" style={{ opacity: .6 }}>Signal · 每日 AI 速讯</p>
              <p className="meta" style={{ opacity: .4 }}>{signalData.length} entries</p>
            </div>
            <HorizontalScroll>
              {signalData.map((item, i) => (
                <IntelSignalCard key={i} date={item.date} source={item.source} name={item.name} role={item.role} summary={item.summary} summary_en={item.summary_en ?? ""} url={item.url} />
              ))}
            </HorizontalScroll>
          </FadeIn>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>✦</span>
                <span className="label">Design</span>
              </div>
              <span className="meta">设计实验、参考资料与生产笔记</span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="glass" style={{ padding: "52px 0", textAlign: "center" }}>
              <p className="meta" style={{ opacity: .4, letterSpacing: ".06em" }}>内容整理中 · Coming Soon</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore ── */}
      <section id="explore" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>🔭</span>
                <span className="label">Explore</span>
              </div>
              <span className="meta">投资追踪、语言备考与旅行记录</span>
            </div>
          </FadeIn>
          <FadeIn>
            {/* Unified wrapper — single border-radius, no raw corners */}
            <div className="explore-wrap">
              <div className="explore-grid">
                {/* Invest */}
                <div className="explore-cell explore-animate">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                    <span style={{ fontSize: 18 }}>📈</span>
                    <p className="label">Invest</p>
                  </div>
                  <InvestClient />
                </div>
                {/* English */}
                <div className="explore-cell explore-animate">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                    <span style={{ fontSize: 18 }}>🎯</span>
                    <p className="label">English</p>
                  </div>
                  <CountdownSection />
                </div>
              </div>
              {/* Travel — same wrapper, no extra radius override */}
              <div className="explore-full explore-animate">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                  <span style={{ fontSize: 18 }}>✈️</span>
                  <p className="label">Travel</p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginBottom: 28, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                  {[
                    { v: "12",     l: "城市", icon: "🏙️" },
                    { v: "8",      l: "国家", icon: "🌏" },
                    { v: "10,740", l: "km",   icon: "📍" },
                    { v: "TBD",    l: "下一站", icon: "🗺️" },
                  ].map(({ v, l, icon }) => (
                    <div key={l}>
                      <div style={{ fontSize: 16, marginBottom: 6 }}>{icon}</div>
                      <div className="explore-stat-val">{v}</div>
                      <div className="meta" style={{ marginTop: 6, letterSpacing: ".1em", textTransform: "uppercase" }}>{l}</div>
                    </div>
                  ))}
                </div>
                <TravelMapClient />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,.07)", background: "rgba(5,5,8,.7)", backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" }}>
        <div style={{ ...C, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="meta" style={{ letterSpacing: ".06em", color: "rgba(255,255,255,.22)" }}>© 2026 · CAIMAN.LAB</span>
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <a href="https://github.com/caiman001" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.28)", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,.28)", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
