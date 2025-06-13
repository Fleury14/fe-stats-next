import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar/navbar";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "FE Stats",
  description: "A companion stats site for the Racetime portion of Free Enterprise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={interSans.className}
      >
        <div className="flex flex-col">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
