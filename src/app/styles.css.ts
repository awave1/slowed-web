import { style } from "@vanilla-extract/css";

export const AppContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

export const MainGrid = style({
  display: "grid",
  gridTemplateRows: "repeat(2, 1fr)",
  gridTemplateColumns: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
});

export const SongListContainer = style({
  gridColumn: "span 2/span 2",
  gridRow: "span 2/span 2",
  padding: 36,
  backgroundColor: "pink",
});

export const PlayerViewContainer = style({
  gridColumn: "span 3/span 3",
  gridRow: "span 2/span 2",
  padding: 36,
});
