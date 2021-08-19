import { createTheme } from "@vanilla-extract/css";
import colors from "tailwindcss/colors";

export const [className, theme] = createTheme({
  color: {
    bg: colors.gray[100],
  },
  spacing: {
    sm: "8",
  },
  font: {
    body: "mono",
  },
});
