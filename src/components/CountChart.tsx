"use client";
import Image from "next/image";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 57,
    fill: "#33ffb5",
  },
  {
    name: "Boys",
    count: 31,
    fill: "#23a6ed",
  },
  {
    name: "Girls",
    count: 26,
    fill: "#FAE27C",
  },
];
const CountChart = () => {
  return (
    <div className="h-full ">
      <div className="flex justify-between">
        <h1 className="text-gray-500 font-bold">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="h-[70%] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="100%"
            barSize={12}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
        />
      </div>

      <div className="flex justify-center gap-2">
        {data.map((item) => 
          <div key={item.name} className="flex flex-col gap-1 justify-center items-center">
            <div className={`rounded-full w-4 h-4 bg-[${item.fill}]`}></div>
            <h1 className="font-semibold text-xs">{item.count}</h1>
            <h2 className="font-semibold text-xs">{item.name}({Math.round((item.count/ data[0].count)*100)})%</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountChart;
