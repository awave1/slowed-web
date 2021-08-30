import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";
import { theme } from "@slowed/app/theme/styles.css";

export const FileUploadWrapper = composeStyles(
  atoms({
    color: {
      light: "gray-900",
      dark: "gray-50",
    },
    borderColor: {
      light: "gray-900",
      dark: "gray-50",
    },
  }),
  style({
    display: "flex",
    borderRadius: 16,
    border: "1px dashed",
    height: 75,
    alignItems: "center",
  })
);

export const InputContainer = style({
  display: "flex",
  width: "100%",
  height: 75,
  alignContent: "center",
  justifyContent: "center",
});

export const UploadText = style({
  textTransform: "lowercase",
  width: "auto",
  height: "auto",
  alignSelf: "center",
  padding: 16,
});
