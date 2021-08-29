import { createAtomicStyles, createAtomsFn } from "@vanilla-extract/sprinkles";

const palette = {
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
};

const light = "light";
const dark = "dark";

const colors = createAtomicStyles({
  conditions: {
    light: { selector: `${light} &` },
    dark: { selector: `.${dark} &` },
  },
  defaultCondition: "dark",
  properties: {
    color: palette,
    background: palette,
  },
});

export const atoms = createAtomsFn(colors);
export type Atoms = Parameters<typeof atoms>[0];
