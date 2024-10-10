"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum",
    time: "12:00 AM - 4:AM",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Lorem dolor",
    time: "12:00 AM - 4:AM",
    description:
      "Cum dignissimos dicta cupiditate ipsum eum nesciunt voluptatibus in!",
  },
  {
    id: 3,
    title: "Ipsum dolor",
    time: "12:00 AM - 4:AM",
    description:
      "Nostrum accusamus id nesciunt tenetur ipsa enim sequi vero quam quo nulla.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full ">
      <Calendar
        onChange={onChange}
        value={value}
        className="text-gray-200 rounded-md "
      />
      <div className="flex flex-col gap-4 my-4">
        <div className="flex justify-between">
          <h1 className="text-gray-400 font-bold">Events</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        {events.map((event) => (
          <div
            key={event.id}
            className=" bg-slate-700  p-2 border-r-2 odd:border-cyan-400 even:border-emerald-400 border-t-2 rounded-md "
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-slate-300 text-md ">
                {event.title}
              </h1>
              <p className="font-semibold text-slate-300 text-xs ">
                {event.time}
              </p>
            </div>
            <div>
              <p className="mt-1 text-white text-sm ">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
