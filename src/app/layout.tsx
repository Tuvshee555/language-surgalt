// import Navbar from "@/components/Navbar";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ФлүэнтВан Академи",
  description: "Англи ба Япон хэлний сургалтын төв",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mn">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
