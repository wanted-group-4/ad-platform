import React from 'react';
import styled from 'styled-components';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Header() {
  return (
    <HeaderContainer>
      <IconContainer>
        <AccountCircleIcon />
        <NotificationsIcon />
        <SettingsIcon />
      </IconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  width: 100%;
  height: 70px;
  box-shadow: ${({theme}) => theme.boxShadow.board};
`;
const IconContainer = styled.div`
  display: flex;
  right: 0;
  width: 150px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  svg {
    width: 30px;
    height: 30px;
  }
`;
