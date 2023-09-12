import { ChakraTheme, extendBaseTheme, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    main: "#ec5b53",
    darkMain: "#cf332b",
    accent: "#002d5b",
    gray: "#35373a",
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
