import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const custom = defineStyle({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "brand.main.default",
  opacity: 1,
});

export const dividerTheme = defineStyleConfig({
  variants: { custom },
});
