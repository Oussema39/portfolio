import { extendTheme } from "@chakra-ui/react";
import { dividerTheme } from "../components/theme/dividerTheme";
import { ColorShade } from "../types/ColorShade";

const colors: { brand: Record<string, ColorShade> } = {
  brand: {
    main: {
      default: "#ec5b53",
      "100": "#fdefee70",
      "200": "#f7bdba",
      "300": "#f2928c",
      "400": "#ed665e",
      "500": "#e83a30",
      "600": "#cf2017",
      "700": "#a11912",
      "800": "#73120d",
      "900": "#450b08",
    },
    accent: {
      default: "#002d5b",
      "100": "#e6eaef",
      "200": "#b3c0ce",
      "300": "#66819d",
      "400": "#1a426b",
      "500": "#002952",
      "600": "#001b37",
      "700": "#000d1b",
      "800": "#000912",
      "900": "#000409",
    },

    gray: { default: "#35373a" },
  },
};

const theme = extendTheme({
  styles: {
    global: {
      "::selection": {
        color: "brand.main.default",
        backgroundColor: "black",
      },
      "::-webkit-scrollbar": {
        background: "transparent",
        width: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#ec5b53",
        borderRadius: "5rem",
      },
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
        scrollbarWidth: "thin",
      },
      html: {
        scrollBehavior: "smooth",
        scrollPaddingTop: "40px",
      },
      a: {
        textDecoration: "none !important",
      },
      "img, video, picture, svg": {
        maxWidth: "full",
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
