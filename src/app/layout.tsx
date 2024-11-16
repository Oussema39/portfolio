import ChakraUIProvider from "@/app/context/ChakraUIProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

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
          <Box pt="16">{children}</Box>
          <Footer />
        </ChakraUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
