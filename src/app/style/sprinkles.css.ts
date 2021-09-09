import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";
import tailwindColors from "tailwindcss/colors";
import type { BaseColor, ColorEntry, ColorKey } from "@slowed/app/style/types";

const buildColorPalette = () =>
  Object.entries(tailwindColors).reduce<ColorEntry>(
    (current, [colorName, colorVal]) => {
      if (typeof colorVal === "string") {
        current[colorName as BaseColor] = colorVal;
      } else {
        const reduced = Object.entries(colorVal).reduce<ColorEntry>(
          (result, [key, val]) => {
            result[`${colorName}-${key}` as ColorKey] = val as string;
            return result;
          },
          {} as ColorEntry
        );

        current = Object.assign(current, reduced);
      }

      return current;
    },
    {} as ColorEntry
  );

export const palette = buildColorPalette();

export const lightMode = "light";
export const darkMode = "dark";

const spacing = {
  none: 0,
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "32px",
};

const widths = {
  window: "50%",
  full: "100%",
};

const heights: typeof widths = {
  window: "75%",
  full: "100vh",
};

const responsive = createAtomicStyles({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block"],
    width: widths,
    height: heights,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
});

const colors = createAtomicStyles({
  conditions: {
    light: {},
    dark: { selector: `.${darkMode} &` },
  },
  defaultCondition: "dark",
  properties: {
    color: palette,
    background: palette,
    backgroundColor: palette,
    borderColor: palette,
  },
});

export const atoms = createAtomsFn(colors, responsive);
export type Atoms = Parameters<typeof atoms>[0];
