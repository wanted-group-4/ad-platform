import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    size: {mobile: string};
    color: {
      black: string;
      grey_01: string;
      greay_02: string;
    };
    background: {
      main: string;
      sidebar: string;
      table: string;
      scroll: string;
    };
    hover: {
      menu: string;
      button: string;
      box: string;
    };
    border: {
      primary: string;
    };
    boxShadow: {
      board: string;
      modal: string;
    };
  }
}
