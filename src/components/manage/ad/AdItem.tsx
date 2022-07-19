import React from 'react';
import styled from '@emotion/styled';

interface IAdItemProps {
  title: string;
  data: string | number;
}

export default function AdItem({title, data}: IAdItemProps) {
  return (
    <AdItmeContainer>
      <AdItemTitle>{title}</AdItemTitle>
      <AdItemContent>{data}</AdItemContent>
    </AdItmeContainer>
  );
}

const AdItmeContainer = styled.div`
  padding: 15px 0 15px 0;
  display: flex;
`;
const AdItemTitle = styled.div`
  color: #a3a3a3;
  font-weight: 500;
  width: 120px;
`;
const AdItemContent = styled.div`
  font-weight: 500;
`;
