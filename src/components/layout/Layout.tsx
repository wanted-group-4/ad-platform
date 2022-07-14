import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.main``;
