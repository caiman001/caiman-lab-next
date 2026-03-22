import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import InvestClient from "@/components/InvestClient";
import CountdownSection from "@/components/CountdownSection";
import TravelMapClient from "@/components/TravelMapClient";
import IntelPicksCard from "@/components/IntelPicksCard";
import IntelSignalCard from "@/components/IntelSignalCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import CardPlaceholder from "@/components/CardPlaceholder";
import signalData from "../../public/data/signal-data.json";

const C: React.CSSProperties = {
  maxWidth: "var(--max)",
  margin: "0 auto",
  padding: "0 var(--px)",
};

export default function Home() {
  return (
    <main style={{ position: "relative" }}>

      {/* ── Ambient glow (subtle, single source) ── */}
      <div
        aria-hidden
        style={{
          position: "fixed", inset: 0, zIndex: 0,
          pointerEvents: "none", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: "-20%", left: "-10%",
          width: "65vw", height: "65vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,106,240,.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%", right: "-5%",
          width: "45vw", height: "45vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(60,60,160,.05) 0%, transparent 65%)",
          filter: "blur(100px)",
        }} />
      </div>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative", zIndex: 1,
          padding: "152px 0 120px",
        }}
      >
        <div style={C}>
          <FadeIn>
            {/* Eyebrow */}
            <div style={{ marginBottom: 32 }}>
              <span className="t-label">设计师 · AI 原生 · 独立创作者</span>
            </div>

            {/* Headline */}
            <h1 className="t-display" style={{ marginBottom: 40 }}>
              CAIMAN<br />
              <span style={{
                color: "rgba(255,255,255,.14)",
                WebkitTextStroke: "1px rgba(255,255,255,.1)",
              }}>
                LAB
              </span>
            </h1>

            {/* Divider + tags */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 6,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
            }}>
              {["UI / UX", "品牌设计", "AI 工具", "前端开发", "视觉叙事"].map((s, i) => (
                <span key={s} className={`tag${i === 0 ? " is-accent" : ""}`}>{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" className="section" style={{ zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div className="section-header">
              <div className="section-header-left">
                <span className="t-label">Work</span>
              </div>
              <span className="meta">最新项目实验</span>
            </div>
          </FadeIn>

          <div className="work-grid">
            <FadeIn delay={1}>
              <WorkCard
                index={0}
                num="01 · BRAND / PRODUCT / AI"
                title="Spring OS"
                desc="为创意工具设计的视觉与交互语言。"
                tags={["Brand", "Product", "AI"]}
              />
            </FadeIn>
            <FadeIn delay={2}>
              <WorkCard
                index={1}
                num="02 · INTERFACE / MOTION / SYSTEMS"
                title="Studio Flow"
                desc="具有电影节奏感的 AI 工作空间。"
                tags={["Interface", "Motion", "Systems"]}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Intel ── */}
      <section id="intel" className="section" style={{ zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div className="section-header">
              <div className="section-header-left">
                <span className="t-label">Intel</span>
              </div>
              <span className="meta">精选链接、视频与阅读材料</span>
            </div>
          </FadeIn>

          {/* Picks */}
          <FadeIn>
            <p className="t-label" style={{ marginBottom: 14, opacity: .45 }}>Picks</p>
            <HorizontalScroll>
              <IntelPicksCard
                label="Video · YouTube"
                title="How to Use Claude Skills as a Designer"
                image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg"
                href="#"
              />
              <IntelPicksCard label="Coming Soon" title="" placeholder />
              <IntelPicksCard label="Coming Soon" title="" placeholder />
            </HorizontalScroll>
          </FadeIn>

          {/* Signal */}
          <FadeIn>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginTop: 56,
              marginBottom: 14,
            }}>
              <p className="t-label" style={{ opacity: .45 }}>Signal · 每日 AI 速讯</p>
              <p className="meta" style={{ opacity: .35 }}>{signalData.length} entries</p>
            </div>
            <HorizontalScroll>
              {signalData.map((item, i) => (
                <IntelSignalCard
                  key={i}
                  date={item.date}
                  source={item.source}
                  name={item.name}
                  role={item.role}
                  summary={item.summary}
                  summary_en={item.summary_en ?? ""}
                  url={item.url}
                />
              ))}
            </HorizontalScroll>
          </FadeIn>
        </div>
      </section>

      {/* ── Design ── */}
      <section id="design" className="section" style={{ zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div className="section-header">
              <div className="section-header-left">
                <span className="t-label">Design</span>
              </div>
              <span className="meta">设计实验 · 生产笔记</span>
            </div>
          </FadeIn>
          <FadeIn>
            <HorizontalScroll>
              <CardPlaceholder />
              <CardPlaceholder />
            </HorizontalScroll>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore ── */}
      <section id="explore" className="section" style={{ zIndex: 1 }}>
        <div style={C}>
          <FadeIn>
            <div className="section-header">
              <div className="section-header-left">
                <span className="t-label">Explore</span>
              </div>
              <span className="meta">投资追踪、语言备考与旅行记录</span>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="explore-wrap">

              <div className="explore-grid">
                {/* Invest */}
                <div className="explore-cell explore-animate">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div className="card-dot" />
                    <p className="t-label">Invest</p>
                  </div>
                  <InvestClient />
                </div>

                {/* English */}
                <div className="explore-cell explore-animate">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div className="card-dot" />
                    <p className="t-label">English</p>
                  </div>
                  <CountdownSection />
                </div>
              </div>

              {/* Travel */}
              <div className="explore-full explore-animate">
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                  <div className="card-dot" />
                  <p className="t-label">Travel</p>
                </div>

                {/* Stats row */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  marginBottom: 24,
                  paddingBottom: 20,
                  borderBottom: "1px solid var(--border)",
                }}>
                  {[
                    { v: "12",     l: "城市" },
                    { v: "8",      l: "国家" },
                    { v: "10,740", l: "km"   },
                    { v: "TBD",    l: "下一站" },
                  ].map(({ v, l }) => (
                    <div key={l}>
                      <div className="explore-stat-val">{v}</div>
                      <div className="meta" style={{ marginTop: 6, letterSpacing: ".08em", textTransform: "uppercase" }}>{l}</div>
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
      <footer style={{
        position: "relative", zIndex: 1,
        borderTop: "1px solid var(--border-h)",
        background: "rgba(255,255,255,.01)",
      }}>
        <div style={{
          ...C,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <span className="meta" style={{ color: "var(--fg3)" }}>© 2026 · CAIMAN.LAB</span>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a
              href="https://github.com/caiman001"
              target="_blank" rel="noopener noreferrer"
              className="social-link"
              style={{ display: "flex", lineHeight: 0 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank" rel="noopener noreferrer"
              className="social-link"
              style={{ display: "flex", lineHeight: 0 }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
