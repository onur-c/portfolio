import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onur Çelik",
  description: "Personal website of Onur Çelik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen relative bg-black/90 text-white/90 antialiased flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
