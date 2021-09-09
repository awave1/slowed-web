export type ColorName =
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

export type ColorValues =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type BaseColor = "black" | "white";
export type ColorKey = `${ColorName}-${ColorValues}` | BaseColor;

export type ColorEntry = {
  [key in ColorKey]: string;
};
