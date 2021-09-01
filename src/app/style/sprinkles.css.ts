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

export const atoms = createAtomsFn(colors);
export type Atoms = Parameters<typeof atoms>[0];
