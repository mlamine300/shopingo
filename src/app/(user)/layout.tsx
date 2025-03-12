import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { twJoin, twMerge } from "tailwind-merge";
import SideBar from "../components/SideBar";
import Layout from "../store/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopping Ecommerce",
  description: "Ecommerce site for my portofilio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-accentWhite w-full h-full">
          <Layout>
            <Header />
            <SideBar />
            {children}
            <Footer />
          </Layout>
        </div>
      </body>
    </html>
  );
}
