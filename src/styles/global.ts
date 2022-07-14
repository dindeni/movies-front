import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
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
`;

export { GlobalStyle };
