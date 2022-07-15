import {createGlobalStyle} from 'styled-components';
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
  body{
    color: #4A4A4A;
    background-color:#f5f7fb;
  }
`;

export default GlobalStyle;
