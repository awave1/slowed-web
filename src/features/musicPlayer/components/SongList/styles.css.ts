import { style, composeStyles } from "@vanilla-extract/css";

export const SongListContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
});

export const SongListWrapper = style({
  overflowY: "auto",
  marginBottom: 8,
});

export const List = style({
  listStyle: "none",
});

export const ListItem = style({
  borderRadius: 8,
  padding: 8,
  backgroundColor: "#E4E9F0",
});

export const ListItemActive = composeStyles(
  ListItem,
  style({
    backgroundColor: "#CACFD7",
  })
);
