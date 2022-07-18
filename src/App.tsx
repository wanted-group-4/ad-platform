import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {QueryClientProvider, QueryClient} from 'react-query';

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
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <MuiThemeProvider theme={MuiTheme}>
            <ThemeProvider theme={theme}>
              <Global styles={GlobalStyle} />
              <Layout>
                <Router />
              </Layout>
            </ThemeProvider>
          </MuiThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
