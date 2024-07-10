import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import AppBgImg from "@/components/background";
import Navbar from "@/components/navbar";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainrot Check",
  description: "Created by SirGhazian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      ></meta>
      <body className={lexend.className}>
        <Navbar />
        <AppBgImg />
        {children}
      </body>
    </html>
  );
}
