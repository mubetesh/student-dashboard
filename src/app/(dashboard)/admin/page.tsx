
import UserCardList from "../../../components/UserCardList";
import CountChart from "../../../components/CountChart"
import AttendanceChart from "@/components/AttendanceChart";

const Admin = () => {
  return (
    <div className="w-full flex flex-col  gap-4 p-4 ">
      <div className="w-full">
        <UserCardList />
      </div>

      <div className="flex gap-4 flex-col  md:flex-row rounded-xl">
        <div className="w-full md:w-1/3 h-72 bg-white rounded-lg p-2 ">
          <div className="h-[70%]">
            <CountChart />
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="rounded-full w-4 h-4 bg-[#23a6ed]"></div>
              <h1 className="font-semibold text-xs ">31</h1>
              <h2 className="font-semibold text-xs ">Boys(55%)</h2>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="rounded-full w-4 h-4 bg-[#FAE27C] "></div>
              <h1 className="font-semibold text-xs ">26</h1>
              <h2 className="font-semibold text-xs ">Girls(45%)</h2>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-72 bg-slate-800 rounded-lg p-2">
        <AttendanceChart />
        </div>
      </div>
      
    </div>
  );
};

export default Admin;
