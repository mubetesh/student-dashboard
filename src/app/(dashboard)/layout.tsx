import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex bg-slate-900">
      <div className="w-[15%] p-2">
        <Link
          href="/"
          className="justify-center lg:justify-start items-center rounded-full flex  gap-2"
        >
          <Image src="/logo.png" alt="logo" width={20} height={20} />
          <span className="hidden lg:block text-violet-400 font-bold text-md">
            Future Academy
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
