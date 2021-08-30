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

export const FooterLink = atoms({
  color: {
    light: "rose-700",
    dark: "warmGray-50",
  },
});
