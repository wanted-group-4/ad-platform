import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Router from '@routes/Router';
import GlobalStyle from '@styles/GlobalStyle';
import {Layout} from '@components/layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
