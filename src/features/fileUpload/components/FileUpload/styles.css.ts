import { composeStyles, style } from "@vanilla-extract/css";
import { atoms } from "@slowed/app/style/sprinkles.css";

export const FileUploadWrapper = composeStyles(
  atoms({
    background: {
      light: "blue-100",
      dark: "gray-900",
    },
  }),
  style({
    display: "flex",
    borderRadius: 16,
  })
);

export const InputContainer = style({
  display: "flex",
  width: "100%",
  height: 32,
});

export const UploadText = style({
  width: "auto",
  height: "auto",
  alignSelf: "center",
  padding: 16,
});
