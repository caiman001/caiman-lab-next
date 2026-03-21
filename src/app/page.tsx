import SectionHeader from "@/components/SectionHeader";
import WorkCard from "@/components/WorkCard";
import IntelPicksCard from "@/components/IntelPicksCard";
import IntelSignalCard from "@/components/IntelSignalCard";
import HorizontalScroll from "@/components/HorizontalScroll";
import IntelFilterTabs from "@/components/IntelFilterTabs";
import FadeIn from "@/components/FadeIn";
import ExploreCard from "@/components/ExploreCard";
import signalData from "../../public/data/signal-data.json";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ padding: "120px 0 100px" }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% -5%,rgba(90,90,120,.1) 0%,transparent 70%)",
          }}
        />
        <div
          className="absolute inset-y-0 left-1/2 z-0 w-full max-w-[var(--max)] -translate-x-1/2"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.016) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.016) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 62% 58% at 38% 40%,black 5%,rgba(0,0,0,.6) 38%,transparent 68%)",
          }}
        />
        <div className="relative z-[1] mx-auto max-w-[var(--max)] px-8">
          <FadeIn>
            <div
              className="mb-6 h-20 w-20 rounded-full"
              style={{ background: "linear-gradient(135deg,#1a1a2e,#16213e)", border: "1px solid var(--border)" }}
            />
            <h1
              className="mb-3 text-[40px] font-black leading-[1.1]"
              style={{ fontFamily: "'PingFang SC',-apple-system,sans-serif", letterSpacing: "-.02em", color: "#fff" }}
            >
              CAIMAN.LAB
            </h1>
            <p className="mb-3 text-xl" style={{ fontFamily: "'PingFang SC',-apple-system,sans-serif", color: "rgba(255,255,255,.65)" }}>
              设计师 · <strong style={{ color: "#fff", fontWeight: 600 }}>创造者</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {["Design", "Product", "AI", "Frontend"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border px-3.5 py-1.5 text-xs tracking-[.04em] transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--muted)", fontFamily: "'Inter',sans-serif" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-[var(--max)] px-8" style={{ padding: "96px 0" }}>
        <FadeIn>
          <SectionHeader eyebrow="Work" title="精选项目👨‍💻" description="最新做的项目实验" />
        </FadeIn>
        <div className="grid grid-cols-2 gap-3">
          <FadeIn delay={1}>
            <WorkCard
              num="01 · BRAND / PRODUCT / AI"
              title="Beandance"
              desc="为创意工具设计的视觉与交互语言。"
              tags={["Brand", "Product", "AI"]}
            />
          </FadeIn>
          <FadeIn delay={2}>
            <WorkCard
              num="02 · INTERFACE / MOTION / SYSTEMS"
              title="Studio Fly"
              desc="具有电影节奏感的 AI 工作空间。"
              tags={["Interface", "Motion", "Systems"]}
            />
          </FadeIn>
        </div>
      </section>

      {/* Intel */}
      <section id="intel" className="mx-auto max-w-[var(--max)] px-8" style={{ padding: "96px 0" }}>
        <FadeIn>
          <SectionHeader eyebrow="Intel" title="最近在看👀" />
        </FadeIn>

        {/* Picks */}
        <FadeIn>
          <div className="mb-4">
            <span className="text-[11px] font-medium uppercase tracking-[.18em]" style={{ color: "var(--muted)" }}>
              Picks
            </span>
          </div>
        </FadeIn>
        <FadeIn>
          <IntelFilterTabs />
        </FadeIn>
        <FadeIn>
          <HorizontalScroll>
            <IntelPicksCard
              label="Video · YouTube"
              title="How to Use Claude Skills as a Designer"
              image="https://i.ytimg.com/vi/Iup1WlUyj9M/hqdefault.jpg"
              href="./watch-how-to-use-claude-skills-as-a-designer.html"
            />
            <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
            <IntelPicksCard label="Coming Soon" title="下一条情报" placeholder />
          </HorizontalScroll>
        </FadeIn>

        {/* Signal */}
        <FadeIn>
          <div
            className="mt-12 mb-4 flex items-center gap-3 pt-10"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <span className="text-[11px] font-medium uppercase tracking-[.18em]" style={{ color: "var(--muted)" }}>
              Signal
            </span>
            <span className="text-[10px] tracking-[.08em]" style={{ color: "var(--muted)", opacity: 0.45 }}>
              每日 AI 速讯
            </span>
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
                summary_en={item.summary_en}
                url={item.url}
              />
            ))}
          </HorizontalScroll>
        </FadeIn>
      </section>

      {/* Design */}
      <section id="design" className="mx-auto max-w-[var(--max)] px-8" style={{ padding: "96px 0" }}>
        <FadeIn>
          <SectionHeader eyebrow="Design" title="攒劲设计💡" description="设计实验、参考资料与生产笔记。" />
        </FadeIn>
        <FadeIn>
          <HorizontalScroll>
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
            <IntelPicksCard label="Coming Soon" title="设计内容" placeholder />
          </HorizontalScroll>
        </FadeIn>
      </section>

      {/* Explore */}
      <section id="explore" className="mx-auto max-w-[var(--max)] px-8" style={{ padding: "96px 0" }}>
        <FadeIn>
          <SectionHeader eyebrow="Explore" title="其他探索🌟" description="投资追踪、语言备考与旅行记录" />
        </FadeIn>
        <div className="mb-3 grid grid-cols-2 gap-3">
          <FadeIn>
            <ExploreCard eyebrow="Invest" title="股票理财🤑">
              <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                投资追踪与分析记录
              </p>
            </ExploreCard>
          </FadeIn>
          <FadeIn delay={1}>
            <ExploreCard eyebrow="English" title="语言学习🙇‍♂️">
              <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                备考进度与学习笔记
              </p>
            </ExploreCard>
          </FadeIn>
        </div>
        <FadeIn delay={2}>
          <ExploreCard eyebrow="Travel" title="旅行记录✈️">
            <p className="text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>
              12 个城市 · 4 个国家
            </p>
          </ExploreCard>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="px-8 pb-5 pt-3">
        <div
          className="mx-auto flex h-12 max-w-[calc(var(--max)-64px)] items-center justify-between rounded-[10px] border px-6"
          style={{
            background: "rgba(8,8,8,.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderColor: "var(--border)",
          }}
        >
          <span className="text-[13px]" style={{ color: "#444", fontFamily: "'Inter',sans-serif" }}>
            © 2026 CAIMAN.LAB
          </span>
          <div className="flex items-center gap-5">
            <a href="https://github.com/caiman001" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#444" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: "#444" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
