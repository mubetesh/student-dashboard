import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../globals.css";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard UI design for commercial use",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-1/6 bg-green-300 px-2">
        <Link
          href="/"
          className="justify-center lg:justify-start items-center rounded-full flex  gap-2"
        >
          <Image src="/favicon.ico" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">My Logo</span>
        </Link>
        <Menu />
      </div>
      <div className="w-5/6 bg-yellow-300  overflow-scroll">
        <Navbar />
        <div className="flex h-screen w-full">
          <div className="w-full lg:w-4/6 bg-red-300">{children} </div>
          <div className="hidden lg:block lg:w-2/6 bg-violet-300">Sidebar</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
