"use client"
import {RadialBarChart, RadialBar, Legend, ResponsiveContainer} from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  }
];



const CountChart = () => {
  return (
    <div>
        <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            label={{ position: "insideStart", fill: "#fff" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CountChart