import SectionHeader from "@/components/SectionHeader";
import WorkCard from "@/components/WorkCard";
import IntelPicksCard from "@/components/IntelPicksCard";
import IntelSignalCard from "@/components/IntelSignalCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import FadeIn from "@/components/FadeIn";
import ExploreCard from "@/components/ExploreCard";
import InvestSection from "@/components/InvestSection";
import CountdownSection from "@/components/CountdownSection";
import TravelMapClient from "@/components/TravelMapClient";
import signalData from "../../public/data/signal-data.json";

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ position: "relative", padding: "120px 0 100px", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% -5%,rgba(90,90,120,.1) 0%,transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "min(var(--max),100%)", zIndex: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 62% 58% at 38% 40%,black 5%,rgba(0,0,0,.6) 38%,transparent 68%)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "var(--max)", margin: "0 auto", padding: "0 32px" }}>
          <FadeIn>
            {/* Avatar */}
            <div style={{
              width: 80, height: 80, borderRadius: "50%", marginBottom: 24,
              background: "linear-gradient(135deg,#1a1a2e,#16213e)",
              border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28, color: "rgba(255,255,255,.3)",
              fontFamily: "'Inter',sans-serif", fontWeight: 700,
            }}>C</div>
            {/* Name */}
            <div style={{
              fontFamily: "'PingFang SC',-apple-system,sans-serif",
              fontSize: 40, fontWeight: 900, letterSpacing: "-.02em", lineHeight: 1.1,
              color: "#fff", marginBottom: 12,
              WebkitTextStroke: ".5px rgba(255,255,255,.4)",
            }}>CAIMAN</div>
            {/* Role */}
            <div style={{
              fontFamily: "'PingFang SC',-apple-system,sans-serif",
              fontSize: 20, fontWeight: 400, color: "rgba(255,255,255,.65)", marginBottom: 12,
            }}>
              设计师 · <strong style={{ fontWeight: 700, color: "rgba(255,255,255,.85)" }}>AI 原生</strong> · 独立创作者
            </div>
            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["UI / UX","品牌设计","AI 工具","前端开发","视觉叙事"].map(s => (
                <span key={s} style={{
                  border: "1px solid var(--border)", borderRadius: 999,
                  padding: "5px 14px", fontSize: 12, color: "var(--muted)",
                  fontFamily: "'Inter',sans-serif", letterSpacing: ".04em",
                  transition: "border-color .2s, color .2s",
                }}>{s}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Work ── */}
      <section id="work" style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "96px 32px" }}>
        <FadeIn>
          <SectionHeader eyebrow="Work" title="精选项目" description="最新做的项目实验" />
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FadeIn delay={1}>
            <WorkCard
              num="01 · BRAND / PRODUCT / AI"
              title="Spring OS"
              desc="为创意工具设计的视觉与交互语言。"
              tags={["Brand","Product","AI"]}
            />
          </FadeIn>
          <FadeIn delay={2}>
            <WorkCard
              num="02 · INTERFACE / MOTION / SYSTEMS"
              title="Studio Flow"
              desc="具有电影节奏感的 AI 工作空间。"
              tags={["Interface","Motion","Systems"]}
            />
          </FadeIn>
        </div>
      </section>

      {/* ── Intel ── */}
      <section id="intel" style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "96px 32px" }}>
        <FadeIn>
          <SectionHeader eyebrow="Intel" title="最近在看" description="精选链接、视频与阅读材料。" />
        </FadeIn>
        <FadeIn>
          <div style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>Picks</span>
          </div>
        </FadeIn>
        <FadeIn>
          <HorizontalScroll>
            <IntelPicksCard
              label="Video · YouTube"
              title="How to Use Claude Skills as a Designer"
              image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg"
              href="#"
            />
            <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
            <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
          </HorizontalScroll>
        </FadeIn>

        {/* Signal */}
        <FadeIn>
          <div style={{ marginTop: 48, paddingTop: 40, borderTop: "1px solid var(--border)", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)" }}>Signal</span>
            <span style={{ fontSize: 10, letterSpacing: ".08em", color: "var(--muted)", opacity: 0.45 }}>每日 AI 速讯</span>
          </div>
        </FadeIn>
        <FadeIn>
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
      </section>

      {/* ── Design ── */}
      <section id="design" style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "96px 32px" }}>
        <FadeIn>
          <SectionHeader eyebrow="Design" title="攒劲设计" description="设计实验、参考资料与生产笔记。" />
        </FadeIn>
        <FadeIn>
          <HorizontalScroll>
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
          </HorizontalScroll>
        </FadeIn>
      </section>

      {/* ── Explore ── */}
      <section id="explore" style={{ maxWidth: "var(--max)", margin: "0 auto", padding: "96px 32px" }}>
        <FadeIn>
          <SectionHeader eyebrow="Explore" title="其他探索" description="投资追踪、语言备考与旅行记录" />
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }}>
          <FadeIn>
            <ExploreCard eyebrow="Invest" title="股票理财">
              <InvestSection />
            </ExploreCard>
          </FadeIn>
          <FadeIn delay={1}>
            <ExploreCard eyebrow="English" title="语言学习">
              <CountdownSection />
            </ExploreCard>
          </FadeIn>
        </div>
        <FadeIn delay={2}>
          <ExploreCard eyebrow="Travel" title="旅行记录">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 16 }}>
              {[["12","城市"],["8","国家"],["10,740","km"],["TBD","下一站"]].map(([v,l]) => (
                <div key={l} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.03em", marginBottom: 4 }}>{v}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".06em" }}>{l}</div>
                </div>
              ))}
            </div>
            <TravelMapClient />
          </ExploreCard>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer style={{ padding: "12px 32px 20px" }}>
        <div style={{
          maxWidth: "calc(var(--max) - 64px)", margin: "0 auto",
          height: 48, display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(8,8,8,.92)", backdropFilter: "blur(20px)",
          border: "1px solid var(--border)", borderRadius: "var(--radius)",
          padding: "0 24px",
        }}>
          <span style={{ fontSize: 13, color: "#444", fontFamily: "'Inter',sans-serif" }}>© 2026 · CAIMAN.LAB</span>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <a href="https://github.com/caiman001" target="_blank" rel="noopener noreferrer" style={{ color: "#444", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={{ color: "#444", display: "flex", lineHeight: 0, transition: "color .2s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
