"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = date | null
type Value = ValuePiece | [ValuePiece,ValuePiece]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="h-[240px] w-full bg-slate-600 "><Calendar onChange={onChange} value={value} className="text-gray-300 bg-slate-700"/></div>
  )
}

export default EventCalendar