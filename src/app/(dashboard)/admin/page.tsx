import UserCard from "../../../components/UserCard"

const Admin = () => {
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4 p-4 ">
      <div className="w-full flex justify-between gap-4 flex-wrap ">
      <UserCard type="teacher" className="flex-1"/>
      <UserCard type="student" className="flex-1"/>
      <UserCard type="parent" className="flex-1"/>
      <UserCard type="staff" className="flex-1"/>
      </div>
      
      <div className="flex gap-4 flex-col md:flex-row rounded-xl">
        <div className="w-full md:w-1/3 h-48 bg-slate-500 rounded-lg p-2">hello</div>
        <div className="w-full md:w-2/3 h-48  bg-slate-500 rounded-lg p-2">world</div>
      </div>
      
    </div>
  )
}

export default Admin