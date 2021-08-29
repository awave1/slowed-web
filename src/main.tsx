import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "@slowed/store/store";
import { App } from "@slowed/app";
import { ThemeProvider } from "@slowed/app/theme/ThemeProvider";
import "modern-css-reset";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
