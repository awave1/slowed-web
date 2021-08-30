import { theme } from "@slowed/app/theme/styles.css";
import { globalStyle } from "@vanilla-extract/css";

globalStyle("body, p, a, span", {
  fontFamily: theme.fonts.body,
});

globalStyle("h1, h2, h3, h4, h5, h6, h7", {
  fontFamily: theme.fonts.heading,
  fontWeight: "bold",
});

globalStyle("ul", {
  padding: 0,
  margin: 0,
});
