"use client";
import { useEffect, useRef } from "react";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip);

const labels = ["3/1","3/2","3/3","3/4","3/5","3/6","3/7","3/8","3/9","3/10","3/11","3/12","3/13","3/14"];
const scores = [3.5,3.8,3.2,4.0,4.5,4.2,3.9,4.6,4.8,4.3,4.1,4.5,4.7,4.2];

const chartData = {
  labels,
  datasets: [{
    data: scores,
    borderColor: "rgb(6,182,212)",
    borderWidth: 1.5,
    backgroundColor: "rgba(6,182,212,.08)",
    fill: true,
    tension: 0.45,
    pointRadius: 0,
    pointHoverRadius: 4,
    pointHoverBackgroundColor: "rgb(6,182,212)",
  }],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { display: false }, tooltip: { mode: "index" as const, intersect: false } },
  scales: {
    x: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "#444", font: { size: 10 }, maxRotation: 0 } },
    y: { grid: { color: "rgba(255,255,255,.04)", drawTicks: false }, ticks: { color: "#444", font: { size: 10 } }, min: 0, max: 6 },
  },
};

const stats = [
  { label: "总资产", value: "¥ 128,450", sub: "2026 投入" },
  { label: "今日盈亏", value: "+2.34%", sub: "盈利中", positive: true },
  { label: "持仓数量", value: "7", sub: "只股票/ETF" },
];

export default function InvestSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {stats.map(s => (
          <div key={s.label} className="invest-stat">
            <div style={{ fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1, color: s.positive ? "#4ade80" : "var(--fg)", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "var(--muted)", opacity: 0.7 }}>{s.sub}</div>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div style={{ height: 140, position: "relative" }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
