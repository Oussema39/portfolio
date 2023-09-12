import { Image, ImageProps, Img } from "@chakra-ui/react";
import NextImage from "next/image";
import React, { forwardRef } from "react";
import { ViewOffIcon } from "../chakra-icons";
interface ChakraImageProps extends ImageProps {}

//TODO : combine next/image with chakra-ui image
const ChakraImage = forwardRef<HTMLImageElement, ChakraImageProps>(
  ({ alt, ...props }, ref) => (
    <Img
      ref={ref}
      width={60}
      height={70}
      as={NextImage}
      alt={alt}
      fallback={<ViewOffIcon color="brand.main" />}
      {...props}
    />
  )
);

ChakraImage.displayName = "ChakraImage";

export default ChakraImage;
