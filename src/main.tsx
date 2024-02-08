import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
