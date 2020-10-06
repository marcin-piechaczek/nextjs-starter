import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
