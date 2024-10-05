"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 48,
    absent: 7,
  },
  {
    name: "Tue",
    present: 42,
    absent: 13,
  },
  {
    name: "Wed",
    present: 51,
    absent: 4,
  },
  {
    name: "Thur",
    present: 46,
    absent: 9,
  },
  {
    name: "Fri",
    present: 38,
    absent: 17,
  },
];
const AttendanceChart = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between mb-1">
        <h1 className="text-gray-500 font-bold" >Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={30}>
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="present"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="absent"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;