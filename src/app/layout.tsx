import ChakraUIProvider from "@/app/context/ChakraUIProvider";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";

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
          <Footer />
        </ChakraUIProvider>
      </body>
    </html>
  );
}
