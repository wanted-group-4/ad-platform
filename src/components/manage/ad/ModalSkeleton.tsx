import styled from '@emotion/styled';
import {Skeleton} from '@mui/material';
import React from 'react';

function ModalSkeleton() {
  return (
    <ModalSkeletonContainer>
      <SkeletonWrap style={{marginBottom: '20px'}}>
        <Skeleton variant="rectangular" height={80} />
      </SkeletonWrap>
      {[1, 2, 3, 4, 5, 6].map(item => (
        <SkeletonWrap key={item}>
          <Skeleton variant="rectangular" height={50} />
        </SkeletonWrap>
      ))}
      <SkeletonContainer>
        <Skeleton
          variant="rectangular"
          width={80}
          height={50}
          sx={{marginRight: '20px'}}
        />
        <Skeleton variant="rectangular" width={80} height={50} />
      </SkeletonContainer>
    </ModalSkeletonContainer>
  );
}

export default ModalSkeleton;

const ModalSkeletonContainer = styled.div`
  position: absolute;
  z-index: 6;
  width: 87%;
  background-color: #fff;
`;

const SkeletonWrap = styled.div`
  margin-bottom: 25px;
  @media ${({theme}) => theme.size.mobile} {
    margin-bottom: 18px;
  }
`;

const SkeletonContainer = styled(SkeletonWrap)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: right;
`;
