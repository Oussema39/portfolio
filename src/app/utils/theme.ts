import { extendTheme } from "@chakra-ui/react";
import { dividerTheme } from "../components/theme/dividerTheme";

const colors = {
  brand: {
    main: {
      default: "#ec5b53",
      100: "#fce9e8",
      200: "#f7bdba",
      300: "#f2928c",
      400: "#ed665e",
      500: "#e83a30",
      600: "#cf2017",
      700: "#a11912",
      800: "#73120d",
      900: "#450b08",
    },
    accent: "#002d5b",
    gray: "#35373a",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      "::selection": {
        color: "brand.main.default",
        "background-color": "black",
      },
      "*": {
        "box-sizing": "border-box",
        padding: 0,
        margin: 0,
      },
      a: {
        "text-decoration": "none !important",
      },
      "img, video, picture, svg": {
        "max-width": "full",
        display: "block",
      },
    },
  },
  colors,
  components: {
    Divider: dividerTheme,
  },
});

export default theme;
