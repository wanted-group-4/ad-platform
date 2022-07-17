import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import Router from '@routes/Router';
import {GlobalStyle, theme} from '@styles/.';
import {Layout} from '@components/layout';
import {ThemeProvider} from 'styled-components';

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Router />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
