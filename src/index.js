import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ColorModeSwicher from "./ColorModeSwicher";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwicher />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
