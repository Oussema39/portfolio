import ChakraUIProvider from "@/app/context/ChakraUIProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oussema Heni",
  description: "Oussema Heni Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          <Navbar />
          {children}
        </ChakraUIProvider>
      </body>
    </html>
  );
}
