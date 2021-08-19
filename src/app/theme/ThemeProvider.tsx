import React, { useEffect, useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { ThemeVariant, ThemeContextValues } from "@slowed/app/theme/types";
import { dark, light } from "@slowed/app/theme";

export const ThemeContext = createContext<ThemeContextValues>({
  themeVariant: "light",
  setThemeVariant: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeVariant, setThemeVariant] = useState<ThemeVariant>("light");

  useEffect(() => {
    console.log({ themeVariant });
    setThemeVariant(
      document.documentElement.classList.contains(dark.className)
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(light.className, dark.className);

    document.documentElement.classList.add(
      themeVariant === "dark" ? dark.className : light.className
    );
  }, [themeVariant]);

  const setTheme = (variant: ThemeVariant) => {
    setThemeVariant(variant);
    document.documentElement.classList.remove(light.className, dark.className);

    document.documentElement.classList.add(
      variant === "dark" ? dark.className : light.className
    );
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
