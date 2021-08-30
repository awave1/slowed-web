import { atoms } from "@slowed/app/style/sprinkles.css";
import { theme } from "@slowed/app/theme/styles.css";
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
  display: "flex",
  flexDirection: "column",
  gap: 8,
  listStyle: "none",
});

export const ListItem = composeStyles(
  style({
    cursor: "pointer",
    borderRadius: 8,
    padding: 8,
    transition: `all ${theme.transition.duration.default} ${theme.transition.easing.easeInOut}`,
    ":hover": {
      fontWeight: "bold",
      color: theme.colors["rose-200"],
    },
  })
);

export const ListItemActive = composeStyles(
  ListItem,
  style({
    fontWeight: "bold",
    color: theme.colors["rose-400"],
  })
);
