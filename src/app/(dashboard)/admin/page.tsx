import UserCardList from "../../../components/UserCardList";
import CountChart from "../../../components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";

const Admin = () => {
  return (
    <div className="w-full flex flex-col  gap-4 p-4 ">
      <div className="w-full">
        <UserCardList />
      </div>
      <div className="flex gap-4 flex-col  md:flex-row rounded-xl">
        <div className="w-full md:w-1/3 h-72 bg-slate-800 rounded-lg p-2 ">
          <CountChart />
        </div>
        <div className="w-full md:w-2/3 h-72 bg-slate-800 rounded-lg p-2">
          <AttendanceChart />
        </div>
      </div>
      <div className="w-full h-[360px]">
        <FinanceChart />
      </div>
    </div>
  );
};

export default Admin;
