import React from 'react';
import styled from '@emotion/styled';

import {SideBar, Header} from '@components/layout';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <LayoutContainer>
      <SideBar />
      <Header />
      <Main>{children}</Main>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  height: 100%;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    'sidebar header '
    'sidebar main ';
  @media ${({theme}) => theme.size.mobile} {
    grid-template-rows: 70px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'header '
      'main ';
  }
`;

const Main = styled.main`
  grid-area: main;
  overflow-y: scroll;
`;
