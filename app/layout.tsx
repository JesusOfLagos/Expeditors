import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import './fonts.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Expeditors",
  description: "Next Level Accountability for Your Immediate Needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-white" lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
