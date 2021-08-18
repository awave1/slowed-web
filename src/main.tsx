import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import { store } from "@slowed/store/store";
import { App } from "@slowed/app";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
