import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      {/* <ChakraProvider> */}
      <App />
      {/* </ChakraProvider> */}
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
