import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";

export const AppContainer = composeStyles(
  atoms({
    background: {
      light: "blue-100",
      dark: "gray-700",
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
      light: "gray-900",
    },
  }),
  style({
    gridColumn: "span 2/span 2",
    gridRow: "span 2/span 2",
    padding: 36,
    backgroundColor: "pink",
  })
);

export const PlayerViewContainer = composeStyles(
  atoms({
    background: "gray-700",
  }),
  style({
    gridColumn: "span 3/span 3",
    gridRow: "span 2/span 2",
    padding: 36,
  })
);
