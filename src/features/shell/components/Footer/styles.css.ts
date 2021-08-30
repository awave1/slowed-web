import { style, composeStyles } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";

export const FooterContainer = composeStyles(
  atoms({
    background: {
      light: "warmGray-100",
      dark: "rose-700",
    },
  }),
  style({ width: "100%" })
);
