"use client";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

type LogoProps = {
  height?: string;
  width?: string;
};

const dimensions: [string, string] = ["50px", "60px"];

const Logo = ({ height, width }: LogoProps) => {
  return (
    //TODO : Use custom image
    // <ChakraImage
    //   src="/images/logo.png"
    //   alt="logo"
    //   width={dimensions}
    //   height={dimensions}
    //   {...props}
    // />

    <Box boxSize={dimensions} position="relative">
      <Image src="/images/logo.png" alt="logo" fill />
    </Box>
  );
};

export default Logo;
