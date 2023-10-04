"use client";
import { Box, Text, keyframes } from "@chakra-ui/react";

type AnimatedTextProps = {
  text: string;
  color?: string;
};

const animate = keyframes`
    0%,
    100% {
        clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
        );
    }

    50% {
        clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
        );
    }
`;

const AnimatedText = ({ text, color }: AnimatedTextProps) => {
  return (
    <Box position={"relative"} userSelect={"none"} whiteSpace={"nowrap"}>
      <Text
        color={"transparent"}
        fontSize={"inherit"}
        position={"absolute"}
        style={{
          WebkitTextStroke: `1px ${color ?? "#ec5b53"}`,
        }}
      >
        {text}
      </Text>
      <Text
        color={color ?? "brand.main.default"}
        fontSize={"inherit"}
        position={"absolute"}
        animation={`${animate} 4s ease-in-out infinite`}
      >
        {text}
      </Text>
    </Box>
  );
};

export default AnimatedText;
