import { useEffect, useState } from "react";
import { getAnalytics, getBlockedHistory } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      const res1 = await getAnalytics(token);
      setStats(res1.data);

      const res2 = await getBlockedHistory(token);
      setHistory(res2.data);
    };

    fetchData();
  }, []);

  const chartData = [
    { name: "Safe", value: stats.safe || 0 },
    { name: "Risky", value: stats.risky || 0 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">Total: {stats.total_checks}</div>
        <div className="bg-red-100 p-4 shadow rounded">Risky: {stats.risky}</div>
        <div className="bg-green-100 p-4 shadow rounded">Safe: {stats.safe}</div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="font-bold mb-2">Analytics</h2>
        <BarChart width={400} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>

      {/* Blocked Sites Table */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold mb-4">Blocked Sites</h2>

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">URL</th>
              <th className="p-2">Confidence</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>

          <tbody>
            {history.map((item, index) => (
              <tr key={index} className="text-center border-t">
                <td className="p-2">{item.url}</td>
                <td className="p-2">{(item.confidence * 100).toFixed(2)}%</td>
                <td className="p-2">
                  {new Date(item.time).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}