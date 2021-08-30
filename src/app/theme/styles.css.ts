import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  fonts: {
    body: "Noto Sans JP",
    heading: "Lato",
  },
});
