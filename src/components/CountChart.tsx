"use client"
import Image from "next/image"
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 57,
    fill: '#fff',
  },
  {
    name: 'Boys',
    count: 31,
    fill: '#23a6ed',
  },
  {
    name: 'Girls',
    count: 26,
    fill: '#FAE27C',
  }
  ]
const CountChart = () => {
  return (
    <div className="h-full relative">
      <div className="flex justify-between mb-1">
        <h1 className="text-gray-500 font-bold" >Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
    <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={15} data={data}>
          <RadialBar
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            dataKey="count"
          />
          
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 " />
    </div>
  )
}

export default CountChart