import React from "react";
import "./charts.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h4 className="chartTitle">{title}</h4>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="rgb(166, 194, 247)" />
          <Line type="monotone" dataKey={dataKey} stroke="rgb(166, 194, 247)" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
