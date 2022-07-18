import React, {Suspense} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';

import Router from '@routes/Router';
import {GlobalStyle, theme} from '@styles/.';
import {Layout} from '@components/layout';
import {ThemeProvider, Global} from '@emotion/react';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

const MuiTheme = createTheme();

export default function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <MuiThemeProvider theme={MuiTheme}>
          <ThemeProvider theme={theme}>
            <Global styles={GlobalStyle} />
            <Suspense fallback={<div>로딩중</div>}>
              <Layout>
                <Router />
              </Layout>
            </Suspense>
          </ThemeProvider>
        </MuiThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  );
}
