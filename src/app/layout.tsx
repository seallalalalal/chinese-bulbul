import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Sidebar from "@/components/Sidebar";
import { MenuItem } from "@/type/MenuItem";
import "./globals.css";

const menuItems: MenuItem[] = [
  { key: "characteristic", path: "/characteristic", label: "白頭翁的特性" },
  { key: "story", path: "/story", label: "白頭翁的故事" },
  { key: "photos", path: "/photos", label: "白頭翁的美照" },
  { key: "crisis", path: "/crisis", label: "白頭翁的危機" },
];

export const metadata: Metadata = {
  title: "白頭翁不吃小米",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ch-TW">
      <body className={inter.className}>
        <main className="min-h-dvh md:flex-row flex-col flex">
          <Sidebar items={menuItems} />
          <div className="flex flex-col w-full min-h-dvh">{children}</div>
        </main>
      </body>
    </html>
  );
}
