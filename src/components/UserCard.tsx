import React from 'react'
import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className="rounded-2xl odd:bg-sky even:bg-green-300 p-4 flex-1 min-w-32">
        <div className="flex justify-between items-center">
            <span className="text-gray-500 bg-white rounded-full px-2 text-sm font-bold">2024/3</span>
            <div><Image src="/favicon.ico" alt="" width={20} height={20}/></div>
        </div>
        <h1 className="text-lg font-bold px-1 my-2">2,124</h1>
        <h2 className="text-gray-500 text-sm font-bold px-1 capitalize">{type}s</h2>
    </div>
  )
}

export default UserCard