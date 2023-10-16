import Navigation from "@/components/navigation";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Ecommerse App",
  description: "This is a Next.js app, an Mini Ecommerse App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[90%] m-auto`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
