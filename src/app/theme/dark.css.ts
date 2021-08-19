import { createTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";

export const [className, theme] = createTheme({
  color: {
    bg: colors.black,
  },
  spacing: {
    sm: "8",
  },
  font: {
    body: "mono",
  },
});
