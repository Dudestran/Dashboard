import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";



const CARD_BG = "bg-white";
const CARD_BORDER = "border";
const CARD_SHADOW = "shadow-sm";

const colors = ["#2563eb", "#60a5fa", "#f97316", "#f43f5e", "#8b5cf6"];

const Dashboard = () => {

  const chartData = useMemo(() => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    return months.map((m) => ({
      month: m,
      desktop: Math.floor(Math.random() * 300) + 50,
      mobile: Math.floor(Math.random() * 250) + 40,
      tablet: Math.floor(Math.random() * 150) + 10,
    }));
 
  }, []);

  
  const lineData = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      day: `D${i + 1}`,
      visitors: Math.floor(Math.random() * 400) + 30,
      signups: Math.floor(Math.random() * 60) + 5,
    }));
  }, []);

  
  const pieData = useMemo(() => {
    return [
      { name: "Organic", value: Math.floor(Math.random() * 500) + 200 },
      { name: "Direct", value: Math.floor(Math.random() * 300) + 100 },
      { name: "Referral", value: Math.floor(Math.random() * 200) + 50 },
      { name: "Social", value: Math.floor(Math.random() * 150) + 20 },
    ];
  }, []);

 
  const totalVisitors = chartData.reduce((s, d) => s + d.desktop + d.mobile + d.tablet, 0);
  const totalSignups = lineData.reduce((s, d) => s + d.signups, 0);
  const conversionRate = ((totalSignups / Math.max(1, totalVisitors)) * 100).toFixed(2);

  return (
    <main className="ml-64 p-6 min-h-screen bg-slate-50 pl-[18%]">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">Overview of activity and metrics</p>
      </header>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-5`}>
          <div className="text-sm text-gray-500">Total Visitors</div>
          <div className="text-2xl font-bold mt-2">{new Intl.NumberFormat().format(totalVisitors)}</div>
          <div className="text-xs text-green-600 mt-2">+{Math.floor(Math.random() * 12) + 1}% vs last month</div>
        </div>

        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-5`}>
          <div className="text-sm text-gray-500">Total Signups</div>
          <div className="text-2xl font-bold mt-2">{totalSignups}</div>
          <div className="text-xs text-indigo-600 mt-2">Goal progress: {Math.floor(Math.random() * 60) + 20}%</div>
        </div>

        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-5`}>
          <div className="text-sm text-gray-500">Conversion Rate</div>
          <div className="text-2xl font-bold mt-2">{conversionRate}%</div>
          <div className="text-xs text-orange-500 mt-2">Improvement: {Math.floor(Math.random() * 5) + 1}%</div>
        </div>
      </section>

  
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-4 col-span-1 lg:col-span-2`}>
          <h3 className="text-lg font-medium mb-3">Traffic by Device (last 6 months)</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="desktop" name="Desktop" fill={colors[0]} />
                <Bar dataKey="mobile" name="Mobile" fill={colors[1]} />
                <Bar dataKey="tablet" name="Tablet" fill={colors[2]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

       
        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-4`}>
          <h3 className="text-lg font-medium mb-3">Visitors Trend (7 days)</h3>
          <div style={{ width: "100%", height: 200 }}>
            <ResponsiveContainer>
              <LineChart data={lineData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke={colors[0]} strokeWidth={2} />
                <Line type="monotone" dataKey="signups" stroke={colors[3]} strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Full-width Pie chart (bottom) */}
        <div className={`${CARD_BG} ${CARD_BORDER} ${CARD_SHADOW} rounded-lg p-4 lg:col-span-3`}>
          <h3 className="text-lg font-medium mb-3">Traffic Sources</h3>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div style={{ width: 250, height: 250 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={pieData}
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={4}
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex-1">
              <ul className="space-y-2">
                {pieData.map((d, i) => (
                  <li key={d.name} className="flex items-center justify-between bg-white/50 p-2 rounded-md border">
                    <div className="flex items-center gap-3">
                      <span style={{ width: 12, height: 12, background: colors[i % colors.length], display: "inline-block", borderRadius: 3 }} />
                      <span className="font-medium">{d.name}</span>
                    </div>
                    <div className="text-sm text-gray-600">{d.value}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;