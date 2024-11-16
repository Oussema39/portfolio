"use client";
import { Box, Text } from "@chakra-ui/react";
import { animateText } from "./animation/keyframes";

type AnimatedTextProps = {
  text: string;
  color?: string;
};

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
        animation={`${animateText} 4s ease-in-out infinite`}
      >
        {text}
      </Text>
    </Box>
  );
};

export default AnimatedText;
