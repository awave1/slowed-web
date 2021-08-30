import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";
import { theme } from "@slowed/app/theme/styles.css";

export const FileUploadWrapper = composeStyles(
  atoms({
    borderColor: {
      light: "gray-800",
      dark: "gray-200",
    },
    color: {
      light: "gray-800",
      dark: "gray-200",
    },
  }),
  style({
    display: "flex",
    alignItems: "center",
    borderRadius: 16,
    border: "1px dashed",
    height: 75,
    cursor: "pointer",
    transition: `all ${theme.transition.duration.default} ${theme.transition.easing.easeInOut}`,
    ":hover": {
      filter: "brightness(150%)",
    },
  })
);

export const InputContainer = style({
  display: "flex",
  width: "100%",
  height: 75,
  alignContent: "center",
  justifyContent: "center",
});

export const UploadText = composeStyles(
  atoms({
    // color: {
    //   light: "gray-800",
    //   dark: "gray-200",
    // },
  }),
  style({
    textTransform: "lowercase",
    width: "auto",
    height: "auto",
    alignSelf: "center",
    padding: 16,
  })
);
