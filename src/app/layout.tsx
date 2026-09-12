import type { Metadata } from "next";
import { manrope } from "./utils";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body className={`${manrope.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
