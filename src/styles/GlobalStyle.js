// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
