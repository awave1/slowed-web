import { palette } from "@slowed/app/style/sprinkles.css";
import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fonts: {
    body: "Noto Sans JP",
    heading: "Lato",
  },
  colors: palette,
});
