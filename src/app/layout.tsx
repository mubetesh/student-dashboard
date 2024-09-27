import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard UI design for commercial use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
