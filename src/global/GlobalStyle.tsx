import { createGlobalStyle } from 'styled-components';

export const GLOBALSTYLE = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
    }

    *,
    *::after,
    *::before {
      box-sizing: border-box;
    }

    html {
      overflow-x: hidden;
      scroll-behavior: smooth;
    }

    body {
      font-family: Montserrat;
      letter-spacing: 5%;
    }
`;
