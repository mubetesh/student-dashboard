import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-end md:justify-between p-4  items-center ">
      <div className="hidden md:flex justify-start items-center gap-2 text-sm rounded-full ring-[1px] ring-gray py-1 px-2">
        <Image src="/favicon.ico" alt="" width={20} height={20} />
        <input type="text" placeholder="Search..." className="p-1 bg-transparent  outline-none" />
      </div>

      <div className="flex gap-2 items-center justify-center rounded-full bg-gray-300 py-1 px-2 relative">
        <div className="flex items-center rounded-full justify-center">
        <Image
          src="/favicon.ico"
          alt=""
          width={20}
          height={20}
          
        />
        <div className="flex items-center  justify-center absolute -top-3 -right-3 w-5 h-5 bg-purple-500 rounded-full text-sm text-white">1</div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-bold">John Doe</span>
          <span className="text-xs leading-3 font-medium text-right text-gray-500">Admin</span>
        </div>
        <div className="cursor-pointer">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
