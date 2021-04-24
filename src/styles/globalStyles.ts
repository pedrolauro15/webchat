import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    line-height: 1;
  }

  #root, body, html {
    min-height: 100vh;
    min-width: 100vw;
  }
  *, input, :no-button, body {
    font-family: 'Poppins', sans-serif;
  }

  *, ul {
    list-style: none;
  }
`;
