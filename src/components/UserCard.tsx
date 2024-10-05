"use client";
import Image from "next/image";

type User = {
  icon: string;
  label: string;
  amount: number;
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-between items-center">
        <span className="text-white bg-gray-500 rounded-full px-2 text-sm font-medium">2024/3</span>
        <div><Image src={user.icon} alt="" width={20} height={20} /></div>
      </div>
      <h1 className="text-lg font-bold px-1 my-2">{user.amount}</h1>
      <h2 className="text-gray-500 text-sm font-bold px-1 capitalize">{user.label}</h2>
    </div>
  );
};

export default UserCard;
