import { createGlobalStyle } from 'styled-components';

export const GLOBALSTYLE = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    html {
      max-width: 100vw;
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    body {
      font-family: Montserrat;
      letter-spacing: 5%;
    }
`;
