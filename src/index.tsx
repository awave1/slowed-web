import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StoreProvider } from "easy-peasy";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
