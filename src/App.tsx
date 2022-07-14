import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
