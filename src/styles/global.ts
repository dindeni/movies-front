import { createGlobalStyle } from 'styled-components';

import fonts from './fonts/fonts.module.css';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-family: DmSans, Arial, sans-serif;
    font-size: 16px;
  }

  a {
    color: inherit;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  ${fonts};
`;

export { GlobalStyle };
