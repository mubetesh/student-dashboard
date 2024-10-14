import BigCalendar from "@/components/BigCalendar";
import Announcements from "@/components/Announcements";

const ParentPage = ()=> {
    return (
        <div className="flex  w-full">
      <div className="w-full lg:w-[72%]  ">
        <div className="w-full flex flex-col  gap-4 px-2 py-4">
          <div>
            <h1 className="font-semibold text-md text-slate-300">
              Schedule-Janet John
            </h1>
          </div>
          <div>
            <BigCalendar />
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-[28%] bg-slate-900 rounded-lg my-4 mx-2">
        <Announcements />
      </div>
    </div>
    )
}

export default ParentPage