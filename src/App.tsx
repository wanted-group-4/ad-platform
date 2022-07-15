import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '@routes/Router';
import GlobalStyle from '@styles/GlobalStyle';
import Layout from '@components/layout/Layout';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles';

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
