import { Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

const MePicture = (props: BoxProps) => {
  return (
    <Box
      borderRadius="full"
      boxSize="250px"
      overflow="hidden"
      position="relative"
      boxShadow="0 0 2rem 0.075rem #ec5b537f"
      bg="whiteAlpha.900"
      {...props}
    >
      <Image src="/images/me.png" alt="Oussema Heni" fill objectFit="contain" />
    </Box>
  );
};

export default MePicture;
