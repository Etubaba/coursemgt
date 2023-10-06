import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TanstackProvider from "@/provider/TanstackProvider";
import Header from "@/components/header/Header";
import MobileNav from "@/components/header/MobileHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog",
  description: "Share the latest trend in your field",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MobileNav />
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
