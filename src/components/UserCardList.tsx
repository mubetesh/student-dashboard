"use client";
import UserCard from "./UserCard";
const items = [
  {
    icon: "/teacher.png",
    label: "Teacher",
    amount: 724,
  },
  {
    icon: "/student.png",
    label: "Student",
    amount: 6571,
  },
  {
    icon: "/parent.png",
    label: "Parent",
    amount: 2451,
  },
  {
    icon: "/profile.png",
    label: "Staffs",
    amount: 814,
  },
];

const UserCardList = () => {
  return (
    <div className="w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center gap-4">
      {items.map((item) => (
        <div key={item.label} className="w-full flex justify-between mx-auto items-center odd:bg-gray-400 odd:text-slate-900  even:bg-slate-800 even:text-white rounded-2xl p-4 flex-1 min-w-32 max-w-72">
          <div
            className="w-full"
          >
            <UserCard user={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCardList;
