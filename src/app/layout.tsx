import type { Metadata } from "next";
import { manrope } from "./utils";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "Học lập trình trực tuyến",
  description: "Khóa học lập trình chất lượng cao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`}>
        <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
