import {css} from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyle = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  button {
    cursor: pointer;
  }
  body {
    color: #4a4a4a;
    background-color: #f5f7fb;
  }
`;

export default GlobalStyle;
