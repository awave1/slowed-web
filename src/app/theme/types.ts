export type ThemeVariant = "light" | "dark";

export interface ThemeContextValues {
  themeVariant: ThemeVariant;
  setThemeVariant: (variant: ThemeVariant) => void;
}
