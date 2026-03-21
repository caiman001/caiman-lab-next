import FadeIn from "@/components/FadeIn";
import WorkCard from "@/components/WorkCard";
import InvestClient from "@/components/InvestClient";
import CountdownSection from "@/components/CountdownSection";
import TravelMapClient from "@/components/TravelMapClient";
import IntelPicksCard from "@/components/IntelPicksCard";
import IntelSignalCard from "@/components/IntelSignalCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import { Separator } from "@/components/ui/separator";
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

      {/* ── Background ambient glows ── */}
      <div aria-hidden style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-20%", left: "-10%", width: "60vw", height: "60vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(120,120,180,.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", top: "30%", right: "-15%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(80,80,140,.05) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "20%", width: "40vw", height: "40vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(60,60,100,.04) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* ── Hero ── */}
      <section style={{ position: "relative", zIndex: 1, padding: "160px 0 130px", overflow: "hidden" }}>
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
              <span style={{ color: "rgba(255,255,255,.2)", WebkitTextStroke: "1px rgba(255,255,255,.15)" }}>LAB</span>
            </h1>
            {/* Skill tags — glass pills */}
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
          <FadeIn><SectionHead label="Work" desc="最新做的项目实验" /></FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 16 }}>
            <FadeIn delay={1}><WorkCard num="01 · BRAND / PRODUCT / AI" title="Spring OS" desc="为创意工具设计的视觉与交互语言。" tags={["Brand","Product","AI"]} /></FadeIn>
            <FadeIn delay={2}><WorkCard num="02 · INTERFACE / MOTION / SYSTEMS" title="Studio Flow" desc="具有电影节奏感的 AI 工作空间。" tags={["Interface","Motion","Systems"]} /></FadeIn>
          </div>
        </div>
      </section>

      {/* ── Intel ── */}
      <section id="intel" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn><SectionHead label="Intel" desc="精选链接、视频与阅读材料" /></FadeIn>

          {/* Picks */}
          <FadeIn>
            <p className="label" style={{ marginBottom: 16, opacity: .6 }}>Picks</p>
            <HorizontalScroll>
              <IntelPicksCard label="Video · YouTube" title="How to Use Claude Skills as a Designer" image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg" href="#" />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
              <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
            </HorizontalScroll>
          </FadeIn>

          {/* Signal */}
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
          <FadeIn><SectionHead label="Design" desc="设计实验、参考资料与生产笔记" /></FadeIn>
          <FadeIn>
            <div className="glass" style={{ padding: "52px 0", textAlign: "center" }}>
              <p className="meta" style={{ opacity: .45, letterSpacing: ".06em" }}>内容整理中 · Coming Soon</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Explore ── */}
      <section id="explore" className="section" style={{ position: "relative", zIndex: 1 }}>
        <div style={C}>
          <FadeIn><SectionHead label="Explore" desc="投资追踪、语言备考与旅行记录" /></FadeIn>
          <FadeIn>
            <div className="explore-grid">
              <div className="explore-cell">
                <p className="label" style={{ marginBottom: 24 }}>Invest</p>
                <InvestClient />
              </div>
              <div className="explore-cell">
                <p className="label" style={{ marginBottom: 24 }}>English</p>
                <CountdownSection />
              </div>
            </div>
            <div className="explore-full glass" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, borderTop: "1px solid rgba(255,255,255,.08)" }}>
              <p className="label" style={{ marginBottom: 24 }}>Travel</p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,.07)" }}>
                {[["12","城市"],["8","国家"],["10,740","km"],["TBD","下一站"]].map(([v,l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-.04em", lineHeight: 1, marginBottom: 6 }}>{v}</div>
                    <div className="meta" style={{ letterSpacing: ".1em", textTransform: "uppercase" }}>{l}</div>
                  </div>
                ))}
              </div>
              <TravelMapClient />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,.07)", background: "rgba(0,0,0,.6)", backdropFilter: "blur(24px)" }}>
        <div style={{ ...C, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="meta" style={{ letterSpacing: ".06em", color: "rgba(255,255,255,.25)" }}>© 2026 · CAIMAN.LAB</span>
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
