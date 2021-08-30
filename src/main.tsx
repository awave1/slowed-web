import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "@slowed/store/store";
import { App } from "@slowed/app";
import { ThemeProvider } from "@slowed/app/theme/ThemeProvider";
import { FontProvider } from "@slowed/app/FontProvider";
import "modern-css-reset";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <FontProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FontProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
