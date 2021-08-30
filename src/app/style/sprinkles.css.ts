import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";
import tailwindColors from "tailwindcss/colors";

type ColorName =
  | "gray"
  | "rose"
  | "fuchsia"
  | "pink"
  | "purple"
  | "violet"
  | "indigo"
  | "blue"
  | "sky"
  | "cyan"
  | "teal"
  | "emerald"
  | "green"
  | "lime"
  | "yellow"
  | "amber"
  | "orange"
  | "red"
  | "warmGray"
  | "gray"
  | "coolGray"
  | "blueGray";

type ColorValues = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type BaseColor = "black" | "white";
type ColorKey = `${ColorName}-${ColorValues}` | BaseColor;

type ColorEntry = {
  [key in ColorKey]: string;
};

const buildColorPalette = () => {
  return Object.entries(tailwindColors).reduce<ColorEntry>(
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
};

const palette = buildColorPalette();

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
