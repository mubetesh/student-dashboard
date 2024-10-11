
import BigCalendar from "@/components/BigCalendar"

const StudentPage = () => {
  return (
    <div className="w-full flex flex-col  gap-4 px-2 py-4">
      <div>
        <h1 className="font-semibold text-md text-slate-300">Schedule-4A</h1>
        <div className="flex justify-end items-center gap-2">
          <h2 className="text-slate-700 bg-slate-300 px-2 font-semibold text-sm">Work Week</h2>
          <h2 className="text-slate-800 bg-slate-200 px-2 font-semibold text-sm">Days</h2>
        </div>
      </div>
      <div>
        <BigCalendar />
      </div>
    </div>
  )
}

export default StudentPage