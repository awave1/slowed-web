import React, { useEffect, useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { ThemeVariant, ThemeContextValues } from "@slowed/app/theme/types";

export const ThemeContext = createContext<ThemeContextValues>({
  themeVariant: "dark",
  setThemeVariant: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>("dark");
  const themeClasses: [ThemeVariant, ThemeVariant] = ["dark", "light"];

  const toggleDocumentThemeClass = (variant: ThemeVariant) => {
    document.documentElement.classList.remove(...themeClasses);
    document.documentElement.classList.add(variant);
  };

  useEffect(() => {
    setThemeVariant("dark");
  }, []);

  useEffect(() => {
    toggleDocumentThemeClass(themeVariant);
  }, [themeVariant]);

  const setTheme = (variant: ThemeVariant) => {
    setThemeVariant(variant);
    toggleDocumentThemeClass(variant);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeVariant,
        setThemeVariant: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
