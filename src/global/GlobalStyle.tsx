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

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: #e6e6e6;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #acacac;
      border-radius: 10px;
    }
`;
