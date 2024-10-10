import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EventCalendar from "../../components/EventCalendar";
import Announcements from "../../components/Announcements";


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
          <span className="hidden lg:block text-violet-400 font-bold text-md">Future Academy</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[85%] overflow-scroll">
        <Navbar />
        <div className="flex  w-full">
          <div className="w-full lg:w-[72%]  ">{children} </div>
          <div className="hidden lg:block lg:w-[28%] bg-slate-900 rounded-lg my-4 mx-2">
            <EventCalendar />
            <Announcements />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
