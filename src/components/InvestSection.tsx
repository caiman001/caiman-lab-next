"use client";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const labels = ["3/1","3/3","3/5","3/7","3/9","3/11","3/13"];
const scores = [3.5,3.2,4.5,3.9,4.8,4.1,4.7];
const chartData = {
  labels,
  datasets: [{
    data: scores,
    borderColor: "rgba(255,255,255,.2)", borderWidth: 1,
    backgroundColor: "rgba(255,255,255,.03)",
    fill: true, tension: 0.5, pointRadius: 0,
  }],
};
const chartOptions = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { mode: "index" as const, intersect: false } },
  scales: {
    x: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "rgba(255,255,255,.2)", font: { size: 9 }, maxRotation: 0 } },
    y: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "rgba(255,255,255,.2)", font: { size: 9 } }, min: 0, max: 6 },
  },
};

const stats = [
  { label: "总资产", value: "¥ 128,450", note: "2026" },
  { label: "今日盈亏", value: "+2.34%", pos: true, note: "盈利中" },
  { label: "持仓数量", value: "7", note: "只" },
];

export default function InvestSection() {
  return (
    <div>
      {stats.map(s => (
        <div key={s.label} className="invest-row">
          <span className="meta">{s.label}</span>
          <div style={{ textAlign: "right" }}>
            <span style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.02em", color: s.pos ? "#4ade80" : "var(--fg)" }}>{s.value}</span>
            <span className="meta" style={{ marginLeft: 8 }}>{s.note}</span>
          </div>
        </div>
      ))}
      <div style={{ height: 90, marginTop: 18 }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
