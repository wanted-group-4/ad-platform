import React from 'react';
import {Button as StyledButton} from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({onClick, children}: ButtonProps) {
  return (
    <StyledButton
      sx={{
        ':hover': {bgcolor: 'primary.main', color: 'white'},
        borderRadius: '10px',
        color: '#4a4a4a',
        borderColor: '#B4B4B4',
        fontWeight: '600',
        padding: '6px 20px',
      }}
      variant="outlined"
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
