import { style } from "@vanilla-extract/css";
import { light } from "@slowed/app/theme";

// console.log(light.theme.color);

// bgColor="gray.200" borderRadius={16}
export const FileUploadWrapper = style({
  display: "flex",
  borderRadius: 16,
  backgroundColor: light.theme.color.bg,
});

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
