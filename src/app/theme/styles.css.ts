import { palette } from "@slowed/app/style/sprinkles.css";
import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fonts: {
    body: "Noto Sans JP",
    heading: "Lato",
  },
  colors: palette,
  transition: {
    duration: {
      default: "150ms",
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
});
