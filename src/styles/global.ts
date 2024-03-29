import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    color: ${(props) => props.theme.text};
    outline: none;
  }
`;
