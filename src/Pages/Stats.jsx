import React, { use, Suspense } from "react";
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
} from "recharts";

const profilePromise = fetch("/data.json").then((res) => res.json());

const COLORS = ["#22d3ee", "#a855f7", "#f59e0b", "#10b981", "#ef4444"];

// ── Custom Tooltip ──
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl text-sm">
        {label && <p className="text-gray-300 font-semibold mb-1">{label}</p>}
        {payload.map((item, i) => (
          <p key={i} style={{ color: item.fill || item.color }}>
            {item.name}: <span className="font-bold">{item.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ── Main Stats Content ──
const StatsContent = () => {
  const profiles = use(profilePromise);

  const total    = profiles.length;
  const onTrack  = profiles.filter((p) => p.status === "ok").length;
  const overdue  = profiles.filter((p) => p.status === "overdue").length;
  const due      = profiles.filter((p) => p.status === "due").length;

  const statusData = [
    { name: "On Track",  value: onTrack },
    { name: "Overdue",   value: overdue },
    { name: "Due Soon",  value: due },
  ];

  const summaryCards = [
    { label: "Total Friends", value: total,   color: "text-cyan-400",   border: "border-cyan-500/30",   bg: "from-cyan-500/10" },
    { label: "On Track",      value: onTrack, color: "text-green-400",  border: "border-green-500/30",  bg: "from-green-500/10" },
    { label: "Overdue",       value: overdue, color: "text-yellow-400", border: "border-yellow-500/30", bg: "from-yellow-500/10" },
    { label: "Due Soon",      value: due,     color: "text-purple-400", border: "border-purple-500/30", bg: "from-purple-500/10" },
  ];

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black tracking-tight mb-2">
          📊 <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Stats Overview
          </span>
        </h1>
        <p className="text-base-content/40 text-sm">
          A visual breakdown of all your connections
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
        {summaryCards.map(({ label, value, color, border, bg }) => (
          <div
            key={label}
            className={`bg-gradient-to-br ${bg} to-base-100 border ${border} rounded-2xl px-5 py-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
          >
            <p className={`text-4xl font-black ${color}`}>{value}</p>
            <p className="text-sm text-base-content/50 mt-1 font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-xl p-6 border border-base-300">
          <h2 className="text-lg font-bold mb-2">
            🧩 Status Breakdown
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {statusData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};

// ── Suspense Wrapper ──
const Stats = () => (
  <Suspense
    fallback={
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-base-content/40 text-sm">Loading your stats...</p>
      </div>
    }
  >
    <StatsContent />
  </Suspense>
);

export default Stats;