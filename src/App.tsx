import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '@routes/Router';
import {GlobalStyle, theme} from '@styles/.';
import {Layout} from '@components/layout';
import {ThemeProvider} from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
