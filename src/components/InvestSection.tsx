"use client";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const labels = ["3/1","3/2","3/3","3/4","3/5","3/6","3/7","3/8","3/9","3/10","3/11","3/12","3/13","3/14"];
const scores = [3.5,3.8,3.2,4.0,4.5,4.2,3.9,4.6,4.8,4.3,4.1,4.5,4.7,4.2];

const chartData = {
  labels,
  datasets: [{
    data: scores,
    borderColor: "rgba(255,255,255,.3)",
    borderWidth: 1,
    backgroundColor: "rgba(255,255,255,.03)",
    fill: true, tension: 0.45, pointRadius: 0,
  }],
};

const chartOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { mode: "index" as const, intersect: false } },
  scales: {
    x: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "#333", font: { size: 9 }, maxRotation: 0 } },
    y: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "#333", font: { size: 9 } }, min: 0, max: 6 },
  },
};

const stats = [
  { label: "总资产", value: "¥ 128,450", note: "2026 投入" },
  { label: "今日盈亏", value: "+2.34%", note: "盈利中", pos: true },
  { label: "持仓数量", value: "7", note: "只股票/ETF" },
];

export default function InvestSection() {
  return (
    <div>
      {stats.map(s => (
        <div key={s.label} className="invest-stat">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <span style={{ fontSize: 11, color: "var(--muted)" }}>{s.label}</span>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-.02em", color: s.pos ? "#4ade80" : "var(--fg)" }}>{s.value}</span>
              <span style={{ fontSize: 10, color: "var(--muted)", marginLeft: 8 }}>{s.note}</span>
            </div>
          </div>
        </div>
      ))}
      <div style={{ height: 100, marginTop: 20 }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
