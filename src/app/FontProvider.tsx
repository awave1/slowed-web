import React, { createContext, useEffect } from "react";
import WebFont from "webfontloader";
import type { FC } from "react";

const FontContext = createContext(null);

export const FontProvider: FC = ({ children }) => {
  useEffect(() => {
    WebFont.load({
      google: { families: ["Noto Sans JP"] },
    });
  }, []);
  return <FontContext.Provider value={null}>{children}</FontContext.Provider>;
};
