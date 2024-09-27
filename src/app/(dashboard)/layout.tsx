import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import "../globals.css";


export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard UI design for commercial use",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const list= [1,2,3,4,5,6,7,8,9]
  return (
  
      <div className = "h-screen flex">
        <div className = "w-1/6 bg-green-300 px-2"> 
        <Link href="/" className="justify-center lg:justify-start items-center rounded-full flex  gap-2">
           <Image src="/favicon.ico" alt="logo" width={32} height={32}  />
           <span className="hidden lg:block">My Logo</span>
        </Link>
        
        {list.map((num)=> {
          return(<div key={num} className="bg-black  my-1 p-2 rounded-full text-white text-center">{num}</div>)
        })}
        </div>
        <div className = "w-5/6 lg:w-3/6 bg-yellow-300">Main Dashboard {children}</div>
        <div className = "hidden lg:block lg:w-2/6 bg-red-300">Sidebar</div>

      </div>
    
  );
}
