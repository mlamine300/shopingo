import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Admin Console",
  description: "Sanity Admin Console",
};
function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default layout;
