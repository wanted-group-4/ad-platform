import styled from '@emotion/styled';
import {Skeleton} from '@mui/material';
import React from 'react';

function ManageItemSkeleton() {
  return (
    <ManageItemContainer>
      <AdCard>
        <SkeletonWrap style={{marginBottom: '20px'}}>
          <Skeleton variant="rectangular" width={290} height={60} />
        </SkeletonWrap>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <SkeletonWrap key={item}>
            <Skeleton variant="rectangular" width={290} height={36} />
          </SkeletonWrap>
        ))}
        <SkeletonContainer>
          <Skeleton
            variant="rectangular"
            width={80}
            height={36}
            sx={{marginRight: '20px'}}
          />
          <Skeleton variant="rectangular" width={80} height={36} />
        </SkeletonContainer>
      </AdCard>
    </ManageItemContainer>
  );
}

export default ManageItemSkeleton;

const ManageItemContainer = styled.div`
  margin: 0 2vw 30px 0;
`;

const AdCard = styled.div`
  width: 350px;
  height: 500px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding: 30px;
`;

const SkeletonWrap = styled.div`
  margin-bottom: 10px;
`;
const SkeletonContainer = styled(SkeletonWrap)`
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: right;
`;
