// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;
