import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patera Company Profile",
  description: "Company UI/UX App for pottery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-screen" lang="en">
      <body>  
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
