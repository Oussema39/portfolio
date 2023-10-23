import { Box } from "@chakra-ui/react";
import Image from "next/image";

type LogoProps = {
  dimensions?: string[];
};

const defaultDimensions: [string, string] = ["50px", "60px"];

const Logo = ({ dimensions }: LogoProps) => {
  return (
    //TODO : Use custom image
    // <ChakraImage
    //   src="/images/logo.png"
    //   alt="logo"
    //   width={dimensions}
    //   height={dimensions}
    //   {...props}
    // />

    <Box boxSize={dimensions ?? defaultDimensions} position="relative">
      <Image src="/images/logo.png" alt="logo" fill />
    </Box>
  );
};

export default Logo;
