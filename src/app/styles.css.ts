import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";

export const AppContainer = composeStyles(
  atoms({
    background: {
      dark: "gray-900",
      light: "warmGray-300",
    },
    color: {
      light: "black",
      dark: "white",
    },
  }),
  style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  })
);

export const MainGrid = style({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
});

export const SongListContainer = composeStyles(
  atoms({
    background: {
      dark: "gray-900",
      light: "warmGray-300",
    },
  }),
  style({
    gridColumn: "span 2/span 2",
    gridRow: "span 2/span 2",
    padding: 36,
  })
);

export const PlayerViewContainer = composeStyles(
  atoms({
    background: {
      dark: "gray-700",
      light: "warmGray-200",
    },
  }),
  style({
    gridColumn: "span 3/span 3",
    gridRow: "span 2/span 2",
    padding: 36,
  })
);
