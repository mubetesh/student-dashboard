import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-end md:justify-between p-4  items-center border-b-gray-600 border-b-2 ">
      <div className="hidden md:flex justify-start items-center gap-2 text-sm rounded-full ring-[1px] ring-gray py-1 px-2">
        <div className="rounded-full">
        <Image src="/search.png" alt="" width={20} height={20} />
        </div>
        <input type="text" placeholder="Search..." className="p-1 bg-transparent  outline-none text-gray-300" />
      </div>

      <div className="flex gap-2 items-center justify-center rounded-full bg-slate-600 py-1 px-2 relative">
        <div className="flex items-center rounded-full justify-center">
          <div className="rounded-full">
          <Image
          src="/avatar.png"
          alt=""
          width={20}
          height={20}
          className="rounded-full"
        />
          </div>
        
        <div className="flex items-center  justify-center absolute -top-3 -right-3 w-5 h-5 bg-purple-500 rounded-full text-sm text-white">1</div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-bold text-violet-400">John Doe</span>
          <span className="text-xs leading-3 text-right text-gray-300 font-bold">Admin</span>
        </div>
        <div className="cursor-pointer text-sm text-gray-300 font-bold">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
