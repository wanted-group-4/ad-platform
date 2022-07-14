import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset} 
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
