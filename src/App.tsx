import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './components/layout/Layout';

import Router from './routes/Router';
import GlobalStyle from './styles/GlobalStyle';

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
