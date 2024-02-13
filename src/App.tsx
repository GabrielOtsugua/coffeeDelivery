import { Router } from "./Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";
import { GlobalStyle } from "./styles/global.ts";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes.ts";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <>
      <CoffeeContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <Router />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </CoffeeContextProvider>
    </>
  );
}
