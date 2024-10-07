"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  CartesianGrid,
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
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/> 
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"darkgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"5px", paddingBottom:"20px"}} />
          <Bar
            dataKey="present"
            fill="#23a6ed"
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,0,0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;