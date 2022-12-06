import { css } from '@linaria/core';

export const GLOBALSTYLE = css`
  :global() {
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
    }

    body {
      font-family: Montserrat;
      letter-spacing: 5%;
    }
  }
`;
