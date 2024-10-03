import Image from "next/image";
import UserCard from "../../../components/UserCard";
import CountChart from "../../../components/CountChart"

const Admin = () => {
  return (
    <div className="w-full flex flex-col gap-4 p-4 ">
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4">
        <UserCard type="teacher" />
        <UserCard type="student" />
        <UserCard type="parent" />
        <UserCard type="staff" />
      </div>

      <div className="flex gap-4 flex-col md:flex-row rounded-xl">
        <div className="w-full md:w-1/3 h-72 bg-slate-500 rounded-lg p-2">
          <div className="flex justify-between items-center">
            <span>Students</span>
            <Image src="/more.png" alt="more" width={20} height={20} />
          </div>
          <div >
            <CountChart />
          </div>
          <div className="flex justify-center gap-2">
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="rounded-full w-4 h-4 bg-slate-200"></div>
              <h1 className="font-semibold text-xs ">1,234</h1>
              <h2 className="font-semibold text-xs ">Boys(55%)</h2>
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="rounded-full w-4 h-4 bg-pink-400 "></div>
              <h1 className="font-semibold text-xs ">1,155</h1>
              <h2 className="font-semibold text-xs ">Girls(45%)</h2>
            </div>
            <div></div>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-72  bg-slate-200 rounded-lg p-2">
          world
        </div>
      </div>
      
    </div>
  );
};

export default Admin;
