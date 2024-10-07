"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Income: 1890,
    Expense: 4800,
    amt: 2181,
  },
  {
    name: "Feb",
    Income: 2390,
    Expense: 3800,
    amt: 2500,
  },
  {
    name: "Mar",
    Income: 3490,
    Expense: 4300,
  },
  {
    name: "Apr",
    Income: 5786,
    Expense: 4900,
  },
  {
    name: "May",
    Income: 3490,
    Expense: 4300,
  },
  
  {
    name: "Jun",
    Income: 4000,
    Expense: 2400,
    amt: 2400,
  },
  {
    name: "Jul",
    Income: 3000,
    Expense: 1398,
    amt: 2210,
  },
  {
    name: "Aug",
    Income: 4500,
    Expense: 1000,
    amt: 2210,
  },
  {
    name: "Sep",
    Income: 4000,
    Expense: 2400,
    amt: 2400,
  },
  {
    name: "Oct",
    Income: 3000,
    Expense: 1398,
    amt: 2210,
  },
  {
    name: "Nov",
    Income: 2000,
    Expense: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    Income: 2780,
    Expense: 3908,
    amt: 2000,
  },
  

  
];

const FinanceChart = () => {
  return (
    <div className="w-full h-full bg-slate-700 rounded-lg p-2">
      <div className="flex justify-between mb-1">
        <h1 className="text-gray-500 font-bold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"darkgray"}}/>
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"5px", paddingBottom:"20px"}}/>
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#8884d8"
            activeDot={{ r: 5 }}
            strokeWidth={3}
            legendType="circle"
          />
          <Line type="monotone" dataKey="Income" stroke="#82ca9d" activeDot={{ r: 5 }} strokeWidth={3} legendType="circle"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
